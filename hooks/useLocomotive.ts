// @/hooks/useLocomotive.ts
"use client";

import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

export const useLocomotiveScroll = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Only run in the browser
    if (typeof window === "undefined" || !scrollRef.current) return;

    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      multiplier: 1,
      lerp: 0.07, // lower = smoother
    });

    return () => {
      scroll.destroy();
    };
  }, []);

  return scrollRef;
};