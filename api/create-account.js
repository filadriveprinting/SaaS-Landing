import Stripe from "stripe";
import { createClient } from "@supabase/supabase-js";

const stripeKey = process.env.STRIPE_SECRET_KEY;
const stripe = stripeKey ? new Stripe(stripeKey) : null;

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
const supabaseAdmin =
  SUPABASE_URL && SUPABASE_SERVICE_ROLE_KEY
    ? createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
        auth: { persistSession: false, autoRefreshToken: false },
      })
    : null;

const LEAD_WEBHOOK = process.env.LEAD_WEBHOOK_URL;

/**
 * Crea una cuenta del dashboard tras pago verificado contra Stripe.
 *
 * Pipeline:
 *  1. Valida input.
 *  2. paymentIntents.retrieve(paymentIntentId) → debe status="succeeded".
 *  3. supabase.auth.admin.createUser({ email, password, email_confirm:true, metadata }).
 *  4. INSERT INTO public.purchases (idempotente por stripe_payment_intent_id).
 *  5. UPDATE public.profiles SET plan='pro' WHERE id = user.id.
 *  6. Webhook opcional con resumen del lead.
 *
 * El dashboard `saas-dashboard` lee:
 *  - profiles.plan == 'pro' → desbloquea features Pro.
 *  - purchases.user_id + stripe_payment_intent_id → trazabilidad del cobro.
 */
export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "method_not_allowed" });
  }

  try {
    const { email, name, password, paymentIntentId } = req.body || {};

    if (!email || !name || !paymentIntentId) {
      return res.status(400).json({ error: "missing_fields" });
    }
    if (typeof password !== "string" || password.length < 8) {
      return res.status(400).json({ error: "weak_password" });
    }

    // 1) Verificar pago.
    let payment = null;
    if (stripe) {
      try {
        payment = await stripe.paymentIntents.retrieve(paymentIntentId);
        if (payment.status !== "succeeded") {
          return res
            .status(402)
            .json({ error: "payment_not_succeeded", status: payment.status });
        }
      } catch (err) {
        return res
          .status(400)
          .json({ error: "payment_not_found", message: err.message });
      }
    }

    // 2) Crear usuario en Supabase Auth.
    let supabaseUserId = null;
    if (supabaseAdmin) {
      const { data, error } = await supabaseAdmin.auth.admin.createUser({
        email,
        password,
        email_confirm: true,
        user_metadata: {
          full_name: name,
          stripe_payment_intent: paymentIntentId,
          plan: "pro",
          paid_at: new Date().toISOString(),
        },
      });

      if (error) {
        if (
          error.message?.toLowerCase().includes("already") ||
          error.code === "email_exists"
        ) {
          return res.status(409).json({
            error: "email_already_registered",
            message:
              "Ya existe una cuenta con este email. Entra al dashboard con tu contraseña.",
          });
        }
        return res
          .status(500)
          .json({ error: "supabase_create_failed", message: error.message });
      }
      supabaseUserId = data?.user?.id || null;
    }

    // 3) Registrar compra + elevar plan a "pro".
    const warnings = [];
    if (supabaseAdmin && supabaseUserId) {
      const purchaseRow = {
        user_id: supabaseUserId,
        email,
        product_code: "pro_lifetime",
        // No usamos Checkout Sessions — el PaymentIntent ID actúa como identificador único.
        stripe_session_id: paymentIntentId,
        stripe_payment_intent_id: paymentIntentId,
        stripe_customer_id: payment?.customer || null,
        amount_cents: payment?.amount || 0,
        currency: payment?.currency || "eur",
        paid_at: new Date().toISOString(),
        raw_event: {
          source: "landing_create_account",
          payment_intent_id: paymentIntentId,
        },
      };

      const { error: purchaseError } = await supabaseAdmin
        .from("purchases")
        .insert(purchaseRow);
      if (purchaseError) {
        warnings.push(`purchases: ${purchaseError.message}`);
      }

      const { error: planError } = await supabaseAdmin
        .from("profiles")
        .update({ plan: "pro", updated_at: new Date().toISOString() })
        .eq("id", supabaseUserId);
      if (planError) {
        warnings.push(`profile_plan: ${planError.message}`);
      }
    }

    // 4) Lead webhook opcional.
    const lead = {
      email,
      name,
      paymentIntentId,
      amount: payment?.amount,
      currency: payment?.currency,
      supabaseUserId,
      ts: new Date().toISOString(),
    };
    console.log("[new account]", lead, warnings.length ? { warnings } : "");

    if (LEAD_WEBHOOK) {
      try {
        await fetch(LEAD_WEBHOOK, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(lead),
        });
      } catch (err) {
        console.warn("[lead-webhook] failed:", err.message);
      }
    }

    return res.status(200).json({
      ok: true,
      supabaseUserId,
      plan: "pro",
      warnings: warnings.length ? warnings : undefined,
    });
  } catch (err) {
    return res.status(500).json({ error: "server_error", message: err.message });
  }
}
