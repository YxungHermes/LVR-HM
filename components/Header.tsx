"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navigation, type NavItem } from "@/content/home";
import MobileNav from "@/components/MobileNav";

export default function Header({ settled = false }: { settled?: boolean }) {
  const [solid, setSolid] = useState(settled);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const closeTimeoutRef = useRef<NodeJS.Timeout>();
  const openTimeoutRef = useRef<NodeJS.Timeout>();

  // Detect mobile viewport
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia("(max-width: 767px)").matches);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const shouldBeSolid = scrollY > 32 || settled;
      const shouldBeCompact = scrollY > 32;

      setSolid(shouldBeSolid);
      setIsScrolled(shouldBeCompact);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [settled]);

  const handleHeaderMouseEnter = () => {
    setSolid(true);
  };

  const handleHeaderMouseLeave = () => {
    // Only return to transparent if at top and not settled
    if (window.scrollY <= 32 && !settled) {
      setSolid(false);
    }
  };

  const handleNavItemEnter = (label: string, isCta?: boolean) => {
    if (isMobile) return; // No mega menu on mobile
    if (isCta) return; // No mega menu for CTA items

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

  const handleNavItemFocus = (label: string, isCta?: boolean) => {
    // Force solid state for contrast on keyboard focus
    setSolid(true);
    if (isMobile || isCta) return; // No mega menu on mobile or CTA
    setActiveMegaMenu(label);
  };

  const renderNavItem = (item: NavItem) => {
    // Render primary CTA with lava animation - no dropdown
    if (item.isCta) {
      return (
        <a
          key={item.label}
          href={item.href}
          className={`lvr-glass-cta ml-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C3AED]/70 ${!solid ? 'lvr-glass-cta--transparent' : ''}`}
          onMouseEnter={() => handleNavItemEnter(item.label, true)}
          onMouseLeave={handleNavItemLeave}
          onFocus={() => handleNavItemFocus(item.label, true)}
          aria-label="Book a consultation"
        >
          {item.label}
        </a>
      );
    }

    // Regular text link for other nav items
    return (
      <a
        key={item.label}
        href={item.href}
        className={`group relative px-4 py-2 text-sm font-medium uppercase tracking-wide transition-all duration-200 focus-ring ${
          solid ? "text-[#121212]" : "text-white"
        }`}
        onMouseEnter={() => handleNavItemEnter(item.label, false)}
        onMouseLeave={handleNavItemLeave}
        onFocus={() => handleNavItemFocus(item.label, false)}
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
  };

  // CTA item for mobile nav
  const ctaItem = { label: "Book Consultation", href: "/consultation" };

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
        <div className="mx-auto max-w-[1280px] px-4 sm:px-8 md:px-12 h-[56px] md:h-[72px] flex items-center">
          {/* Left: Mobile hamburger + Desktop nav */}
          <div className="flex items-center gap-2 flex-1">
            {/* Mobile hamburger */}
            <button
              className="md:hidden h-10 w-10 rounded-full hover:bg-black/5 focus:outline-none focus:ring-2 focus:ring-[#7C3AED]/70 flex items-center justify-center text-xl"
              aria-label="Open menu"
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              onClick={() => setMobileOpen(true)}
            >
              <span className={solid ? "text-[#1C1A18]" : "text-white"}>☰</span>
            </button>

            {/* Desktop left nav - hidden on mobile */}
            <nav className="hidden md:flex items-center gap-1" aria-label="Primary">
              {navigation.left.map(renderNavItem)}
            </nav>
          </div>

          {/* Center Brand - Wordmark only, scales down on scroll */}
          <div className="flex items-center justify-center flex-1">
            <a
              href="/"
              className="relative block origin-center will-change-transform transition-all duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] focus-ring"
              style={{
                transform: isScrolled ? "scale(0.62)" : "scale(1)",
              }}
            >
              <span
                className={`font-serif text-xl sm:text-2xl md:text-3xl font-bold whitespace-nowrap transition-colors duration-300 ${
                  solid ? "text-[#1C1A18]" : "text-white"
                }`}
                style={{
                  letterSpacing: isScrolled ? "0.015em" : "0.025em",
                  transition: "color 0.3s, letter-spacing 0.7s cubic-bezier(0.85, 0, 0.15, 1)",
                }}
              >
                Love, Violeta Rose
              </span>
            </a>
          </div>

          {/* Right: Desktop nav + CTA - hidden on mobile */}
          <nav className="hidden md:flex items-center gap-1 flex-1 justify-end" aria-label="Secondary">
            {navigation.right.map(renderNavItem)}
          </nav>

          {/* Mobile spacer for symmetry */}
          <div className="md:hidden w-10 flex-shrink-0" />
        </div>
      </motion.header>

      {/* Mega Menu Tray - Desktop only */}
      <div className="hidden md:block">
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
                  {/* Find active menu item and render its sections - only if it has a megaMenu */}
                  {[...navigation.left, ...navigation.right]
                    .find((item) => item.label === activeMegaMenu && item.megaMenu)
                    ?.megaMenu?.sections.map((section, idx) => (
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
      </div>

      {/* Mobile Navigation Drawer */}
      <MobileNav
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        itemsLeft={navigation.left}
        itemsRight={navigation.right}
        cta={ctaItem}
      />
    </>
  );
}
