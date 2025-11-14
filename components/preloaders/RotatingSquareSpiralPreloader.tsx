"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";

interface PreloaderProps {
  onComplete?: () => void;
}

export default function RotatingSquareSpiralPreloader({ onComplete }: PreloaderProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [isExiting, setIsExiting] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const controls = useAnimation();

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
    // Minimum display time: 800ms
    const minDisplayTime = 800;

    // Maximum total time: 4000ms (safety)
    const maxTotalTime = 4000;

    // Safety timeout - force exit after max time
    const safetyTimeout = setTimeout(() => {
      triggerExit();
    }, maxTotalTime);

    // Normal exit after minimum display time
    const exitTimeout = setTimeout(() => {
      triggerExit();
    }, minDisplayTime);

    return () => {
      clearTimeout(safetyTimeout);
      clearTimeout(exitTimeout);
    };
  }, []);

  const triggerExit = () => {
    if (isExiting) return; // Prevent multiple triggers
    setIsExiting(true);

    // Start exit animation sequence
    controls.start({
      rotate: 360 * 3, // Speed up rotation
      scale: 4, // Zoom into center
      opacity: 0,
      transition: {
        duration: 1.4, // 1.4s exit animation
        ease: [0.22, 1, 0.36, 1],
      },
    }).then(() => {
      setIsVisible(false);
    });
  };

  useEffect(() => {
    // Prevent scrolling while preloader is visible
    if (isVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      // Call onComplete callback after animation finishes
      const completeTimeout = setTimeout(() => {
        onComplete?.();
      }, 200);
      return () => clearTimeout(completeTimeout);
    }
  }, [isVisible, onComplete]);

  // Number of nested squares (tunnel depth)
  const squareCount = 15;
  const squares = Array.from({ length: squareCount }, (_, i) => i);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center"
          style={{
            // Same gradient background as the archived preloader
            background: "linear-gradient(135deg, #f5ebe0 0%, #f8e8dc 25%, #fdf0e8 50%, #f5ebe0 100%)",
          }}
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
          }}
        >
          {/* Spiral container */}
          <motion.div
            className="relative w-96 h-96"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isExiting ? controls : {
              opacity: 1,
              scale: 1,
              transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
            }}
          >
            {prefersReducedMotion ? (
              // Reduced motion: Simple static square with subtle fade
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div
                  className="w-32 h-32"
                  style={{
                    border: "1.5px solid #d4a5a5",
                    borderRadius: "2px",
                  }}
                />
              </motion.div>
            ) : (
              // Full animation: Rotating nested square spiral tunnel
              <motion.div
                className="absolute inset-0"
                animate={isExiting ? undefined : {
                  rotate: 360,
                }}
                transition={{
                  rotate: {
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  },
                }}
              >
                {squares.map((i) => {
                  // Calculate properties for tunnel effect
                  // Larger squares on outside, smaller toward center
                  const progress = i / squareCount;
                  const size = 350 - (progress * 320); // 350px to 30px
                  const opacity = 0.15 + (progress * 0.4); // Fade toward center
                  const rotationOffset = progress * 45; // Slight rotation offset per square

                  // Soft warm neutral color (off-white to rose-beige)
                  const hue = 25; // Warm beige-rose
                  const saturation = 15 + (progress * 15); // Subtle saturation
                  const lightness = 70 - (progress * 15); // Slightly darker toward center

                  return (
                    <motion.div
                      key={i}
                      className="absolute inset-0 flex items-center justify-center"
                      style={{
                        transformOrigin: "center center",
                      }}
                      animate={isExiting ? undefined : {
                        rotate: [rotationOffset, rotationOffset + 360],
                      }}
                      transition={{
                        rotate: {
                          duration: 15 + (i * 0.5), // Varied rotation speeds for depth
                          repeat: Infinity,
                          ease: "linear",
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
              </motion.div>
            )}

            {/* Brand text - fades in after spiral starts */}
            <motion.div
              className="absolute inset-x-0 -bottom-20 text-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: isExiting ? 0 : 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
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
