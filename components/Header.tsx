"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { usePathname } from "next/navigation";
import { navigation, type NavItem } from "@/content/home";
import MobileNav from "@/components/MobileNav";

export default function Header({ settled = false, hideCta = false }: { settled?: boolean; hideCta?: boolean }) {
  const pathname = usePathname();
  const [solid, setSolid] = useState(settled);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const closeTimeoutRef = useRef<NodeJS.Timeout>();
  const openTimeoutRef = useRef<NodeJS.Timeout>();

  // Smooth scroll progress
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Detect mobile viewport
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia("(max-width: 767px)").matches);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Keep header solid when mega menu is active
  useEffect(() => {
    if (activeMegaMenu !== null) {
      setSolid(true);
    }
  }, [activeMegaMenu]);

  useEffect(() => {
    const handleScroll = () => {
      const mainContainer = document.querySelector('.overflow-y-auto');
      const scrollY = mainContainer ? mainContainer.scrollTop : window.scrollY;
      const heroSection = document.querySelector('section');
      const heroHeight = heroSection ? heroSection.offsetHeight : window.innerHeight;
      const headerHeight = 72;
      const secondSectionAtHeader = scrollY >= (heroHeight - headerHeight);
      const progress = secondSectionAtHeader ? 1 : 0;

      setScrollProgress(progress);
      setSolid(secondSectionAtHeader || settled || activeMegaMenu !== null);
      setIsScrolled(secondSectionAtHeader);

      // Show scroll to top button after scrolling 400px
      setShowScrollTop(scrollY > 400);
    };

    handleScroll();
    const mainContainer = document.querySelector('.overflow-y-auto');
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
  }, [settled, activeMegaMenu]);

  const handleHeaderMouseEnter = () => {
    setSolid(true);
  };

  const handleHeaderMouseLeave = () => {
    const mainContainer = document.querySelector('.overflow-y-auto');
    const scrollY = mainContainer ? mainContainer.scrollTop : window.scrollY;
    const heroSection = document.querySelector('section');
    const heroHeight = heroSection ? heroSection.offsetHeight : window.innerHeight;
    const headerHeight = 72;
    const secondSectionAtHeader = scrollY >= (heroHeight - headerHeight);
    const canBeTransparent = !secondSectionAtHeader && !settled && activeMegaMenu === null;

    if (canBeTransparent) {
      setSolid(false);
    }
  };

  const handleNavItemEnter = (label: string, isCta?: boolean, hasMegaMenu?: boolean) => {
    if (isMobile || isCta || !hasMegaMenu) return;

    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    if (openTimeoutRef.current) clearTimeout(openTimeoutRef.current);

    openTimeoutRef.current = setTimeout(() => {
      setActiveMegaMenu(label);
    }, 100);
  };

  const handleNavItemLeave = () => {
    if (openTimeoutRef.current) clearTimeout(openTimeoutRef.current);
    closeTimeoutRef.current = setTimeout(() => {
      setActiveMegaMenu(null);
    }, 200);
  };

  const handleMegaMenuEnter = () => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    if (openTimeoutRef.current) clearTimeout(openTimeoutRef.current);
  };

  const handleNavItemFocus = (label: string, isCta?: boolean, hasMegaMenu?: boolean) => {
    setSolid(true);
    if (isMobile || isCta || !hasMegaMenu) return;
    setActiveMegaMenu(label);
  };

  const scrollToTop = () => {
    const mainContainer = document.querySelector('.overflow-y-auto');
    if (mainContainer) {
      mainContainer.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const isActivePage = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  const renderNavItem = (item: NavItem) => {
    if (item.isCta && hideCta) return null;
    const isActive = isActivePage(item.href);

    // CTA button
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

    // Regular nav items with enhanced hover
    return (
      <a
        key={item.label}
        href={item.href}
        className="group relative px-4 py-2 text-xs font-medium uppercase focus-ring rounded-lg"
        style={{
          color: (solid || scrollProgress > 0.5) ? (isActive ? "#A14C41" : "#121212") : isActive ? "rgba(255, 255, 255, 0.95)" : "rgba(255, 255, 255, 0.65)",
          letterSpacing: "0.08em",
          transition: "all 200ms cubic-bezier(0.4, 0, 0.2, 1)",
        }}
        onMouseEnter={() => handleNavItemEnter(item.label, false, !!item.megaMenu)}
        onMouseLeave={handleNavItemLeave}
        onFocus={() => handleNavItemFocus(item.label, false, !!item.megaMenu)}
      >
        {/* Glassmorphism hover background */}
        <span className="absolute inset-0 rounded-lg bg-white/0 group-hover:bg-white/10 backdrop-blur-sm transition-all duration-300" />

        <span className="relative flex items-center gap-1.5">
          {item.label}
          {item.megaMenu && (
            <svg className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          )}

          {/* Active indicator */}
          {isActive && (
            <motion.span
              className={`absolute -bottom-1 left-0 right-0 h-[2px] ${solid ? 'bg-rose-wax-red' : 'bg-white'}`}
              layoutId="activeNav"
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            />
          )}

          {/* Hover underline */}
          {!isActive && (
            <span
              className={`absolute -bottom-1 left-0 h-[1px] w-0 transition-all duration-200 group-hover:w-full ${
                solid ? "bg-[#121212]/40" : "bg-white/55"
              }`}
            />
          )}
        </span>
      </a>
    );
  };

  const ctaItem = { label: "Book Consultation", href: "/consultation" };

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-rose-wax-red via-rose-wax-red to-transparent origin-left z-[60]"
        style={{ scaleX }}
      />

      <motion.header
        role="banner"
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          backgroundColor: solid ? "rgba(255, 255, 255, 0.95)" : "transparent",
          backdropFilter: solid ? "blur(12px)" : "none",
          borderBottomWidth: "1px",
          borderBottomStyle: "solid",
          borderBottomColor: solid ? "rgba(0, 0, 0, 0.08)" : "transparent",
          boxShadow: solid ? "0 1px 2px 0 rgb(0 0 0 / 0.05)" : "none",
          transition: "all 200ms cubic-bezier(0.4, 0, 0.2, 1)",
        }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        onMouseEnter={handleHeaderMouseEnter}
        onMouseLeave={handleHeaderMouseLeave}
      >
        <div className="mx-auto max-w-[1280px] px-4 sm:px-8 md:px-12 h-[56px] md:h-[72px] grid grid-cols-[1fr_auto_1fr] items-center gap-8">
          {/* LEFT: Nav items */}
          <div className="flex items-center gap-2 justify-start min-w-0">
            {/* Mobile hamburger */}
            <button
              className="md:hidden h-10 w-10 rounded-full hover:bg-black/5 focus:outline-none focus:ring-2 focus:ring-[#7C3AED]/70 flex items-center justify-center text-xl flex-shrink-0 transition-colors"
              aria-label="Open menu"
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              onClick={() => setMobileOpen(true)}
              style={{
                color: (solid || scrollProgress > 0.5) ? "#1C1A18" : "rgba(255, 255, 255, 0.65)",
                transition: "color 200ms cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            {/* Desktop left nav */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-2" aria-label="Primary">
              {navigation.left.map(renderNavItem)}
            </nav>
          </div>

          {/* CENTER: Logo */}
          <div className="flex items-center justify-center flex-shrink-0">
            <a href="/" className="relative block origin-center focus-ring group">
              <span className="relative inline-block">
                <span
                  className="font-serif text-xl sm:text-2xl md:text-3xl font-bold whitespace-nowrap block transition-all duration-200 group-hover:scale-105"
                  style={{
                    letterSpacing: "0.035em",
                    transition: "all 200ms cubic-bezier(0.4, 0, 0.2, 1)",
                    color: (solid || scrollProgress > 0.5) ? "#1C1A18" : "rgba(255, 255, 255, 0.65)",
                  }}
                >
                  Love, Violeta Rose
                </span>
              </span>
            </a>
          </div>

          {/* RIGHT: CTA */}
          <div className="flex items-center gap-1 lg:gap-2 justify-end min-w-0">
            <nav className="hidden md:flex items-center" aria-label="Secondary">
              {navigation.right.map(renderNavItem)}
            </nav>
            <div className="md:hidden w-10 flex-shrink-0" />
          </div>
        </div>
      </motion.header>

      {/* Enhanced Mega Menu */}
      <div className="hidden md:block">
        <AnimatePresence>
          {activeMegaMenu && (
            <motion.div
              className="fixed left-0 right-0 z-40 bg-white/95 backdrop-blur-xl border-b border-black/8 top-[56px] md:top-[72px]"
              style={{
                boxShadow: "0 8px 32px rgba(0,0,0,.08)",
              }}
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              onMouseEnter={handleMegaMenuEnter}
              onMouseLeave={handleNavItemLeave}
            >
              <div className="mx-auto max-w-[1280px] px-8 py-8">
                <div className="grid grid-cols-2 gap-8 md:grid-cols-3 md:gap-16">
                  {[...navigation.left, ...navigation.right]
                    .find((item) => item.label === activeMegaMenu && item.megaMenu)
                    ?.megaMenu?.sections.map((section, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.05, duration: 0.3 }}
                      >
                        <h3 className="mb-5 text-xs font-semibold uppercase tracking-widest text-[#6B5E57] flex items-center gap-2">
                          <span className="w-8 h-[1px] bg-rose-wax-red/30" />
                          {section.title}
                        </h3>
                        <ul className="space-y-4">
                          {section.links.map((link, linkIdx) => (
                            <motion.li
                              key={linkIdx}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.05 + linkIdx * 0.03, duration: 0.3 }}
                            >
                              <a
                                href={link.href}
                                className="group block p-3 -mx-3 rounded-lg transition-all duration-200 hover:bg-warm-sand/30"
                              >
                                <span className="font-serif text-lg font-semibold text-[#121212] block group-hover:text-rose-wax-red transition-colors">
                                  {link.label}
                                </span>
                                {link.subtitle && (
                                  <span className="text-sm text-[#6B5E57] mt-1 block">
                                    {link.subtitle}
                                  </span>
                                )}
                              </a>
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-40 w-12 h-12 rounded-full bg-rose-wax-red text-white shadow-lg hover:shadow-xl hover:scale-110 focus:outline-none focus:ring-2 focus:ring-rose-wax-red/50 transition-all duration-200"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Scroll to top"
          >
            <svg className="w-5 h-5 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Mobile Navigation */}
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
