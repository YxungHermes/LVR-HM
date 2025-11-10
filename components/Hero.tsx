"use client";

import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { hero } from "@/content/home";

export default function Hero() {
  const [videoError, setVideoError] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Try to play the video
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.error("Video autoplay failed:", error);
        });
      }
    }
  }, []);

  const handleVideoError = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    console.error("Video failed to load:", e);
    setVideoError(true);
  };

  const handleVideoLoaded = () => {
    console.log("Video loaded successfully");
    setVideoLoaded(true);
  };

  return (
    <section className="relative h-[92vh] min-h-[640px] bg-black">
      {/* Video Background */}
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        poster={hero.poster}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        onError={handleVideoError}
        onLoadedData={handleVideoLoaded}
        crossOrigin="anonymous"
      >
        <source src={hero.video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Fallback message for debugging */}
      {videoError && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/80 text-white">
          <div className="text-center">
            <p className="text-sm">Video failed to load</p>
            <p className="mt-2 text-xs opacity-60">Check browser console for details</p>
          </div>
        </div>
      )}

      {/* Gradient Overlay */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#00000066] to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-6xl items-center px-6">
        <div className="max-w-3xl">
          <motion.h1
            className="heading-xl font-serif tracking-wider text-white [font-variant-ligatures:common-ligatures]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {hero.title.split(" ").slice(0, 3).join(" ")}
            <br />
            {hero.title.split(" ").slice(3).join(" ")}
          </motion.h1>

          <motion.p
            className="subhead mt-4 text-white/90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {hero.sub}
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <a
              href="#packages"
              className="group bg-rose-grad rounded-full px-6 py-3 text-white transition-all duration-300 hover:scale-105 hover:shadow-lg focus-ring"
            >
              View Packages
            </a>
            <a
              href="#signature-work"
              className="rounded-full border border-white/60 bg-white/10 px-6 py-3 text-white/90 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/20 focus-ring"
            >
              Watch Our Films
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="mt-8 flex gap-8 text-sm text-white/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div>
              <span className="font-serif text-2xl font-bold text-white">
                {hero.stats.weddings}
              </span>
              <span className="ml-2">Weddings</span>
            </div>
            <div>
              <span className="font-serif text-2xl font-bold text-white">
                {hero.stats.rating}
              </span>
              <span className="ml-2">Rating</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
