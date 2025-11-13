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
  const [scrollProgress, setScrollProgress] = useState(0); // For gradient text mask
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
      // Check for scroll position in the snap container (homepage)
      const mainContainer = document.querySelector('.snap-y');
      const scrollY = mainContainer ? mainContainer.scrollTop : window.scrollY;

      // Get hero section height to detect when entering second section
      const heroSection = document.querySelector('section');
      const heroHeight = heroSection ? heroSection.offsetHeight : window.innerHeight;

      // Calculate scroll progress for gradient text mask (0 to 1 over 20% of hero)
      const progress = Math.min(1, Math.max(0, scrollY / (heroHeight * 0.2)));
      setScrollProgress(progress);

      // Header becomes solid when scrolling past 20% of hero section
      const shouldBeSolid = progress > 0.5 || settled;
      const shouldBeCompact = progress > 0.5;

      setSolid(shouldBeSolid);
      setIsScrolled(shouldBeCompact);
    };

    handleScroll();

    // Listen to both window scroll (for other pages) and snap container scroll (for homepage)
    const mainContainer = document.querySelector('.snap-y');
    if (mainContainer) {
      mainContainer.addEventListener("scroll", handleScroll);
    }
    window.addEventListener("scroll", handleScroll);

    return () => {
      if (mainContainer) {
        mainContainer.removeEventListener("scroll", handleScroll);
      }
      window.removeEventListener("scroll", handleScroll);
    };
  }, [settled]);

  const handleHeaderMouseEnter = () => {
    setSolid(true);
  };

  const handleHeaderMouseLeave = () => {
    // Only return to transparent if at top and not settled
    const mainContainer = document.querySelector('.snap-y');
    const scrollY = mainContainer ? mainContainer.scrollTop : window.scrollY;
    const heroSection = document.querySelector('section');
    const heroHeight = heroSection ? heroSection.offsetHeight : window.innerHeight;

    if (scrollY <= (heroHeight * 0.2) && !settled) {
      setSolid(false);
    }
  };

  const handleNavItemEnter = (label: string, isCta?: boolean, hasMegaMenu?: boolean) => {
    if (isMobile) return; // No mega menu on mobile
    if (isCta) return; // No mega menu for CTA items
    if (!hasMegaMenu) return; // No mega menu if item doesn't have one

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

  const handleNavItemFocus = (label: string, isCta?: boolean, hasMegaMenu?: boolean) => {
    // Force solid state for contrast on keyboard focus
    setSolid(true);
    if (isMobile || isCta || !hasMegaMenu) return; // No mega menu on mobile, CTA, or if item has no menu
    setActiveMegaMenu(label);
  };

  const renderNavItem = (item: NavItem) => {
    // Render primary CTA with enhanced animations - no dropdown
    if (item.isCta) {
      return (
        <a
          key={item.label}
          href={item.href}
          className={`lvr-glass-cta ml-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C3AED]/70 ${!solid ? 'lvr-glass-cta--transparent lvr-cta-boost' : ''}`}
          onMouseEnter={() => handleNavItemEnter(item.label, true)}
          onMouseLeave={handleNavItemLeave}
          onFocus={() => handleNavItemFocus(item.label, true)}
          aria-label="Book a consultation"
        >
          <span className="relative z-10">{item.label}</span>
          <span aria-hidden="true" className="lvr-cta-sparkles"></span>
        </a>
      );
    }

    // Regular text link for other nav items with gradient text mask
    return (
      <a
        key={item.label}
        href={item.href}
        className="group relative px-4 py-2 text-sm font-medium uppercase tracking-wide transition-all duration-200 focus-ring"
        onMouseEnter={() => handleNavItemEnter(item.label, false, !!item.megaMenu)}
        onMouseLeave={handleNavItemLeave}
        onFocus={() => handleNavItemFocus(item.label, false, !!item.megaMenu)}
      >
        <span className="relative">
          <span
            style={{
              // Gradient text mask that wipes from bottom to top as you scroll
              background: `linear-gradient(to top, #121212 ${scrollProgress * 100}%, white ${scrollProgress * 100}%)`,
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
              color: "transparent",
            }}
          >
            {item.label}
          </span>
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
          <div className="flex items-center gap-2 flex-1 justify-start">
            {/* Mobile hamburger */}
            <button
              className="md:hidden h-10 w-10 rounded-full hover:bg-black/5 focus:outline-none focus:ring-2 focus:ring-[#7C3AED]/70 flex items-center justify-center text-xl flex-shrink-0"
              aria-label="Open menu"
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              onClick={() => setMobileOpen(true)}
            >
              <span
                style={{
                  // Gradient text mask that wipes from bottom to top as you scroll
                  background: `linear-gradient(to top, #1C1A18 ${scrollProgress * 100}%, white ${scrollProgress * 100}%)`,
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  color: "transparent",
                }}
              >
                ☰
              </span>
            </button>

            {/* Desktop left nav - hidden on mobile */}
            <nav className="hidden md:flex items-center gap-1" aria-label="Primary">
              {navigation.left.map(renderNavItem)}
            </nav>
          </div>

          {/* Center Brand - Wordmark only, scales down on scroll */}
          <div className="flex items-center justify-center flex-1 absolute left-0 right-0 pointer-events-none md:relative md:left-auto md:right-auto md:pointer-events-auto">
            <a
              href="/"
              className="relative block origin-center will-change-transform transition-all duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] focus-ring pointer-events-auto"
              style={{
                transform: isScrolled ? "scale(0.62)" : "scale(1)",
              }}
            >
              <span
                className="font-serif text-xl sm:text-2xl md:text-3xl font-bold whitespace-nowrap"
                style={{
                  letterSpacing: isScrolled ? "0.015em" : "0.025em",
                  transition: "letter-spacing 0.7s cubic-bezier(0.85, 0, 0.15, 1)",
                  // Gradient text mask that wipes from bottom to top as you scroll
                  background: `linear-gradient(to top, #1C1A18 ${scrollProgress * 100}%, white ${scrollProgress * 100}%)`,
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  color: "transparent",
                }}
              >
                Love, Violeta Rose
              </span>
            </a>
          </div>

          {/* Right: Desktop nav + CTA (hidden on mobile) / Mobile spacer for symmetry */}
          <div className="flex items-center gap-1 flex-1 justify-end">
            <nav className="hidden md:flex items-center gap-1" aria-label="Secondary">
              {navigation.right.map(renderNavItem)}
            </nav>
            {/* Mobile spacer to match hamburger width for perfect centering */}
            <div className="md:hidden w-10 flex-shrink-0" />
          </div>
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
