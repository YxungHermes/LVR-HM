// Archived: previous sacred-geometry preloader, kept for future experiments.
// This was the original cinematic spiral with 12 rotating colored squares.
// To restore: import this instead of RotatingSquareSpiralPreloader in Preloader.tsx

"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PreloaderProps {
  onComplete?: () => void;
}

export default function ArchivedSacredGeometryPreloader({ onComplete }: PreloaderProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    // Safety timeout - hide preloader after 5 seconds no matter what
    const safetyTimeout = setTimeout(() => {
      setIsVisible(false);
    }, 5000);

    // Normal hide after minimum display time (1.5s to see the animation)
    const hideTimeout = setTimeout(() => {
      setIsVisible(false);
    }, 1500);

    return () => {
      clearTimeout(safetyTimeout);
      clearTimeout(hideTimeout);
    };
  }, []);

  useEffect(() => {
    // Prevent scrolling while preloader is visible
    if (isVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      // Call onComplete callback after fade out
      const completeTimeout = setTimeout(() => {
        onComplete?.();
      }, 800);
      return () => clearTimeout(completeTimeout);
    }
  }, [isVisible, onComplete]);

  // Number of squares in the spiral
  const squareCount = 12;
  const squares = Array.from({ length: squareCount }, (_, i) => i);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center"
          style={{
            // Soft gradient background matching hero aesthetic
            background: "linear-gradient(135deg, #f5ebe0 0%, #f8e8dc 25%, #fdf0e8 50%, #f5ebe0 100%)",
          }}
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
          }}
        >
          {/* Spiral container */}
          <motion.div
            className="relative w-64 h-64 md:w-80 md:h-80"
            exit={{
              scale: 0.8,
              transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
            }}
          >
            {prefersReducedMotion ? (
              // Reduced motion: Simple pulsing square
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{
                  opacity: [0.4, 1, 0.4],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div
                  className="w-16 h-16 border-2 rounded-sm"
                  style={{
                    borderColor: "#d4a5a5",
                  }}
                />
              </motion.div>
            ) : (
              // Full animation: Rotating spiral of squares
              <>
                {squares.map((i) => {
                  // Calculate properties for each square to create spiral effect
                  const scale = 1 - (i / squareCount) * 0.7; // Shrink towards center
                  const rotation = (i / squareCount) * 360; // Distribute rotation
                  const size = 120 - (i / squareCount) * 60; // Size decreases
                  const opacity = 0.15 + (i / squareCount) * 0.35; // Opacity varies

                  // Color shifts slightly through the palette
                  const hue = 15 + (i / squareCount) * 20; // Rose to peach tones
                  const saturation = 30 + (i / squareCount) * 20;
                  const lightness = 60 - (i / squareCount) * 10;

                  return (
                    <motion.div
                      key={i}
                      className="absolute inset-0 flex items-center justify-center"
                      style={{
                        transformOrigin: "center center",
                      }}
                      animate={{
                        rotate: [rotation, rotation + 360],
                        scale: [scale, scale * 1.05, scale],
                      }}
                      transition={{
                        rotate: {
                          duration: 8 + i * 0.3, // Varied speeds create depth
                          repeat: Infinity,
                          ease: "linear",
                        },
                        scale: {
                          duration: 3 + i * 0.2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        },
                      }}
                    >
                      <div
                        style={{
                          width: `${size}px`,
                          height: `${size}px`,
                          border: "1px solid",
                          borderColor: `hsl(${hue}, ${saturation}%, ${lightness}%)`,
                          borderRadius: "2px",
                          opacity: opacity,
                        }}
                      />
                    </motion.div>
                  );
                })}
              </>
            )}

            {/* Brand text - fades in after spiral is visible */}
            <motion.div
              className="absolute inset-x-0 -bottom-16 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <p
                className="font-serif text-lg font-semibold tracking-wide"
                style={{ color: "#6B5E57" }}
              >
                Love, Violeta Rose
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
