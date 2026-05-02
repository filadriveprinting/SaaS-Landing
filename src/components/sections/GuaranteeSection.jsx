import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import { GlassCard } from "../ui/GlassCard";
import { landingContent } from "../../data/landingContent";

export function GuaranteeSection() {
  const { guarantee } = landingContent;

  return (
    <section className="section section--tight">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <GlassCard className="guarantee__card" glow>
            <div className="guarantee__seal" aria-hidden="true">
              <ShieldCheck size={56} strokeWidth={1.6} />
            </div>
            <div>
              <h3 style={{ marginTop: 0 }}>{guarantee.headline}</h3>
              <p>{guarantee.description}</p>
              <ul className="guarantee__points">
                {guarantee.points.map((p) => (
                  <li key={p} className="guarantee__point">
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}

export default GuaranteeSection;
