import * as Icons from "lucide-react";
import "./TrustBadge.css";

export function TrustBadge({ label, icon = "ShieldCheck", variant = "default" }) {
  const Icon = Icons[icon] || Icons.ShieldCheck;
  return (
    <span className={`trust-badge trust-badge--${variant}`}>
      <Icon size={14} strokeWidth={2} aria-hidden="true" />
      {label}
    </span>
  );
}

export default TrustBadge;
