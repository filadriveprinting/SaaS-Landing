import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { CTAButton } from "../ui/CTAButton";
import { SectionHeader } from "../ui/SectionHeader";
import { landingContent } from "../../data/landingContent";
import { handleCTA } from "../../utils/conversionEvents";

export function OfferStack() {
  const { offer, conversion, product } = landingContent;

  const onPrimary = () =>
    handleCTA(conversion, {
      location: "offer_primary",
      label: offer.primaryCTA,
      productName: product.name
    });

  const onSecondary = () =>
    handleCTA(
      { type: "scroll", url: "#faq", eventName: "open_faq" },
      { location: "offer_secondary", label: offer.secondaryCTA, productName: product.name }
    );

  return (
    <section className="section" id="offer">
      <div className="container">
        <SectionHeader
          eyebrow={offer.eyebrow}
          title={offer.headline}
          subtitle={offer.subheadline}
          align="center"
        />

        <motion.div
          className="offer__card"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div>
            <h3 style={{ marginTop: 0 }}>Todo lo que recibes hoy</h3>
            <ul className="offer__included">
              {offer.included.map((it) => (
                <li key={it} className="offer__inc-item">
                  <CheckCircle2 size={20} strokeWidth={2} color="#6ee7b7" />
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="offer__price-block">
            <span className="offer__price-anchor">Antes {offer.priceAnchor}</span>
            <span className="offer__price-now">{offer.price}</span>
            <span className="offer__price-note">{offer.priceNote}</span>
            <div className="offer__cta-row">
              <CTAButton onClick={onPrimary} size="lg" fullWidth icon="ArrowRight">
                {offer.primaryCTA}
              </CTAButton>
              <CTAButton
                onClick={onSecondary}
                variant="ghost"
                size="sm"
                icon="MessageCircle"
                fullWidth
              >
                {offer.secondaryCTA}
              </CTAButton>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default OfferStack;
