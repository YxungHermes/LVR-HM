"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface AnimatedPriceProps {
  range: string; // e.g., "$2,200 — $4,800"
  className?: string;
}

export default function AnimatedPrice({ range, className = "" }: AnimatedPriceProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [displayPrice, setDisplayPrice] = useState<string>("");

  useEffect(() => {
    if (!isInView) return;

    // Parse the range to extract min and max values
    const matches = range.match(/\$?([\d,]+)\s*—\s*\$?([\d,]+)/);
    if (!matches) {
      setDisplayPrice(range.split("—")[0].trim());
      return;
    }

    const minPrice = parseInt(matches[1].replace(/,/g, ""));
    const maxPrice = parseInt(matches[2].replace(/,/g, ""));

    let startTime: number | null = null;
    const duration = 2500; // Animation duration in ms
    const pauseDuration = 1000; // Pause at end before reversing

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;

      // Calculate progress (0 to 1 and back)
      const cycleDuration = duration * 2 + pauseDuration * 2;
      const cycleProgress = (elapsed % cycleDuration) / cycleDuration;

      let currentValue: number;

      if (cycleProgress < duration / cycleDuration) {
        // Going up: 0 to 0.5
        const progress = (cycleProgress * cycleDuration) / duration;
        currentValue = minPrice + (maxPrice - minPrice) * easeInOutCubic(progress);
      } else if (cycleProgress < (duration + pauseDuration) / cycleDuration) {
        // Pause at max
        currentValue = maxPrice;
      } else if (cycleProgress < (duration * 2 + pauseDuration) / cycleDuration) {
        // Going down: back to min
        const progress = ((cycleProgress * cycleDuration - duration - pauseDuration) / duration);
        currentValue = maxPrice - (maxPrice - minPrice) * easeInOutCubic(progress);
      } else {
        // Pause at min
        currentValue = minPrice;
      }

      // Format the price with commas
      const formattedPrice = Math.round(currentValue).toLocaleString('en-US');
      setDisplayPrice(`$${formattedPrice}`);

      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, [isInView, range]);

  // Easing function for smooth animation
  const easeInOutCubic = (t: number): number => {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  };

  return (
    <span ref={ref} className={className}>
      {displayPrice || range.split("—")[0].trim()}
    </span>
  );
}
