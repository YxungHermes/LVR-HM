"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { usePathname } from "next/navigation";
import { navigation, type NavItem } from "@/content/home";

// --- Desktop Nav Link Component with 3D Effects ---
interface NavLinkProps {
  item: NavItem;
  isScrolled: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onFocus?: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ item, isScrolled, onMouseEnter, onMouseLeave, onFocus }) => {
  const pathname = usePathname();
  const isActive = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);

  return (
    <a
      href={item.href}
      className="relative group px-4 py-2 block transition-all duration-300"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onFocus={onFocus}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {/* Text Layer */}
      <span className={`relative z-10 text-[10px] font-bold tracking-[0.2em] uppercase transition-colors duration-300 block ${
        isActive ? 'text-rose-wax-red' : isScrolled ? 'text-stone-600 group-hover:text-rose-wax-red' : 'text-white/80 group-hover:text-white'
      }`}>
        {item.label}
        {item.megaMenu && (
          <svg className="inline w-2.5 h-2.5 ml-1 opacity-50 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
          </svg>
        )}
      </span>

      {/* Hover Glow Effect */}
      <span className="absolute inset-0 bg-white/50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md -z-10 scale-110" />

      {/* Active indicator */}
      {isActive && (
        <motion.span
          className="absolute bottom-0 left-1/2 w-1/2 -translate-x-1/2 h-[2px] bg-rose-wax-red"
          layoutId="activeIndicator"
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        />
      )}

      {/* Hover Border Line */}
      {!isActive && (
        <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-rose-wax-red/50 transition-all duration-300 group-hover:w-1/2 group-hover:-translate-x-1/2" />
      )}
    </a>
  );
};

