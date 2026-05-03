import "./HeroVideo.css";

/**
 * Hero visual basado en video loop.
 * Reemplazo ligero del HeroVisual3D cuando se prefiere video sobre Three.js.
 *
 * Props:
 * - src: ruta al video (por defecto /videos/hero-loop.mp4 en public/)
 * - poster: imagen mientras carga (opcional)
 */
export function HeroVideo({ src = "/videos/hero-loop.mp4", poster }) {
  return (
    <div className="hero-video" aria-hidden="true">
      <video
        className="hero-video__media"
        src={src}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        disablePictureInPicture
      />
      <div className="hero-video__glow" aria-hidden="true" />
    </div>
  );
}

export default HeroVideo;
