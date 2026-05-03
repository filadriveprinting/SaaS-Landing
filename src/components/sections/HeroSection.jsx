import { motion } from "framer-motion";
import { CTAButton } from "../ui/CTAButton";
import { HeroVideo } from "../visual/HeroVideo";
import { FloatingParticles } from "../visual/FloatingParticles";
import { landingContent } from "../../data/landingContent";
import { handleCTA } from "../../utils/conversionEvents";

// Nota: el CTA principal del hero se ha movido al Header y al StickyCTA.
// Aquí solo queda el CTA secundario "Ver cómo funciona".

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } }
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
};

export function HeroSection() {
  const { hero, product } = landingContent;

  const onSecondary = () => {
    handleCTA(
      { type: "scroll", url: "#how", eventName: "see_how_it_works" },
      { location: "hero_secondary", label: hero.secondaryCTA, productName: product.name }
    );
  };

  return (
    <section className="section hero" id="top">
      <FloatingParticles count={32} />
      <div className="container hero__grid">
        <motion.div
          className="hero__copy"
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          <motion.span variants={item} className="eyebrow">
            {hero.eyebrow}
          </motion.span>
          <motion.h1 variants={item} className="hero__title">
            <span className="text-gradient">{hero.headline}</span>
          </motion.h1>
          <motion.p variants={item} className="hero__subtitle">
            {hero.subheadline}
          </motion.p>
          <motion.div variants={item} className="hero__ctas">
            <CTAButton
              onClick={onSecondary}
              variant="secondary"
              size="lg"
              icon="PlayCircle"
              aurora
            >
              {hero.secondaryCTA}
            </CTAButton>
          </motion.div>
          <motion.div variants={item} className="hero__trust">
            <span className="hero__trust-dot" />
            {hero.trustNote}
          </motion.div>
        </motion.div>

        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <HeroVideo />
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
