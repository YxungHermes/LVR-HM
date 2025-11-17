"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { trackCTAClick } from "@/lib/analytics";

export default function Contact() {
  return (
    <section id="contact" className="bg-white px-6 h-screen flex flex-col justify-center overflow-hidden">
      <div className="mx-auto max-w-4xl w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Main headline */}
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-ink mb-6 tracking-tight">
            Let's Create Something Beautiful
          </h2>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-espresso max-w-2xl mx-auto mb-12 leading-relaxed">
            Tell me about your love story. I reply within 24 hours.
          </p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link
              href="/consultation"
              onClick={() => trackCTAClick('homepage-cta', 'Book Consultation', '/consultation')}
              className="group inline-flex items-center gap-3 bg-white text-ink rounded-full px-10 py-5 font-semibold uppercase tracking-wider text-sm border-2 border-ink hover:bg-ink hover:text-white hover:shadow-[0_8px_24px_rgba(0,0,0,0.2)] focus-ring"
              style={{
                transition: "all 400ms cubic-bezier(0.22, 1, 0.36, 1)"
              }}
            >
              <span>Book Consultation</span>
              <svg
                className="w-5 h-5 transition-transform group-hover:translate-x-1"
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
        </motion.div>
      </div>
    </section>
  );
}
