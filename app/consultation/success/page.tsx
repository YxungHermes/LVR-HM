"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ConsultationSuccessPage() {
  return (
    <>
      <Header settled />
      <main className="bg-cream">
        {/* Hero Section - Elegant & Spacious */}
        <section className="relative px-6 pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
          {/* Subtle background decoration */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 right-10 w-96 h-96 bg-rose-wax-red rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-10 w-80 h-80 bg-rose-wax-red rounded-full blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Success Icon - More refined */}
              <div className="mb-10 flex justify-center">
                <motion.div
                  className="relative"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 200 }}
                >
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-rose-wax-red to-rose-wax-red/80 flex items-center justify-center shadow-lg">
                    <svg
                      className="h-12 w-12 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  {/* Decorative ring */}
                  <div className="absolute inset-0 rounded-full border-2 border-rose-wax-red/20 animate-ping" style={{ animationDuration: '2s' }} />
                </motion.div>
              </div>

              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-ink mb-6 tracking-tight leading-tight">
                Your Journey Begins Here
              </h1>

              <p className="text-xl md:text-2xl text-espresso/80 leading-relaxed max-w-3xl mx-auto mb-4">
                Thank you for trusting us with your story.
              </p>

              <p className="text-base md:text-lg text-espresso/60 leading-relaxed max-w-2xl mx-auto">
                We're excited to learn more about your celebration and craft a film that captures every beautiful moment.
              </p>
            </motion.div>
          </div>
        </section>

        {/* What Happens Next - Timeline Visualization */}
        <section className="px-6 pb-20 md:pb-28">
          <div className="mx-auto max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="text-center mb-12">
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-ink mb-3">
                  What Happens Next
                </h2>
                <p className="text-espresso/70 text-base">
                  Here's your timeline for the next 48 hours
                </p>
              </div>

              {/* Timeline - Horizontal on desktop, vertical on mobile */}
              <div className="relative">
                {/* Timeline connector line */}
                <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-coffee/10 to-transparent" />
                <div className="md:hidden absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-coffee/10 to-transparent" />

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6">
                  {[
                    {
                      time: "Now",
                      title: "Confirmation Sent",
                      description: "You'll receive an email confirmation with a copy of your details.",
                      icon: (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      )
                    },
                    {
                      time: "Within 6 hours",
                      title: "We Review",
                      description: "Our team carefully reviews your vision, preferences, and celebration details.",
                      icon: (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      )
                    },
                    {
                      time: "24-48 hours",
                      title: "Custom Proposal",
                      description: "Receive a personalized proposal with tailored package options and pricing.",
                      icon: (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      )
                    },
                    {
                      time: "After proposal",
                      title: "Let's Talk",
                      description: "Schedule a call to discuss details, or book directly from your proposal.",
                      icon: (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                      )
                    }
                  ].map((step, index) => (
                    <motion.div
                      key={index}
                      className="relative"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                    >
                      {/* Timeline node */}
                      <div className="flex md:flex-col items-start md:items-center gap-4 md:gap-0">
                        {/* Icon circle */}
                        <div className="relative flex-shrink-0">
                          <div className="w-16 h-16 rounded-full bg-white border-2 border-rose-wax-red/20 flex items-center justify-center text-rose-wax-red shadow-sm">
                            {step.icon}
                          </div>
                          {/* Time badge */}
                          <div className="hidden md:block absolute -bottom-6 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                            <span className="text-xs font-semibold text-rose-wax-red uppercase tracking-wider">
                              {step.time}
                            </span>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1 md:mt-12 md:text-center">
                          <div className="md:hidden mb-1">
                            <span className="text-xs font-semibold text-rose-wax-red uppercase tracking-wider">
                              {step.time}
                            </span>
                          </div>
                          <h3 className="font-serif text-lg md:text-xl font-semibold text-ink mb-2">
                            {step.title}
                          </h3>
                          <p className="text-sm text-espresso/70 leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Questions? Contact Section */}
        <section className="px-6 pb-20">
          <div className="mx-auto max-w-3xl">
            <motion.div
              className="bg-gradient-to-br from-warm-sand/40 to-rose-wax-red/5 border border-coffee/10 rounded-2xl p-8 md:p-10 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-6">
                <svg className="w-12 h-12 text-rose-wax-red mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl font-bold text-ink mb-3">
                Have questions right now?
              </h3>
              <p className="text-espresso/70 mb-6 leading-relaxed">
                Don't wait for our proposal. We're here to help answer anything on your mind.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="mailto:contact@violetarose.com"
                  className="inline-flex items-center gap-2 text-rose-wax-red hover:text-rose-wax-red/80 transition-colors font-medium"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  contact@violetarose.com
                </a>
                <span className="hidden sm:block text-coffee/30">•</span>
                <a
                  href="tel:+13477747840"
                  className="inline-flex items-center gap-2 text-rose-wax-red hover:text-rose-wax-red/80 transition-colors font-medium"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  (347) 774-7840
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Explore More - Refined Cards */}
        <section className="px-6 py-20 md:py-24 bg-white">
          <div className="mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center mb-12">
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-ink mb-3">
                  While You Wait
                </h2>
                <p className="text-espresso/70 text-base max-w-2xl mx-auto">
                  Explore our work and get inspired for your own film
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Watch Our Films",
                    description: "See the stories we've told and imagine your own celebration captured with the same care and artistry.",
                    link: "/films",
                    linkText: "View Portfolio",
                    icon: (
                      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )
                  },
                  {
                    title: "Explore Offerings",
                    description: "From elopements to grand celebrations, discover all the ways we can tell your story.",
                    link: "/offerings",
                    linkText: "View Services",
                    icon: (
                      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    )
                  },
                  {
                    title: "Learn Our Process",
                    description: "Understand exactly what to expect from our first conversation to your final delivery.",
                    link: "/process",
                    linkText: "See How We Work",
                    icon: (
                      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                      </svg>
                    )
                  }
                ].map((card, index) => (
                  <motion.div
                    key={index}
                    className="group relative bg-cream border border-coffee/10 rounded-xl p-8 hover:border-rose-wax-red/30 hover:shadow-lg transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="mb-5 text-rose-wax-red">
                      {card.icon}
                    </div>
                    <h3 className="font-serif text-xl font-semibold text-ink mb-3 group-hover:text-rose-wax-red transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-sm text-espresso/70 leading-relaxed mb-5">
                      {card.description}
                    </p>
                    <Link
                      href={card.link}
                      className="inline-flex items-center gap-2 text-sm text-rose-wax-red hover:text-rose-wax-red/80 transition-colors font-medium group"
                    >
                      {card.linkText}
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Final Reassurance */}
        <section className="px-6 py-16 bg-gradient-to-b from-cream to-warm-sand/30">
          <div className="mx-auto max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-espresso/60 text-sm uppercase tracking-widest mb-4">
                We're Excited
              </p>
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-ink mb-4 leading-tight">
                We can't wait to learn more about your celebration and create something beautiful together.
              </h3>
              <p className="text-espresso/70">
                Check your inbox soon for next steps.
              </p>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
