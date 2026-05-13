import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Lock, Mail, ShieldCheck, Sparkles, User } from "lucide-react";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { ScrollProgress } from "../components/visual/ScrollProgress";
import { CTAButton } from "../components/ui/CTAButton";
import { landingContent } from "../data/landingContent";
import { trackCTA } from "../utils/conversionEvents";
import "./CreateAccountPage.css";

export function CreateAccountPage() {
  const { product, brand, createAccount } = landingContent;

  const params = useMemo(
    () => (typeof window !== "undefined" ? new URLSearchParams(window.location.search) : null),
    []
  );
  const paymentIntentId = params?.get("pi") || params?.get("payment_intent") || null;

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (!paymentIntentId) {
      setError("No se encontró el ID de pago. Vuelve a la página de éxito y reintenta.");
      return;
    }
    if (password.length < 8) {
      setError("La contraseña debe tener al menos 8 caracteres.");
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/create-account", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name, password, paymentIntentId }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(data?.message || data?.error || `HTTP ${res.status}`);
      }

      trackCTA({
        location: "create_account",
        label: "Cuenta creada",
        eventName: "account_created",
        productName: product.name,
      });
      setDone(true);
    } catch (err) {
      setError(err.message || "No se pudo crear la cuenta. Vuelve a intentarlo.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <ScrollProgress />
      <Header />
      <main className="create-account">
        <div className="container create-account__wrap">
          <motion.div
            className="create-account__card"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {done ? (
              <div className="create-account__success">
                <motion.div
                  className="create-account__success-icon"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.15, type: "spring", stiffness: 220, damping: 18 }}
                  aria-hidden="true"
                >
                  <CheckCircle2 size={42} strokeWidth={2} />
                </motion.div>
                <h1 className="create-account__success-title">
                  <span className="text-gradient">¡Tu cuenta está en marcha!</span>
                </h1>
                <p className="create-account__success-lead">
                  Hemos recibido tu solicitud y verificado tu pago. Estamos preparando tu acceso
                  a <strong>{product.name}</strong>.
                </p>

                <div className="create-account__success-steps">
                  <div className="create-account__success-step">
                    <CheckCircle2 size={18} strokeWidth={2.4} />
                    <span>
                      Recibirás un email a <strong>{email}</strong> con tus credenciales de acceso.
                    </span>
                  </div>
                  <div className="create-account__success-step">
                    <CheckCircle2 size={18} strokeWidth={2.4} />
                    <span>Suele tardar menos de 5 minutos. Revisa también la carpeta de spam.</span>
                  </div>
                  <div className="create-account__success-step">
                    <CheckCircle2 size={18} strokeWidth={2.4} />
                    <span>¿No te llega? Escribe a soporte y te ayudamos al momento.</span>
                  </div>
                </div>

                <CTAButton
                  href={`${createAccount.successCtaUrl}${
                    paymentIntentId
                      ? (createAccount.successCtaUrl.includes("?") ? "&" : "?") +
                        "pi=" +
                        encodeURIComponent(paymentIntentId)
                      : ""
                  }`}
                  size="lg"
                  iconLeft="LayoutDashboard"
                  icon="ArrowRight"
                  aurora
                >
                  {createAccount.successCta}
                </CTAButton>
              </div>
            ) : (
              <>
                <span className="create-account__chip">
                  <Sparkles size={12} strokeWidth={2.4} />
                  Pago confirmado
                </span>

                <h1 className="create-account__title">
                  <span className="text-gradient">Crea tu cuenta de {brand.name}</span>
                </h1>
                <p className="create-account__lead">
                  Último paso. Define cómo entrarás a tu workspace privado y te activamos el
                  acceso a <strong>{product.name}</strong>.
                </p>

                <form className="create-account__form" onSubmit={handleSubmit} noValidate>
                  <div className="create-account__field">
                    <label className="create-account__label" htmlFor="ca-name">
                      <User size={13} strokeWidth={2.4} style={{ display: "inline", marginRight: 6, verticalAlign: -2 }} />
                      Nombre completo
                    </label>
                    <input
                      id="ca-name"
                      className="create-account__input"
                      type="text"
                      autoComplete="name"
                      placeholder="Tu nombre y apellidos"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>

                  <div className="create-account__field">
                    <label className="create-account__label" htmlFor="ca-email">
                      <Mail size={13} strokeWidth={2.4} style={{ display: "inline", marginRight: 6, verticalAlign: -2 }} />
                      Email de acceso
                    </label>
                    <input
                      id="ca-email"
                      className="create-account__input"
                      type="email"
                      autoComplete="email"
                      placeholder="tu@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <p className="create-account__hint">
                      Te enviaremos a este email las credenciales y los pasos para acceder.
                    </p>
                  </div>

                  <div className="create-account__field">
                    <label className="create-account__label" htmlFor="ca-password">
                      <Lock size={13} strokeWidth={2.4} style={{ display: "inline", marginRight: 6, verticalAlign: -2 }} />
                      Contraseña
                    </label>
                    <input
                      id="ca-password"
                      className="create-account__input"
                      type="password"
                      autoComplete="new-password"
                      placeholder="Mínimo 8 caracteres"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      minLength={8}
                      required
                    />
                    <p className="create-account__hint">
                      Mínimo 8 caracteres. Cifrada antes de almacenar.
                    </p>
                  </div>

                  {error && <div className="create-account__error" role="alert">{error}</div>}

                  <CTAButton
                    type="submit"
                    size="lg"
                    fullWidth
                    icon="ArrowRight"
                    iconLeft="ShieldCheck"
                    className="create-account__submit"
                    disabled={submitting}
                  >
                    {submitting ? "Creando cuenta…" : "Crear cuenta y acceder"}
                  </CTAButton>
                </form>

                <p className="create-account__legal">
                  <ShieldCheck size={12} strokeWidth={2.4} style={{ display: "inline", marginRight: 4, verticalAlign: -2 }} />
                  Tus datos viajan cifrados y solo se usan para crear tu cuenta.
                </p>
              </>
            )}
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default CreateAccountPage;
