import { motion } from "framer-motion";
import { TrustBadge } from "../ui/TrustBadge";
import { landingContent } from "../../data/landingContent";

const icons = ["ShieldCheck", "Lock", "Sparkles", "Smartphone", "Gauge", "Accessibility"];

export function TrustBar() {
  const { trustBar } = landingContent;

  return (
    <section className="section trust-bar">
      <div className="container">
        <p className="trust-bar__label">{trustBar.label}</p>
        <motion.div
          className="trust-bar__items"
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
