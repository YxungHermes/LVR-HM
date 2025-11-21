"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { usePathname } from "next/navigation";
import { navigation, type NavItem } from "@/content/home";

// Rollover Link Component
interface RolloverLinkProps {
  item: NavItem;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const RolloverLink: React.FC<RolloverLinkProps> = ({ item, onMouseEnter, onMouseLeave }) => {
  const pathname = usePathname();
  const isActive = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);

  return (
    <a
      href={item.href}
      className="relative group h-5 overflow-hidden px-6 block"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:-translate-y-[20px]">
        {/* Idle State */}
        <span className={`
          block h-[20px] flex items-center justify-center
          text-[10px] font-medium tracking-[0.2em] uppercase
          ${isActive ? 'text-rose-wax-red' : 'text-stone-800'}
        `}>
          {item.label}
          {item.megaMenu && (
            <svg className="inline w-2.5 h-2.5 ml-1 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
            </svg>
          )}
        </span>

        {/* Hover State */}
        <span className="
          block h-[20px] flex items-center justify-center
          font-serif text-lg italic text-rose-wax-red whitespace-nowrap
        ">
          {item.label.toLowerCase()}
        </span>
      </div>
    </a>
  );
};

export default function Header({ settled = false, hideCta = false, logoAbove = false }: { settled?: boolean; hideCta?: boolean; logoAbove?: boolean }) {
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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : 'unset';
  }, [mobileOpen]);

  // Scroll detection with throttling to prevent blinking
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const mainContainer = document.querySelector('.overflow-y-auto');
          const scrollY = mainContainer ? mainContainer.scrollTop : window.scrollY;

          setIsScrolled(scrollY > 50 || settled);
          setShowScrollTop(scrollY > 400);
          ticking = false;
        });
        ticking = true;
      }
    };

    // Initial scroll check
    handleScroll();

    // Re-check after brief delay to account for content loading (videos, images, etc.)
    const recheckTimeout = setTimeout(() => {
      handleScroll();
    }, 100);

    const mainContainer = document.querySelector('.overflow-y-auto');
    if (mainContainer) {
      mainContainer.addEventListener("scroll", handleScroll, { passive: true });
    }
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      clearTimeout(recheckTimeout);
      if (mainContainer) {
        mainContainer.removeEventListener("scroll", handleScroll);
      }
      window.removeEventListener("scroll", handleScroll);
    };
  }, [settled]);

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

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-rose-wax-red via-rose-wax-red to-transparent origin-left z-[60]"
        style={{ scaleX }}
      />

      {/* Logo Above Navbar (Optional) - Only visible when not scrolled */}
      {logoAbove && !isScrolled && (
        <motion.div
          className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none"
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
        >
          <a href="/" className="group pointer-events-auto block">
            <span className="font-serif text-2xl md:text-3xl lg:text-4xl text-stone-800 tracking-tight transition-colors group-hover:text-rose-wax-red whitespace-nowrap drop-shadow-sm">
              Love, Violeta Rose<span className="text-rose-wax-red text-3xl md:text-4xl lg:text-5xl">.</span>
            </span>
          </a>
        </motion.div>
      )}

      {/* Desktop/Tablet Navigation Bar with Glass Morphism */}
      <nav className={`hidden lg:flex fixed left-0 right-0 z-50 justify-center px-4 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${logoAbove ? (isScrolled ? 'top-6' : 'top-24') : 'top-6'}`}>
        <div
          className={`
            relative flex items-center justify-between
            backdrop-blur-2xl border transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]
            ${isScrolled
              ? 'w-[85%] max-w-5xl rounded-full py-3 px-8 bg-white/75 border-white/50 shadow-[0_8px_48px_rgba(0,0,0,0.12),0_0_40px_rgba(244,105,126,0.08)]'
              : 'w-[95%] max-w-7xl rounded-3xl py-5 px-10 bg-white/70 border-white/50 shadow-[0_8px_32px_rgba(0,0,0,0.08),0_0_60px_rgba(244,105,126,0.06)]'
            }
          `}
          style={{
            backdropFilter: isScrolled ? 'blur(32px) saturate(180%)' : 'blur(28px) saturate(160%)',
            WebkitBackdropFilter: isScrolled ? 'blur(32px) saturate(180%)' : 'blur(28px) saturate(160%)',
          }}
        >
          {/* Logo - Left Side */}
          {(!logoAbove || isScrolled) && (
            <div className="flex items-center flex-1 min-w-0">
              <a href="/" className="group relative z-10 flex-shrink-0">
                <motion.span
                  className="font-serif text-stone-800 tracking-tight transition-colors group-hover:text-rose-wax-red whitespace-nowrap"
                  initial={false}
                  animate={{
                    fontSize: isScrolled ? 'clamp(1rem, 2.5vw, 1.25rem)' : 'clamp(1.25rem, 3vw, 1.875rem)'
                  }}
                  transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
                >
                  <>Love, Violeta Rose<span className="text-rose-wax-red">.</span></>
                </motion.span>
              </a>
            </div>
          )}

          {/* Desktop Navigation - Full (1280px+) */}
          <div className={`hidden xl:flex items-center justify-center gap-2 ${logoAbove && isScrolled ? '' : logoAbove ? 'flex-1' : 'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'} pointer-events-auto`}>
            {navigation.left.map((item) => (
              <RolloverLink
                key={item.label}
                item={item}
                onMouseEnter={() => handleNavItemEnter(item.label, !!item.megaMenu)}
                onMouseLeave={handleNavItemLeave}
              />
            ))}
            {navigation.right.filter(item => !item.isCta).map((item) => (
              <RolloverLink
                key={item.label}
                item={item}
                onMouseEnter={() => handleNavItemEnter(item.label, !!item.megaMenu)}
                onMouseLeave={handleNavItemLeave}
              />
            ))}
          </div>

          {/* Tablet Navigation - Compact (1024px-1279px) */}
          <div className={`hidden lg:flex xl:hidden items-center justify-center gap-1 ${logoAbove && isScrolled ? '' : logoAbove ? 'flex-1' : 'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'} pointer-events-auto`}>
            {/* Show only key navigation items on tablet */}
            {[...navigation.left, ...navigation.right].filter(item => !item.isCta).slice(0, 3).map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-4 py-1 text-[9px] font-medium tracking-[0.2em] uppercase text-stone-800 hover:text-rose-wax-red transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA - Right Side */}
          <div className={`flex items-center justify-end gap-4 min-w-0 ${logoAbove && isScrolled ? 'flex-1' : logoAbove ? '' : 'flex-1'}`}>
            {!hideCta && (
              <a
                href="/consultation"
                className={`
                  px-6 py-2 rounded-full bg-stone-800 text-white
                  text-[9px] font-bold tracking-[0.25em] uppercase
                  transition-all duration-500 hover:bg-rose-wax-red hover:shadow-lg hover:-translate-y-0.5
                  ${isScrolled ? 'scale-95' : 'scale-100'}
                `}
              >
                Book
              </a>
            )}
          </div>
        </div>
      </nav>

      {/* Mobile Navigation - Centered Logo Pill with Menu Underneath */}
      <div className={`lg:hidden fixed left-0 right-0 z-50 flex flex-col items-center transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${logoAbove ? (isScrolled ? 'top-6' : 'top-24') : 'top-6'}`}>
        {/* Logo Pill - Centered */}
        <motion.div
          className="px-8 py-3 rounded-full bg-white/98 backdrop-blur-2xl border border-white/60 shadow-[0_8px_48px_rgba(0,0,0,0.12),0_0_40px_rgba(244,105,126,0.08)]"
          style={{
            backdropFilter: 'blur(24px) saturate(180%)',
            WebkitBackdropFilter: 'blur(24px) saturate(180%)',
          }}
          initial={false}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
        >
          <a href="/" className="group block">
            <span className="font-serif text-base sm:text-lg text-stone-800 tracking-tight transition-colors group-hover:text-rose-wax-red whitespace-nowrap">
              Love, Violeta Rose<span className="text-rose-wax-red">.</span>
            </span>
          </a>
        </motion.div>

        {/* Menu Button - Centered Below */}
        <motion.button
          onClick={() => setMobileOpen(true)}
          className="mt-4 p-2 rounded-full bg-white/80 backdrop-blur-md border border-white/60 text-stone-800 hover:text-rose-wax-red hover:bg-white/95 transition-all duration-300 shadow-lg touch-target"
          style={{
            backdropFilter: 'blur(16px) saturate(150%)',
            WebkitBackdropFilter: 'blur(16px) saturate(150%)',
          }}
          aria-label="Open menu"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </motion.button>
      </div>

      {/* Mega Menu - Desktop Only - Premium Fluid Design */}
      <div className="hidden xl:block">
        <AnimatePresence>
          {activeMegaMenu && (
            <motion.div
              className={`fixed left-0 right-0 z-40 flex justify-center px-4 transition-all duration-700 ${logoAbove ? (isScrolled ? 'top-[88px]' : 'top-[132px]') : 'top-[88px]'}`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              onMouseEnter={handleMegaMenuEnter}
              onMouseLeave={handleNavItemLeave}
            >
              {/* Fluid Rounded Card Container */}
              <motion.div
                className={`
                  relative w-[95%] max-w-7xl
                  bg-white/65 backdrop-blur-2xl
                  border border-white/35
                  rounded-2xl
                  shadow-[0_12px_48px_rgba(0,0,0,0.15),0_0_40px_rgba(244,105,126,0.08)]
                  overflow-hidden
                `}
                style={{
                  backdropFilter: "blur(56px) saturate(180%)",
                  WebkitBackdropFilter: "blur(56px) saturate(180%)",
                }}
                initial={{ scale: 0.98 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.2 }}
              >
                {/* Subtle Top Gradient Bar for Connection */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-rose-wax-red/20 to-transparent" />

                {/* Radial gradient overlay for text readability */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.15) 40%, transparent 70%)'
                  }}
                />

                {/* Content */}
                <div className="px-10 py-10">
                  <div className="grid grid-cols-2 gap-10 md:grid-cols-3 md:gap-16">
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
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Premium Mobile Menu with Frosted Glass */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-[100]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Frosted Glass Background with Gradient */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-cream via-warm-sand/80 to-cream"
              style={{
                backdropFilter: 'blur(40px) saturate(180%)',
                WebkitBackdropFilter: 'blur(40px) saturate(180%)',
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            />

            {/* Subtle Pattern Overlay */}
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(0,0,0,0.15) 1px, transparent 0)',
                backgroundSize: '32px 32px'
              }}
            />

            {/* Close Button */}
            <motion.button
              onClick={() => setMobileOpen(false)}
              className="absolute top-8 right-8 z-10 p-3 rounded-full bg-white/60 backdrop-blur-md border border-stone-200/50 hover:bg-white/80 hover:border-rose-wax-red/30 transition-all duration-300 shadow-lg hover:shadow-xl group"
              aria-label="Close menu"
              initial={{ opacity: 0, scale: 0.8, rotate: -90 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.8, rotate: 90 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-5 h-5 text-stone-700 group-hover:text-rose-wax-red transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.button>

            {/* Menu Content */}
            <div className="relative h-full flex flex-col items-center justify-center p-8 overflow-y-auto">
              {/* Logo Header */}
              <motion.div
                className="mb-16 text-center"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <span className="font-serif text-3xl md:text-4xl text-stone-800 tracking-tight drop-shadow-sm">
                  Love, Violeta Rose<span className="text-rose-wax-red">.</span>
                </span>
                <motion.div
                  className="w-16 h-px bg-gradient-to-r from-transparent via-rose-wax-red to-transparent mx-auto mt-6"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                />
              </motion.div>

              {/* Navigation Links */}
              <nav className="flex flex-col items-center space-y-8 mb-16">
                {[...navigation.left, ...navigation.right].filter(item => !item.isCta).map((item, idx) => (
                  <motion.a
                    key={idx}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="group text-center relative"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + (idx * 0.08) }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {/* Hover Background Glow */}
                    <div className="absolute inset-0 -m-4 rounded-2xl bg-gradient-to-r from-rose-wax-red/0 via-rose-wax-red/5 to-rose-wax-red/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />

                    <span className="relative block font-serif text-3xl md:text-4xl text-stone-800 group-hover:text-rose-wax-red transition-all duration-300 mb-2 tracking-tight">
                      {item.label}
                    </span>
                    <span className="relative block font-sans text-[10px] tracking-[0.3em] uppercase text-stone-400 group-hover:text-rose-wax-red/70 transition-colors duration-300">
                      {item.href === '/films' ? 'Gallery' :
                       item.href === '/offerings' ? 'Collections' :
                       item.href === '/weddings' ? 'Cultural' :
                       item.href === '/about' ? 'Our Story' :
                       item.href === '/process' ? 'How We Work' : 'Explore'}
                    </span>
                  </motion.a>
                ))}
              </nav>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <a
                  href="/consultation"
                  onClick={() => setMobileOpen(false)}
                  className="group relative inline-flex items-center justify-center px-10 py-4 bg-gradient-to-r from-stone-800 to-stone-900 text-white text-xs font-bold tracking-[0.25em] uppercase rounded-full overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  {/* Shimmer Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                  {/* Rose Glow on Hover */}
                  <div className="absolute inset-0 bg-rose-wax-red opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <span className="relative">Book Consultation</span>
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll to Top */}
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
    </>
  );
}
