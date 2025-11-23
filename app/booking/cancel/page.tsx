"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function BookingCancelPage() {
  return (
    <>
      <Header settled hideCta />

      <main className="bg-cream min-h-screen">
        <section className="px-6 py-32 md:py-40">
          <div className="mx-auto max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              {/* Canceled Icon */}
              <div className="mx-auto w-24 h-24 bg-amber-100 rounded-full flex items-center justify-center mb-8">
                <svg className="w-12 h-12 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>

              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-ink mb-6">
                Payment Canceled
              </h1>

              <p className="text-xl md:text-2xl text-espresso/80 mb-8 max-w-2xl mx-auto leading-relaxed">
                No worries! Your reservation wasn't completed and you haven't been charged.
              </p>

              {/* What Happened */}
              <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 border border-coffee/10 text-left mb-12">
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-ink mb-6 text-center">
                  What Happened?
                </h2>

                <div className="space-y-4 text-espresso/80">
                  <p>
                    You canceled the payment process before completing your reservation. This is totally fine – we understand that sometimes you need more time to think things over.
                  </p>
                  <p>
                    Your wedding date is still available, but it hasn't been reserved yet. Dates are reserved on a first-come, first-served basis once the deposit is received.
                  </p>
                </div>
              </div>

              {/* Next Steps Box */}
              <div className="bg-warm-sand/20 border border-coffee/10 rounded-lg p-6 mb-8 text-left">
                <h3 className="font-semibold text-ink mb-4 text-center">What You Can Do Next</h3>
                <ul className="space-y-3 text-sm text-espresso/80">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-rose-wax-red flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span><strong>Try again:</strong> Head back to the reservation page when you're ready to secure your date</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-rose-wax-red flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span><strong>Have questions?</strong> Reach out to us at contact@violetarose.com or book a free consultation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-rose-wax-red flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span><strong>Need more info?</strong> Review our packages, watch sample films, or read our FAQs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-rose-wax-red flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span><strong>Payment concerns?</strong> We accept all major cards and offer flexible payment plans – just ask!</span>
                  </li>
                </ul>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/reserve"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-rose-wax-red text-white rounded-full font-semibold uppercase tracking-wider text-sm hover:bg-rose-wax-red/90 transition-all"
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  <span>Try Again</span>
                </Link>

                <Link
                  href="/consultation"
                  className="inline-flex items-center gap-2 px-8 py-3 border-2 border-rose-wax-red rounded-full text-rose-wax-red font-semibold uppercase tracking-wider text-sm hover:bg-rose-wax-red hover:text-white transition-all"
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  <span>Book a Consultation</span>
                </Link>
              </div>

              <p className="mt-8 text-sm text-espresso/60">
                Questions? We're here to help at contact@violetarose.com
              </p>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
