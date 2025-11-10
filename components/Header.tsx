"use client";

import { motion } from "framer-motion";
import { navigation } from "@/content/home";

export default function Header() {
  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-transparent"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="grid grid-cols-3 items-center">
          {/* Left: Navigation - D&G style: transparent until hover */}
          <nav className="flex gap-2">
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="group relative px-4 py-2 text-sm font-medium text-espresso transition-all duration-300 focus-ring"
              >
                {/* Background appears only on hover */}
                <span className="absolute inset-0 rounded-md bg-cream opacity-0 shadow-sm transition-all duration-300 group-hover:opacity-100" />

                {/* Text with color transition */}
                <span className="relative transition-colors duration-300 group-hover:text-rose-2">
                  {item.label}
                </span>

                {/* Subtle bottom border on hover */}
                <span className="absolute bottom-0 left-1/2 h-[1px] w-0 -translate-x-1/2 bg-rose-2 transition-all duration-300 group-hover:w-3/4" />
              </a>
            ))}
          </nav>

          {/* Center: Logo */}
          <div className="flex justify-center">
            <a
              href="#"
              className="group relative px-6 py-2 font-serif text-2xl font-bold tracking-wider text-ink transition-all duration-300 focus-ring"
            >
              {/* Subtle background glow on hover */}
              <span className="absolute inset-0 rounded-lg bg-cream opacity-0 shadow-sm transition-all duration-500 group-hover:opacity-100" />
              <span className="relative">Love, Violeta Rose</span>
            </a>
          </div>

          {/* Right: CTA */}
          <div className="flex justify-end">
            <a
              href="#contact"
              className="group relative overflow-hidden rounded-full border border-rose-2 px-6 py-2 text-sm font-medium text-rose-2 transition-all duration-300 hover:scale-105 hover:border-transparent hover:text-white focus-ring"
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
