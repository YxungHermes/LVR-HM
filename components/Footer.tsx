"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { navigation, socialLinks } from "@/content/home";

export default function Footer() {
  return (
    <footer className="border-t border-coffee/20 bg-cream px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Left: Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <a href="/" className="inline-block group focus-ring rounded">
              <h3 className="relative inline-block">
                <span className="font-serif text-2xl font-bold tracking-wider text-ink group-hover:text-rose-wax-red transition-colors block">
                  Love, Violeta Rose
                </span>
              </h3>
            </a>
            <p className="mt-6 text-sm text-espresso">
              Cinematic wedding & couples films crafted with heart.
            </p>
            {/* Violeta's photo */}
            <div className="mt-6 h-16 w-16 rounded-full border-2 border-coffee/20 bg-white overflow-hidden relative">
              <Image
                src="/media/violeta-rose.jpg"
                alt="Violeta Rose"
                fill
                className="object-cover"
                style={{ objectPosition: "center 30%" }}
                sizes="64px"
              />
            </div>
          </motion.div>

          {/* Center: Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-coffee">
              Navigate
            </h4>
            <nav className="space-y-2">
              {[...navigation.left, ...navigation.right].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block text-sm text-espresso transition-colors hover:text-rose-2 focus-ring"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </motion.div>

          {/* Right: Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-coffee">
              Connect
            </h4>
            <div className="space-y-2">
              {socialLinks.map((link) => (
                <a
                  key={link.platform}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm text-espresso transition-colors hover:text-rose-2 focus-ring"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          className="mt-12 border-t border-coffee/20 pt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-xs text-espresso/60">
            © {new Date().getFullYear()} Love, Violeta Rose. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
