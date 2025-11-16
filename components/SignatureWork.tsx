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
      className="group relative h-[600px] overflow-hidden rounded-lg"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {vimeoId ? (
        <div className="absolute inset-0 w-full h-full overflow-hidden">
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

      {/* Permanent dark gradient overlay - ensures text is always readable */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(to top, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.35) 40%, rgba(0, 0, 0, 0.2) 100%)",
        }}
      />

      {/* Vignette for containment - snow globe effect */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, transparent 40%, rgba(0, 0, 0, 0.25) 100%)",
        }}
      />

      {/* Hover enhancement - additional darkening on hover */}
      <div className={`absolute inset-0 bg-black/0 transition-opacity duration-300 ${isHovered ? "opacity-20" : "opacity-0"}`} />

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
