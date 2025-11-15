"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { trackScrollDepth } from "@/lib/analytics";

/**
 * ScrollDepthTracker Component
 *
 * Tracks when users scroll to 25%, 50%, 75%, and 90% of page depth.
 * Useful for understanding content engagement and page consumption.
 *
 * Add this to your layout.tsx to track scroll depth site-wide.
 *
 * Note: GA4 Enhanced Measurement also tracks scrolls to 90% automatically,
 * but this component provides more granular tracking at multiple milestones.
 */
export default function ScrollDepthTracker() {
  const pathname = usePathname();
  const trackedDepths = useRef<Set<number>>(new Set());

  useEffect(() => {
    // Reset tracked depths when pathname changes
    trackedDepths.current = new Set();

    const handleScroll = () => {
      // Calculate scroll percentage
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      // Calculate percentage scrolled (0-100)
      const scrollPercentage = Math.round(
        ((scrollTop + windowHeight) / documentHeight) * 100
      );

      // Define milestones to track
      const milestones = [25, 50, 75, 90];

      // Track each milestone once per page view
      milestones.forEach((milestone) => {
        if (
          scrollPercentage >= milestone &&
          !trackedDepths.current.has(milestone)
        ) {
          trackedDepths.current.add(milestone);
          trackScrollDepth(milestone, pathname);
        }
      });
    };

    // Attach scroll listener
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Initial check in case page loads scrolled down
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  // This component doesn't render anything
  return null;
}
