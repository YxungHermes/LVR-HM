"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { signatureWork } from "@/content/home";

function VideoCard({ title, subtitle, src, poster, index }: {
  title: string;
  subtitle: string;
  src: string;
  poster: string;
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
      className="group relative h-[600px] overflow-hidden rounded-lg"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video
        ref={videoRef}
        className="h-full w-full object-cover"
        src={src}
        poster={poster}
        muted
        loop
        playsInline
        preload="metadata"
      />

      {/* Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-60"}`} />

      {/* Content */}
      <div className="absolute inset-x-0 bottom-0 p-6 text-white">
        <h3 className="font-serif text-3xl font-bold tracking-wide">
          {title}
        </h3>
        <p className="mt-1 text-sm text-white/80">{subtitle}</p>

        {/* View Film Link */}
        <a
          href="#"
          className={`mt-4 inline-flex items-center text-sm font-medium transition-all duration-300 ${
            isHovered ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0"
          }`}
        >
          <span className="mr-2">View Film</span>
          <svg
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </a>
      </div>
    </motion.div>
  );
}

export default function SignatureWork() {
  return (
    <section id="signature-work" className="bg-cream px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="heading-lg font-serif tracking-wider">
            Signature Work
          </h2>
          <p className="subhead mx-auto mt-4 max-w-2xl text-espresso">
            Each film is a unique love story, crafted with artistry and intention.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {signatureWork.map((work, index) => (
            <VideoCard key={work.title} {...work} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
