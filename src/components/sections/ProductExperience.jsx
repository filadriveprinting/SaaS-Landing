import { motion } from "framer-motion";
import { HeroVisual3D } from "../visual/HeroVisual3D";
import { landingContent } from "../../data/landingContent";

export function ProductExperience() {
  const { productExperience } = landingContent;

  return (
    <section className="section" id="experience">
      <div className="container">
        <motion.div
          className="product-exp"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div>
            <span className="eyebrow">{productExperience.eyebrow}</span>
            <h2 style={{ marginTop: "1rem" }}>
              <span className="text-gradient">{productExperience.headline}</span>
            </h2>
            <p style={{ marginTop: "1rem" }}>{productExperience.description}</p>
            <ul className="product-exp__highlights">
              {productExperience.highlights.map((h) => (
                <li key={h} className="product-exp__hl">
                  <span className="product-exp__hl-dot" />
                  {h}
                </li>
              ))}
            </ul>
          </div>
          <div className="product-exp__visual">
            <HeroVisual3D />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default ProductExperience;
