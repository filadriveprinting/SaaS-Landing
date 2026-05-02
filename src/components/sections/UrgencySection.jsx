import { motion } from "framer-motion";
import { Hourglass } from "lucide-react";
import { landingContent } from "../../data/landingContent";

export function UrgencySection() {
  const { urgency } = landingContent;

  return (
    <section className="section section--tight">
      <div className="container">
        <motion.div
          className="urgency__card"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="urgency__icon" aria-hidden="true">
            <Hourglass size={24} strokeWidth={1.8} />
          </span>
          <div className="urgency__copy">
            <h3>{urgency.headline}</h3>
            <p>{urgency.description}</p>
          </div>
          <span className="urgency__limit">
            <span className="urgency__limit-dot" />
            {urgency.limitText}
          </span>
        </motion.div>
      </div>
    </section>
  );
}

export default UrgencySection;
