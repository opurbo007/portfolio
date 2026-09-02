"use client";
import { useAnimatedFavicon } from "@/hooks/useAnimatedFavicon";

export default function AnimatedFavicon() {
  useAnimatedFavicon("OPU PAL", "OPU PAL | Portfolio", {
    speed: 800,
    bg: "#000000",
    accent: "#ffffff",
  });
  return null;
}