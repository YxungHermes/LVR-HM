"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navigation } from "@/content/home";

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
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = (label: string) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    setActiveMegaMenu(label);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setActiveMegaMenu(null);
    }, 150); // 150ms delay to prevent flicker
  };

  const handleMegaMenuEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
  };

  const renderNavItem = (item: NavItem) => (
    <a
      key={item.label}
      href={item.href}
      className="group relative px-4 py-2 text-sm font-medium uppercase tracking-wide text-ink/90 transition-opacity duration-300 hover:opacity-70 focus-ring"
      onMouseEnter={() => handleMouseEnter(item.label)}
      onFocus={() => handleMouseEnter(item.label)}
    >
      {item.label}
    </a>
  );

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/95 shadow-sm backdrop-blur-md border-b border-black/10"
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        onMouseLeave={handleMouseLeave}
      >
        <div className="mx-auto max-w-7xl px-8 py-5">
          <div className="flex items-center justify-between">
            {/* Left Navigation */}
            <nav className="flex items-center gap-1">
              {navigation.left.map(renderNavItem)}
            </nav>

            {/* Center Logo */}
            <div className="absolute left-1/2 -translate-x-1/2">
              <a
                href="#"
                className="block font-serif text-2xl font-bold tracking-[0.08em] text-[#111] transition-opacity duration-300 hover:opacity-70 focus-ring"
              >
                Love, Violeta Rose
              </a>
            </div>

            {/* Right Navigation */}
            <nav className="flex items-center gap-1">
              {navigation.right.map(renderNavItem)}
            </nav>
          </div>
        </div>
      </motion.header>

      {/* Mega Menu Tray */}
      <AnimatePresence>
        {activeMegaMenu && (
          <motion.div
            className="fixed left-0 right-0 z-40 bg-white border-b border-black/10 shadow-lg"
            style={{ top: isScrolled ? "73px" : "69px" }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onMouseEnter={handleMegaMenuEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="mx-auto max-w-7xl px-8 py-12">
              <div className="grid grid-cols-2 gap-16">
                {/* Find active menu item and render its sections */}
                {[...navigation.left, ...navigation.right]
                  .find((item) => item.label === activeMegaMenu)
                  ?.megaMenu.sections.map((section, idx) => (
                    <div key={idx}>
                      <h3 className="mb-6 text-xs font-semibold uppercase tracking-widest text-ink/60">
                        {section.title}
                      </h3>
                      <ul className="space-y-4">
                        {section.links.map((link, linkIdx) => (
                          <li key={linkIdx}>
                            <a
                              href={link.href}
                              className="group block transition-opacity duration-200 hover:opacity-70"
                            >
                              <span className="font-serif text-lg text-ink">
                                {link.label}
                              </span>
                              {link.subtitle && (
                                <span className="ml-2 text-sm text-espresso/60">
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
