"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Header settled />
      <main className="bg-cream min-h-screen flex items-center justify-center px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Decorative Element */}
            <div className="mb-8 flex justify-center">
              <div className="relative">
                <div className="text-8xl md:text-9xl font-serif font-bold text-rose-wax-red/10">
                  404
                </div>
                <svg
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-16 w-16 text-rose-wax-red"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
              </div>
            </div>

            {/* Headline */}
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-ink mb-6 tracking-wide">
              Every great story has a missing scene.
            </h1>
            <p className="text-lg md:text-xl text-espresso mb-4 leading-relaxed">
              You just found ours.
            </p>
            <p className="text-base text-espresso/70 mb-12 max-w-xl mx-auto">
              This page doesn't exist, but your love story does. Let's get you back to where the magic happens.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/"
                className="group inline-flex items-center bg-rose-wax-red text-white px-8 py-4 rounded-full font-medium text-lg transition-all hover:bg-rose-wax-red/90 hover:scale-105 hover:shadow-lg focus-ring"
              >
                <svg
                  className="mr-3 h-5 w-5 transition-transform group-hover:-translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                Return Home
              </Link>

              <Link
                href="/consultation"
                className="inline-flex items-center bg-white border-2 border-rose-wax-red text-rose-wax-red px-8 py-4 rounded-full font-medium text-lg transition-all hover:bg-rose-wax-red hover:text-white hover:scale-105 focus-ring"
              >
                Book a Consultation
                <svg
                  className="ml-3 h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </Link>
            </div>

            {/* Helpful Links */}
            <div className="mt-16 pt-8 border-t border-coffee/10">
              <p className="text-sm text-espresso/60 mb-4">Or explore these pages:</p>
              <div className="flex flex-wrap gap-4 justify-center text-sm">
                <Link
                  href="/pricing"
                  className="text-espresso hover:text-rose-wax-red transition-colors underline underline-offset-4"
                >
                  View Pricing
                </Link>
                <span className="text-coffee/30">•</span>
                <Link
                  href="/#signature-work"
                  className="text-espresso hover:text-rose-wax-red transition-colors underline underline-offset-4"
                >
                  Watch Films
                </Link>
                <span className="text-coffee/30">•</span>
                <Link
                  href="/#contact"
                  className="text-espresso hover:text-rose-wax-red transition-colors underline underline-offset-4"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
