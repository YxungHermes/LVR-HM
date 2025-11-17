// Archived preloader: Cascading geometric squares animation
// Previous version with sequential rotation cascade effect
// To restore: Change export in components/Preloader.tsx to:
// export { default } from "./preloaders/geometry-preloader";

"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";

interface PreloaderProps {
  onComplete?: () => void;
}

export default function GeometryPreloader({ onComplete }: PreloaderProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [isExiting, setIsExiting] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const containerControls = useAnimation();

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
    // Cascade animation timing breakdown:
    const fadeInDuration = 600; // Initial container fade in
    const squareCount = 15;
    const delayPerSquare = 0.25; // Seconds between each square starting (250ms)
    const rotationDuration = 0.6; // How long each square rotates (600ms)

    // Calculate total cascade duration
    // Last square starts at: (squareCount - 1) * delayPerSquare
    // Last square completes at: lastSquareStart + rotationDuration
    const lastSquareStart = (squareCount - 1) * delayPerSquare * 1000; // Convert to ms
    const cascadeComplete = lastSquareStart + (rotationDuration * 1000);

    // Premium timing: Let the full cascade complete + pause to appreciate
    const pauseAfterCascade = 800; // 0.8s to admire the completed spiral
    const displayTime = fadeInDuration + cascadeComplete + pauseAfterCascade;

    // Total sequence: ~6.9 seconds
    // - Fade in: 0.6s
    // - Cascade: 3.5s (last square starts) + 0.6s (completes) = 4.1s
    // - Pause: 0.8s
    // - Exit zoom: 1.5s (handled separately in triggerExit)
    // = ~7.0s total experience

    // Always run the full sequence - don't skip early
    const exitTimeout = setTimeout(() => {
      triggerExit();
    }, displayTime);

    return () => {
      clearTimeout(exitTimeout);
    };
  }, []);

  const triggerExit = () => {
    if (isExiting) return; // Prevent multiple triggers
    setIsExiting(true);

    // Start exit animation sequence - zoom into center
    containerControls.start({
      scale: 5, // Zoom deep into center
      opacity: 0,
      transition: {
        duration: 1.5, // 1.5s exit animation
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

  // Number of nested squares (recursive tunnel depth)
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
            animate={isExiting ? containerControls : {
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
              // Full animation: Cascading recursive square spiral
              <>
                {squares.map((i) => {
                  // Calculate properties for tunnel effect
                  // Larger squares on outside, smaller toward center
                  const progress = i / squareCount;
                  const size = 350 - (progress * 320); // 350px to 30px
                  const opacity = 0.2 + (progress * 0.5); // Fade toward center

                  // Soft warm neutral color (off-white to rose-beige)
                  const hue = 25; // Warm beige-rose
                  const saturation = 15 + (progress * 15); // Subtle saturation
                  const lightness = 70 - (progress * 15); // Slightly darker toward center

                  // Cascading animation timing
                  // Square 0 (outermost): no rotation (static)
                  // Square 1-14: rotate in sequence with staggered delay
                  const delayPerSquare = 0.25; // Seconds between each square
                  const rotationDuration = 0.6; // Duration of rotation
                  const delay = i * delayPerSquare; // Cascade from outside to inside

                  // Outermost square is static
                  if (i === 0) {
                    return (
                      <motion.div
                        key={i}
                        className="absolute inset-0 flex items-center justify-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.4 }}
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
                  }

                  // Inner squares: cascade rotation from outside to inside
                  return (
                    <motion.div
                      key={i}
                      className="absolute inset-0 flex items-center justify-center"
                      style={{
                        transformOrigin: "center center",
                      }}
                      initial={{ opacity: 0, rotate: 0 }}
                      animate={isExiting ? undefined : {
                        opacity: 1,
                        rotate: [0, 0, 90, 90], // Stay at 0, then rotate to 90, then stay
                      }}
                      transition={{
                        opacity: {
                          duration: 0.3,
                          delay: delay,
                        },
                        rotate: {
                          duration: rotationDuration + delay,
                          times: [0, delay / (rotationDuration + delay), (delay + rotationDuration) / (rotationDuration + delay), 1],
                          ease: [0.22, 1, 0.36, 1],
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

            {/* Brand text - fades in after spiral starts */}
            <motion.div
              className="absolute inset-x-0 -bottom-20 text-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: isExiting ? 0 : 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <p
                className="font-serif text-lg font-semibold tracking-wide"
                style={{ color: "#6B5E57" }}
              >
                <span className="font-bold">Weddings</span>
                <span className="italic text-[#6B5E57]/80"> by Michael Andrade</span>
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
