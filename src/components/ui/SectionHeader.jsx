import { motion } from "framer-motion";
import "./SectionHeader.css";

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
  highlight,
  className = ""
}) {
  return (
    <motion.div
      className={`section-header section-header--${align} ${className}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="section-header__title">
        {title}
        {highlight && (
          <>
            {" "}
            <span className="text-gradient-accent">{highlight}</span>
          </>
        )}
      </h2>
      {subtitle && <p className="section-header__subtitle">{subtitle}</p>}
    </motion.div>
  );
}

export default SectionHeader;
