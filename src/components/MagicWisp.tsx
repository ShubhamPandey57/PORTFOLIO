"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function MagicWisp() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [clickEffect, setClickEffect] = useState(false);
  const [hoverType, setHoverType] = useState<"default" | "gold" | "emerald">("default");

  // Motion values for smooth cursor tracking (declared unconditionally at top)
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const innerX = useMotionValue(-100);
  const innerY = useMotionValue(-100);

  const springConfig = { damping: 40, stiffness: 400, mass: 0.4 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);
  const innerXSpring = useSpring(innerX, springConfig);
  const innerYSpring = useSpring(innerY, springConfig);

  useEffect(() => {
    // Check if device supports hover/coarse pointer (touchscreen check)
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
    if (isTouchDevice) return;

    setIsVisible(true);

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
      innerX.set(e.clientX - 4); // Centered relative to w-2 (8px) wisp seed
      innerY.set(e.clientY - 4);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      const isClickable =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.closest(".interactive-card") ||
        target.getAttribute("role") === "button";

      if (isClickable) {
        setIsHovered(true);
        // Determine hover accent color based on target styles/attributes
        if (target.closest(".card-gold") || target.classList.contains("btn-gold")) {
          setHoverType("gold");
        } else if (target.closest(".card-emerald") || target.classList.contains("btn-emerald")) {
          setHoverType("emerald");
        } else {
          setHoverType("default");
        }
      } else {
        setIsHovered(false);
        setHoverType("default");
      }
    };

    const handleMouseDown = () => {
      setClickEffect(true);
      setTimeout(() => setClickEffect(false), 200);
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mousedown", handleMouseDown);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mousedown", handleMouseDown);
    };
  }, [cursorX, cursorY, innerX, innerY]);

  if (!isVisible) return null;

  // Set colors based on hover target types
  const getGlowColor = () => {
    switch (hoverType) {
      case "gold":
        return "rgba(217, 180, 74, 0.6)";
      case "emerald":
        return "rgba(91, 231, 196, 0.6)";
      default:
        return "rgba(109, 93, 246, 0.6)"; // Violet default
    }
  };

  const getBorderColor = () => {
    switch (hoverType) {
      case "gold":
        return "border-[#D9B44A]";
      case "emerald":
        return "border-[#5BE7C4]";
      default:
        return "border-[#6D5DF6]";
    }
  };

  return (
    <>
      {/* Outer Wisp Aura */}
      <motion.div
        className={`fixed top-0 left-0 w-8 h-8 rounded-full border pointer-events-none z-50`}
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          borderColor: getGlowColor(),
          boxShadow: `0 0 12px ${getGlowColor()}, inset 0 0 8px ${getGlowColor()}`,
        }}
        animate={{
          scale: clickEffect ? 0.75 : isHovered ? 1.5 : 1,
          opacity: isHovered ? 0.9 : 0.6,
        }}
        transition={{ type: "spring", stiffness: 350, damping: 25 }}
      />

      {/* Inner Glowing Mana Seed */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-50"
        style={{
          x: innerXSpring,
          y: innerYSpring,
          background: hoverType === "gold" ? "#D9B44A" : hoverType === "emerald" ? "#5BE7C4" : "#6D5DF6",
          boxShadow: `0 0 8px ${hoverType === "gold" ? "#D9B44A" : hoverType === "emerald" ? "#5BE7C4" : "#6D5DF6"}`,
        }}
        animate={{
          scale: clickEffect ? 1.5 : isHovered ? 0.5 : 1,
        }}
      />
    </>
  );
}
