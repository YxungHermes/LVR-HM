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
  const [isLargeScreen, setIsLargeScreen] = useState(true);
  const closeTimeoutRef = useRef<NodeJS.Timeout>();
  const openTimeoutRef = useRef<NodeJS.Timeout>();

  // Detect screen size for responsive logo positioning
  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1536); // 2xl breakpoint
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Determine if logo should be above based on screen size or prop
  const shouldLogoBeAbove = logoAbove || (!isLargeScreen && !logoAbove);

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

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      const mainContainer = document.querySelector('.overflow-y-auto');
      const scrollY = mainContainer ? mainContainer.scrollTop : window.scrollY;

      setIsScrolled(scrollY > 50 || settled);
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

      {/* Logo Above Navbar (Optional) */}
      {shouldLogoBeAbove && (
        <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
          <motion.div
            className="transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
            animate={{
              scale: isScrolled ? 0.75 : 1,
              y: isScrolled ? -8 : 0,
              opacity: isScrolled ? 0.85 : 1
            }}
          >
            <a href="/" className="group pointer-events-auto block">
              <span className="font-serif text-2xl md:text-3xl lg:text-4xl text-stone-800 tracking-tight transition-colors group-hover:text-rose-wax-red whitespace-nowrap drop-shadow-sm">
                Love, Violeta Rose<span className="text-rose-wax-red text-3xl md:text-4xl lg:text-5xl">.</span>
              </span>
            </a>
          </motion.div>
        </div>
      )}

      {/* Main Navigation Bar with Glass Morphism */}
      <nav className={`fixed left-0 right-0 z-50 flex justify-center px-4 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${shouldLogoBeAbove ? (isScrolled ? 'top-16' : 'top-24') : 'top-6'}`}>
        <div
          className={`
            relative flex items-center justify-between
            backdrop-blur-2xl border transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]
            ${isScrolled
              ? 'w-[85%] max-w-5xl rounded-full py-3 px-8 bg-white/85 border-white/60 shadow-[0_8px_48px_rgba(0,0,0,0.12),0_0_40px_rgba(244,105,126,0.08)]'
              : 'w-[95%] max-w-7xl rounded-2xl py-5 px-10 bg-white/80 border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.08),0_0_60px_rgba(244,105,126,0.06)]'
            }
          `}
          style={{
            backdropFilter: isScrolled ? 'blur(24px) saturate(180%)' : 'blur(20px) saturate(150%)',
            WebkitBackdropFilter: isScrolled ? 'blur(24px) saturate(180%)' : 'blur(20px) saturate(150%)',
          }}
        >
          {/* Logo - Left Side (Only if not above) */}
          {!shouldLogoBeAbove && (
            <div className="flex items-center flex-1 min-w-0">
              <a href="/" className="group relative z-10 flex-shrink-0">
                <span className={`font-serif text-stone-800 tracking-tight transition-all duration-700 group-hover:text-rose-wax-red whitespace-nowrap ${isScrolled ? 'text-lg md:text-xl' : 'text-xl md:text-2xl lg:text-3xl'}`}>
                  Love, Violeta Rose<span className="text-rose-wax-red">.</span>
                </span>
              </a>
            </div>
          )}

          {/* Desktop Navigation - Centered */}
          <div className={`hidden lg:flex items-center justify-center gap-2 ${shouldLogoBeAbove ? 'flex-1' : 'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'} pointer-events-auto`}>
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

          {/* CTA & Mobile Toggle - Right Side */}
          <div className={`flex items-center justify-end gap-4 min-w-0 ${shouldLogoBeAbove ? '' : 'flex-1'}`}>
            {!hideCta && (
              <a
                href="/consultation"
                className={`
                  hidden md:block px-6 py-2 rounded-full bg-stone-800 text-white
                  text-[9px] font-bold tracking-[0.25em] uppercase
                  transition-all duration-500 hover:bg-rose-wax-red hover:shadow-lg hover:-translate-y-0.5
                  ${isScrolled ? 'scale-95' : 'scale-100'}
                `}
              >
                Book
              </a>
            )}

            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden p-2 text-stone-800 hover:text-rose-wax-red transition-colors flex-shrink-0"
              aria-label="Open menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mega Menu */}
      <div className="hidden lg:block">
        <AnimatePresence>
          {activeMegaMenu && (
            <motion.div
              className={`fixed left-0 right-0 z-40 bg-white/80 backdrop-blur-2xl border-b border-white/40 transition-all duration-700 ${shouldLogoBeAbove ? (isScrolled ? 'top-[88px]' : 'top-[120px]') : 'top-[100px]'}`}
              style={{
                boxShadow: "0 8px 48px rgba(0,0,0,.12), 0 0 40px rgba(244,105,126,0.06)",
                backdropFilter: "blur(24px) saturate(180%)",
                WebkitBackdropFilter: "blur(24px) saturate(180%)",
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

      {/* Mobile Menu */}
      <div
        className={`
          fixed inset-0 z-[100] bg-white transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]
          ${mobileOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}
        `}
      >
        <button
          onClick={() => setMobileOpen(false)}
          className="absolute top-8 right-8 p-2 rounded-full border border-gray-100 hover:border-stone-800 transition-colors duration-300"
          aria-label="Close menu"
        >
          <svg className="w-6 h-6 text-stone-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="h-full flex flex-col items-center justify-center p-8 overflow-y-auto">
          <div className="mb-12 text-center">
            <span className="font-serif text-2xl md:text-3xl text-stone-800 tracking-tight">Love, Violeta Rose</span>
            <div className="w-12 h-px bg-rose-wax-red mx-auto mt-4"></div>
          </div>

          <nav className="flex flex-col items-center space-y-6">
            {[...navigation.left, ...navigation.right].filter(item => !item.isCta).map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`
                  group text-center transition-all duration-700 ease-out
                  ${mobileOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
                `}
                style={{ transitionDelay: `${150 + (idx * 100)}ms` }}
              >
                <span className="block font-serif text-3xl md:text-4xl text-stone-800 group-hover:text-rose-wax-red transition-colors duration-300 mb-1">
                  {item.label}
                </span>
                <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-gray-400 group-hover:text-rose-wax-red transition-colors duration-300">
                  {item.href === '/films' ? 'Gallery' :
                   item.href === '/offerings' ? 'Collections' :
                   item.href === '/weddings' ? 'Cultural' :
                   item.href === '/about' ? 'Our Story' :
                   item.href === '/process' ? 'How We Work' : 'Explore'}
                </span>
              </a>
            ))}
          </nav>

          <div className={`
            mt-12 transition-all duration-1000 delay-500
            ${mobileOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
          `}>
            <a
              href="/consultation"
              onClick={() => setMobileOpen(false)}
              className="block px-10 py-4 bg-stone-800 text-white text-xs font-bold tracking-[0.25em] uppercase hover:bg-rose-wax-red transition-colors rounded-full text-center"
            >
              Book Consultation
            </a>
          </div>
        </div>
      </div>

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
