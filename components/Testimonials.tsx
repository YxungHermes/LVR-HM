"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/content/home";

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-cream px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="heading-lg font-serif tracking-wider">
            Kind Words
          </h2>
        </motion.div>

        <div className="grid gap-12 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {/* Watercolor stroke divider */}
              <div className="mb-6 h-1 w-16 bg-rose-grad opacity-60" />

              <blockquote className="mb-6">
                <p className="font-serif text-2xl leading-relaxed text-ink">
                  "{testimonial.quote}"
                </p>
              </blockquote>

              <div className="flex items-center">
                <div>
                  <p className="font-medium text-espresso">
                    {testimonial.couple}
                  </p>
                  <p className="text-sm text-espresso/60">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
