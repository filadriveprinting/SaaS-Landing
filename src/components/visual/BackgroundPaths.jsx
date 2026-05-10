import "./BackgroundPaths.css";
import { motion } from "framer-motion";

function buildPaths(position) {
  return Array.from({ length: 36 }, (_, i) => {
    const offset = i * 5 * position;
    return {
      id: i,
      d: `M-${380 - offset} -${189 + offset}C-${380 - offset} -${189 + offset} -${312 - offset} ${216 - offset} ${152 - offset} ${343 - offset}C${616 - offset} ${470 - offset} ${684 - offset} ${875 - offset} ${684 - offset} ${875 - offset}`,
      width: 0.5 + i * 0.03,
      opacity: 0.1 + i * 0.03,
      // Duración precalculada (no Math.random en cada render).
      duration: 20 + ((i * 7) % 10),
    };
  });
}

function PathGroup({ position }) {
  const paths = buildPaths(position);
  return (
    <svg
      className="background-paths__svg"
      viewBox="0 0 696 316"
      fill="none"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      {paths.map((path) => (
        <motion.path
          key={path.id}
          className="background-paths__path"
          d={path.d}
          strokeWidth={path.width}
          strokeOpacity={path.opacity}
          initial={{ pathLength: 0.3, opacity: 0.6 }}
          animate={{
            pathLength: 1,
            opacity: [0.3, 0.6, 0.3],
            pathOffset: [0, 1, 0],
          }}
          transition={{
            duration: path.duration,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </svg>
  );
}

export function BackgroundPaths() {
  return (
    <div className="background-paths" aria-hidden="true">
      <PathGroup position={1} />
      <PathGroup position={-1} />
    </div>
  );
}

export default BackgroundPaths;
