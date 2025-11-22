"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { navigation, socialLinks } from "@/content/home";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [subscribeMessage, setSubscribeMessage] = useState<{ text: string; type: "success" | "error" } | null>(null);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubscribing(true);

    // Simulate API call - replace with actual newsletter service
    setTimeout(() => {
      setSubscribeMessage({ text: "Thanks for subscribing!", type: "success" });
      setEmail("");
      setIsSubscribing(false);
      setTimeout(() => setSubscribeMessage(null), 5000);
    }, 1000);
  };

  return (
    <footer className="relative bg-gradient-to-b from-cream via-warm-sand/20 to-warm-sand/40 overflow-hidden">
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
           style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' /%3E%3C/svg%3E")' }}
      />

      <div className="relative">
        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="border-b border-coffee/10 px-6 py-16 md:py-20"
        >
          <div className="mx-auto max-w-2xl text-center">
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-ink mb-4">
              Stay Inspired
            </h3>
            <p className="text-espresso/70 mb-8">
              Get our free wedding planning guide, plus tips and stories delivered to your inbox.
            </p>

            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="flex-1 px-6 py-4 rounded-full border border-coffee/20 focus:ring-2 focus:ring-rose-wax-red/20 focus:border-rose-wax-red transition-colors bg-white"
              />
              <button
                type="submit"
                disabled={isSubscribing}
                className="px-8 py-4 bg-rose-wax-red text-white rounded-full font-semibold hover:bg-rose-wax-red/90 transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
              >
                {isSubscribing ? "Subscribing..." : "Subscribe"}
              </button>
            </form>

            {subscribeMessage && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mt-4 text-sm ${
                  subscribeMessage.type === "success" ? "text-green-600" : "text-red-600"
                }`}
              >
                {subscribeMessage.text}
              </motion.p>
            )}
          </div>
        </motion.div>

        {/* Main Footer Content */}
        <div className="px-6 py-16 md:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
              {/* Brand Column with Photo */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="lg:col-span-2"
              >
                {/* Photo and Logo */}
                <div className="flex items-center gap-4 mb-6">
                  {/* Circular Photo - Clickable to About */}
                  <a href="/about" className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-rose-wax-red/30 shadow-lg group hover:border-rose-wax-red transition-all duration-300 hover:shadow-xl focus-ring flex-shrink-0">
                    <Image
                      src="/media/michael-andrade.jpg"
                      alt="Michael Andrade"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      style={{
                        objectPosition: '50% 15%' // More focused on face
                      }}
                      sizes="64px"
                    />
                  </a>

                  {/* Logo */}
                  <a href="/" className="inline-block group focus-ring rounded">
                    <h3 className="font-serif text-2xl md:text-3xl font-bold text-ink group-hover:text-rose-wax-red transition-colors">
                      Love, Violeta Rose
                    </h3>
                  </a>
                </div>

                <p className="text-espresso/80 mb-6 max-w-md leading-relaxed">
                  Cinematic wedding & couples films crafted with heart. We capture the authentic moments, raw emotions, and timeless love stories that you'll treasure forever.
                </p>

                <p className="text-sm text-coffee mb-6 flex items-center gap-2">
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Based in New York City • Traveling Worldwide
                </p>

                {/* Contact Button */}
                <div>
                  <a
                    href="mailto:contact@michael-andrade.com"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white border-2 border-coffee/20 rounded-full text-ink font-medium hover:border-rose-wax-red hover:text-rose-wax-red transition-all hover:scale-105 focus-ring text-sm"
                  >
                    <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="hidden sm:inline">contact@michael-andrade.com</span>
                    <span className="sm:hidden">Email Us</span>
                  </a>
                </div>
              </motion.div>

              {/* Navigation Column */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h4 className="mb-6 text-sm font-bold uppercase tracking-wider text-coffee">
                  Explore
                </h4>
                <nav className="space-y-3">
                  {[...navigation.left, ...navigation.right].filter(item => !item.isCta).map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="block text-espresso hover:text-rose-wax-red transition-colors focus-ring rounded group"
                    >
                      <span className="inline-flex items-center gap-2">
                        {item.label}
                        <svg className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </a>
                  ))}
                </nav>
              </motion.div>

              {/* Resources Column */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 }}
              >
                <h4 className="mb-6 text-sm font-bold uppercase tracking-wider text-coffee">
                  Resources
                </h4>
                <nav className="space-y-3">
                  <a
                    href="/journal"
                    className="block text-espresso hover:text-rose-wax-red transition-colors focus-ring rounded group"
                  >
                    <span className="inline-flex items-center gap-2">
                      Journal
                      <svg className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </a>
                  <a
                    href="/faq"
                    className="block text-espresso hover:text-rose-wax-red transition-colors focus-ring rounded group"
                  >
                    <span className="inline-flex items-center gap-2">
                      FAQ
                      <svg className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </a>
                  <a
                    href="/films"
                    className="block text-espresso hover:text-rose-wax-red transition-colors focus-ring rounded group"
                  >
                    <span className="inline-flex items-center gap-2">
                      Portfolio
                      <svg className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </a>
                  <a
                    href="/offerings"
                    className="block text-espresso hover:text-rose-wax-red transition-colors focus-ring rounded group"
                  >
                    <span className="inline-flex items-center gap-2">
                      Pricing
                      <svg className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </a>
                </nav>
              </motion.div>

              {/* Social Column */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h4 className="mb-6 text-sm font-bold uppercase tracking-wider text-coffee">
                  Connect
                </h4>
                <div className="space-y-4 mb-8">
                  {socialLinks.map((link) => (
                    <a
                      key={link.platform}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-espresso hover:text-rose-wax-red transition-all group focus-ring rounded"
                    >
                      <div className="w-10 h-10 rounded-full bg-white border border-coffee/20 flex items-center justify-center group-hover:border-rose-wax-red group-hover:scale-110 transition-all flex-shrink-0">
                        {link.platform === "Instagram" && (
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                          </svg>
                        )}
                        {link.platform === "Vimeo" && (
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M23.977 6.416c-.105 2.338-1.739 5.543-4.894 9.609-3.268 4.247-6.026 6.37-8.29 6.37-1.409 0-2.578-1.294-3.553-3.881L5.322 11.4C4.603 8.816 3.834 7.522 3.01 7.522c-.179 0-.806.378-1.881 1.132L0 7.197c1.185-1.044 2.351-2.084 3.501-3.128C5.08 2.701 6.266 1.984 7.055 1.91c1.867-.18 3.016 1.1 3.447 3.838.465 2.953.789 4.789.971 5.507.539 2.45 1.131 3.674 1.776 3.674.502 0 1.256-.796 2.265-2.385 1.004-1.589 1.54-2.797 1.612-3.628.144-1.371-.395-2.061-1.614-2.061-.574 0-1.167.121-1.777.391 1.186-3.868 3.434-5.757 6.762-5.637 2.473.06 3.628 1.664 3.493 4.797l-.013.01z"/>
                          </svg>
                        )}
                      </div>
                      <span className="font-medium">{link.label}</span>
                    </a>
                  ))}
                </div>

                {/* CTA Button */}
                <a
                  href="/consultation"
                  className="block text-center px-6 py-4 bg-rose-wax-red text-white rounded-full font-semibold hover:bg-rose-wax-red/90 transition-all hover:scale-105 shadow-lg hover:shadow-xl focus-ring"
                >
                  Let's Talk
                </a>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-coffee/10 px-6 py-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-sm text-espresso/60 text-center md:text-left">
                © {new Date().getFullYear()} Love, Violeta Rose. All rights reserved.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-espresso/60">
                <a href="/privacy" className="hover:text-rose-wax-red transition-colors focus-ring rounded">
                  Privacy Policy
                </a>
                <span className="text-coffee/30">•</span>
                <a href="/terms" className="hover:text-rose-wax-red transition-colors focus-ring rounded">
                  Terms of Service
                </a>
                <span className="text-coffee/30">•</span>
                <a href="/sitemap.xml" className="hover:text-rose-wax-red transition-colors focus-ring rounded">
                  Sitemap
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating Let's Talk Button */}
      <a
        href="/consultation"
        className="fixed bottom-8 right-8 bg-rose-wax-red text-white rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-out focus-ring z-50 flex items-center gap-3 px-6 py-4 group font-semibold"
        aria-label="Let's talk about your wedding"
      >
        <svg className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
        <span className="text-sm uppercase tracking-wider">Let's Talk</span>
      </a>
    </footer>
  );
}
