import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { SectionHeader } from "../ui/SectionHeader";
import { landingContent } from "../../data/landingContent";

export function SolutionSection() {
  const { solution } = landingContent;
  const verdicts = solution.verdicts || [];

  return (
    <section className="section" id="solution">
      <div className="container solution__wrap">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <SectionHeader
            eyebrow="La solución"
            title={solution.headline}
            subtitle={solution.description}
            align="left"
            className="section-header--left"
          />
          <ul className="solution__bullets">
            {solution.bullets.map((b) => (
              <li key={b} className="solution__bullet">
                <span className="solution__bullet-check">
                  <Check size={14} strokeWidth={3} />
                </span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {verdicts.length > 0 && (
          <div className="solution__verdicts">
            {verdicts.map((v, i) => (
              <motion.div
                key={v.name}
                className={`verdict-card verdict-card--${v.variant}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, delay: 0.1 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4 }}
              >
                <div className="verdict-card__head">
                  <span className="verdict-card__range">{v.range}</span>
                  <span className="verdict-card__name">{v.name}</span>
                </div>
                <p className="verdict-card__desc">{v.description}</p>
                <span className="verdict-card__bar" aria-hidden="true" />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default SolutionSection;
