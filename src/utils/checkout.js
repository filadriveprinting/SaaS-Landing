// Llama al backend FastAPI para crear una Stripe Checkout Session y redirige.
//
// En dev/test apunta a la URL pública de ngrok que expone tu backend local.
// En producción apuntará al dominio real del backend (Railway, Fly, etc).
//
// Configura la URL en Vercel:
//   Settings → Environment Variables → VITE_API_BASE_URL = https://xxx.ngrok-free.dev

const API_BASE = import.meta.env.VITE_API_BASE_URL;

export async function startCheckout(payload = {}) {
  if (!API_BASE) {
    console.error("[checkout] VITE_API_BASE_URL no está configurada.");
    if (typeof window !== "undefined") {
      window.alert(
        "El sistema de pago no está disponible ahora mismo. Estamos solucionándolo, vuelve a intentarlo en unos minutos."
      );
    }
    return;
  }

  try {
    const resp = await fetch(`${API_BASE}/billing/checkout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // ngrok-free muestra una página de aviso si no se pasa este header.
        // En producción real no hace falta (no es ngrok), pero es inofensivo.
        "ngrok-skip-browser-warning": "1",
      },
      body: JSON.stringify({}),
    });

    const body = await resp.json().catch(() => ({}));
    if (!resp.ok) {
      throw new Error(body?.detail || `HTTP ${resp.status}`);
    }
    if (!body.url) {
      throw new Error("Respuesta sin URL de checkout.");
    }
    // Redirige a Stripe Checkout en la misma pestaña.
    window.location.href = body.url;
  } catch (err) {
    console.error("[checkout] falló:", err);
    if (typeof window !== "undefined") {
      window.alert(
        "No hemos podido abrir el pago. Inténtalo de nuevo en un instante."
      );
    }
  }
}
