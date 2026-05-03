import * as Icons from "lucide-react";
import { motion } from "framer-motion";
import "./BentoCard.css";

/**
 * BentoCard reutilizable.
 * - Si recibes `back` (con `description` y opcional `ctaLabel`), la card se vuelve flipping
 *   y muestra el reverso al hover.
 * - Si no, comportamiento clásico: hover sutil de elevación + shine en borde.
 */
export function BentoCard({
  title,
  description,
  icon = "Sparkles",
  size = "md", // sm | md | lg | wide | tall
  gradient = false,
  index = 0,
  back = null
}) {
  const Icon = Icons[icon] || Icons.Sparkles;
  const isFlip = Boolean(back && back.description);

  const sharedMotion = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.55, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }
  };

  if (!isFlip) {
    return (
      <motion.article
        className={`bento-card bento-card--${size} ${gradient ? "bento-card--gradient" : ""}`}
        {...sharedMotion}
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

  return (
    <motion.article
      className={`bento-card bento-card--flip bento-card--${size} ${
        gradient ? "bento-card--gradient" : ""
      }`}
      {...sharedMotion}
    >
      <div className="bento-card__inner">
        <div className="bento-card__face bento-card__face--front">
          <div className="bento-card__icon" aria-hidden="true">
            <Icon size={22} strokeWidth={1.6} />
          </div>
          <h3 className="bento-card__title">{title}</h3>
          <p className="bento-card__desc">{description}</p>
          <span className="bento-card__hint" aria-hidden="true">
            Pasa el cursor →
          </span>
        </div>
        <div className="bento-card__face bento-card__face--back">
          <p className="bento-card__back-text">{back.description}</p>
          {back.ctaLabel && <span className="bento-card__back-cta">{back.ctaLabel}</span>}
        </div>
      </div>
    </motion.article>
  );
}

export default BentoCard;
