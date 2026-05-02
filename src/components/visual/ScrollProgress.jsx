import { motion, useScroll, useSpring } from "framer-motion";
import "./ScrollProgress.css";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 90, damping: 20, mass: 0.4 });

  return (
    <motion.div className="scroll-progress" style={{ scaleX }} aria-hidden="true" />
  );
}

export default ScrollProgress;
