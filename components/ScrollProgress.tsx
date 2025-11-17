"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const [isVisible, setIsVisible] = useState(false);

  // Track scroll progress using Framer Motion's useScroll
  const { scrollYProgress } = useScroll();

  // Add spring physics for smooth animation
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Show progress indicator after scrolling past hero section
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const heroHeight = window.innerHeight;

      // Show after scrolling 100px or past 20% of hero
      setIsVisible(scrolled > Math.min(100, heroHeight * 0.2));
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[60] h-[2px] origin-left"
      style={{
        scaleX,
        background: "linear-gradient(90deg, #D4A574 0%, #B8860B 50%, #D4A574 100%)",
        opacity: isVisible ? 1 : 0,
        transition: "opacity 300ms ease-in-out",
      }}
    />
  );
}
