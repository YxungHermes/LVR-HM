"use client";

import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Preloader from "./Preloader";

export default function PreloaderProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showPreloader, setShowPreloader] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Check if this is the first load in this session
    const hasLoadedBefore = sessionStorage.getItem("lvr_has_loaded");

    if (!hasLoadedBefore) {
      // First load ever in this session - show preloader
      setShowPreloader(true);
      setIsInitialLoad(true);
      sessionStorage.setItem("lvr_has_loaded", "true");
    } else {
      // Already loaded before in this session - skip preloader
      setIsInitialLoad(false);
    }
  }, []);

  useEffect(() => {
    // Optional: Show preloader on route changes (but not on initial load)
    // This runs when pathname or searchParams change
    if (!isInitialLoad && pathname) {
      // Only show on route change if it's not the initial load
      // You can uncomment this to enable route transition preloading:
      // setShowPreloader(true);

      // Hide after a short delay (simulating route transition)
      // const timer = setTimeout(() => {
      //   setShowPreloader(false);
      // }, 400);
      // return () => clearTimeout(timer);
    }
  }, [pathname, searchParams, isInitialLoad]);

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
