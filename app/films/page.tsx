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
      <Header settled logoAbove />
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

                      {/* Film Details */}
                      {currentFilm.description && (
                        <p
                          className="text-lg md:text-xl text-white/80 mb-4 max-w-2xl"
                          style={{
                            textShadow: '0 2px 8px rgba(0, 0, 0, 0.8)'
                          }}
                        >
                          {currentFilm.description}
                        </p>
                      )}

                      {/* Metadata Tags */}
                      <div className="flex flex-wrap gap-3 mb-8">
                        {currentFilm.date && (
                          <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white/90 px-4 py-2 rounded-full text-sm font-medium">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            {currentFilm.date}
                          </span>
                        )}
                        {currentFilm.location && (
                          <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white/90 px-4 py-2 rounded-full text-sm font-medium">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            {currentFilm.location}
                          </span>
                        )}
                        {currentFilm.style && (
                          <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white/90 px-4 py-2 rounded-full text-sm font-medium">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
                            </svg>
                            {currentFilm.style}
                          </span>
                        )}
                        {currentFilm.tradition && (
                          <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white/90 px-4 py-2 rounded-full text-sm font-medium">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                            {currentFilm.tradition}
                          </span>
                        )}
                      </div>

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

        {/* CTA Section */}
        <section className="bg-cream px-6 py-32 md:py-40">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-ink mb-6 leading-tight">
                Ready to Create Your Film?
              </h2>
              <p className="text-lg md:text-xl text-espresso/80 mb-10 leading-relaxed max-w-2xl mx-auto">
                Let's craft a cinematic film that captures the beauty, emotion, and magic of your unique love story.
              </p>
              <Link
                href="/consultation"
                className="inline-block px-12 py-5 bg-rose-wax-red text-cream font-semibold rounded-full hover:bg-rose-wax-red/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 uppercase tracking-wider text-sm"
              >
                Book a Consultation
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
