import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { TrustBadge } from "../ui/TrustBadge";
import { landingContent } from "../../data/landingContent";

const icons = ["ShieldCheck", "Lock", "Sparkles", "Smartphone", "Gauge", "Accessibility"];

export function TrustBar() {
  const { trustBar } = landingContent;
  const itemsRef = useRef(null);

  // Track del cursor en viewport para el efecto spotlight de los badges.
  // Vars CSS: --x, --y (px), --xp (0..1) cascadean a cada .trust-badge.
  useEffect(() => {
    const node = itemsRef.current;
    if (!node) return;
    const onMove = (e) => {
      node.style.setProperty("--x", e.clientX.toFixed(2));
      node.style.setProperty("--y", e.clientY.toFixed(2));
      node.style.setProperty("--xp", (e.clientX / window.innerWidth).toFixed(3));
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <section className="section trust-bar">
      <div className="container">
        <p className="trust-bar__label">{trustBar.label}</p>
        <motion.div
          ref={itemsRef}
          className="trust-bar__items trust-bar__items--spotlight"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {trustBar.badges.map((label, i) => (
            <TrustBadge key={label} label={label} icon={icons[i % icons.length]} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default TrustBar;
