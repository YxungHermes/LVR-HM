"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { packages } from "@/content/home";

function PackageCard({ pkg, index }: { pkg: typeof packages[0]; index: number }) {
  const [showPrice, setShowPrice] = useState(false);

  return (
    <motion.div
      className="group relative overflow-hidden rounded-lg border border-coffee/20 bg-white p-8 transition-all duration-300 hover:shadow-xl"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setShowPrice(true)}
      onMouseLeave={() => setShowPrice(false)}
    >
      {pkg.popular && (
        <div className="bg-rose-grad absolute right-4 top-4 rounded-full px-3 py-1 text-xs font-medium text-white">
          Most Popular
        </div>
      )}

      <div className="mb-4">
        <h3 className="font-serif text-3xl font-bold tracking-wide text-ink">
          {pkg.name}
        </h3>
        <p className="mt-1 text-sm font-medium text-rose-2">{pkg.hours}</p>
      </div>

      <p className="mb-6 text-sm text-espresso">{pkg.description}</p>

      {/* Price reveal on hover */}
      <div className="mb-6 h-12 overflow-hidden">
        <AnimatePresence mode="wait">
          {showPrice ? (
            <motion.div
              key="price"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="font-serif text-4xl font-bold text-ink"
            >
              {pkg.price}
            </motion.div>
          ) : (
            <motion.div
              key="placeholder"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="text-sm text-espresso/60"
            >
              Hover to see pricing
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <ul className="mb-8 space-y-3">
        {pkg.features.map((feature, i) => (
          <li key={i} className="flex items-start text-sm text-espresso">
            <svg
              className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-rose-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            {feature}
          </li>
        ))}
      </ul>

      <a
        href="#contact"
        className={`block w-full rounded-full border-2 px-6 py-3 text-center text-sm font-medium transition-all duration-300 focus-ring ${
          pkg.popular
            ? "bg-rose-grad border-transparent text-white hover:scale-105 hover:shadow-lg"
            : "border-rose-2 text-rose-2 hover:bg-rose-grad hover:border-transparent hover:text-white"
        }`}
      >
        Begin Your Journey
      </a>
    </motion.div>
  );
}

export default function Packages() {
  const [showModal, setShowModal] = useState(false);

  return (
    <section id="packages" className="bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="heading-lg font-serif tracking-wider">
            Packages
          </h2>
          <p className="subhead mx-auto mt-4 max-w-2xl text-espresso">
            Thoughtfully designed to fit every celebration, from intimate to grand.
          </p>
          <button
            onClick={() => setShowModal(true)}
            className="mt-6 text-sm font-medium text-rose-2 underline-offset-4 hover:underline focus-ring"
          >
            See everything included →
          </button>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {packages.map((pkg, index) => (
            <PackageCard key={pkg.name} pkg={pkg} index={index} />
          ))}
        </div>
      </div>

      {/* Modal (simple implementation) */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowModal(false)}
          >
            <motion.div
              className="max-h-[80vh] w-full max-w-4xl overflow-auto rounded-lg bg-white p-8"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mb-6 flex items-start justify-between">
                <h3 className="font-serif text-3xl font-bold text-ink">
                  Package Comparison
                </h3>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-espresso/60 hover:text-espresso focus-ring"
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                {packages.map((pkg) => (
                  <div key={pkg.name} className="border-t border-coffee/20 pt-4">
                    <h4 className="font-serif text-xl font-bold text-ink">
                      {pkg.name} — {pkg.price}
                    </h4>
                    <ul className="mt-4 space-y-2">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="text-sm text-espresso">
                          • {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
