"use client";

import { useEffect, useRef, useState } from "react";

interface SmoothSnapScrollProps {
  children: React.ReactNode;
}

export default function SmoothSnapScroll({ children }: SmoothSnapScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollTimeoutRef = useRef<NodeJS.Timeout>();
  const isScrollingRef = useRef(false);
  const lastScrollTop = useRef(0);
  const [isUserScrolling, setIsUserScrolling] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      // Clear existing timeout
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      // Mark that user is actively scrolling
      if (!isUserScrolling) {
        setIsUserScrolling(true);
      }

      // Detect scroll stop after 150ms of no scrolling
      scrollTimeoutRef.current = setTimeout(() => {
        setIsUserScrolling(false);
        snapToNearestSection();
      }, 150);

      lastScrollTop.current = container.scrollTop;
    };

    const snapToNearestSection = () => {
      if (!container || isScrollingRef.current) return;

      const scrollTop = container.scrollTop;
      const viewportHeight = container.clientHeight;

      // Get all snap sections
      const sections = Array.from(container.querySelectorAll('[data-snap-section]'));
      if (sections.length === 0) return;

      let nearestSection: Element | null = null;
      let smallestDistance = Infinity;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();

        // Distance from top of viewport
        const distanceFromTop = Math.abs(rect.top - containerRect.top);

        // Distance from center of viewport
        const sectionCenter = rect.top + rect.height / 2;
        const viewportCenter = containerRect.top + viewportHeight / 2;
        const distanceFromCenter = Math.abs(sectionCenter - viewportCenter);

        // Use the smaller of the two distances
        const distance = Math.min(distanceFromTop, distanceFromCenter);

        if (distance < smallestDistance) {
          smallestDistance = distance;
          nearestSection = section;
        }
      });

      if (nearestSection && smallestDistance < viewportHeight * 0.3) {
        // Only snap if within 30% of viewport height from a snap point
        const targetRect = (nearestSection as HTMLElement).getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();
        const targetScrollTop = scrollTop + (targetRect.top - containerRect.top);

        // Smooth scroll to target
        isScrollingRef.current = true;
        container.scrollTo({
          top: targetScrollTop,
          behavior: 'smooth'
        });

        // Reset scrolling flag after animation completes
        setTimeout(() => {
          isScrollingRef.current = false;
        }, 600);
      }
    };

    container.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      container.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [isUserScrolling]);

  return (
    <div
      ref={containerRef}
      className="overflow-y-auto h-screen scroll-smooth"
      style={{
        scrollBehavior: 'smooth',
      }}
    >
      {children}
    </div>
  );
}
