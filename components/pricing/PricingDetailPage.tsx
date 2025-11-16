"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface PricingDetailPageProps {
  title: string;
  heroImage: string;
  vimeoId?: string;
  introHeading: string;
  introBody: string;
  startingFrom: string;
  rangeNote: string;
  idealFor: string[];
  includes: string[];
  addOnsNote: string;
  ctaLabel: string;
  ctaHref: string;
}

export default function PricingDetailPage({
  title,
  heroImage,
  vimeoId,
  introHeading,
  introBody,
  startingFrom,
  rangeNote,
  idealFor,
  includes,
  addOnsNote,
  ctaLabel,
  ctaHref,
}: PricingDetailPageProps) {
  return (
    <>
      <Header settled />
      <main className="bg-cream">
        {/* Breadcrumb */}
        <section className="px-6 pt-24 pb-8">
          <div className="mx-auto max-w-6xl">
            <Link
              href="/offerings"
              className="inline-flex items-center text-sm text-espresso/60 hover:text-rose-wax-red transition-colors"
            >
              <svg
                className="mr-2 h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to all collections
            </Link>
          </div>
        </section>

        {/* Hero Image/Video */}
        <section className="px-6 pb-12">
          <div className="mx-auto max-w-6xl">
            <motion.div
              className="relative w-full aspect-[21/9] overflow-hidden rounded-lg bg-black"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              {vimeoId ? (
                <iframe
                  src={`https://player.vimeo.com/video/${vimeoId}?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1`}
                  className="absolute inset-0 w-full h-full"
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  title={title}
                />
              ) : (
                <>
                  <Image
                    src={heroImage}
                    alt={title}
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 1536px) 100vw, 1536px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                </>
              )}
            </motion.div>
          </div>
        </section>

        {/* Hero Content */}
        <section className="px-6 pb-16">
          <div className="mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-baseline justify-between mb-6">
                <h1 className="font-serif text-4xl md:text-5xl font-bold text-ink tracking-wide">
                  {title}
                </h1>
              </div>

              <div className="bg-white border border-coffee/10 rounded-lg p-6 mb-8 inline-block">
                <p className="text-sm font-medium text-coffee uppercase tracking-wider mb-2">
                  Starting from
                </p>
                <p className="font-serif text-4xl font-bold text-rose-wax-red">
                  {startingFrom}
                </p>
              </div>

              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-ink mb-4 italic">
                {introHeading}
              </h2>
              <p className="text-lg text-espresso leading-relaxed">
                {introBody}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Details Grid */}
        <section className="px-6 pb-16">
          <div className="mx-auto max-w-4xl grid gap-8 md:grid-cols-2">
            {/* Ideal For */}
            <motion.div
              className="bg-white border border-coffee/10 rounded-lg p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="font-serif text-xl font-bold text-ink mb-4">
                Ideal for
              </h3>
              <ul className="space-y-3">
                {idealFor.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className="h-5 w-5 text-rose-wax-red mr-3 mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-base text-espresso">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* What's Included */}
            <motion.div
              className="bg-white border border-coffee/10 rounded-lg p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="font-serif text-xl font-bold text-ink mb-4">
                What's included
              </h3>
              <ul className="space-y-3">
                {includes.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className="h-5 w-5 text-rose-wax-red mr-3 mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-base text-espresso">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>

        {/* Investment & Add-ons */}
        <section className="px-6 pb-16">
          <div className="mx-auto max-w-4xl">
            <motion.div
              className="bg-warm-sand border border-coffee/10 rounded-lg p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="font-serif text-xl font-bold text-ink mb-4">
                Investment range
              </h3>
              <p className="text-base text-espresso mb-6 leading-relaxed">
                {rangeNote}
              </p>

              <h4 className="font-serif text-lg font-semibold text-ink mb-3">
                Add-ons & customization
              </h4>
              <p className="text-base text-espresso leading-relaxed">
                {addOnsNote}
              </p>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 pb-24">
          <motion.div
            className="mx-auto max-w-3xl text-center bg-white border border-coffee/10 rounded-lg p-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-ink mb-4">
              Ready to begin?
            </h3>
            <p className="text-base text-espresso mb-8 leading-relaxed">
              Share your story, your vision, and your date. We'll send a
              thoughtful proposal tailored to your celebration.
            </p>
            <Link
              href={ctaHref}
              className="inline-block bg-rose-wax-red text-white px-8 py-3 rounded-md font-medium transition-all hover:bg-rose-wax-red/90 hover:scale-105 focus-ring"
            >
              {ctaLabel}
            </Link>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
}
