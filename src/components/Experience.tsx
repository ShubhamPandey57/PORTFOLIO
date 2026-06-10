"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Milestone, Calendar, MapPin } from "lucide-react";

interface Position {
  role: string;
  company: string;
  location: string;
  duration: string;
  description: string[];
  skillsUnlocked: string[];
}

const experienceData: Position[] = [
  {
    role: "Senior Software Mage (Full-Stack Engineer)",
    company: "Mage Tower Systems",
    location: "Vercel Citadel / Remote",
    duration: "2024 - Present",
    description: [
      "Leading architecture of high-fidelity micro-frontend applications with React and Next.js, raising overall rendering scores by 35%.",
      "Designing serverless logic gateways and real-time state sync pipelines, scaling database read capabilities for 10M+ daily events.",
      "Mentoring apprentices on clean code spells, design system structures, and optimizing runtime execution."
    ],
    skillsUnlocked: ["Next.js App Router", "Serverless Architecture", "Redis Caching", "System Design"],
  },
  {
    role: "Frontend Conjurer",
    company: "Aureole Solutions",
    location: "Prism City / Hybrid",
    duration: "2022 - 2024",
    description: [
      "Crafted modular, reusable UI component systems using React, Tailwind CSS, and Framer Motion, enabling rapid interface deployments.",
      "Managed bundle size optimization campaigns, successfully dividing package weights by 30% through code-splitting and tree-shaking spells.",
      "Spearheaded accessibility audits (WCAG AA compliance) and implemented semantic headers across key product lines."
    ],
    skillsUnlocked: ["React Native", "Tailwind CSS", "Framer Motion", "Web Accessibility"],
  },
  {
    role: "Junior Web Apprentice",
    company: "Citadel Web Guild",
    location: "Capital Region / On-site",
    duration: "2020 - 2022",
    description: [
      "Built responsive landing templates and interactive elements using semantic HTML, CSS gradients, and JavaScript mechanics.",
      "Collaborated with project managers to resolve API parsing glitches and speed up page asset retrieval cycles.",
      "Drafted comprehensive testing checklists, optimizing cross-browser layout consistency."
    ],
    skillsUnlocked: ["JavaScript (ES6)", "CSS Grid/Flexbox", "REST APIs", "Unit Testing"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 section-backdrop">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#D9B44A]/15 to-transparent" />

      <div className="max-w-4xl mx-auto px-6 relative z-20">
        
        {/* Section Title */}
        <div className="text-center mb-20">
          <h2 className="font-serif text-3xl sm:text-5xl font-light tracking-[3px] text-[#DCE3F0] mb-3">
            Expedition <span className="font-semibold text-[#D9B44A] glow-text-gold">Log</span>
          </h2>
          <div className="h-[2px] w-24 bg-gradient-to-r from-[#D9B44A] via-[#6D5DF6] to-[#5BE7C4] mx-auto mt-4 rounded-full" />
        </div>

        {/* Vertical Journey Line Container */}
        <div className="relative pl-6 sm:pl-12">
          
          {/* Vertical Glowing Line */}
          <div className="absolute left-[5px] sm:left-[19px] top-2 bottom-2 w-[2px] bg-gradient-to-b from-[#6D5DF6] via-[#D9B44A] to-[#5BE7C4]" />

          {/* Experience Checkpoints */}
          <div className="space-y-16">
            {experienceData.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                className="relative"
              >
                {/* Checkpoint Node (Rune) */}
                <div className="absolute left-[-26px] sm:left-[-41px] top-1 w-10 h-10 rounded-full bg-[#0B1020] border-2 border-[#6D5DF6] flex items-center justify-center shadow-[0_0_12px_rgba(109,93,246,0.3)] group-hover:border-[#D9B44A] transition-colors duration-300 z-10">
                  <Milestone className="w-4 h-4 text-[#D9B44A]" />
                </div>

                {/* Content Panel */}
                <div className="p-8 rounded-2xl glass-panel border border-[#DCE3F0]/8 shadow-xl flex flex-col gap-6">
                  
                  {/* Header metadata */}
                  <div className="flex flex-wrap items-start justify-between gap-4 border-b border-[#DCE3F0]/5 pb-4">
                    <div>
                      <h3 className="font-serif text-xl font-bold tracking-[1px] text-[#DCE3F0]">
                        {job.role}
                      </h3>
                      <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-[#DCE3F0]/60">
                        <span className="font-semibold text-[#5BE7C4] glow-text-emerald">
                          {job.company}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" />
                          {job.location}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 px-3 py-1 rounded-md border border-[#DCE3F0]/10 bg-[#05070f]/50 font-mono text-xs text-[#D9B44A]">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{job.duration}</span>
                    </div>
                  </div>

                  {/* Duties list */}
                  <ul className="space-y-3 font-sans text-sm text-[#DCE3F0]/80 leading-relaxed list-none pl-0">
                    {job.description.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-[#6D5DF6] mt-1 text-sm select-none">✦</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Skills unlocked */}
                  <div className="pt-4 border-t border-[#DCE3F0]/5">
                    <p className="font-mono text-xs text-[#DCE3F0]/40 uppercase tracking-[1px] mb-3 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-[#D9B44A]" />
                      <span>Skills Unlocked</span>
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {job.skillsUnlocked.map((skill) => (
                        <span
                          key={skill}
                          className="font-mono text-[10px] tracking-[0.5px] px-2.5 py-1 rounded bg-[#D9B44A]/5 border border-[#D9B44A]/25 text-[#D9B44A] [text-shadow:0_0_4px_rgba(217,180,74,0.1)]"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
