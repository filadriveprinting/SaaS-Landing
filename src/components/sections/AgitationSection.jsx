import { motion } from "framer-motion";
import { GlassCard } from "../ui/GlassCard";
import { SectionHeader } from "../ui/SectionHeader";
import { landingContent } from "../../data/landingContent";

export function AgitationSection() {
  const { agitation } = landingContent;

  return (
    <section className="section">
      <div className="container agitation__wrap">
        <SectionHeader
          eyebrow="¿Qué pasa si lo dejas para más tarde?"
          title={agitation.headline}
          subtitle={agitation.description}
          align="left"
          className="section-header--left"
        />

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <GlassCard padding="lg">
            <ul className="agitation__points">
              {agitation.points.map((point, i) => (
                <li key={point} className="agitation__point">
                  <span className="agitation__point-num">{String(i + 1).padStart(2, "0")}</span>
                  <p>{point}</p>
                </li>
              ))}
            </ul>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}

export default AgitationSection;
