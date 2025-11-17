"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import type { NavItem } from "@/content/home";

type MobileNavProps = {
  open: boolean;
  onClose: () => void;
  itemsLeft: NavItem[];
  itemsRight: NavItem[];
  cta: { label: string; href: string };
};

export default function MobileNav({
  open,
  onClose,
  itemsLeft,
  itemsRight,
  cta,
}: MobileNavProps) {
  // Prevent body scroll when menu is open
  useEffect(() => {
    if (open) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
    }
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [open, onClose]);

  // Combine all navigation items
  const allItems = [...itemsLeft, ...itemsRight].filter(
    (item) => !item.isCta
  );

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Full-Screen Cinematic Overlay */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Mobile menu"
            className="fixed inset-0 z-[100] bg-black flex flex-col"
            style={{
              paddingTop: "env(safe-area-inset-top)",
              paddingBottom: "env(safe-area-inset-bottom)",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Film Grain Texture Overlay */}
            <div
              className="absolute inset-0 pointer-events-none opacity-[0.03]"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                backgroundRepeat: "repeat",
                mixBlendMode: "overlay",
              }}
            />

            {/* Subtle vignette */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at center, transparent 0%, transparent 50%, rgba(0,0,0,0.4) 100%)",
              }}
            />

            {/* Close Button - Minimalist X in top right */}
            <motion.button
              onClick={onClose}
              aria-label="Close menu"
              className="absolute top-6 right-6 z-10 w-12 h-12 flex items-center justify-center text-white/70 hover:text-white transition-colors focus-ring rounded-full"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{ fontSize: "28px", fontWeight: 200 }}
            >
              ×
            </motion.button>

            {/* Content Container */}
            <div className="flex-1 flex flex-col justify-between px-8 py-16 overflow-y-auto">
              {/* Top: Logo - Wax Seal Style */}
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                <a
                  href="/"
                  onClick={onClose}
                  className="inline-block focus-ring rounded-lg"
                >
                  <h1
                    className="font-serif text-2xl font-bold text-white/90 tracking-wide"
                    style={{ letterSpacing: "0.05em" }}
                  >
                    Love, Violeta Rose
                  </h1>
                  <div className="mt-1 h-px w-24 mx-auto bg-white/20" />
                </a>
              </motion.div>

              {/* Center: Menu Items - Film Credits Style */}
              <nav className="flex-1 flex flex-col justify-center space-y-2 my-12">
                {allItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.5 + index * 0.1,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <a
                      href={item.href}
                      onClick={onClose}
                      className="block text-center font-serif text-3xl font-bold text-white/90 hover:text-white py-3 transition-all duration-300 hover:scale-105 focus-ring rounded-lg"
                      style={{
                        letterSpacing: "-0.02em",
                        textShadow: "0 2px 20px rgba(255, 255, 255, 0.1)",
                      }}
                    >
                      {item.label}
                    </a>
                  </motion.div>
                ))}

                {/* CTA Button - Featured */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.5 + allItems.length * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="pt-6"
                >
                  <a
                    href={cta.href}
                    onClick={onClose}
                    className="block mx-auto max-w-xs text-center bg-white text-black px-8 py-4 rounded-full font-semibold uppercase tracking-wider text-sm hover:shadow-[0_4px_20px_rgba(255,255,255,0.3)] transition-all duration-300 hover:scale-105 focus-ring"
                  >
                    {cta.label}
                  </a>
                </motion.div>
              </nav>

              {/* Bottom: Social Links + Currently Booking */}
              <motion.div
                className="text-center space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Currently Booking Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm">
                  <span
                    className="w-2 h-2 rounded-full bg-green-400 animate-pulse"
                    aria-hidden="true"
                  />
                  <span className="text-xs uppercase tracking-widest text-white/80 font-medium">
                    Currently Booking 2025
                  </span>
                </div>

                {/* Social Links */}
                <div className="flex justify-center items-center gap-6">
                  <a
                    href="https://instagram.com/lovevioletarose"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 hover:text-white transition-colors text-sm uppercase tracking-wider font-medium focus-ring rounded px-2 py-1"
                    aria-label="Follow on Instagram"
                  >
                    Instagram
                  </a>
                  <span className="text-white/20">•</span>
                  <a
                    href="https://vimeo.com/lovevioletarose"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 hover:text-white transition-colors text-sm uppercase tracking-wider font-medium focus-ring rounded px-2 py-1"
                    aria-label="Watch on Vimeo"
                  >
                    Vimeo
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
