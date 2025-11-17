"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { signatureWork } from "@/content/home";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function FilmsPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let newIndex = prevIndex + newDirection;
      if (newIndex < 0) newIndex = signatureWork.length - 1;
      if (newIndex >= signatureWork.length) newIndex = 0;
      return newIndex;
    });
  };

  const currentFilm = signatureWork[currentIndex];

  return (
    <>
      <Header settled />
      <main className="bg-black min-h-screen">
        {/* Hero Section */}
        <section className="relative h-screen flex flex-col">
          {/* Carousel */}
          <div className="flex-1 relative overflow-hidden">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);

                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                }}
                className="absolute inset-0"
              >
                {/* Vimeo Video Background */}
                <div className="absolute inset-0 w-full h-full overflow-hidden">
                  <iframe
                    src={`https://player.vimeo.com/video/${currentFilm.vimeoId}?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1`}
                    className="absolute pointer-events-none"
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      width: "100vw",
                      height: "56.25vw",
                      minHeight: "100%",
                      minWidth: "177.78vh",
                      transform: "translate(-50%, -50%)",
                    }}
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    title={currentFilm.title}
                  />
                </div>

                {/* Frosted glass overlay */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    backdropFilter: "blur(0.5px) saturate(1.2)",
                    WebkitBackdropFilter: "blur(0.5px) saturate(1.2)",
                    background: "linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 50%, rgba(255, 255, 255, 0.08) 100%)",
                    boxShadow: "inset 0 0 40px rgba(255, 255, 255, 0.08), inset 0 1px 1px rgba(255, 255, 255, 0.15)",
                  }}
                />

                {/* Dark gradient overlay for text readability */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: "linear-gradient(to top, rgba(0, 0, 0, 0.90) 0%, rgba(0, 0, 0, 0.60) 35%, rgba(0, 0, 0, 0.30) 60%, rgba(0, 0, 0, 0.15) 100%)",
                  }}
                />

                {/* Vignette effect */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: "radial-gradient(ellipse at center, transparent 30%, rgba(0, 0, 0, 0.40) 100%)",
                  }}
                />

                {/* Content */}
                <div className="absolute inset-x-0 bottom-0 p-8 md:p-16 z-10">
                  <div className="max-w-7xl mx-auto">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <p className="text-sm md:text-base text-white/70 uppercase tracking-widest mb-3">
                        Film {currentIndex + 1} of {signatureWork.length}
                      </p>
                      <h1
                        className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 leading-tight"
                        style={{
                          textShadow: '0 2px 12px rgba(0, 0, 0, 0.9), 0 4px 24px rgba(0, 0, 0, 0.6)'
                        }}
                      >
                        {currentFilm.title}
                      </h1>
                      <p
                        className="text-xl md:text-2xl text-white/90 mb-8"
                        style={{
                          textShadow: '0 2px 8px rgba(0, 0, 0, 0.8)'
                        }}
                      >
                        {currentFilm.subtitle}
                      </p>

                      {/* View Full Film Button */}
                      <a
                        href={`https://player.vimeo.com/video/${currentFilm.vimeoId}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-white text-ink rounded-full px-8 py-4 font-semibold uppercase tracking-wider text-sm hover:shadow-[0_4px_16px_rgba(255,255,255,0.4)] transition-all duration-300 hover:scale-105"
                      >
                        <span>Watch Full Film</span>
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </a>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={() => paginate(-1)}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white rounded-full p-4 transition-all duration-300 hover:scale-110 focus-ring"
              aria-label="Previous film"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={() => paginate(1)}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white rounded-full p-4 transition-all duration-300 hover:scale-110 focus-ring"
              aria-label="Next film"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Thumbnail Navigation */}
            <div className="absolute bottom-24 md:bottom-32 left-1/2 -translate-x-1/2 z-20 flex gap-3">
              {signatureWork.map((film, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-white w-8"
                      : "bg-white/40 hover:bg-white/60"
                  }`}
                  aria-label={`View ${film.title}`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* All Films Grid Section */}
        <section className="bg-cream px-6 py-24 md:py-32">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-ink mb-6">
                Our Signature Films
              </h2>
              <p className="text-lg text-espresso/80 max-w-2xl mx-auto">
                Each film is a unique love story, crafted with artistry and intention.
              </p>
            </motion.div>

            <div className="grid gap-10 md:gap-12 md:grid-cols-3">
              {signatureWork.map((film, index) => (
                <motion.div
                  key={index}
                  className="group relative h-[600px] overflow-hidden rounded-xl border border-white/10 cursor-pointer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  style={{
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15), 0 2px 6px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  {/* Vimeo Video */}
                  <div className="absolute inset-0 w-full h-full overflow-hidden">
                    <iframe
                      src={`https://player.vimeo.com/video/${film.vimeoId}?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1`}
                      className="absolute pointer-events-none"
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        width: "100vw",
                        height: "56.25vw",
                        minHeight: "100%",
                        minWidth: "177.78vh",
                        transform: "translate(-50%, -50%)",
                      }}
                      frameBorder="0"
                      allow="autoplay; fullscreen; picture-in-picture"
                      title={film.title}
                    />
                  </div>

                  {/* Frosted glass overlay */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      backdropFilter: "blur(0.5px) saturate(1.2)",
                      WebkitBackdropFilter: "blur(0.5px) saturate(1.2)",
                      background: "linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 50%, rgba(255, 255, 255, 0.08) 100%)",
                      boxShadow: "inset 0 0 40px rgba(255, 255, 255, 0.08), inset 0 1px 1px rgba(255, 255, 255, 0.15)",
                    }}
                  />

                  {/* Dark gradient overlay */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: "linear-gradient(to top, rgba(0, 0, 0, 0.90) 0%, rgba(0, 0, 0, 0.60) 35%, rgba(0, 0, 0, 0.30) 60%, rgba(0, 0, 0, 0.15) 100%)",
                    }}
                  />

                  {/* Vignette */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: "radial-gradient(ellipse at center, transparent 30%, rgba(0, 0, 0, 0.30) 100%)",
                    }}
                  />

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500" />

                  {/* Content */}
                  <div className="absolute inset-x-0 bottom-0 p-8">
                    <h3
                      className="font-serif text-4xl md:text-5xl font-bold tracking-wide text-white mb-2"
                      style={{
                        textShadow: '0 2px 12px rgba(0, 0, 0, 0.9), 0 4px 24px rgba(0, 0, 0, 0.6)'
                      }}
                    >
                      {film.title}
                    </h3>
                    <p
                      className="text-base md:text-lg font-medium text-white/95"
                      style={{
                        textShadow: '0 2px 8px rgba(0, 0, 0, 0.8)'
                      }}
                    >
                      {film.subtitle}
                    </p>

                    {/* View button - shows on hover */}
                    <div className="mt-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                      <span className="inline-flex items-center gap-3 bg-white text-ink rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-wider">
                        <span>View Film</span>
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Section */}
            <motion.div
              className="mt-20 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="font-serif text-3xl md:text-4xl font-bold text-ink mb-6">
                Ready to Create Your Film?
              </h3>
              <p className="text-lg text-espresso/80 mb-8 max-w-2xl mx-auto">
                Let's craft a cinematic film that captures your unique love story.
              </p>
              <Link
                href="/consultation"
                className="inline-flex items-center gap-3 bg-rose-grad text-white rounded-full px-10 py-5 font-semibold uppercase tracking-wider text-sm hover:shadow-[0_8px_24px_rgba(244,105,126,0.4)] transition-all duration-300 hover:scale-105"
              >
                <span>Book Consultation</span>
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
