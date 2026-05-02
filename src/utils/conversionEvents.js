// Capa única para registrar y disparar eventos de conversión.
// Mantén la firma estable para poder enchufar Meta Pixel, GA4, TikTok, Plausible, etc.

const isBrowser = typeof window !== "undefined";

function safeCall(fn) {
  try {
    fn?.();
  } catch (err) {
    if (import.meta.env.DEV) {
      console.warn("[conversionEvents] proveedor falló", err);
    }
  }
}

/**
 * Registra una intención del usuario sobre un CTA.
 * @param {Object} payload
 * @param {string} payload.location  Sección donde está el CTA (hero, offer, sticky...)
 * @param {string} payload.label     Texto del botón mostrado al usuario
 * @param {string} [payload.eventName] Nombre semántico del evento
 * @param {string} [payload.productName] Producto al que se refiere
 * @param {Object} [payload.meta]   Metadatos adicionales libres
 */
export function trackCTA(payload = {}) {
  const event = {
    event: payload.eventName || "cta_click",
    location: payload.location || "unknown",
    label: payload.label || "",
    productName: payload.productName || "",
    meta: payload.meta || {},
    ts: Date.now()
  };

  if (import.meta.env.DEV) {
    console.log("[conversion]", event);
  }

  if (!isBrowser) return event;

  // Meta Pixel
  safeCall(() => window.fbq && window.fbq("trackCustom", event.event, event));
  // Google Analytics 4
  safeCall(() => window.gtag && window.gtag("event", event.event, event));
  // TikTok Pixel
  safeCall(() => window.ttq && window.ttq.track(event.event, event));
  // Data layer (GTM)
  safeCall(() => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(event);
  });

  return event;
}

/**
 * Resuelve la acción de un CTA a partir de la configuración global de conversión.
 * @param {Object} conversion landingContent.conversion
 * @param {Object} payload datos para tracking
 */
export function handleCTA(conversion, payload = {}) {
  trackCTA({ ...payload, eventName: payload.eventName || conversion?.eventName });

  if (!conversion) return;

  if (conversion.type === "external" && conversion.url) {
    if (isBrowser) window.open(conversion.url, "_blank", "noopener,noreferrer");
    return;
  }

  if (conversion.type === "callback" && typeof conversion.callback === "function") {
    conversion.callback(payload);
    return;
  }

  // Por defecto: scroll al ancla.
  const target = conversion.url || "#offer";
  if (target.startsWith("#") && isBrowser) {
    const el = document.querySelector(target);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else if (target !== "#") {
      window.location.hash = target;
    }
  }
}
