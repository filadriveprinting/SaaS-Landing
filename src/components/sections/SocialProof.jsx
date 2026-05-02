import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { GlassCard } from "../ui/GlassCard";
import { SectionHeader } from "../ui/SectionHeader";
import { AnimatedCounter } from "../ui/AnimatedCounter";
import { landingContent } from "../../data/landingContent";

function getInitials(name) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0])
    .join("")
    .toUpperCase();
}

export function SocialProof() {
  const { socialProof } = landingContent;

  return (
    <section className="section" id="proof">
      <div className="section__bg" aria-hidden="true" />
      <div className="container">
        <SectionHeader
          eyebrow="Prueba social"
          title={socialProof.headline}
          subtitle={socialProof.subheadline}
          align="center"
        />

        <div className="proof__stats">
          {socialProof.stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <GlassCard className="proof__stat">
                <span className="proof__stat-value">
                  <AnimatedCounter value={s.value} prefix={s.prefix || ""} suffix={s.suffix || ""} />
                </span>
                <span className="proof__stat-label">{s.label}</span>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        <div className="proof__cards">
          {socialProof.testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <GlassCard className="proof__card">
                <div className="proof__stars" aria-label="5 de 5 estrellas">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star key={idx} size={14} fill="#fbbf24" stroke="#fbbf24" />
                  ))}
                </div>
                <p className="proof__card-text">“{t.text}”</p>
                <div className="proof__card-author">
                  <span className="proof__avatar" aria-hidden="true">
                    {getInitials(t.name)}
                  </span>
                  <div>
                    <span className="proof__name">{t.name}</span>
                    <span className="proof__role">{t.role}</span>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SocialProof;
