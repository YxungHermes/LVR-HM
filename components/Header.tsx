"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navigation } from "@/content/home";
import MinimalRoseIcon from "./brand/MinimalRoseIcon";

type MegaMenuSection = {
  title: string;
  links: Array<{ label: string; href: string; subtitle?: string }>;
};

type NavItem = {
  label: string;
  href: string;
  megaMenu: {
    sections: MegaMenuSection[];
  };
};

export default function Header() {
  const [solid, setSolid] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout>();
  const openTimeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const shouldBeSolid = scrollY > 32;
      const shouldBeCompact = scrollY > 32;

      setSolid(shouldBeSolid);
      setIsScrolled(shouldBeCompact);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleHeaderMouseEnter = () => {
    setSolid(true);
  };

  const handleHeaderMouseLeave = () => {
    // Only return to transparent if at top
    if (window.scrollY <= 32) {
      setSolid(false);
    }
  };

  const handleNavItemEnter = (label: string) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    if (openTimeoutRef.current) {
      clearTimeout(openTimeoutRef.current);
    }

    // 120ms delay before opening
    openTimeoutRef.current = setTimeout(() => {
      setActiveMegaMenu(label);
    }, 120);
  };

  const handleNavItemLeave = () => {
    if (openTimeoutRef.current) {
      clearTimeout(openTimeoutRef.current);
    }

    // 200ms delay before closing
    closeTimeoutRef.current = setTimeout(() => {
      setActiveMegaMenu(null);
    }, 200);
  };

  const handleMegaMenuEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    if (openTimeoutRef.current) {
      clearTimeout(openTimeoutRef.current);
    }
  };

  const handleNavItemFocus = (label: string) => {
    // Force solid state for contrast on keyboard focus
    setSolid(true);
    setActiveMegaMenu(label);
  };

  const renderNavItem = (item: NavItem) => (
    <a
      key={item.label}
      href={item.href}
      className={`group relative px-4 py-2 text-sm font-medium uppercase tracking-wide transition-all duration-200 focus-ring ${
        solid ? "text-[#121212]" : "text-white"
      }`}
      onMouseEnter={() => handleNavItemEnter(item.label)}
      onMouseLeave={handleNavItemLeave}
      onFocus={() => handleNavItemFocus(item.label)}
    >
      <span className="relative">
        {item.label}
        {/* Underline on hover */}
        <span
          className={`absolute bottom-0 left-0 h-[1px] w-0 transition-all duration-200 group-hover:w-full ${
            solid ? "bg-[#121212]/40" : "bg-white/55"
          }`}
        />
      </span>
    </a>
  );

  return (
    <>
      <motion.header
        role="banner"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
          solid
            ? "bg-white border-b border-black/8 shadow-sm"
            : "bg-transparent border-b-0"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        onMouseEnter={handleHeaderMouseEnter}
        onMouseLeave={handleHeaderMouseLeave}
      >
        <div className="mx-auto max-w-[1280px] px-12 h-[56px] md:h-[72px] flex items-center justify-between">
          {/* Left Navigation */}
          <nav className="flex items-center gap-1" aria-label="Primary">
            {navigation.left.map(renderNavItem)}
          </nav>

          {/* Center Brand - Transitions between full wordmark and LVR monogram */}
          <div className="absolute left-1/2 -translate-x-1/2">
            <a
              href="#"
              className="group relative flex items-center justify-center transition-colors duration-300 focus-ring"
            >
              {/* Full Wordmark - visible when not scrolled */}
              <motion.span
                className={`font-serif text-3xl md:text-4xl font-bold tracking-[0.025em] whitespace-nowrap transition-colors duration-300 ${
                  solid ? "text-[#1C1A18]" : "text-white"
                }`}
                initial={false}
                animate={{
                  opacity: isScrolled ? 0 : 1,
                  scale: isScrolled ? 0.8 : 1,
                }}
                transition={{
                  duration: 0.7,
                  ease: [0.85, 0, 0.15, 1],
                }}
                style={{ pointerEvents: isScrolled ? "none" : "auto" }}
              >
                Love, Violeta Rose
              </motion.span>

              {/* LVR Monogram with Rose Icon - visible when scrolled */}
              <motion.div
                className="absolute flex items-center gap-2 group/monogram"
                initial={false}
                animate={{
                  opacity: isScrolled ? 1 : 0,
                  scale: isScrolled ? 1 : 0.8,
                }}
                transition={{
                  duration: 0.7,
                  ease: [0.85, 0, 0.15, 1],
                }}
                style={{ pointerEvents: isScrolled ? "auto" : "none" }}
              >
                {/* Minimal rose icon */}
                <MinimalRoseIcon
                  className={`h-4 w-4 opacity-85 transition-colors duration-300 ${
                    solid ? "text-[#1C1A18] group-hover/monogram:text-[#A14C41]" : "text-white group-hover/monogram:text-[#A14C41]"
                  }`}
                />
                {/* LVR text */}
                <span
                  className={`font-serif text-xl font-extrabold tracking-[0.04em] whitespace-nowrap transition-colors duration-300 ${
                    solid ? "text-[#1C1A18] group-hover/monogram:text-[#A14C41]" : "text-white group-hover/monogram:text-[#A14C41]"
                  }`}
                >
                  LVR
                </span>
              </motion.div>
            </a>
          </div>

          {/* Right Navigation */}
          <nav className="flex items-center gap-1" aria-label="Secondary">
            {navigation.right.map(renderNavItem)}
          </nav>
        </div>
      </motion.header>

      {/* Mega Menu Tray */}
      <AnimatePresence>
        {activeMegaMenu && (
          <motion.div
            className="fixed left-0 right-0 z-40 bg-[#F4EAE4]/70 backdrop-blur-md border-b border-black/8 top-[56px] md:top-[72px]"
            style={{
              boxShadow: "0 8px 24px rgba(0,0,0,.06)",
            }}
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            onMouseEnter={handleMegaMenuEnter}
            onMouseLeave={handleNavItemLeave}
          >
            <div className="mx-auto max-w-[1280px] px-8 py-6">
              <div className="grid grid-cols-2 gap-6 md:grid-cols-3 md:gap-16">
                {/* Find active menu item and render its sections */}
                {[...navigation.left, ...navigation.right]
                  .find((item) => item.label === activeMegaMenu)
                  ?.megaMenu.sections.map((section, idx) => (
                    <div key={idx}>
                      <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#6B5E57]">
                        {section.title}
                      </h3>
                      <ul className="space-y-3">
                        {section.links.map((link, linkIdx) => (
                          <li key={linkIdx}>
                            <a
                              href={link.href}
                              className="group block transition-opacity duration-180 hover:opacity-70"
                            >
                              <span className="font-serif text-base font-semibold text-[#121212]">
                                {link.label}
                              </span>
                              {link.subtitle && (
                                <span className="ml-2 text-sm text-[#6B5E57]">
                                  {link.subtitle}
                                </span>
                              )}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
