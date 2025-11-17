"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { trackCTAClick } from "@/lib/analytics";

export default function Contact() {
  return (
    <section id="contact" className="relative bg-gradient-to-b from-white to-warm-sand/30 px-6 py-16 sm:py-20 md:py-24 min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Subtle decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-48 h-48 sm:w-72 sm:h-72 bg-rose-1 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-64 h-64 sm:w-96 sm:h-96 bg-rose-2 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-4xl w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Eyebrow */}
          <p className="text-[10px] sm:text-xs md:text-sm text-espresso/60 uppercase font-medium mb-4 sm:mb-6 tracking-[0.25em]">
            Ready to Begin?
          </p>

          {/* Main heading */}
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-ink mb-6 sm:mb-8 leading-tight">
            Let's Create Something
            <br />
            <span className="text-rose-2">Beautiful Together</span>
          </h2>

          {/* Subheading */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-espresso/80 max-w-3xl mx-auto leading-relaxed mb-10 sm:mb-12 md:mb-16">
            Your love story deserves to be told with heart and artistry. Share your vision with me, and let's craft a film you'll treasure forever.
          </p>

          {/* Single CTA Button */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link
              href="/consultation"
              onClick={() => trackCTAClick('homepage-contact', 'Book Consultation', '/consultation')}
              className="group inline-flex items-center gap-3 sm:gap-4 bg-rose-grad text-white rounded-full px-8 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6 font-semibold uppercase tracking-wider text-sm sm:text-base hover:shadow-[0_12px_32px_rgba(244,105,126,0.5)] focus-ring transition-all duration-300 hover:scale-105"
            >
              <span>Book Consultation</span>
              <svg
                className="h-5 w-5 sm:h-6 sm:w-6 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            className="mt-10 sm:mt-12 md:mt-16 flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 text-xs sm:text-sm text-espresso/60"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="flex items-center justify-center gap-2">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-rose-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Reply within 24 hours</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-rose-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Personalized consultation</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-rose-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>No pressure, just possibilities</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
