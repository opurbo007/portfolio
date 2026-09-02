"use client";
import { useAnimatedFavicon } from "@/hooks/useAnimatedFavicon";

export default function AnimatedFavicon() {
  useAnimatedFavicon("OPU PAL", "OPU PAL | Portfolio", {
    speed: 800,
    bg: "#0d1b2a",
    accent: "#5eead4",
  });
  return null;
}