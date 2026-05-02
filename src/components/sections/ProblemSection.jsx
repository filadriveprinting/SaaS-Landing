import { motion } from "framer-motion";
import { AlertCircle } from "lucide-react";
import { SectionHeader } from "../ui/SectionHeader";
import { GlassCard } from "../ui/GlassCard";
import { landingContent } from "../../data/landingContent";

export function ProblemSection() {
  const { painPoints } = landingContent;

  return (
    <section className="section" id="problem">
      <div className="section__bg" aria-hidden="true" />
      <div className="container">
        <SectionHeader
          eyebrow="El problema real"
          title={painPoints.headline}
          subtitle={painPoints.subheadline}
          align="center"
        />
        <div className="problem__list">
          {painPoints.items.map((text, i) => (
            <motion.div
              key={text}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <GlassCard className="problem__item">
                <span className="problem__item-icon">
                  <AlertCircle size={20} strokeWidth={1.8} />
                </span>
                <p>{text}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProblemSection;
