"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Instagram, Linkedin } from "lucide-react";

// Accordion item component
interface AccordionItemProps {
  number: string;
  title: string;
  description: string;
  isOpen: boolean;
  onClick: () => void;
}

function AccordionItem({ number, title, description, isOpen, onClick }: AccordionItemProps) {
  return (
    <div className="border-b border-coffee/10">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between py-6 text-left hover:bg-cream/50 transition-colors duration-200 group"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-4 flex-1">
          <span className="text-sm text-coffee/50 font-mono">{number}</span>
          <h3 className="text-base md:text-lg font-semibold tracking-wider uppercase text-ink group-hover:text-rose-wax-red transition-colors duration-200" style={{ letterSpacing: '0.1em' }}>
            {title}
          </h3>
        </div>
        <div className="ml-4 text-coffee/40 text-2xl font-light">
          {isOpen ? '−' : '+'}
        </div>
      </button>

      <motion.div
        initial={false}
        animate={{
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="overflow-hidden"
      >
        <div className="pb-6 pl-12 pr-12">
          <p className="text-sm md:text-base text-espresso leading-relaxed" style={{ lineHeight: '1.7' }}>
            {description}
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default function AboutPage() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);

  const services = [
    {
      title: "Elopements & Intimate Gatherings",
      description: "Capturing the raw, unscripted beauty of intimate celebrations. Every glance, every whispered word, every quiet moment of connection is preserved with intention. These films honor the choice to celebrate love on your own terms, in the most meaningful way possible."
    },
    {
      title: "Full Wedding Day Coverage",
      description: "Comprehensive storytelling from the first moments of preparation to the final dance. A seamless narrative that weaves together every emotion, every detail, and every treasured memory into a cinematic experience that feels both timeless and deeply personal."
    },
    {
      title: "Destination Wedding Films",
      description: "Documenting love stories against breathtaking backdrops around the world. Whether it's the coast of Italy, the mountains of Colorado, or a tropical paradise, these films capture not just the ceremony, but the entire journey and adventure of destination celebrations."
    },
    {
      title: "Engagement & Adventure Sessions",
      description: "Pre-wedding stories that showcase your connection in natural, authentic ways. These sessions create space for spontaneity and genuine interaction, resulting in films that capture who you are as a couple: your laughter, your comfort with each other, your unique dynamic."
    },
    {
      title: "Post-Production & Delivery",
      description: "Meticulous editing, color grading, and sound design transform raw footage into a polished cinematic experience. Each frame is carefully considered, every transition purposeful, and the final product is delivered in formats designed for both sharing and preservation."
    }
  ];

  return (
    <>
      <Header settled logoAbove />
      <main className="bg-cream">
        {/* SECTION 1: PROFILE HEADER */}
        <section className="px-6 md:px-12 lg:px-24 xl:px-32 pt-32 md:pt-40 pb-20 md:pb-28">
          <div className="mx-auto max-w-[1400px]">
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 lg:gap-20"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* LEFT COLUMN - Professional Info */}
              <div className="lg:col-span-2 order-3 lg:order-1">
                <div className="space-y-6">
                  {/* Professional Title */}
                  <div>
                    <p className="text-[10px] md:text-[11px] uppercase tracking-[0.15em] text-coffee/50 mb-1">
                      Professional Title
                    </p>
                    <p className="text-sm md:text-[15px] text-ink font-medium">
                      Wedding Filmmaker
                    </p>
                  </div>

                  {/* Category */}
                  <div>
                    <p className="text-[10px] md:text-[11px] uppercase tracking-[0.15em] text-coffee/50 mb-1">
                      Specialty
                    </p>
                    <p className="text-sm md:text-[15px] text-ink font-medium">
                      Cinematic Weddings
                    </p>
                  </div>

                  {/* Website */}
                  <div className="pt-2">
                    <p className="text-[10px] md:text-[11px] uppercase tracking-[0.15em] text-coffee/50 mb-1">
                      Website
                    </p>
                    <a
                      href="https://michael-andrade.com"
                      className="text-sm md:text-[15px] text-ink font-medium hover:text-rose-wax-red transition-colors duration-200"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Michael-andrade.com
                    </a>
                  </div>

                  {/* Social Media */}
                  <div className="pt-2">
                    <p className="text-[10px] md:text-[11px] uppercase tracking-[0.15em] text-coffee/50 mb-2">
                      Connect With Me
                    </p>
                    <div className="flex gap-4">
                      <a
                        href="https://instagram.com/lovevioletarose"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-coffee/60 hover:text-rose-wax-red transition-colors duration-200"
                        aria-label="Instagram"
                      >
                        <Instagram size={22} strokeWidth={1.5} />
                      </a>
                      <a
                        href="https://vimeo.com/user30343004"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-coffee/60 hover:text-rose-wax-red transition-colors duration-200"
                        aria-label="Vimeo"
                      >
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M23 7s-.2-1.4-.8-2A2.9 2.9 0 0 0 20.2 4c-2.6-.2-6.5-.2-6.5-.2h-.1s-3.9 0-6.5.2A2.9 2.9 0 0 0 5.1 5c-.6.6-.8 2-.8 2S4 8.4 4 9.8v1.4c0 1.4.3 2.8.3 2.8s.2 1.4.8 2a2.9 2.9 0 0 0 2 .8c1.5.1 6.3.2 6.3.2s3.9 0 6.5-.2a2.9 2.9 0 0 0 2-.8c.6-.6.8-2 .8-2s.3-1.4.3-2.8V9.8c0-1.4-.3-2.8-.3-2.8z"/>
                          <path d="m10 15 5.2-3L10 9v6z"/>
                        </svg>
                      </a>
                      <a
                        href="https://www.linkedin.com/in/michael-andrade-439377ab/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-coffee/60 hover:text-rose-wax-red transition-colors duration-200"
                        aria-label="LinkedIn"
                      >
                        <Linkedin size={22} strokeWidth={1.5} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* CENTER COLUMN - Portrait Photo */}
              <div className="lg:col-span-4 order-1 lg:order-2">
                <div className="relative aspect-[3/4] bg-warm-sand rounded-sm overflow-hidden shadow-sm">
                  <img
                    src="/media/violeta-rose.jpg"
                    alt="Violeta Rose - Wedding Filmmaker"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-xs text-coffee/50 mt-3 italic text-center">
                  Multi-day Destination Wedding 2025 in Italy
                </p>
              </div>

              {/* RIGHT COLUMN - Bio */}
              <div className="lg:col-span-5 order-2 lg:order-3 flex items-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="max-w-[600px]"
                >
                  <p className="text-[15px] md:text-base text-ink/90 leading-relaxed" style={{ lineHeight: '1.75' }}>
                    I'm a videographer who cares about rhythm, emotion, and the details most people miss. Every project blends technical precision with storytelling. I'm always experimenting with how light and sound can create something that feels cinematic but real.
                    <br /><br />
                    I've worked across music, fashion, and commercial projects before focusing on weddings. The goal is simple: create films that feel alive and make you want to watch them again. Every wedding is different, and I approach each one that way.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SECTION 2: SERVICES/APPROACH */}
        <section className="px-6 md:px-12 lg:px-24 xl:px-32 py-20 md:py-28">
          <div className="mx-auto max-w-[1400px]">
            <motion.div
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {/* Services Accordion */}
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <h2 className="font-serif text-3xl md:text-4xl font-bold text-ink mb-3">
                    What I Offer
                  </h2>
                  <p className="text-base text-espresso/70 mb-12 leading-relaxed">
                    Comprehensive wedding filmmaking services tailored to your unique story
                  </p>

                  <div className="bg-white/50 backdrop-blur-sm border border-coffee/5 rounded-lg overflow-hidden">
                    {services.map((service, index) => (
                      <AccordionItem
                        key={index}
                        number={`/${String(index + 1).padStart(2, '0')}`}
                        title={service.title}
                        description={service.description}
                        isOpen={openAccordion === index}
                        onClick={() => setOpenAccordion(openAccordion === index ? null : index)}
                      />
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="px-6 md:px-12 lg:px-24 xl:px-32 py-20 md:py-28 bg-cream">
          <motion.div
            className="mx-auto max-w-4xl text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-ink mb-6">
              What's Next?
            </h2>
            <p className="text-base md:text-lg text-espresso/80 mb-10 leading-relaxed max-w-2xl mx-auto">
              Now that you know a bit about me and how I work, you've got two options. Check out what this actually looks like, or if you're already feeling it, let's just talk.
            </p>

            {/* Dual CTA - Side by Side */}
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <Link
                href="/films"
                className="group inline-flex items-center gap-3 px-8 py-4 border-2 border-rose-wax-red rounded-full text-rose-wax-red font-semibold uppercase tracking-wider text-sm hover:bg-rose-wax-red hover:text-white hover:shadow-lg transition-all duration-300"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                <span>See the Work</span>
              </Link>

              <Link
                href="/consultation"
                className="group inline-flex items-center gap-3 bg-rose-wax-red text-white rounded-full px-8 py-4 font-semibold uppercase tracking-wider text-sm hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                <span>Let's Talk</span>
                <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* Secondary link to pricing */}
            <p className="mt-6 text-sm text-espresso/70">
              Want to see pricing first?{" "}
              <Link
                href="/offerings"
                className="text-rose-wax-red hover:text-rose-wax-red/80 underline underline-offset-2 transition-colors"
              >
                Check out packages and pricing
              </Link>
            </p>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
}
