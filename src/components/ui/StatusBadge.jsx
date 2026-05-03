import "./StatusBadge.css";

/**
 * Status badge tipo dashboard.
 * variant: success | warning | danger | info | primary | neutral
 * size: sm | md
 */
export function StatusBadge({ children, variant = "neutral", size = "sm", icon = null, className = "" }) {
  const cls = ["status-badge", `status-badge--${variant}`, `status-badge--${size}`, className]
    .filter(Boolean)
    .join(" ");
  return (
    <span className={cls}>
      {icon && <span className="status-badge__icon" aria-hidden="true">{icon}</span>}
      {children}
    </span>
  );
}

export default StatusBadge;
