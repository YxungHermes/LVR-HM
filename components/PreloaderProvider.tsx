"use client";

import { useEffect, useState } from "react";
import Preloader from "./Preloader";

export default function PreloaderProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showPreloader, setShowPreloader] = useState(false);

  useEffect(() => {
    // Check if this is the first load in this session
    const hasLoadedBefore = sessionStorage.getItem("lvr_has_loaded");

    if (!hasLoadedBefore) {
      // First load ever in this session - show preloader
      setShowPreloader(true);
      sessionStorage.setItem("lvr_has_loaded", "true");
    }
  }, []);

  const handlePreloaderComplete = () => {
    setShowPreloader(false);
  };

  return (
    <>
      {showPreloader && <Preloader onComplete={handlePreloaderComplete} />}
      {children}
    </>
  );
}
