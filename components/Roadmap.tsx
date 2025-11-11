"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface RoadmapProps {
  variant?: "full" | "mini";
  cta?: boolean;
}

const roadmapSteps = [
  {
    title: "Inquiry",
    text: "You reach out and share your wedding date, location, and a bit of your story.",
    icon: "✉️",
  },
  {
    title: "Consultation",
    text: "We meet for a relaxed conversation to understand your vision and energy as a couple.",
    icon: "💬",
  },
  {
    title: "Proposal",
    text: "You receive a curated proposal outlining your tailored film experience and investment.",
    icon: "📋",
  },
  {
    title: "Booking",
    text: "Once your date is secured, we officially begin this creative journey together.",
    icon: "📝",
  },
  {
    title: "Pre-Production",
    text: "We collaborate on your timeline, visual tone, and creative direction.",
    icon: "🎬",
  },
  {
    title: "Wedding Day",
    text: "We capture your story from quiet moments to the celebration itself with artful precision.",
    icon: "🎥",
  },
  {
    title: "Post Production",
    text: "Your footage is crafted into a timeless film through editing, color, and sound.",
    icon: "✂️",
  },
  {
    title: "Delivery",
    text: "Your finished films arrive — cinematic, emotional, and beautifully packaged.",
    icon: "🎁",
  },
];

export default function Roadmap({ variant = "full", cta = false }: RoadmapProps) {
  if (variant === "mini") {
    return (
      <section className="roadmap-mini bg-warm-sand/30 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-ink text-center mb-12">
              What Happens Next
            </h2>

            {/* Horizontal Steps */}
            <div className="relative">
              {/* Connecting Line */}
              <div className="absolute top-8 left-0 right-0 h-0.5 bg-rose-wax-red/20 hidden md:block" />

              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
                {roadmapSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    className="relative flex flex-col items-center text-center group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    {/* Icon Circle */}
                    <div className="relative z-10 w-16 h-16 rounded-full bg-white border-2 border-rose-wax-red/30 flex items-center justify-center mb-3 group-hover:border-rose-wax-red group-hover:scale-110 transition-all duration-300">
                      <span className="text-2xl">{step.icon}</span>
                    </div>

                    {/* Step Number */}
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-rose-wax-red text-white text-xs flex items-center justify-center font-bold">
                      {index + 1}
                    </div>

                    {/* Title */}
                    <h4 className="font-serif text-sm font-semibold text-ink group-hover:text-rose-wax-red transition-colors">
                      {step.title}
                    </h4>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Timeline Note */}
            <motion.div
              className="mt-12 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <p className="text-sm text-espresso/70 italic">
                Typical delivery: Teaser 2–3 weeks • Highlight 6–8 weeks • Feature 10–12 weeks
              </p>
            </motion.div>

            {/* CTA */}
            {cta && (
              <motion.div
                className="mt-10 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                <Link
                  href="/consultation"
                  className="inline-flex items-center bg-rose-wax-red text-white px-8 py-4 rounded-full font-medium text-lg transition-all hover:bg-rose-wax-red/90 hover:scale-105 hover:shadow-lg focus-ring"
                >
                  Book Your Consultation
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
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Link>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>
    );
  }

  // Full variant
  return (
    <section className="roadmap-full bg-cream px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-ink mb-4">
            The Journey From Inquiry to Delivery
          </h2>
          <p className="text-lg text-espresso max-w-2xl mx-auto leading-relaxed">
            Your film begins long before the camera rolls. Here's how we make it seamless, beautiful, and true to you.
          </p>
        </motion.div>

        {/* Vertical Timeline */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-rose-wax-red/30 via-rose-wax-red/20 to-rose-wax-red/10" />

          <div className="space-y-12">
            {roadmapSteps.map((step, index) => (
              <motion.div
                key={index}
                className="relative pl-24 group"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Icon Circle */}
                <div className="absolute left-0 w-16 h-16 rounded-full bg-white border-2 border-rose-wax-red/30 flex items-center justify-center shadow-sm group-hover:border-rose-wax-red group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
                  <span className="text-3xl">{step.icon}</span>
                </div>

                {/* Step Number Badge */}
                <div className="absolute left-12 top-12 w-7 h-7 rounded-full bg-rose-wax-red text-white text-xs flex items-center justify-center font-bold shadow-sm">
                  {index + 1}
                </div>

                {/* Content */}
                <div className="bg-white border border-coffee/10 rounded-lg p-6 md:p-8 group-hover:border-rose-wax-red/30 transition-colors">
                  <h3 className="font-serif text-xl md:text-2xl font-bold text-ink mb-3 group-hover:text-rose-wax-red transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-base text-espresso leading-relaxed">
                    {step.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Timeline Note */}
        <motion.div
          className="mt-16 p-8 bg-warm-sand border border-coffee/10 rounded-lg text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h4 className="font-serif text-lg font-semibold text-ink mb-3">
            Typical Delivery Timeline
          </h4>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-sm text-espresso">
            <div className="flex items-center">
              <span className="font-medium text-rose-wax-red mr-2">Teaser:</span>
              <span>2–3 weeks</span>
            </div>
            <span className="hidden md:block text-coffee/30">•</span>
            <div className="flex items-center">
              <span className="font-medium text-rose-wax-red mr-2">Highlight:</span>
              <span>6–8 weeks</span>
            </div>
            <span className="hidden md:block text-coffee/30">•</span>
            <div className="flex items-center">
              <span className="font-medium text-rose-wax-red mr-2">Feature:</span>
              <span>10–12 weeks</span>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        {cta && (
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <Link
              href="/consultation"
              className="inline-flex items-center bg-rose-wax-red text-white px-10 py-4 rounded-full font-medium text-lg transition-all hover:bg-rose-wax-red/90 hover:scale-105 hover:shadow-lg focus-ring"
            >
              Book Your Consultation
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
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
}
