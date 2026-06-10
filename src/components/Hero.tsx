"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Send } from "lucide-react";
import MagicCircle from "./MagicCircle";

export default function Hero() {
  const runes = ["ᚠ", "ᛗ", "ᛚ", "ᛜ", "ᛞ", "ᛟ"];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden hero-transparent"
    >
      {/* Subtle readability scrim behind hero content */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B1020]/20 via-transparent to-[#0B1020]/30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-center relative z-20">
        
        {/* Left Side: Cinematic Greeting & Description */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="md:col-span-7 flex flex-col items-start text-left"
        >
          {/* Spell Tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#D9B44A]/30 bg-[#D9B44A]/5 text-xs text-[#D9B44A] tracking-[3px] uppercase font-mono mb-8 animate-float-slow">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Adventurer Class S-Rank</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-7xl font-light tracking-[2px] leading-tight text-[#DCE3F0] mb-4">
            Hello, I&apos;m <br />
            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#DCE3F0] via-[#D9B44A] to-[#6D5DF6] glow-text-gold">
              Frieren
            </span>
          </h1>

          <h2 className="font-serif text-lg sm:text-2xl text-[#5BE7C4] tracking-[3px] uppercase mb-6 font-medium glow-text-emerald">
            Developer • Designer • Spell-Seeker
          </h2>

          <p className="font-sans text-base sm:text-lg text-[#DCE3F0]/80 leading-relaxed max-w-xl mb-10">
            I explore the vast frontier of web technologies, creating spellbinding digital experiences that bridge art and functionality. Like a mage collecting ordinary spells, I find joy in discovering and mastering the intricate patterns of code.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
            {/* View Projects (Violet/Emerald Theme) */}
            <button
              onClick={() => scrollToSection("projects")}
              className="group relative flex items-center justify-center gap-3 px-8 py-3.5 rounded-lg font-sans text-sm font-semibold tracking-[2px] uppercase text-[#0B1020] bg-gradient-to-r from-[#5BE7C4] to-[#6D5DF6] shadow-[0_0_15px_rgba(91,231,196,0.3)] hover:shadow-[0_0_25px_rgba(109,93,246,0.5)] transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
            >
              <span>View Quests</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
            </button>

            {/* Contact Me (Glassmorphic) */}
            <button
              onClick={() => scrollToSection("contact")}
              className="group relative flex items-center justify-center gap-3 px-8 py-3.5 rounded-lg border border-[#DCE3F0]/15 glass-panel text-[#DCE3F0] hover:text-[#5BE7C4] hover:border-[#5BE7C4]/50 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Send Message</span>
              <Send className="w-4 h-4 text-[#DCE3F0]/60 group-hover:text-[#5BE7C4] transition-colors duration-300" />
            </button>
          </div>
        </motion.div>

        {/* Right Side: Image Container inside Magic Circle */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="md:col-span-5 flex justify-center items-center relative py-12 md:py-0"
        >
          {/* Rotating Magic Circle Background */}
          <div className="absolute w-[120%] sm:w-[130%] aspect-square flex items-center justify-center pointer-events-none">
            <MagicCircle size="100%" color="violet" />
          </div>

          {/* Core Profile Container */}
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full p-2 bg-[#0B1020]/80 shadow-[0_0_30px_rgba(109,93,246,0.2)] border border-[#6D5DF6]/30 overflow-hidden flex items-center justify-center">
            {/* Inner rotating glowing trim */}
            <div className="absolute inset-0 rounded-full border border-[#D9B44A]/20 animate-spin-slow pointer-events-none" />
            
            {/* Profile Avatar */}
            <div className="relative w-full h-full rounded-full overflow-hidden border border-[#DCE3F0]/10">
              <Image
                src="/avatar.png"
                alt="Frieren"
                fill
                preload
                sizes="(max-width: 768px) 256px, 288px"
                className="object-cover"
              />
            </div>
          </div>

          {/* Floating magical runes */}
          {runes.map((rune, i) => (
            <motion.span
              key={i}
              className="absolute font-mono text-xl text-[#D9B44A] opacity-60 glow-text-gold select-none pointer-events-none"
              style={{
                top: `${20 + i * 14}%`,
                left: `${10 + (i % 2) * 75 + Math.sin(i) * 5}%`,
              }}
              animate={{
                y: [0, -15, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 4 + i * 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {rune}
            </motion.span>
          ))}
        </motion.div>
      </div>

      {/* Ground Path Accent Line */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#DCE3F0]/10 to-transparent" />
    </section>
  );
}
