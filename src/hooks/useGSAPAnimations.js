import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Aplica una animación GSAP+ScrollTrigger a un selector dentro del scope.
 * @param {Object} options
 * @param {React.RefObject} options.scopeRef contenedor donde buscar selectores
 * @param {string} [options.selector] selector relativo al scope
 * @param {Object} [options.from] propiedades iniciales
 * @param {Object} [options.to] propiedades finales
 * @param {Object} [options.scrollTrigger] config de ScrollTrigger
 * @param {Array}  [options.deps] dependencias
 */
export function useGSAPAnimations({
  scopeRef,
  selector = "[data-gsap]",
  from = { y: 40, opacity: 0 },
  to = { y: 0, opacity: 1, duration: 0.9, ease: "power3.out", stagger: 0.12 },
  scrollTrigger,
  deps = []
} = {}) {
  useEffect(() => {
    if (!scopeRef?.current) return;
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const ctx = gsap.context(() => {
      const targets = scopeRef.current.querySelectorAll(selector);
      if (!targets.length) return;

      gsap.fromTo(targets, from, {
        ...to,
        scrollTrigger: scrollTrigger
          ? { trigger: scopeRef.current, start: "top 80%", ...scrollTrigger }
          : undefined
      });
    }, scopeRef);

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}

export default useGSAPAnimations;
