"use client";

import { useState, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import Image from "next/image";

// For this example, I'll assume it's named 'sve-logo.png'.
const LOGO_PATH = "/logo.png";

export default function LoadingScreen({ children }: { children: React.ReactNode }) {
  const [progress, setProgress] = useState(0);
  const [show, setShow] = useState(false);
  const [exit, setExit] = useState(false);

  // Check sessionStorage on mount to see if this is first load
  useEffect(() => {
    const hasVisited = sessionStorage.getItem("hasVisited");

    if (!hasVisited) {
      // First load, set the flag and show splash screen
      sessionStorage.setItem("hasVisited", "true");
      setShow(true);
      // Show splash screen for 5 seconds on first load
      const timer = setTimeout(() => setShow(false), 5000);
      return () => clearTimeout(timer);
    }
  }, []);

  // Simulation of loading progress
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        const increment = Math.floor(Math.random() * 5) + 2;
        return Math.min(prev + increment, 100);
      });
    }, 100);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    useGLTF.preload("/models/ashwagandha-compress.glb");
    useGLTF.preload("/models/safed-musli-compress.glb");
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      setTimeout(() => {
        setExit(true);
      }, 300); // small pause feels premium
    }
  }, [progress]);

  useEffect(() => {
    if (exit) {
      const timer = setTimeout(() => setShow(false), 1200); // match animation duration
      return () => clearTimeout(timer);
    }
  }, [exit]);

  if (show) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#214d3b] overflow-hidden z-9999999">
        <div className="flex flex-col items-center justify-center min-h-screen bg-[#214d3b]">
          {/* Container for the logo layers */}
          <div
            className={`relative transition-all duration-1200 ease-in-out ${exit ? "scale-[0.25] :scale-[0.30] -translate-x-[23vw] md:-translate-x-[36vw] -translate-y-[40vh] md:-translate-y-[40vh]" : "scale-100 translate-x-0 translate-y-0"}`}
            style={{ transformOrigin: "top left" }}>
            {/* 1. The Base Layer: A dark, grayscale version of the logo */}
            <Image
              src={LOGO_PATH}
              alt="SVE Logo Base"
              width={500}
              height={300}
              className="w-full h-auto filter grayscale brightness-[0.2] opacity-50"
              priority
            />

            {/* 2. The Fill Layer: The colored logo, masked by the wave */}
            <div
              className="absolute inset-0 w-full h-full"
              style={{
                // Apply the wave SVG as a mask
                maskImage: `url("https://i.imgur.com/uFpLbYt.png")`,
                // Make it wider for the horizontal flow animation
                maskSize: "150% 200%",
                maskRepeat: "no-repeat",
                // Animate the vertical position based on progress.
                // 100% is at the bottom (hidden), moving up to negative values to fully reveal.
                maskPosition: `0% calc(-25% + ${progress}%)`,
                // Apply the horizontal wave flow animation
                animation: "wave-flow 3s linear infinite",
                // Smooth out the vertical filling movement
                transition: "mask-position 0.2s linear",
              }}>
              <Image src={LOGO_PATH} alt="SVE Logo Fill" width={500} height={300} className="w-full h-auto" priority />
            </div>
          </div>

          {/* Loading Text & Percentage */}
          <div className="mt-6 flex items-center gap-2 font-mono text-black">
            <span className="text-sm uppercase tracking-widest opacity-70">loading...</span>
            <span className="text-lg font-bold min-w-[3ch] text-right">{progress}%</span>
          </div>

          {/* Define the CSS animation for the horizontal wave flow */}
          <style jsx>{`
            @keyframes wave-flow {
              0% {
                mask-position-x: 0%;
              }
              100% {
                mask-position-x: 100%;
              }
            }
          `}</style>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
