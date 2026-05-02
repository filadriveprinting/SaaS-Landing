import { useEffect, useRef, useState } from "react";

/**
 * Hook ligero para revelar elementos al entrar en viewport.
 * Devuelve { ref, isVisible } y respeta prefers-reduced-motion.
 */
export function useScrollReveal({ threshold = 0.18, rootMargin = "0px 0px -10% 0px" } = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return { ref, isVisible };
}

export default useScrollReveal;
