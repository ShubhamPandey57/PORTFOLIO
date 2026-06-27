"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/* ───────────────────────────────────────────────
   Floating light motes — purely decorative
   ─────────────────────────────────────────────── */
function FloatingMotes() {
  const motes = Array.from({ length: 18 }, (_, i) => ({
    id: i,
    left: `${5 + Math.random() * 90}%`,
    top: `${10 + Math.random() * 70}%`,
    size: 2 + Math.random() * 4,
    delay: Math.random() * 8,
    duration: 6 + Math.random() * 10,
    opacity: 0.15 + Math.random() * 0.35,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-[5]">
      {motes.map((m) => (
        <motion.div
          key={m.id}
          className="absolute rounded-full"
          style={{
            left: m.left,
            top: m.top,
            width: m.size,
            height: m.size,
            background: `radial-gradient(circle, rgba(255,248,220,${m.opacity}) 0%, transparent 70%)`,
            boxShadow: `0 0 ${m.size * 3}px rgba(255,248,220,${m.opacity * 0.6})`,
          }}
          animate={{
            y: [0, -30 - Math.random() * 40, 0],
            x: [0, 10 - Math.random() * 20, 0],
            opacity: [m.opacity * 0.3, m.opacity, m.opacity * 0.3],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: m.duration,
            delay: m.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

/* ───────────────────────────────────────────────
   CSS-only foreground bokeh & grass effects
   ─────────────────────────────────────────────── */
function ForegroundEffects() {
  const bokehDots = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    bottom: `${Math.random() * 25}%`,
    size: 8 + Math.random() * 30,
    color:
      i % 4 === 0
        ? "rgba(255, 182, 193, 0.12)"
        : i % 4 === 1
        ? "rgba(255, 223, 120, 0.10)"
        : i % 4 === 2
        ? "rgba(186, 230, 180, 0.10)"
        : "rgba(200, 180, 255, 0.08)",
    delay: Math.random() * 5,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Soft grass/flower gradient at the very bottom */}
      <div
        className="absolute bottom-0 left-0 w-full h-[30%]"
        style={{
          background:
            "linear-gradient(to top, rgba(34,80,30,0.35) 0%, rgba(60,120,40,0.15) 40%, transparent 100%)",
        }}
      />

      {/* Bokeh circles */}
      {bokehDots.map((dot) => (
        <motion.div
          key={dot.id}
          className="absolute rounded-full"
          style={{
            left: dot.left,
            bottom: dot.bottom,
            width: dot.size,
            height: dot.size,
            background: `radial-gradient(circle, ${dot.color} 0%, transparent 70%)`,
            filter: "blur(3px)",
          }}
          animate={{
            y: [0, -8, 0],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 4 + Math.random() * 3,
            delay: dot.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

/* ───────────────────────────────────────────────
   Main Parallax Background Component
   ─────────────────────────────────────────────── */
export default function ParallaxBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [viewportHeight, setViewportHeight] = useState(0);

  useEffect(() => {
    setViewportHeight(window.innerHeight);
    const handleResize = () => setViewportHeight(window.innerHeight);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { scrollY } = useScroll();

  // Parallax transforms — each layer moves at a different rate
  const skyY = useTransform(scrollY, [0, viewportHeight * 3], [0, -150]);
  const villageY = useTransform(scrollY, [0, viewportHeight * 3], [0, -350]);
  const foregroundY = useTransform(scrollY, [0, viewportHeight * 3], [0, -550]);

  // Fade the entire scene as user scrolls deep into content
  const sceneOpacity = useTransform(scrollY, [0, viewportHeight * 1.2, viewportHeight * 2.5], [1, 0.7, 0.3]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 w-full h-full overflow-hidden z-0"
      aria-hidden="true"
    >
      {/* ── Layer 1: Sky + Mountains (slowest) ── */}
      <motion.div
        className="absolute inset-0 w-full h-[130%] -top-[10%]"
        style={{
          y: skyY,
          backgroundImage: "url('/bg-sky.png')",
          backgroundSize: "cover",
          backgroundPosition: "center top",
          backgroundRepeat: "no-repeat",
          willChange: "transform",
        }}
      />

      {/* ── Layer 2: Village Midground (medium speed) ── */}
      <motion.div
        className="absolute inset-0 w-full h-[140%] -top-[5%]"
        style={{
          y: villageY,
          backgroundImage: "url('/bg-village.png')",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          willChange: "transform",
        }}
      />

      {/* ── Layer 3: Foreground effects (fastest, CSS-only) ── */}
      <motion.div
        className="absolute inset-0 w-full h-[150%]"
        style={{
          y: foregroundY,
          willChange: "transform",
        }}
      >
        <ForegroundEffects />
      </motion.div>

      {/* ── Floating light particles ── */}
      <FloatingMotes />

      {/* ── Readability overlay: dark blue vignette from edges ── */}
      <motion.div
        className="absolute inset-0 z-[6]"
        style={{
          opacity: sceneOpacity,
          background: `
            radial-gradient(ellipse 80% 60% at 50% 40%, transparent 30%, rgba(11,16,32,0.35) 100%)
          `,
        }}
      />

      {/* ── Content section overlay: darkens progressively ── */}
      <motion.div
        className="absolute inset-0 z-[7]"
        style={{
          background: `
            linear-gradient(
              to bottom,
              transparent 0%,
              transparent 15%,
              rgba(11,16,32,0.25) 35%,
              rgba(11,16,32,0.55) 55%,
              rgba(11,16,32,0.80) 75%,
              rgba(5,7,15,0.95) 100%
            )
          `,
        }}
      />

      {/* ── Cinematic vignette — darkened edges ── */}
      <div
        className="absolute inset-0 z-[8] pointer-events-none"
        style={{
          boxShadow: "inset 0 0 200px 60px rgba(5,7,15,0.5)",
        }}
      />
    </div>
  );
}
