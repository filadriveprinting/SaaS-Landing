import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import "./VideoModal.css";

export function VideoModal({ open, src, onClose, poster }) {
  const videoRef = useRef(null);

  // Cierra con Escape y bloquea el scroll del body cuando está abierto.
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose?.();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose]);

  // Pausa el vídeo cuando se cierra. Al abrir, fuerza volumen audible.
  useEffect(() => {
    if (!videoRef.current) return;
    if (open) {
      videoRef.current.muted = false;
      videoRef.current.volume = 1;
    } else {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="video-modal"
          role="dialog"
          aria-modal="true"
          aria-label="Vídeo demo"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
        >
          <motion.div
            className="video-modal__inner"
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.92, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="video-modal__close"
              onClick={onClose}
              aria-label="Cerrar vídeo"
            >
              <X size={20} strokeWidth={2.4} />
            </button>
            <video
              ref={videoRef}
              className="video-modal__video"
              src={src}
              poster={poster}
              controls
              autoPlay
              playsInline
              preload="metadata"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default VideoModal;
