import { useRef } from "react";
import { GlassCard } from "../ui/GlassCard";
import { SectionHeader } from "../ui/SectionHeader";
import { useGSAPAnimations } from "../../hooks/useGSAPAnimations";
import { landingContent } from "../../data/landingContent";

export function HowItWorks() {
  const { howItWorks } = landingContent;
  const scopeRef = useRef(null);

  useGSAPAnimations({
    scopeRef,
    selector: "[data-gsap-step]",
    from: { y: 40, opacity: 0 },
    to: { y: 0, opacity: 1, duration: 0.7, ease: "power3.out", stagger: 0.18 },
    scrollTrigger: { start: "top 78%" }
  });

  return (
    <section className="section" id="how" ref={scopeRef}>
      <div className="container">
        <SectionHeader
          eyebrow="Cómo funciona"
          title={howItWorks.headline}
          subtitle={howItWorks.subheadline}
          align="center"
        />
        <div className="how">
          {howItWorks.steps.map((s) => (
            <GlassCard key={s.step} className="how__step" data-gsap-step>
              <span className="how__step-num">{s.step}</span>
              <h3 className="how__step-title">{s.title}</h3>
              <p className="how__step-desc">{s.description}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
