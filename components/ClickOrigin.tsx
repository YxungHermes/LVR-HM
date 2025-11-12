"use client";

import { useEffect } from "react";

export default function ClickOrigin() {
  useEffect(() => {
    const setVars = (e: MouseEvent) => {
      const x = `${e.clientX}px`;
      const y = `${e.clientY}px`;
      document.documentElement.style.setProperty("--lvr-x", x);
      document.documentElement.style.setProperty("--lvr-y", y);
    };
    window.addEventListener("click", setVars, { capture: true });
    return () => window.removeEventListener("click", setVars, { capture: true } as any);
  }, []);
  return null;
}
