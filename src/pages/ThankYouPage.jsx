import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck } from "lucide-react";
import { CTAButton } from "../components/ui/CTAButton";
import { ScrollProgress } from "../components/visual/ScrollProgress";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { landingContent } from "../data/landingContent";
import "./ThankYouPage.css";

/**
 * Página mostrada tras pago exitoso en Stripe.
 * Stripe redirige aquí con ?session_id={CHECKOUT_SESSION_ID} si lo configuras.
 */
export function ThankYouPage() {
  const { brand, product, thankYou } = landingContent;
  const params = typeof window !== "undefined" ? new URLSearchParams(window.location.search) : null;
  const sessionId = params?.get("session_id") || null;
  const paymentIntentId =
    params?.get("payment_intent") || params?.get("pi") || null;
  const dashboardHref = thankYou?.primaryCTAUrl
    ? `${thankYou.primaryCTAUrl}${
        paymentIntentId
          ? (thankYou.primaryCTAUrl.includes("?") ? "&" : "?") +
            "pi=" +
            encodeURIComponent(paymentIntentId)
          : ""
      }`
    : null;

  return (
    <>
      <ScrollProgress />
      <Header />
      <main className="thank-you">
        <div className="container thank-you__wrap">
          <motion.div
            className="thank-you__card"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              className="thank-you__icon"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 220, damping: 18 }}
              aria-hidden="true"
            >
              <CheckCircle2 size={56} strokeWidth={2} />
            </motion.div>

            <span className="eyebrow">Pago confirmado</span>

            <h1 className="thank-you__title">
              <span className="text-gradient">¡Bienvenido a {brand.name}!</span>
            </h1>

            <p className="thank-you__lead">
              Tu pago se ha procesado correctamente. En los próximos minutos recibirás un email con
              el recibo y los pasos para acceder a <strong>{product.name}</strong>.
            </p>

            {dashboardHref && (
              <div className="thank-you__primary">
                <CTAButton
                  href={dashboardHref}
                  size="lg"
                  icon="ArrowRight"
                  iconLeft="LayoutDashboard"
                  aurora
                >
                  {thankYou.primaryCTA}
                </CTAButton>
                {thankYou?.primaryCTAHelper && (
                  <p className="thank-you__primary-helper">{thankYou.primaryCTAHelper}</p>
                )}
              </div>
            )}

            <div className="thank-you__steps">
              <div className="thank-you__step">
                <span className="thank-you__step-num">1</span>
                <div>
                  <h3>Revisa tu email</h3>
                  <p>
                    Recibo de pago + credenciales de acceso al dashboard. Si no lo ves en 5
                    minutos, revisa la carpeta de spam.
                  </p>
                </div>
              </div>

              <div className="thank-you__step">
                <span className="thank-you__step-num">2</span>
                <div>
                  <h3>Activa tu cuenta</h3>
                  <p>
                    Sigue el enlace del email para crear tu contraseña y entrar en tu workspace
                    privado.
                  </p>
                </div>
              </div>

              <div className="thank-you__step">
                <span className="thank-you__step-num">3</span>
                <div>
                  <h3>Lanza tu primer run</h3>
                  <p>
                    Describe tu idea o nicho, espera 7 minutos y recibe tu primer veredicto con
                    scorecard completo.
                  </p>
                </div>
              </div>
            </div>

            {sessionId && (
              <p className="thank-you__session">
                Referencia de pago: <code>{sessionId.slice(0, 18)}…</code>
              </p>
            )}

            <div className="thank-you__cta-row">
              <CTAButton href="/" size="lg" icon="ArrowLeft" iconLeft="ArrowLeft">
                Volver a la landing
              </CTAButton>
            </div>

            <div className="thank-you__support">
              <ShieldCheck size={14} strokeWidth={2} />
              <span>
                ¿Algún problema con tu compra? Escríbenos a{" "}
                <a href="mailto:soporte@filadrive.io">soporte@filadrive.io</a>
              </span>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default ThankYouPage;
