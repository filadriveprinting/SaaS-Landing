import { useEffect, useMemo, useRef } from "react";
import "./FloatingParticles.css";

/**
 * Capa decorativa de partículas en canvas 2D.
 * Ligera (sin three) y respetuosa con prefers-reduced-motion.
 */
export function FloatingParticles({ count = 36, color = "rgba(255, 107, 53, 0.45)", className = "" }) {
  const canvasRef = useRef(null);
  const rafRef = useRef(0);
  const particles = useMemo(() => Array.from({ length: count }), [count]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    const ctx = canvas.getContext("2d");
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = 0;
    let height = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const items = particles.map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.6 + 0.4,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      a: Math.random() * 0.6 + 0.2
    }));

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      for (const p of items) {
        if (!reduce) {
          p.x += p.vx;
          p.y += p.vy;
          if (p.x < 0 || p.x > width) p.vx *= -1;
          if (p.y < 0 || p.y > height) p.vy *= -1;
        }
        ctx.beginPath();
        ctx.fillStyle = color.replace(/0?\.\d+\)$/, `${p.a.toFixed(2)})`);
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(rafRef.current);
      ro.disconnect();
    };
  }, [particles, color]);

  return <canvas ref={canvasRef} className={`floating-particles ${className}`} aria-hidden="true" />;
}

export default FloatingParticles;
