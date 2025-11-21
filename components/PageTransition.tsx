"use client";

import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

type Props = {
  children: React.ReactNode;
  mode?: "crossfade" | "radial";
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
    initial: { opacity: 0, filter: "blur(10px)" },
    animate: { opacity: 1, filter: "blur(0px)", transition: { duration: 1.0, ease: [0.22, 1, 0.36, 1] } },
    exit:    { opacity: 0, filter: "blur(10px)", transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
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

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={pathname}
          {...(mode === "crossfade"
            ? base
            : {
                initial: { opacity: 0, clipPath: "circle(0% at var(--lvr-x, 50%) var(--lvr-y, 50%))", filter: "blur(20px)" },
                animate: { opacity: 1, clipPath: "circle(150% at var(--lvr-x, 50%) var(--lvr-y, 50%))", filter: "blur(0px)",
                  transition: { duration: 1.0, ease: [0.22, 1, 0.36, 1] } },
                exit:    { opacity: 0, clipPath: "circle(0% at var(--lvr-x, 50%) var(--lvr-y, 50%))", filter: "blur(20px)",
                  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
              })}
          className={mode === "radial" ? "lvr-radial-mask" : ""}
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "translateZ(0)"
          }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
}
