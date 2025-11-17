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

      // Detect scroll stop after 150ms of no scrolling - faster response
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
      const scrollDirection = scrollTop > lastScrollTop.current ? 'down' : 'up';

      // Get all snap sections
      const sections = Array.from(container.querySelectorAll('[data-snap-section]'));
      if (sections.length === 0) return;

      let targetSection: Element | null = null;
      const threshold = 0.35; // 35% threshold - if scrolled past this, commit to next section

      // Find current section and determine target based on scroll direction
      for (let i = 0; i < sections.length; i++) {
        const section = sections[i] as HTMLElement;
        const rect = section.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();

        // Calculate how much of the section is visible
        const sectionTop = rect.top - containerRect.top;
        const visibleRatio = -sectionTop / viewportHeight;

        // Section is currently in viewport
        if (rect.top <= containerRect.top + viewportHeight * 0.5 &&
            rect.bottom >= containerRect.top) {

          if (scrollDirection === 'down') {
            // If scrolled more than threshold down, go to next section
            if (visibleRatio > threshold && i < sections.length - 1) {
              targetSection = sections[i + 1];
            } else {
              // Stay on current section
              targetSection = section;
            }
          } else {
            // Scrolling up
            if (visibleRatio < (1 - threshold) && visibleRatio > 0 && i > 0) {
              // If scrolled back up past threshold, go to previous section
              targetSection = sections[i - 1];
            } else {
              // Stay on current section
              targetSection = section;
            }
          }
          break;
        }
      }

      // If no target found, find nearest section
      if (!targetSection) {
        let smallestDistance = Infinity;
        sections.forEach((section) => {
          const rect = section.getBoundingClientRect();
          const containerRect = container.getBoundingClientRect();
          const distanceFromTop = Math.abs(rect.top - containerRect.top);

          if (distanceFromTop < smallestDistance) {
            smallestDistance = distanceFromTop;
            targetSection = section;
          }
        });
      }

      if (targetSection) {
        const targetRect = (targetSection as HTMLElement).getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();
        const targetScrollTop = scrollTop + (targetRect.top - containerRect.top);

        // Only scroll if we're not already at the target
        if (Math.abs(targetRect.top - containerRect.top) > 5) {
          // Smooth scroll to target with cinematic easing (600-800ms)
          isScrollingRef.current = true;
          container.scrollTo({
            top: targetScrollTop,
            behavior: 'smooth'
          });

          // Reset scrolling flag after animation completes
          setTimeout(() => {
            isScrollingRef.current = false;
          }, 700);
        }
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
