import Stripe from "stripe";

const secretKey = process.env.STRIPE_SECRET_KEY;
const stripe = secretKey ? new Stripe(secretKey) : null;

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "method_not_allowed" });
  }

  if (!stripe) {
    return res.status(500).json({
      error: "stripe_not_configured",
      message: "Falta STRIPE_SECRET_KEY en las variables de entorno del servidor.",
    });
  }

  try {
    const { amount, currency = "eur", metadata = {}, receipt_email } = req.body || {};

    if (!Number.isFinite(amount) || amount < 50) {
      return res.status(400).json({ error: "invalid_amount" });
    }

    const intent = await stripe.paymentIntents.create({
      amount: Math.round(amount),
      currency,
      automatic_payment_methods: { enabled: true },
      metadata,
      ...(receipt_email ? { receipt_email } : {}),
    });

    return res.status(200).json({ clientSecret: intent.client_secret });
  } catch (err) {
    return res.status(500).json({ error: "stripe_error", message: err.message });
  }
}
