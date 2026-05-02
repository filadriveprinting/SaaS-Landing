import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { SectionHeader } from "../ui/SectionHeader";
import { landingContent } from "../../data/landingContent";

export function FAQSection() {
  const { faq } = landingContent;

  return (
    <section className="section" id="faq">
      <div className="container">
        <SectionHeader
          eyebrow="Resuelve tus dudas"
          title="Preguntas frecuentes"
          subtitle="Si te queda alguna pregunta, escríbenos. Aquí están las más habituales."
          align="center"
        />

        <div className="faq__list">
          {faq.map((q, i) => (
            <motion.details
              key={q.question}
              className="faq__item"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
            >
              <summary className="faq__summary">
                <span>{q.question}</span>
                <span className="faq__icon" aria-hidden="true">
                  <Plus size={16} strokeWidth={2.4} />
                </span>
              </summary>
              <p className="faq__answer">{q.answer}</p>
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQSection;
