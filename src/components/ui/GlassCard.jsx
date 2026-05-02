import { motion } from "framer-motion";
import "./GlassCard.css";

export function GlassCard({
  as: Tag = "div",
  children,
  className = "",
  hoverable = true,
  glow = false,
  padding = "md",
  motionProps,
  ...rest
}) {
  const cls = [
    "glass-card",
    `glass-card--pad-${padding}`,
    hoverable && "glass-card--hoverable",
    glow && "glass-card--glow",
    className
  ]
    .filter(Boolean)
    .join(" ");

  if (motionProps) {
    return (
      <motion.div className={cls} {...motionProps} {...rest}>
        {children}
      </motion.div>
    );
  }

  return (
    <Tag className={cls} {...rest}>
      {children}
    </Tag>
  );
}

export default GlassCard;
