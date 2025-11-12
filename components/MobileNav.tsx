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

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            aria-hidden="true"
            className="fixed inset-0 z-[70] bg-black/35 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Drawer */}
          <motion.nav
            role="dialog"
            aria-modal="true"
            aria-label="Mobile menu"
            className="fixed z-[80] top-0 right-0 bottom-0 w-[88%] max-w-[420px] bg-white shadow-xl flex flex-col"
            style={{
              paddingTop: "env(safe-area-inset-top)",
              paddingBottom: "env(safe-area-inset-bottom)",
            }}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Header */}
            <div className="px-5 pt-4 pb-3 border-b border-black/10 flex items-center justify-between">
              <span className="font-serif text-xl font-semibold text-[#1C1A18]">
                Love, Violeta Rose
              </span>
              <button
                onClick={onClose}
                aria-label="Close menu"
                className="h-10 w-10 rounded-full hover:bg-black/5 focus:outline-none focus:ring-2 focus:ring-[#7C3AED]/70 flex items-center justify-center text-2xl"
              >
                ✕
              </button>
            </div>

            {/* Navigation Links */}
            <div className="px-5 py-6 space-y-1 overflow-y-auto flex-1">
              {[...itemsLeft, ...itemsRight]
                .filter((item) => item.label !== cta.label)
                .map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="block text-lg font-medium text-[#1C1A18] py-3 px-3 rounded-lg hover:bg-[#FAF7F2] transition-colors touch-target"
                    onClick={onClose}
                  >
                    {item.label}
                  </a>
                ))}
            </div>

            {/* Primary CTA - Fixed at bottom with enhanced animations */}
            <div className="px-5 pb-5 pt-3 border-t border-black/10">
              <a
                href={cta.href}
                onClick={onClose}
                className="lvr-glass-cta w-full inline-flex justify-center items-center touch-target"
                aria-label="Book a consultation"
              >
                <span className="relative z-10">{cta.label}</span>
                <span aria-hidden="true" className="lvr-cta-sparkles"></span>
              </a>
            </div>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  );
}
