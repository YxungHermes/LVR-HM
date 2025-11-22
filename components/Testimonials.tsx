"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { testimonials } from "@/content/home";

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-warm-sand/30 px-6 py-16 md:py-20">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-ink mb-4">
            Words from Couples
          </h2>
          <p className="text-base md:text-lg text-espresso/70 max-w-2xl mx-auto">
            The greatest honor is creating films that become family treasures for generations to come.
          </p>
        </motion.div>

        {/* Testimonials Grid - 3 in a row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white border border-coffee/10 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 group"
            >
              {/* Vimeo Thumbnail Section */}
              <div className="relative h-48 overflow-hidden bg-warm-sand/20">
                <iframe
                  src={`https://player.vimeo.com/video/${testimonial.vimeoId}?background=1&autoplay=0&loop=0&muted=1`}
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  allow="autoplay; fullscreen; picture-in-picture"
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    width: '100%',
                    height: '100%',
                    transform: 'translate(-50%, -50%)',
                    objectFit: 'cover'
                  }}
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60" />

                {/* Tradition Badge */}
                {testimonial.tradition && (
                  <div className="absolute top-3 left-3">
                    <span className="inline-block bg-white/90 backdrop-blur-sm text-ink px-2 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wide">
                      {testimonial.tradition}
                    </span>
                  </div>
                )}
              </div>

              {/* Content Section */}
              <div className="p-5">
                {/* Quote */}
                <div className="mb-4">
                  <svg
                    className="w-6 h-6 text-rose-wax-red/20 mb-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-sm text-espresso leading-relaxed italic line-clamp-4">
                    "{testimonial.quote}"
                  </p>
                </div>

                {/* Couple Info */}
                <div className="border-t border-coffee/10 pt-4">
                  <p className="font-semibold text-ink text-base mb-1">
                    {testimonial.couple}
                  </p>
                  <p className="text-xs text-espresso/70">
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
          className="text-center mt-12"
        >
          <p className="text-base text-espresso/70 mb-5">
            Want to share your own story?
          </p>
          <Link
            href="/consultation"
            className="inline-flex items-center gap-3 px-8 py-3 bg-rose-wax-red text-white font-semibold rounded-full hover:bg-rose-wax-red/90 hover:shadow-xl transition-all duration-300 hover:scale-105 uppercase tracking-wider text-sm"
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
