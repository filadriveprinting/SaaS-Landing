import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CTAButton } from "../ui/CTAButton";
import { landingContent } from "../../data/landingContent";
import { handleCTA } from "../../utils/conversionEvents";
import "./StickyCTA.css";

export function StickyCTA() {
  const { hero, conversion, product, offer } = landingContent;
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const passedHero = window.scrollY > window.innerHeight * 0.85;
      const beforeFooter =
        document.body.scrollHeight - (window.innerHeight + window.scrollY) > 280;
      setVisible(passedHero && beforeFooter);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    handleCTA(conversion, {
      location: "sticky",
      label: hero.primaryCTA,
      productName: product.name
    });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="sticky-cta"
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="sticky-cta__inner">
            <div className="sticky-cta__copy">
              <span className="sticky-cta__label">{product.name}</span>
              <span className="sticky-cta__price">
                <span className="sticky-cta__price-anchor">{offer.priceAnchor}</span>
                <span className="sticky-cta__price-now">{offer.price}</span>
              </span>
            </div>
            <CTAButton onClick={handleClick} size="md" icon="ArrowRight">
              {hero.primaryCTA}
            </CTAButton>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default StickyCTA;
