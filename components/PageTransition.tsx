"use client";

import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

type Props = {
  children: React.ReactNode;
  mode?: "crossfade" | "radial" | "fadeToBlack";
  tint?: string; // e.g. "#FAF7F2" (light) or "rgba(28,26,24,.92)" (dark)
};

export default function PageTransition({
  children,
  mode = "crossfade",
  tint = "#FAF7F2",
}: Props) {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // initial mount fade-in
    const t = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(t);
  }, []);

  const base = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
    exit:    { opacity: 0, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } },
  };

  const fadeToBlack = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.3 } },
    exit:    { opacity: 0, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } },
  };

  const radial = {
    initial: { opacity: 1, clipPath: "circle(0% at var(--lvr-x, 50%) var(--lvr-y, 50%))" },
    animate: { opacity: 1, clipPath: "circle(140% at var(--lvr-x, 50%) var(--lvr-y, 50%))",
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
    exit:    { opacity: 1, clipPath: "circle(0% at var(--lvr-x, 50%) var(--lvr-y, 50%))",
      transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
  };

  const getAnimationProps = () => {
    if (mode === "fadeToBlack") return fadeToBlack;
    if (mode === "radial") return radial;
    return base;
  };

  return (
    <>
      {/* Initial tint fade on first load */}
      <motion.div
        aria-hidden
        className="lvr-initial-fade"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        style={{ background: tint, pointerEvents: "none" }}
      />

      {/* Fade to black overlay - only for fadeToBlack mode */}
      {mode === "fadeToBlack" && (
        <AnimatePresence>
          {pathname && (
            <motion.div
              key={`overlay-${pathname}`}
              className="fixed inset-0 z-[200] pointer-events-none bg-black"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0 }}
              exit={{ opacity: 1 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              aria-hidden
            />
          )}
        </AnimatePresence>
      )}

      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          {...getAnimationProps()}
          className={mode === "radial" ? "lvr-radial-mask" : ""}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
}
