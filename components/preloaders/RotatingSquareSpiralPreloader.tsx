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
    // Extended vortex animation timing: let more squares build for longer
    const displayTime = 7500; // 7.5 seconds - more time for continuous square generation

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

    // Start exit animation sequence - gentle fade into main page
    containerControls.start({
      scale: 1.05, // Subtle zoom instead of dramatic zoom
      opacity: 0,
      transition: {
        duration: 1.2, // 1.2s smooth fade
        ease: "easeOut",
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

  // Number of squares in the recursive tunnel - infinite depth illusion
  const squareCount = 140; // Massive count for infinite tunnel effect
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
            transition: { duration: 1.2, ease: "easeOut" }
          }}
        >
          {/* Vortex container - full screen */}
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 0.9 }}
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
              // Full animation: Building recursive square vortex
              // Squares appear sequentially from outside to center, then rotate
              <>
                {squares.map((i) => {
                  // Calculate properties for vortex/tunnel effect
                  const progress = i / squareCount;

                  // Size: massive on outside to fill screen, vanishing small toward center
                  // Using viewport units to ensure full screen coverage
                  const maxSize = Math.max(
                    typeof window !== 'undefined' ? window.innerWidth : 1920,
                    typeof window !== 'undefined' ? window.innerHeight : 1080
                  ) * 1.4; // 140% of viewport to ensure coverage
                  const minSize = 2; // Extremely small center for infinite tunnel illusion
                  const size = maxSize - (progress * (maxSize - minSize));

                  // Opacity: fade outer edges, peak visibility in center for tunnel depth
                  // Outer squares very transparent, inner squares more visible to see infinite depth
                  const finalOpacity = 0.06 + (progress * 0.75); // 0.06 to 0.81 - stronger center visibility

                  // Rotation offset: each square rotated relative to previous
                  // This creates the recursive spiral/vortex illusion
                  const rotationOffset = i * 7; // 7 degrees per square

                  // Color: warm neutral matching LVR palette
                  const hue = 25; // Warm beige-rose
                  const saturation = 18 + (progress * 12); // Subtle saturation increase
                  const lightness = 72 - (progress * 18); // Darker toward center

                  // Staggered delay for building effect - outside to inside
                  const appearDelay = i * 0.025; // 25ms between each square - faster for infinite depth
                  const appearDuration = 0.5; // Each square takes 0.5s to appear

                  return (
                    <motion.div
                      key={i}
                      className="absolute inset-0 flex items-center justify-center"
                      style={{
                        transformOrigin: "center center",
                      }}
                      initial={{
                        opacity: 0,
                        scale: 0.8,
                        rotate: rotationOffset,
                      }}
                      animate={isExiting ? undefined : {
                        opacity: finalOpacity,
                        scale: 1,
                        rotate: [rotationOffset, rotationOffset + 360],
                      }}
                      transition={{
                        opacity: {
                          duration: appearDuration,
                          delay: appearDelay,
                          ease: "easeOut",
                        },
                        scale: {
                          duration: appearDuration,
                          delay: appearDelay,
                          ease: [0.22, 1, 0.36, 1],
                        },
                        rotate: {
                          duration: 22 - (progress * 10), // Outer squares slower (22s), inner faster (12s)
                          delay: appearDelay + appearDuration, // Start rotating after appearing
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
                        }}
                      />
                    </motion.div>
                  );
                })}
              </>
            )}

            {/* Radial blur/fade overlay - creates focus on center */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'radial-gradient(circle at center, transparent 0%, transparent 30%, rgba(245, 235, 224, 0.3) 60%, rgba(245, 235, 224, 0.7) 85%, rgba(245, 235, 224, 0.95) 100%)',
              }}
            />

            {/* Brand text - HERO centerpiece, fades in FIRST before squares */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
              style={{ zIndex: 100 }}
              initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
              animate={{
                opacity: isExiting ? 0 : 1,
                scale: isExiting ? 0.9 : 1,
                filter: isExiting ? 'blur(10px)' : 'blur(0px)'
              }}
              transition={{
                delay: 0.3, // Fades in early, before center squares appear
                duration: 1.2,
                ease: [0.22, 1, 0.36, 1]
              }}
            >
              <h1
                className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-wide text-center px-8"
                style={{
                  color: "#1C1A18",
                  textShadow: '0 2px 20px rgba(255, 255, 255, 0.8), 0 0 40px rgba(255, 255, 255, 0.6)',
                  letterSpacing: '0.02em'
                }}
              >
                Love, Violeta Rose
              </h1>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
