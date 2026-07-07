"use client";

import React from "react";

interface MagicCircleProps {
  size?: number | string;
  color?: "violet" | "gold" | "emerald";
  className?: string;
}

export default function MagicCircle({
  size = "100%",
  color = "violet",
  className = "",
}: MagicCircleProps) {
  const colorMap = {
    violet: {
      primary: "strok-[#6D5DF6]",
      secondary: "stroke-[#6D5DF6]/40",
      glow: "rgba(111, 96, 246, 0.25)",
      text: "fill-[#6D5DF6]",
    },
    gold: {
      primary: "stroke-[#D9B44A]",
      secondary: "stroke-[#D9B44A]/40",
      glow: "rgba(217, 180, 74, 0.25)",
      text: "fill-[#D9B44A]",
    },
    emerald: {
      primary: "stroke-[#5BE7C4]",
      secondary: "stroke-[#5BE7C4]/40",
      glow: "rgba(91, 231, 196, 0.25)",
      text: "fill-[#5BE7C4]",
    },
  };

  const activeColor = colorMap[color];

  // Runic string to render in the circular text path
  const runes = "ᚠᚢᚦᚨᚱᚲᚷᚹᚺᚾᛁᛃᛇᛈᛉᛊᛏᛒᛖᛗᛚᛜᛞᛟ ᛏᚺᛖ ᛚᛖᚷᛖᚾᛞ ᛟᚠ ᚠᚱᛁᛖᚱᛖᚾ ᛒᛖᛁᛟᚾᛞ ᛃᛟᚢᚱᚾᛖᛃᛋ ᛖᚾᛞ";

  return (
    <div
      className={`relative select-none pointer-events-none ${className}`}
      style={{
        width: size,
        height: size,
        filter: `drop-shadow(0 0 15px ${activeColor.glow})`,
      }}
    >
      <svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <defs>
          {/* Circular path for the text to wrap around */}
          <path
            id="runicPath"
            d="M 100, 100 m -62, 0 a 62,62 0 1,1 124,0 a 62,62 0 1,1 -124,0"
          />
          <path
            id="runicPathInner"
            d="M 100, 100 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
          />
        </defs>

        {/* LAYER 1: Outermost dashed ring (Spins clockwise) */}
        <g className="animate-spin-slow origin-center">
          <circle
            cx="100"
            cy="100"
            r="90"
            className={activeColor.primary}
            strokeWidth="0.75"
            strokeDasharray="5 3 2 3"
          />
          <circle
            cx="100"
            cy="100"
            r="86"
            className={activeColor.secondary}
            strokeWidth="0.5"
          />
          {/* Four ticks marking cardinality */}
          <line x1="100" y1="10" x2="100" y2="15" className={activeColor.primary} strokeWidth="1" />
          <line x1="100" y1="185" x2="100" y2="190" className={activeColor.primary} strokeWidth="1" />
          <line x1="10" y1="100" x2="15" y2="100" className={activeColor.primary} strokeWidth="1" />
          <line x1="185" y1="100" x2="190" y2="100" className={activeColor.primary} strokeWidth="1" />
        </g>

        {/* LAYER 2: Text path with ancient runes (Spins counter-clockwise) */}
        <g className="animate-spin-reverse-slow origin-center">
          <circle
            cx="100"
            cy="100"
            r="70"
            className={activeColor.secondary}
            strokeWidth="0.5"
            strokeDasharray="15 5 10 5"
          />
          <text className={`${activeColor.text} font-mono text-[5.5px] tracking-[2px] opacity-75`}>
            <textPath href="#runicPath" startOffset="0%">
              {runes}
            </textPath>
          </text>
        </g>

        {/* LAYER 3: The Octagram & Outer Hexagons (Spins clockwise) */}
        <g className="animate-spin-slow origin-center">
          {/* First Square */}
          <rect
            x="47"
            y="47"
            width="106"
            height="106"
            className={activeColor.secondary}
            strokeWidth="0.75"
            transform="rotate(0 100 100)"
          />
          {/* Second Square rotated by 45 degrees */}
          <rect
            x="47"
            y="47"
            width="106"
            height="106"
            className={activeColor.secondary}
            strokeWidth="0.75"
            transform="rotate(45 100 100)"
          />
          {/* Overlaid circle enclosing the squares */}
          <circle
            cx="100"
            cy="100"
            r="53"
            className={activeColor.primary}
            strokeWidth="0.5"
          />
        </g>

        {/* LAYER 4: Inner runic details & core star (Spins counter-clockwise) */}
        <g className="animate-spin-reverse-slow origin-center">
          {/* Internal text runes */}
          <text className={`${activeColor.text} font-mono text-[4.5px] tracking-[1.5px] opacity-60`}>
            <textPath href="#runicPathInner" startOffset="50%">
              ᛖᛗᛚᛜᛞᛟ ᚠᚢᚦᚨᚱᚲᚷᚹᚺᚾ
            </textPath>
          </text>
          
          <circle
            cx="100"
            cy="100"
            r="32"
            className={activeColor.primary}
            strokeWidth="0.75"
          />
          <circle
            cx="100"
            cy="100"
            r="28"
            className={activeColor.secondary}
            strokeWidth="0.5"
            strokeDasharray="4 2"
          />

          {/* 8-pointed star in the center */}
          <path
            d="M100 78 L103 93 L118 90 L105 100 L113 115 L100 105 L87 115 L95 100 L82 90 L97 93 Z"
            className={activeColor.primary}
            strokeWidth="0.5"
            fill="none"
          />
          <circle
            cx="100"
            cy="100"
            r="6"
            className={activeColor.primary}
            strokeWidth="0.75"
          />
        </g>
      </svg>
    </div>
  );
}
