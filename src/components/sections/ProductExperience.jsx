import { motion } from "framer-motion";
import { VerdictDashboard } from "../visual/VerdictDashboard";
import { landingContent } from "../../data/landingContent";

export function ProductExperience() {
  const { productExperience } = landingContent;
  const { demo } = productExperience;

  return (
    <section className="section" id="experience">
      <div className="container">
        <motion.div
          className="product-exp"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="product-exp__intro">
            <span className="eyebrow">{productExperience.eyebrow}</span>
            <h2 className="product-exp__title">
              <span className="text-gradient">{productExperience.headline}</span>
            </h2>
            <p className="product-exp__desc">{productExperience.description}</p>
            <ul className="product-exp__highlights">
              {productExperience.highlights.map((h) => (
                <li key={h} className="product-exp__hl">
                  <span className="product-exp__hl-dot" />
                  {h}
                </li>
              ))}
            </ul>
          </div>

          {demo && (
            <div className="product-exp__visual">
              <VerdictDashboard
                title={demo.title}
                subtitle={demo.subtitle}
                stats={demo.stats}
                runs={demo.runs}
              />
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}

export default ProductExperience;
