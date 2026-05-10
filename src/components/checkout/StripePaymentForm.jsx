import { useEffect, useState } from "react";
import {
  Elements,
  PaymentElement,
  LinkAuthenticationElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { CTAButton } from "../ui/CTAButton";

const PUBLISHABLE_KEY = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY;
const stripePromise = PUBLISHABLE_KEY ? loadStripe(PUBLISHABLE_KEY) : null;

const appearance = {
  theme: "night",
  variables: {
    colorPrimary: "#ff6b35",
    colorBackground: "#16161a",
    colorText: "#f5f5f0",
    colorTextSecondary: "rgba(245,245,240,0.68)",
    colorTextPlaceholder: "rgba(245,245,240,0.40)",
    colorIcon: "#f5f5f0",
    colorIconTab: "#f5f5f0",
    colorIconTabSelected: "#ff6b35",
    colorIconTabHover: "#ff8a5b",
    colorDanger: "#f87171",
    colorSuccess: "#34d399",
    fontFamily: 'Inter, system-ui, -apple-system, "Segoe UI", sans-serif',
    fontSizeBase: "15px",
    borderRadius: "12px",
    spacingUnit: "4px",
  },
  rules: {
    ".Input": {
      backgroundColor: "rgba(255,255,255,0.04)",
      border: "1px solid rgba(255,255,255,0.08)",
      boxShadow: "none",
      padding: "12px 14px",
      fontSize: "15px",
      lineHeight: "1.5",
    },
    ".Input:focus": {
      border: "1px solid #ff6b35",
      boxShadow: "0 0 0 3px rgba(255,107,53,0.16)",
    },
    ".Tab": {
      backgroundColor: "rgba(255,255,255,0.02)",
      border: "1px solid rgba(255,255,255,0.08)",
      color: "#f5f5f0",
      padding: "14px 12px",
      lineHeight: "1.2",
    },
    ".Tab:hover": {
      backgroundColor: "rgba(255,255,255,0.04)",
      borderColor: "rgba(255,255,255,0.16)",
      color: "#ffffff",
    },
    ".Tab--selected": {
      borderColor: "#ff6b35",
      backgroundColor: "rgba(255,107,53,0.08)",
      color: "#ff8a5b",
      padding: "14px 12px",
    },
    ".TabIcon": {
      color: "#f5f5f0",
      fill: "#f5f5f0",
    },
    ".TabIcon--selected": {
      color: "#ff6b35",
      fill: "#ff6b35",
    },
    ".TabLabel": {
      color: "#f5f5f0",
      fontWeight: "600",
      fontSize: "13px",
      lineHeight: "1.3",
      marginTop: "6px",
    },
    ".TabLabel--selected": {
      color: "#ff8a5b",
    },
    ".Label": {
      color: "rgba(245,245,240,0.68)",
      fontSize: "13px",
      fontWeight: "600",
    },
  },
};

function PaymentForm({ amountLabel, onSuccess, onError }) {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setIsProcessing(true);
    setErrorMsg(null);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/exito`,
      },
    });

    // Si llegamos aquí es porque hubo error inmediato (validación).
    // En caso de éxito Stripe redirige al return_url y no se ejecuta este código.
    if (error) {
      const msg = error.message || "Error procesando el pago.";
      setErrorMsg(msg);
      onError?.(error);
    } else {
      onSuccess?.();
    }
    setIsProcessing(false);
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <LinkAuthenticationElement />
      <PaymentElement options={{ layout: "tabs" }} />

      {errorMsg && (
        <div
          role="alert"
          style={{
            padding: "0.75rem 1rem",
            borderRadius: "10px",
            background: "rgba(248,113,113,0.12)",
            border: "1px solid rgba(248,113,113,0.3)",
            color: "#fca5a5",
            fontSize: "0.88rem",
          }}
        >
          {errorMsg}
        </div>
      )}

      <CTAButton
        type="submit"
        size="lg"
        fullWidth
        icon="Lock"
        disabled={!stripe || isProcessing}
      >
        {isProcessing ? "Procesando…" : amountLabel}
      </CTAButton>

      <p
        style={{
          fontSize: "0.75rem",
          color: "var(--color-text-soft)",
          textAlign: "center",
          margin: 0,
        }}
      >
        Pago seguro procesado por Stripe · Tus datos están cifrados
      </p>
    </form>
  );
}

export function StripePaymentForm({ amount, currency = "eur", amountLabel, onSuccess, onError, productName }) {
  const [clientSecret, setClientSecret] = useState(null);
  const [bootstrapError, setBootstrapError] = useState(null);

  useEffect(() => {
    if (!PUBLISHABLE_KEY) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- guard de configuración previo al fetch
      setBootstrapError(
        "Falta VITE_STRIPE_PUBLISHABLE_KEY en .env. Crea el archivo a partir de .env.example."
      );
      return;
    }
    if (!Number.isFinite(amount) || amount < 50) {
      setBootstrapError("Importe inválido para crear el PaymentIntent.");
      return;
    }

    let cancelled = false;
    fetch("/api/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        amount,
        currency,
        metadata: { productName: productName || "" },
      }),
    })
      .then(async (res) => {
        const data = await res.json().catch(() => ({}));
        if (!res.ok) throw new Error(data?.message || data?.error || `HTTP ${res.status}`);
        return data;
      })
      .then((data) => {
        if (!cancelled) setClientSecret(data.clientSecret);
      })
      .catch((err) => {
        if (!cancelled) setBootstrapError(err.message);
      });

    return () => {
      cancelled = true;
    };
  }, [amount, currency, productName]);

  if (bootstrapError) {
    return (
      <div
        role="alert"
        style={{
          padding: "1rem",
          borderRadius: "12px",
          background: "rgba(248,113,113,0.1)",
          border: "1px solid rgba(248,113,113,0.3)",
          color: "#fca5a5",
          fontSize: "0.9rem",
          lineHeight: 1.5,
        }}
      >
        <strong>No se pudo iniciar el pago.</strong>
        <br />
        {bootstrapError}
      </div>
    );
  }

  if (!stripePromise || !clientSecret) {
    return (
      <div
        style={{
          padding: "2rem",
          textAlign: "center",
          color: "var(--color-text-muted)",
          fontSize: "0.9rem",
        }}
      >
        Cargando pasarela de pago…
      </div>
    );
  }

  return (
    <Elements
      stripe={stripePromise}
      options={{ clientSecret, appearance, locale: "es" }}
    >
      <PaymentForm
        amountLabel={amountLabel}
        onSuccess={onSuccess}
        onError={onError}
      />
    </Elements>
  );
}

export default StripePaymentForm;
