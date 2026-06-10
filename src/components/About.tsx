"use client";

import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Compass, Shield, Award } from "lucide-react";

interface Milestone {
  year: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  category: "quest" | "level-up" | "achievement";
}

const milestones: Milestone[] = [
  {
    year: "2018",
    title: "Departing the Magic Academy",
    description: "Began my journey into the software craft, learning the core laws of computation (TypeScript, Algorithms, and UI Alchemy).",
    icon: <BookOpen className="w-4 h-4 text-[#D9B44A]" />,
    category: "quest",
  },
  {
    year: "2020",
    title: "Joined the First Guild",
    description: "Apprenticed as a Frontend Engineer. Collaborated with a party of developers to create responsive react interfaces and client portals.",
    icon: <Compass className="w-4 h-4 text-[#5BE7C4]" />,
    category: "quest",
  },
  {
    year: "2022",
    title: "The Mid-Journey Trial",
    description: "Promoted to Full-Stack Mage. Architected high-throughput APIs, node backends, and SQL spellbooks to power cloud architectures.",
    icon: <Shield className="w-4 h-4 text-[#6D5DF6]" />,
    category: "level-up",
  },
  {
    year: "2025 - Present",
    title: "Arch-Mage of Engineering",
    description: "Designing high-performance cloud applications, micro-frontends, and mentoring junior developers in clean architecture spells.",
    icon: <Award className="w-4 h-4 text-[#D9B44A]" />,
    category: "achievement",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-[#0B1020]/45">
      {/* Visual top border dividing sections */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#6D5DF6]/15 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-20">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl sm:text-5xl font-light tracking-[3px] text-[#DCE3F0] mb-3">
            The Adventurer&apos;s <span className="font-semibold text-[#D9B44A] glow-text-gold">Journey</span>
          </h2>
          <div className="h-[2px] w-24 bg-gradient-to-r from-[#D9B44A] via-[#6D5DF6] to-[#5BE7C4] mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Adventurer's Logbook (Personal Story) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative p-8 rounded-2xl glass-panel glow-border-violet group"
          >
            {/* Elegant Golden Corner Accents for Parchment feel */}
            <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-[#D9B44A]/40 rounded-tl" />
            <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-[#D9B44A]/40 rounded-tr" />
            <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-[#D9B44A]/40 rounded-bl" />
            <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-[#D9B44A]/40 rounded-br" />

            <h3 className="font-serif text-2xl font-semibold text-[#D9B44A] tracking-[2px] mb-6 flex items-center gap-3">
              <span>A Mage&apos;s Logbook</span>
            </h3>

            <div className="font-sans text-base text-[#DCE3F0]/85 leading-relaxed space-y-6">
              <p>
                In the fantasy world, magic isn&apos;t just about raw power; it is about imagination and patience. Frieren spends decades traveling, collecting ordinary spells—like turning sweet grapes sour or creating a flower field. 
              </p>
              <p>
                Similarly, my software journey is built on continuous curiosity and patient craftsmanship. I view every program as a spell formulation: the source code is the scroll, the framework is the magic circle, and the final application is the materialized phenomenon. 
              </p>
              <p>
                My quest is to understand the human experience through code. I focus on creating interfaces that feel organic and seamless, backends that are resilient against the erosion of time, and digital systems that bring people together, just as a field of blue moon-lilies connects memories across generations.
              </p>
            </div>
            
            {/* Details panel */}
            <div className="mt-8 pt-6 border-t border-[#DCE3F0]/10 grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="font-mono text-xs uppercase text-[#DCE3F0]/50 tracking-[1px] mb-1">XP Level</p>
                <p className="font-serif text-lg font-bold text-[#5BE7C4] glow-text-emerald">Lv. 8</p>
              </div>
              <div>
                <p className="font-mono text-xs uppercase text-[#DCE3F0]/50 tracking-[1px] mb-1">Mana Capacity</p>
                <p className="font-serif text-lg font-bold text-[#6D5DF6] glow-text-violet">High</p>
              </div>
              <div>
                <p className="font-mono text-xs uppercase text-[#DCE3F0]/50 tracking-[1px] mb-1">Spells Mastered</p>
                <p className="font-serif text-lg font-bold text-[#D9B44A] glow-text-gold">34+</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Timeline of the Journey */}
          <div className="lg:col-span-6 flex flex-col relative pl-6 sm:pl-10">
            {/* Connecting Vertical Line */}
            <div className="absolute left-[25px] sm:left-[39px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-[#D9B44A] via-[#6D5DF6] to-[#5BE7C4]/40" />

            {/* Timeline Milestones */}
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="relative flex flex-col sm:flex-row gap-4 sm:gap-8 items-start"
                >
                  {/* Floating Checkpoint Circle */}
                  <div className="absolute left-[-26px] sm:left-[-41px] flex items-center justify-center w-10 h-10 rounded-full bg-[#0B1020] border-2 border-[#D9B44A] shadow-[0_0_10px_rgba(217,180,74,0.3)] z-10 group-hover:border-[#5BE7C4]">
                    <div className="w-6 h-6 rounded-full bg-[#0B1020] border border-[#6D5DF6]/50 flex items-center justify-center">
                      {milestone.icon}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="flex-1 p-6 rounded-xl glass-panel glass-panel-hover border border-[#DCE3F0]/8 shadow-lg w-full">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <span className="font-mono text-xs font-semibold px-2.5 py-0.5 rounded border border-[#D9B44A]/30 bg-[#D9B44A]/10 text-[#D9B44A]">
                        {milestone.year}
                      </span>
                      <span className="font-mono text-[10px] tracking-[1.5px] uppercase text-[#DCE3F0]/40">
                        {milestone.category} log
                      </span>
                    </div>
                    <h4 className="font-serif text-lg font-semibold text-[#DCE3F0] mb-2 group-hover:text-[#5BE7C4] transition-colors duration-300">
                      {milestone.title}
                    </h4>
                    <p className="font-sans text-sm text-[#DCE3F0]/75 leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
