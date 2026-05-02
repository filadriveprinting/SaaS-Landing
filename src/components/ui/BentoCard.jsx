import * as Icons from "lucide-react";
import { motion } from "framer-motion";
import "./BentoCard.css";

export function BentoCard({
  title,
  description,
  icon = "Sparkles",
  size = "md", // sm | md | lg | wide | tall
  gradient = false,
  index = 0
}) {
  const Icon = Icons[icon] || Icons.Sparkles;

  return (
    <motion.article
      className={`bento-card bento-card--${size} ${gradient ? "bento-card--gradient" : ""}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
    >
      <div className="bento-card__icon" aria-hidden="true">
        <Icon size={22} strokeWidth={1.6} />
      </div>
      <h3 className="bento-card__title">{title}</h3>
      <p className="bento-card__desc">{description}</p>
      <div className="bento-card__shine" aria-hidden="true" />
    </motion.article>
  );
}

export default BentoCard;
