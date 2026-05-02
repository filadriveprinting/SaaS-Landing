import { SectionHeader } from "../ui/SectionHeader";
import { BentoCard } from "../ui/BentoCard";
import { landingContent } from "../../data/landingContent";

export function BentoBenefits() {
  const { benefits } = landingContent;

  return (
    <section className="section" id="benefits">
      <div className="container">
        <SectionHeader
          eyebrow="Beneficios"
          title={benefits.headline}
          subtitle={benefits.subheadline}
          align="center"
        />
        <div className="bento">
          {benefits.items.map((b, i) => (
            <BentoCard
              key={b.title}
              title={b.title}
              description={b.description}
              icon={b.icon}
              size={b.size || "md"}
              gradient={i === 0 || i === benefits.items.length - 1}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default BentoBenefits;
