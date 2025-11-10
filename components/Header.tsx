"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { navigation } from "@/content/home";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-cream shadow-sm" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="grid grid-cols-3 items-center">
          {/* Left: Navigation */}
          <nav className="flex gap-2">
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`group relative px-4 py-2 text-sm font-medium transition-all duration-300 focus-ring ${
                  isScrolled ? "text-espresso" : "text-white"
                }`}
              >
                {/* D&G-style background highlight on hover */}
                <span className={`absolute inset-0 rounded-md transition-all duration-300 ${
                  isScrolled
                    ? "bg-rose-1/0 group-hover:bg-rose-1/10"
                    : "bg-white/0 group-hover:bg-white/10"
                }`} />

                {/* Text with color transition */}
                <span className={`relative transition-colors duration-300 ${
                  isScrolled
                    ? "group-hover:text-rose-2"
                    : "group-hover:text-white"
                }`}>
                  {item.label}
                </span>

                {/* Subtle bottom border on hover */}
                <span className={`absolute bottom-0 left-1/2 h-[1px] w-0 -translate-x-1/2 transition-all duration-300 group-hover:w-3/4 ${
                  isScrolled ? "bg-rose-2" : "bg-white"
                }`} />
              </a>
            ))}
          </nav>

          {/* Center: Logo */}
          <div className="flex justify-center">
            <a
              href="#"
              className={`group relative px-6 py-2 font-serif text-2xl font-bold tracking-wider transition-all duration-300 focus-ring ${
                isScrolled ? "text-ink" : "text-white"
              }`}
            >
              {/* Subtle glow on hover */}
              <span className={`absolute inset-0 rounded-lg transition-all duration-500 ${
                isScrolled
                  ? "bg-rose-1/0 group-hover:bg-rose-1/5"
                  : "bg-white/0 group-hover:bg-white/5"
              }`} />
              <span className="relative">Love, Violeta Rose</span>
            </a>
          </div>

          {/* Right: CTA */}
          <div className="flex justify-end">
            <a
              href="#contact"
              className={`group relative overflow-hidden rounded-full border px-6 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 focus-ring ${
                isScrolled
                  ? "border-rose-2 text-rose-2 hover:border-transparent hover:text-white"
                  : "border-white/60 text-white hover:border-transparent"
              }`}
            >
              <span className="absolute inset-0 bg-rose-grad opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="relative">Book a Call</span>
            </a>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