export default function Header3D({ settled = false, hideCta = false }: { settled?: boolean; hideCta?: boolean }) {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(settled);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
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

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : 'unset';
  }, [mobileOpen]);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      const mainContainer = document.querySelector('.overflow-y-auto');
      const scrollY = mainContainer ? mainContainer.scrollTop : window.scrollY;

      setIsScrolled(scrollY > 20 || settled);
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
  }, [settled]);

  // 3D Pill Style with perspective and scale
  const navStyle = {
    transform: `perspective(1000px) scale(${isScrolled ? 0.95 : 1})`,
    transition: 'transform 0.5s ease-in-out, width 0.5s ease-in-out',
  };

  const handleNavItemEnter = (label: string, hasMegaMenu?: boolean) => {
    if (!hasMegaMenu) return;

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

  const scrollToTop = () => {
    const mainContainer = document.querySelector('.overflow-y-auto');
    if (mainContainer) {
      mainContainer.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const renderNavItem = (item: NavItem) => {
    if (item.isCta && hideCta) return null;

    // CTA button
    if (item.isCta) {
      return (
        <a
          key={item.label}
          href={item.href}
          className={`px-6 py-2.5 bg-stone-800 text-white text-[9px] font-bold uppercase tracking-[0.2em] rounded-full hover:bg-rose-wax-red transition-all duration-300 shadow-lg hover:shadow-rose-wax-red/30 transform hover:-translate-y-0.5 hover:scale-105 ${
            isScrolled ? '' : 'bg-white/10 backdrop-blur-sm'
          }`}
        >
          {item.label}
        </a>
      );
    }

    return (
      <NavLink
        key={item.label}
        item={item}
        isScrolled={isScrolled}
        onMouseEnter={() => handleNavItemEnter(item.label, !!item.megaMenu)}
        onMouseLeave={handleNavItemLeave}
        onFocus={() => handleNavItemEnter(item.label, !!item.megaMenu)}
      />
    );
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-rose-wax-red via-rose-wax-red to-transparent origin-left z-[60]"
        style={{ scaleX }}
      />

      {/* Fixed Container for 3D Pill */}
      <div className="fixed top-6 left-0 w-full z-50 flex justify-center pointer-events-none px-4">

        {/* 3D Glass Pill */}
        <div
          className={`
            pointer-events-auto
            relative transition-all duration-500 ease-out
            ${isScrolled ? 'w-[90%] md:w-[800px]' : 'w-[95%] md:w-[1000px]'}
          `}
          style={navStyle}
        >
          {/* Glass Material Background */}
          <div className={`
            absolute inset-0 rounded-full shadow-2xl border transition-all duration-500
            ${isScrolled
              ? 'bg-white/90 backdrop-blur-xl border-white/40'
              : 'bg-white/20 backdrop-blur-md border-white/30'
            }
          `} />

          {/* Inner Shadow/Highlight for depth */}
          <div className="absolute inset-0 rounded-full ring-1 ring-white/50 shadow-[inset_0_0_20px_rgba(255,255,255,0.5)]" />

          {/* Content Container */}
          <div className="relative z-10 flex items-center justify-between px-6 md:px-8 py-3.5 transform-style-3d">

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileOpen(true)}
              className={`md:hidden p-2 transition-colors ${
                isScrolled ? 'text-stone-800 hover:text-rose-wax-red' : 'text-white hover:text-white/80'
              }`}
              aria-label="Open menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            {/* Left Links (Desktop) */}
            <div className="hidden md:flex items-center gap-1">
              {navigation.left.map(renderNavItem)}
            </div>

            {/* Center Brand */}
            <a
              href="/"
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 group"
            >
              <div className="flex flex-col items-center transition-transform duration-300 group-hover:scale-110">
                <span className={`font-serif text-2xl md:text-3xl font-bold whitespace-nowrap transition-colors duration-300 ${
                  isScrolled ? 'text-stone-800' : 'text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]'
                }`}>
                  Love, Violeta Rose
                </span>
              </div>
            </a>

            {/* Right Links (Desktop) */}
            <div className="hidden md:flex items-center gap-2">
              {navigation.right.map(renderNavItem)}
            </div>

            {/* Mobile CTA */}
            <a
              href="/consultation"
              className={`md:hidden text-[9px] font-bold uppercase tracking-widest transition-colors ${
                isScrolled ? 'text-stone-800 border-b border-stone-800' : 'text-white border-b border-white'
              }`}
            >
              Book
            </a>
          </div>
        </div>
      </div>

      {/* Enhanced Mega Menu */}
      <div className="hidden md:block">
        <AnimatePresence>
          {activeMegaMenu && (
            <motion.div
              className="fixed left-0 right-0 z-40 bg-white/95 backdrop-blur-xl border-b border-black/8 top-[88px]"
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

      {/* 3D Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[60] perspective-2000 pointer-events-none flex items-center justify-center
          ${mobileOpen ? 'pointer-events-auto' : ''}
        `}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-stone-900/30 backdrop-blur-sm transition-opacity duration-500
          ${mobileOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setMobileOpen(false)}
        />

        {/* 3D Card Container */}
        <div className={`
          relative w-[90%] max-w-md bg-cream p-1 shadow-2xl
          transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]
          ${mobileOpen ? 'opacity-100 scale-100 rotate-y-0 translate-y-0' : 'opacity-0 scale-95 rotate-y-90 translate-y-20'}
        `}
        style={{ transformStyle: 'preserve-3d' }}
        >
          <div className="border border-stone-300 h-full p-8 flex flex-col items-center bg-white relative overflow-hidden">

            {/* Subtle pattern overlay */}
            <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none"></div>

            {/* Close button */}
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute top-4 right-4 p-2 text-stone-400 hover:text-stone-800 hover:rotate-90 transition-all duration-300"
              aria-label="Close menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Menu header */}
            <div className="text-center mb-10 mt-4 transform transition-all duration-700 delay-100">
              <h2 className="font-serif text-5xl text-stone-800 mb-2">Menu</h2>
              <div className="w-12 h-[1px] bg-rose-wax-red mx-auto"></div>
            </div>

            {/* Navigation links */}
            <nav className="flex flex-col gap-4 w-full">
              {[...navigation.left, ...navigation.right].filter(item => !item.isCta).map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="group relative overflow-hidden p-4 bg-stone-50 hover:bg-white border border-stone-100 hover:border-rose-wax-red/30 shadow-sm hover:shadow-md transition-all duration-500 flex items-center justify-between"
                  style={{
                    animation: mobileOpen ? `fadeInUp 0.5s ease-out backwards ${index * 0.1 + 0.2}s` : 'none'
                  }}
                >
                  <span className="font-serif text-xl text-stone-600 group-hover:text-stone-900 italic">{item.label}</span>
                  <span className="text-rose-wax-red opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </a>
              ))}

              {/* Mobile CTA */}
              <a
                href="/consultation"
                onClick={() => setMobileOpen(false)}
                className="mt-6 w-full py-4 bg-stone-800 text-white font-bold tracking-widest uppercase text-xs hover:bg-rose-wax-red transition-colors duration-300 shadow-lg text-center"
                style={{
                  animation: mobileOpen ? `fadeInUp 0.5s ease-out backwards ${(navigation.left.length + navigation.right.length - 1) * 0.1 + 0.2}s` : 'none'
                }}
              >
                Book Consultation
              </a>
            </nav>

            {/* Footer branding */}
            <div className="mt-10 text-center">
              <p className="font-serif text-2xl text-stone-300">Love, Violeta Rose</p>
            </div>
          </div>
        </div>
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

      {/* Animation keyframes */}
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes rotate-y-0 {
          from { transform: rotateY(90deg); }
          to { transform: rotateY(0deg); }
        }

        .rotate-y-0 {
          transform: rotateY(0deg);
        }

        .rotate-y-90 {
          transform: rotateY(90deg);
        }

        .perspective-2000 {
          perspective: 2000px;
        }

        .transform-style-3d {
          transform-style: preserve-3d;
        }
      `}</style>
    </>
  );
}
