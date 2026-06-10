"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Layout, Server, Code, Database, Wrench } from "lucide-react";

interface Skill {
  name: string;
  level: number; // 0-100
  magicType: "frontend" | "backend" | "language" | "database" | "tool";
}

const skillCategories = [
  { id: "frontend", name: "Frontend Spells", icon: <Layout className="w-5 h-5" />, color: "emerald" },
  { id: "backend", name: "Backend Sorcery", icon: <Server className="w-5 h-5" />, color: "violet" },
  { id: "language", name: "Runic Languages", icon: <Code className="w-5 h-5" />, color: "gold" },
  { id: "database", name: "Data Vaults", icon: <Database className="w-5 h-5" />, color: "cyan" },
  { id: "tool", name: "Alchemy Tools", icon: <Wrench className="w-5 h-5" />, color: "silver" },
];

const skillsData: Skill[] = [
  // Frontend
  { name: "React", level: 90, magicType: "frontend" },
  { name: "Next.js", level: 85, magicType: "frontend" },
  { name: "Tailwind CSS", level: 95, magicType: "frontend" },
  { name: "Framer Motion", level: 80, magicType: "frontend" },
  // Backend
  { name: "Node.js", level: 85, magicType: "backend" },
  { name: "GraphQL", level: 75, magicType: "backend" },
  { name: "REST APIs", level: 90, magicType: "backend" },
  { name: "Express", level: 80, magicType: "backend" },
  // Languages
  { name: "TypeScript", level: 90, magicType: "language" },
  { name: "JavaScript", level: 95, magicType: "language" },
  { name: "Python", level: 75, magicType: "language" },
  { name: "Go", level: 60, magicType: "language" },
  // Databases
  { name: "PostgreSQL", level: 80, magicType: "database" },
  { name: "MongoDB", level: 85, magicType: "database" },
  { name: "Redis", level: 70, magicType: "database" },
  { name: "Prisma", level: 85, magicType: "database" },
  // Tools
  { name: "Git", level: 90, magicType: "tool" },
  { name: "Docker", level: 75, magicType: "tool" },
  { name: "AWS", level: 70, magicType: "tool" },
  { name: "Vercel", level: 95, magicType: "tool" },
];

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredSkills = selectedCategory === "all" 
    ? skillsData 
    : skillsData.filter(skill => skill.magicType === selectedCategory);

  const getMagicStyles = (type: Skill["magicType"]) => {
    switch (type) {
      case "frontend":
        return {
          glow: "group-hover:shadow-[0_0_15px_rgba(91,231,196,0.25)]",
          border: "group-hover:border-[#5BE7C4]/40",
          barColor: "bg-gradient-to-r from-[#5BE7C4] to-[#6D5DF6]",
          txtGlow: "text-[#5BE7C4] glow-text-emerald",
          symbol: "✦",
        };
      case "backend":
        return {
          glow: "group-hover:shadow-[0_0_15px_rgba(109,93,246,0.25)]",
          border: "group-hover:border-[#6D5DF6]/40",
          barColor: "bg-gradient-to-r from-[#6D5DF6] to-[#5BE7C4]",
          txtGlow: "text-[#6D5DF6] glow-text-violet",
          symbol: "✹",
        };
      case "language":
        return {
          glow: "group-hover:shadow-[0_0_15px_rgba(217,180,74,0.25)]",
          border: "group-hover:border-[#D9B44A]/40",
          barColor: "bg-gradient-to-r from-[#D9B44A] to-[#6D5DF6]",
          txtGlow: "text-[#D9B44A] glow-text-gold",
          symbol: "ᛟ",
        };
      case "database":
        return {
          glow: "group-hover:shadow-[0_0_15px_rgba(6,182,212,0.25)]",
          border: "group-hover:border-cyan-500/40",
          barColor: "bg-gradient-to-r from-cyan-400 to-[#6D5DF6]",
          txtGlow: "text-cyan-400 [text-shadow:0_0_8px_rgba(6,182,212,0.4)]",
          symbol: "⚿",
        };
      case "tool":
        default:
        return {
          glow: "group-hover:shadow-[0_0_15px_rgba(220,227,240,0.25)]",
          border: "group-hover:border-[#DCE3F0]/40",
          barColor: "bg-gradient-to-r from-[#DCE3F0] to-[#6D5DF6]",
          txtGlow: "text-[#DCE3F0] [text-shadow:0_0_8px_rgba(220,227,240,0.4)]",
          symbol: "⚙",
        };
    }
  };

  return (
    <section id="skills" className="relative py-24 section-backdrop">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#5BE7C4]/15 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-20">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl sm:text-5xl font-light tracking-[3px] text-[#DCE3F0] mb-3">
            Magical <span className="font-semibold text-[#5BE7C4] glow-text-emerald">Grimoire</span>
          </h2>
          <div className="h-[2px] w-24 bg-gradient-to-r from-[#5BE7C4] via-[#6D5DF6] to-[#D9B44A] mx-auto mt-4 rounded-full" />
        </div>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 mb-14">
          <button
            onClick={() => setSelectedCategory("all")}
            className={`px-5 py-2 rounded-lg font-sans text-xs tracking-[2px] uppercase border transition-all duration-300 cursor-pointer ${
              selectedCategory === "all"
                ? "border-[#5BE7C4] bg-[#5BE7C4]/5 text-[#5BE7C4] shadow-[0_0_10px_rgba(91,231,196,0.2)]"
                : "border-[#DCE3F0]/10 glass-panel text-[#DCE3F0]/80 hover:border-[#DCE3F0]/30"
            }`}
          >
            All Spells
          </button>
          
          {skillCategories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`flex items-center gap-2 px-5 py-2 rounded-lg font-sans text-xs tracking-[2px] uppercase border transition-all duration-300 cursor-pointer ${
                selectedCategory === cat.id
                  ? cat.id === "frontend"
                    ? "border-[#5BE7C4] bg-[#5BE7C4]/5 text-[#5BE7C4] shadow-[0_0_10px_rgba(91,231,196,0.2)]"
                    : cat.id === "backend"
                    ? "border-[#6D5DF6] bg-[#6D5DF6]/5 text-[#6D5DF6] shadow-[0_0_10px_rgba(109,93,246,0.2)]"
                    : "border-[#D9B44A] bg-[#D9B44A]/5 text-[#D9B44A] shadow-[0_0_10px_rgba(217,180,74,0.2)]"
                  : "border-[#DCE3F0]/10 glass-panel text-[#DCE3F0]/80 hover:border-[#DCE3F0]/30"
              }`}
            >
              {cat.icon}
              <span>{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Crystal Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {filteredSkills.map((skill, index) => {
            const styles = getMagicStyles(skill.magicType);

            return (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className={`group relative p-6 rounded-xl glass-panel border border-[#DCE3F0]/8 transition-all duration-400 ${styles.glow} ${styles.border} flex flex-col justify-between overflow-hidden cursor-default`}
              >
                {/* SVG background diamond geometric lines indicating crystal facet */}
                <div className="absolute -top-12 -right-12 w-28 h-28 opacity-5 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none">
                  <svg viewBox="0 0 100 100" fill="none" className="w-full h-full stroke-[#DCE3F0] stroke-[1]">
                    <polygon points="50,10 90,50 50,90 10,50" />
                    <line x1="50" y1="10" x2="50" y2="90" />
                    <line x1="10" y1="50" x2="90" y2="50" />
                  </svg>
                </div>

                <div className="flex items-center justify-between mb-5 relative z-10">
                  <span className="font-mono text-xs tracking-[1px] text-[#DCE3F0]/50 uppercase">
                    {skill.magicType}
                  </span>
                  {/* Glowing runic symbol */}
                  <span className={`font-serif text-lg leading-none transition-all duration-300 group-hover:scale-125 ${styles.txtGlow}`}>
                    {styles.symbol}
                  </span>
                </div>

                <div className="relative z-10 mb-8">
                  <h3 className="font-serif text-xl font-medium tracking-[1px] text-[#DCE3F0] group-hover:text-white transition-colors">
                    {skill.name}
                  </h3>
                </div>

                {/* Progress bar container (Liquid Mana Tube) */}
                <div className="relative z-10">
                  <div className="flex justify-between items-center text-xs mb-2.5">
                    <span className="font-mono text-[#DCE3F0]/65">Mana Strength</span>
                    <span className={`font-mono font-semibold ${styles.txtGlow}`}>
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-1.5 w-full bg-[#05070f] rounded-full overflow-hidden border border-[#DCE3F0]/5 relative">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: "easeOut", delay: index * 0.05 }}
                      className={`h-full rounded-full ${styles.barColor} relative`}
                    >
                      {/* Flowing highlight spark */}
                      <div className="absolute right-0 top-0 w-2 h-full bg-white opacity-40 blur-[1px] animate-pulse" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
