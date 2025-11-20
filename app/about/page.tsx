"use client";

import { useState } from "react";
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
                      href="https://violetarose.com"
                      className="text-sm md:text-[15px] text-ink font-medium hover:text-rose-wax-red transition-colors duration-200"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      VIOLETAROSE.COM
                    </a>
                  </div>

                  {/* Social Media */}
                  <div className="pt-2">
                    <p className="text-[10px] md:text-[11px] uppercase tracking-[0.15em] text-coffee/50 mb-2">
                      Connect With Me
                    </p>
                    <div className="flex gap-4">
                      <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-coffee/60 hover:text-rose-wax-red transition-colors duration-200"
                        aria-label="Instagram"
                      >
                        <Instagram size={22} strokeWidth={1.5} />
                      </a>
                      <a
                        href="https://vimeo.com"
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
                        href="https://linkedin.com"
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
                    src="/media/michael-andrade.jpg"
                    alt="Michael Andrade - Wedding Filmmaker"
                    className="w-full h-full object-cover"
                  />
                </div>
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
                    A videographer who captures more than moments. I capture the rhythm and stories through vivid images. Every project is a blend of technical precision and emotional storytelling. My work never fails to experiment; each frame is treated like a canvas where light, sound, and narrative converge.
                    <br /><br />
                    With experience across music, fashion, and commercial projects, the mission is to create films that feel alive. Films that resonate emotionally and stay with you long after watching. Every wedding is unique, and my approach honors that individuality while creating something timeless.
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
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {/* LEFT HALF - Service Image */}
              <div className="order-2 lg:order-1">
                <div className="relative aspect-[4/5] bg-warm-sand rounded-sm overflow-hidden shadow-sm sticky top-32">
                  {/* Placeholder for service image - replace with actual image */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-8">
                      <p className="text-coffee/40 text-sm mb-2">Service Image Placeholder</p>
                      <p className="text-coffee/30 text-xs">4:5 ratio (portrait)</p>
                      <p className="text-coffee/30 text-xs mt-1">Behind-the-scenes or wedding detail</p>
                    </div>
                  </div>
                  {/* Uncomment and replace when image is ready:
                  <img
                    src="/media/about-service.jpg"
                    alt="Behind the scenes filming"
                    className="w-full h-full object-cover"
                  />
                  */}
                </div>
              </div>

              {/* RIGHT HALF - Accordion */}
              <div className="order-1 lg:order-2">
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
            className="mx-auto max-w-3xl text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-ink mb-6">
              Ready to Create Something Beautiful?
            </h2>
            <p className="text-base md:text-lg text-espresso/80 mb-10 leading-relaxed max-w-2xl mx-auto">
              Let's discuss your vision and how we can bring your wedding story to life through cinematic film.
            </p>
            <a
              href="/consultation"
              className="inline-block px-10 py-4 bg-rose-wax-red text-cream font-medium rounded-full hover:bg-rose-wax-red/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Book a Consultation
            </a>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
}
