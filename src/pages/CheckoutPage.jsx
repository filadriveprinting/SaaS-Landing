import { motion } from "framer-motion";
import { Check, ShieldCheck, Lock, ArrowLeft } from "lucide-react";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { StripePaymentForm } from "../components/checkout/StripePaymentForm";
import { landingContent } from "../data/landingContent";
import { trackCTA } from "../utils/conversionEvents";
import "./CheckoutPage.css";

function parsePriceToCents(priceStr) {
  if (!priceStr) return 2490;
  // Soporta "24,90 €", "24.90€", "1.299,00 €" → centavos
  const cleaned = priceStr.replace(/[^\d.,]/g, "");
  const lastComma = cleaned.lastIndexOf(",");
  const lastDot = cleaned.lastIndexOf(".");
  let normalized;
  if (lastComma > lastDot) {
    // formato europeo: 1.299,00
    normalized = cleaned.replace(/\./g, "").replace(",", ".");
  } else {
    // formato anglosajón: 1,299.00
    normalized = cleaned.replace(/,/g, "");
  }
  const value = parseFloat(normalized);
  return Number.isFinite(value) ? Math.round(value * 100) : 2490;
}

export function CheckoutPage() {
  const { product, offer, brand } = landingContent;
  const amountCents = parsePriceToCents(offer?.price);

  const handleSuccess = () => {
    trackCTA({
      location: "checkout",
      label: "Pago confirmado",
      eventName: "purchase",
      productName: product.name,
    });
  };

  const handleError = (err) => {
    trackCTA({
      location: "checkout",
      label: "Pago fallido",
      eventName: "checkout_error",
      productName: product.name,
      meta: { code: err?.code, type: err?.type },
    });
  };

  return (
    <>
      <Header />
      <main className="checkout">
        <div className="container checkout__grid">
          {/* LEFT: product summary */}
          <motion.aside
            className="checkout__summary"
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="checkout__chip">
              <span className="checkout__chip-tag">Entorno de prueba</span>
              {brand.name} · Acceso
            </span>

            <h1 className="checkout__product-name">{product.name} — Acceso</h1>

            <div>
              {offer?.priceAnchor && (
                <div className="checkout__price-anchor">{offer.priceAnchor}</div>
              )}
              <p className="checkout__price">{offer?.price || "24,90 €"}</p>
            </div>

            {Array.isArray(offer?.included) && offer.included.length > 0 && (
              <div className="checkout__included">
                <p className="checkout__included-title">Qué recibes</p>
                {offer.included.slice(0, 5).map((item) => (
                  <div key={item} className="checkout__included-item">
                    <Check size={16} strokeWidth={2.4} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            )}

            <div className="checkout__trust">
              <span className="checkout__trust-item">
                <ShieldCheck size={14} strokeWidth={2} />
                Pago seguro · Stripe
              </span>
              <span className="checkout__trust-item">
                <Lock size={14} strokeWidth={2} />
                Datos cifrados
              </span>
            </div>

            <a className="checkout__back" href="/">
              <ArrowLeft size={14} strokeWidth={2} />
              Volver
            </a>
          </motion.aside>

          {/* RIGHT: Stripe payment panel */}
          <motion.section
            className="checkout__panel"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="checkout__section-title">Información de pago</h2>
            <p
              style={{
                fontSize: "0.85rem",
                color: "var(--color-text-muted)",
                margin: "0 0 var(--space-4)",
              }}
            >
              Pago procesado de forma segura por Stripe.
            </p>

            <StripePaymentForm
              amount={amountCents}
              currency="eur"
              amountLabel={`Pagar ${offer?.price || "24,90 €"}`}
              productName={product.name}
              onSuccess={handleSuccess}
              onError={handleError}
            />
          </motion.section>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default CheckoutPage;
