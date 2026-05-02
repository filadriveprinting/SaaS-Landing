import { useEffect, useRef, useState } from "react";
import { useScrollReveal } from "../../hooks/useScrollReveal";

/**
 * Contador animado: arranca cuando entra en viewport.
 * Acepta valores enteros o decimales.
 */
export function AnimatedCounter({ value = 0, duration = 1400, prefix = "", suffix = "", className = "" }) {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.3 });
  const [display, setDisplay] = useState(0);
  const startedRef = useRef(false);

  useEffect(() => {
    if (!isVisible || startedRef.current) return;
    startedRef.current = true;

    const target = Number(value) || 0;
    const isFloat = !Number.isInteger(target);
    const decimals = isFloat ? 1 : 0;
    const start = performance.now();

    let raf;
    const step = (now) => {
      const elapsed = now - start;
      const t = Math.min(1, elapsed / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      const current = target * eased;
      setDisplay(decimals ? Number(current.toFixed(decimals)) : Math.round(current));
      if (t < 1) raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [isVisible, value, duration]);

  const formatted =
    typeof display === "number" ? display.toLocaleString("es-ES") : String(display);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}

export default AnimatedCounter;
