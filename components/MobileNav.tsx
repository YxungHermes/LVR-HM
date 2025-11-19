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

  const allItems = [...itemsLeft, ...itemsRight].filter(
    (item) => item.label !== cta.label
  );

  return (
    <AnimatePresence>
      {open && (
        <motion.nav
          role="dialog"
          aria-modal="true"
          aria-label="Mobile menu"
          className="fixed inset-0 z-[100] bg-[#FAF7F2] flex flex-col overflow-hidden"
          style={{
            paddingTop: "env(safe-area-inset-top)",
            paddingBottom: "env(safe-area-inset-bottom)",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Header */}
          <div className="px-6 pt-6 pb-4 flex items-center justify-between">
            <motion.span
              className="relative inline-block"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="font-serif text-2xl font-semibold text-[#1C1A18] block">
                Love Stories
              </span>
              <span className="font-serif text-[11px] italic text-[#1C1A18]/70 absolute -bottom-1 right-0 transform translate-y-full whitespace-nowrap">
                by Michael Andrade
              </span>
            </motion.span>
            <motion.button
              onClick={onClose}
              aria-label="Close menu"
              className="h-12 w-12 rounded-full hover:bg-black/5 active:bg-black/10 focus:outline-none focus:ring-2 focus:ring-[#7C3AED]/70 flex items-center justify-center text-[#1C1A18]/70 transition-colors"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ delay: 0.15, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              whileTap={{ scale: 0.95 }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </motion.button>
          </div>

          {/* Navigation Links - Centered */}
          <div className="flex-1 flex flex-col justify-center px-6 overflow-y-auto">
            <nav className="space-y-1 py-8">
              {allItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 0.2 + index * 0.05,
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <a
                    href={item.href}
                    className="group block py-3 px-4 rounded-xl transition-all duration-300 hover:bg-white/60 active:scale-[0.98]"
                    onClick={onClose}
                  >
                    <span className="font-serif text-3xl sm:text-4xl font-semibold text-[#1C1A18] block transition-transform duration-300 group-hover:translate-x-2">
                      {item.label}
                    </span>
                    {item.megaMenu && (
                      <span className="text-sm text-[#6B5E57] mt-1 block opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {item.megaMenu.sections[0]?.links[0]?.label || "Explore"}
                      </span>
                    )}
                  </a>
                </motion.div>
              ))}
            </nav>
          </div>

          {/* CTA at bottom */}
          <motion.div
            className="px-6 pb-6 pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <a
              href={cta.href}
              onClick={onClose}
              className="lvr-glass-cta w-full inline-flex justify-center items-center touch-target"
              aria-label="Book a consultation"
            >
              <span className="relative z-10">{cta.label}</span>
              <span aria-hidden="true" className="lvr-cta-sparkles"></span>
            </a>

            {/* Optional footer note */}
            <p className="text-center text-xs text-[#6B5E57] mt-4 opacity-60">
              Serving couples worldwide
            </p>
          </motion.div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
