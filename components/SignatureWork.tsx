"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { signatureWork } from "@/content/home";

function VideoCard({ title, subtitle, src, poster, vimeoId, index }: {
  title: string;
  subtitle: string;
  src?: string;
  poster?: string;
  vimeoId?: string;
  index: number;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <motion.div
      className="group relative h-[450px] md:h-[520px] overflow-hidden rounded-xl border border-white/10"
      style={{
        transform: isHovered ? "scale(1.04)" : "scale(1)",
        boxShadow: isHovered
          ? "0 20px 40px rgba(0, 0, 0, 0.3), 0 10px 20px rgba(0, 0, 0, 0.2)"
          : "0 4px 12px rgba(0, 0, 0, 0.15), 0 2px 6px rgba(0, 0, 0, 0.1)",
        transition: "transform 500ms cubic-bezier(0.22, 1, 0.36, 1), box-shadow 500ms cubic-bezier(0.22, 1, 0.36, 1)",
      }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {vimeoId ? (
        <div
          className="absolute inset-0 w-full h-full overflow-hidden"
          style={{
            transform: isHovered ? "scale(1.05)" : "scale(1)",
            transition: "transform 500ms cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        >
          <iframe
            src={`https://player.vimeo.com/video/${vimeoId}?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1`}
            className="absolute pointer-events-none"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: "100vw",
              height: "56.25vw", // 16:9 aspect ratio
              minHeight: "100%",
              minWidth: "177.78vh", // 16:9 aspect ratio (100 / (9/16))
              transform: "translate(-50%, -50%)",
            }}
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            title={title}
          />
        </div>
      ) : (
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          style={{
            transform: isHovered ? "scale(1.05)" : "scale(1)",
            transition: "transform 500ms cubic-bezier(0.22, 1, 0.36, 1)",
          }}
          src={src}
          poster={poster}
          muted
          loop
          playsInline
          preload="metadata"
        />
      )}

      {/* Frosted glass overlay - luxury glass case effect */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backdropFilter: "blur(0.5px) saturate(1.2)",
          WebkitBackdropFilter: "blur(0.5px) saturate(1.2)",
          background: "linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 50%, rgba(255, 255, 255, 0.08) 100%)",
          boxShadow: "inset 0 0 40px rgba(255, 255, 255, 0.08), inset 0 1px 1px rgba(255, 255, 255, 0.15)",
        }}
      />

      {/* Permanent dark gradient overlay - MUCH darker for text readability */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(to top, rgba(0, 0, 0, 0.90) 0%, rgba(0, 0, 0, 0.60) 35%, rgba(0, 0, 0, 0.30) 60%, rgba(0, 0, 0, 0.15) 100%)",
        }}
      />

      {/* Vignette for containment - snow globe effect */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, transparent 30%, rgba(0, 0, 0, 0.30) 100%)",
        }}
      />

      {/* Hover enhancement - subtle additional darkening on hover */}
      <div className={`absolute inset-0 bg-black/0 transition-opacity duration-500 ${isHovered ? "opacity-10" : "opacity-0"}`} />

      {/* Content */}
      <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
        <h3
          className="font-serif text-3xl md:text-4xl font-bold text-white mb-1"
          style={{
            textShadow: '0 2px 12px rgba(0, 0, 0, 0.9), 0 4px 24px rgba(0, 0, 0, 0.6)',
            letterSpacing: '-0.01em'
          }}
        >
          {title}
        </h3>
        <p
          className="text-sm md:text-base font-medium text-white/90 uppercase tracking-wider"
          style={{
            textShadow: '0 2px 8px rgba(0, 0, 0, 0.8)'
          }}
        >{subtitle}</p>

        {/* View Film Button - Solid white button that slides up on hover */}
        <div
          className={`mt-5 transition-all duration-500 ${
            isHovered ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
          }`}
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-ink rounded-full text-xs font-semibold uppercase tracking-wider hover:shadow-[0_4px_16px_rgba(255,255,255,0.4)] transition-all duration-300"
          >
            <span>View Film</span>
            <svg
              className="h-3.5 w-3.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function SignatureWork() {
  return (
    <section id="signature-work" className="bg-cream px-6 py-20 md:py-32 min-h-screen flex flex-col justify-center overflow-hidden">
      <div className="mx-auto max-w-7xl w-full">
        <motion.div
          className="mb-12 md:mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Eyebrow */}
          <p className="text-xs md:text-sm text-espresso/60 uppercase font-medium mb-6 tracking-[0.25em]">
            Featured Films
          </p>

          {/* Main heading */}
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-ink mb-6 tracking-tight">
            Signature Work
          </h2>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-espresso/80 max-w-2xl mx-auto leading-relaxed">
            Each film is a unique love story, crafted with artistry and intention.
          </p>
        </motion.div>

        <div className="grid gap-6 md:gap-8 md:grid-cols-3">
          {signatureWork.map((work, index) => (
            <VideoCard key={work.title} {...work} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
