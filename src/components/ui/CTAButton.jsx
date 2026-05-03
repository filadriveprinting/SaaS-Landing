import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import "./CTAButton.css";

/**
 * Botón CTA reutilizable.
 * - variant: primary | secondary | ghost
 * - size: sm | md | lg
 * - icon: nombre de icono lucide opcional (al final del label)
 * - aurora: añade un halo gradient animado (purple → cyan → pink) detrás del botón
 */
export function CTAButton({
  children,
  onClick,
  variant = "primary",
  size = "md",
  icon = "ArrowRight",
  iconLeft,
  fullWidth = false,
  href,
  type = "button",
  className = "",
  aurora = false,
  ...rest
}) {
  const Icon = icon ? Icons[icon] || Icons.ArrowRight : null;
  const LeftIcon = iconLeft ? Icons[iconLeft] : null;

  const cls = [
    "cta-btn",
    `cta-btn--${variant}`,
    `cta-btn--${size}`,
    fullWidth && "cta-btn--full",
    className
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      {LeftIcon && <LeftIcon size={18} strokeWidth={2} aria-hidden="true" />}
      <span>{children}</span>
      {Icon && variant !== "ghost" && (
        <Icon size={18} strokeWidth={2} aria-hidden="true" className="cta-btn__icon" />
      )}
      <span className="cta-btn__sheen" aria-hidden="true" />
    </>
  );

  const motionProps = {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.98 },
    transition: { type: "spring", stiffness: 320, damping: 24 }
  };

  const button = href ? (
    <motion.a className={cls} href={href} onClick={onClick} {...motionProps} {...rest}>
      {content}
    </motion.a>
  ) : (
    <motion.button className={cls} type={type} onClick={onClick} {...motionProps} {...rest}>
      {content}
    </motion.button>
  );

  if (aurora) {
    return (
      <span className={`cta-aurora ${fullWidth ? "cta-aurora--full" : ""}`}>
        <span className="cta-aurora__glow" aria-hidden="true" />
        {button}
      </span>
    );
  }

  return button;
}

export default CTAButton;
