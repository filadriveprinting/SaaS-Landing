import { motion } from "framer-motion";
import { CTAButton } from "../ui/CTAButton";
import { landingContent } from "../../data/landingContent";
import { handleCTA } from "../../utils/conversionEvents";

export function FinalCTA() {
  const { finalCTA, conversion, product } = landingContent;

  const onClick = () =>
    handleCTA(conversion, {
      location: "final_cta",
      label: finalCTA.button,
      productName: product.name
    });

  return (
    <section className="section">
      <div className="container">
        <motion.div
          className="final-cta"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="eyebrow">{finalCTA.eyebrow}</span>
          <h2 className="final-cta__title">
            <span className="text-gradient">{finalCTA.headline}</span>
          </h2>
          <p className="final-cta__desc">{finalCTA.description}</p>
          <CTAButton onClick={onClick} size="lg" icon="ArrowRight">
            {finalCTA.button}
          </CTAButton>
          <p className="final-cta__micro">{finalCTA.microcopy}</p>
        </motion.div>
      </div>
    </section>
  );
}

export default FinalCTA;
