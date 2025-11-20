"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { testimonials } from "@/content/home";

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-warm-sand/30 px-6 py-20 md:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-ink mb-6">
            Words from Couples
          </h2>
          <p className="text-lg md:text-xl text-espresso/70 max-w-2xl mx-auto">
            The greatest honor is creating films that become family treasures for generations to come.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white border border-coffee/10 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 group"
            >
              {/* Image Section */}
              <div className="relative h-64 md:h-72 overflow-hidden bg-warm-sand/20">
                {testimonial.image ? (
                  <Image
                    src={testimonial.image}
                    alt={`${testimonial.couple} wedding`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                ) : (
                  // Placeholder with gradient and initials
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-warm-sand to-rose-wax-red/20">
                    <div className="text-6xl md:text-7xl font-serif font-bold text-rose-wax-red/30">
                      {testimonial.couple.split(" ")[0]?.[0]}{testimonial.couple.split(" ")[2]?.[0] || testimonial.couple.split(" ")[1]?.[0]}
                    </div>
                  </div>
                )}

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60" />

                {/* Tradition Badge */}
                {testimonial.tradition && (
                  <div className="absolute top-4 left-4">
                    <span className="inline-block bg-white/90 backdrop-blur-sm text-ink px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">
                      {testimonial.tradition}
                    </span>
                  </div>
                )}
              </div>

              {/* Content Section */}
              <div className="p-8">
                {/* Quote */}
                <div className="mb-6">
                  <svg
                    className="w-8 h-8 text-rose-wax-red/20 mb-3"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-base text-espresso leading-relaxed italic">
                    "{testimonial.quote}"
                  </p>
                </div>

                {/* Couple Info */}
                <div className="border-t border-coffee/10 pt-6">
                  <p className="font-semibold text-ink text-lg mb-1">
                    {testimonial.couple}
                  </p>
                  <p className="text-sm text-espresso/70">
                    {testimonial.location}{testimonial.date && ` • ${testimonial.date}`}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16 md:mt-20"
        >
          <p className="text-lg text-espresso/70 mb-6">
            Want to share your own story?
          </p>
          <Link
            href="/consultation"
            className="inline-flex items-center gap-3 px-10 py-4 bg-rose-wax-red text-white font-semibold rounded-full hover:bg-rose-wax-red/90 hover:shadow-xl transition-all duration-300 hover:scale-105 uppercase tracking-wider text-sm"
          >
            <span>Let's Create Your Film</span>
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
