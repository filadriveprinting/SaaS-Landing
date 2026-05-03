import { motion } from "framer-motion";
import { Search, ChevronDown } from "lucide-react";
import { StatusBadge } from "../ui/StatusBadge";
import "./VerdictDashboard.css";

/**
 * Mock visual del producto (Filadrive Intelligence).
 * Simula una vista del dashboard con KPIs + tabla de últimos veredictos.
 *
 * Props:
 * - title: encabezado del panel
 * - subtitle: subtítulo bajo el encabezado
 * - stats: [{ label, value, delta?, deltaTone? }]
 * - runs: [{ id, idea, score, verdict, variant }]
 */
export function VerdictDashboard({ title, subtitle, stats = [], runs = [] }) {
  return (
    <motion.div
      className="vdash"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Header */}
      <div className="vdash__head">
        <div className="vdash__head-title">
          <span className="vdash__chip">
            <span className="vdash__chip-dot" />
            Demo
          </span>
          <h3 className="vdash__title">{title}</h3>
          {subtitle && <p className="vdash__subtitle">{subtitle}</p>}
        </div>
        <div className="vdash__head-actions">
          <button type="button" className="vdash__icon-btn" aria-label="Buscar (demo)">
            <Search size={14} strokeWidth={2} />
          </button>
          <button type="button" className="vdash__filter" aria-label="Filtrar (demo)">
            Últimos 30 días
            <ChevronDown size={12} strokeWidth={2.4} />
          </button>
        </div>
      </div>

      {/* KPI strip */}
      {stats.length > 0 && (
        <div className="vdash__stats">
          {stats.map((s) => (
            <div key={s.label} className="vdash__stat">
              <span className="vdash__stat-label">{s.label}</span>
              <div className="vdash__stat-row">
                <span className="vdash__stat-value">{s.value}</span>
                {s.delta && (
                  <StatusBadge variant={s.deltaTone || "success"} size="sm">
                    {s.delta}
                  </StatusBadge>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Table header */}
      <div className="vdash__table">
        <div className="vdash__row vdash__row--head" aria-hidden="true">
          <span>Run</span>
          <span>Idea / Nicho</span>
          <span className="vdash__cell--center">Score</span>
          <span className="vdash__cell--right">Veredicto</span>
        </div>

        {runs.map((r, i) => (
          <motion.div
            key={r.id}
            className="vdash__row"
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.4, delay: 0.1 + i * 0.05 }}
          >
            <span className="vdash__id">{r.id}</span>
            <span className="vdash__idea">{r.idea}</span>
            <span className="vdash__cell--center">
              <span className={`vdash__score vdash__score--${r.variant}`}>{r.score}</span>
            </span>
            <span className="vdash__cell--right">
              <StatusBadge variant={r.variant}>{r.verdict}</StatusBadge>
            </span>
          </motion.div>
        ))}
      </div>

      <p className="vdash__footnote">
        Vista de muestra · Los datos reales son privados de cada workspace.
      </p>
    </motion.div>
  );
}

export default VerdictDashboard;
