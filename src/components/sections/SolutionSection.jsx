import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { SectionHeader } from "../ui/SectionHeader";
import { landingContent } from "../../data/landingContent";

export function SolutionSection() {
  const { solution } = landingContent;

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

        <motion.div
          className="solution__visual"
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="solution__visual-orb anim-float" />
        </motion.div>
      </div>
    </section>
  );
}

export default SolutionSection;
