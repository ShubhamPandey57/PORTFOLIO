"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Award } from "lucide-react";

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

interface Project {
  title: string;
  rank: "S-Rank" | "A-Rank" | "B-Rank";
  description: string;
  techStack: string[];
  image: string;
  github: string;
  live: string;
  color: "gold" | "violet" | "emerald";
}

const projectsData: Project[] = [
  {
    title: "Grimoired Spell Digitizer",
    rank: "S-Rank",
    description: "Formulated an advanced OCR script that parses ancient runic manuscripts and compiles digitized spell books. Built with Next.js, React, and an AI parser for document scanning.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Python AI"],
    image: "/quest_grimoire.png",
    github: "https://github.com",
    live: "https://example.com",
    color: "gold",
  },
  {
    title: "Aureole Journey Tracker",
    rank: "A-Rank",
    description: "An interactive, real-time map engine that displays expedition checkpoints and pathways across regional provinces. Leverages canvas mapping coordinates and weather alerts.",
    techStack: ["React", "HTML5 Canvas", "Framer Motion", "Mapbox"],
    image: "/quest_aureole.png",
    github: "https://github.com",
    live: "https://example.com",
    color: "emerald",
  },
  {
    title: "Lotus Herbal Ledger",
    rank: "B-Rank",
    description: "A premium botanical inventory and e-commerce portal for rare flora. Integrates custom shopping cart flows, search index, and a spell ingredient calculator.",
    techStack: ["React", "Node.js", "Express", "PostgreSQL"],
    image: "/quest_lotus.png",
    github: "https://github.com",
    live: "https://example.com",
    color: "violet",
  },
];

export default function Projects() {
  // 3D Tilt handler
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const box = card.getBoundingClientRect();
    const x = e.clientX - box.left - box.width / 2;
    const y = e.clientY - box.top - box.height / 2;
    
    // Normalize coordinates to rotation angles (max 8 degrees)
    const rotateX = -(y / (box.height / 2)) * 8;
    const rotateY = (x / (box.width / 2)) * 8;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
  };

  const getRankBadgeColor = (rank: Project["rank"]) => {
    switch (rank) {
      case "S-Rank":
        return "border-[#D9B44A]/40 bg-[#D9B44A]/10 text-[#D9B44A] [text-shadow:0_0_6px_rgba(217,180,74,0.3)]";
      case "A-Rank":
        return "border-[#5BE7C4]/40 bg-[#5BE7C4]/10 text-[#5BE7C4] [text-shadow:0_0_6px_rgba(91,231,196,0.3)]";
      case "B-Rank":
      default:
        return "border-[#6D5DF6]/40 bg-[#6D5DF6]/10 text-[#6D5DF6] [text-shadow:0_0_6px_rgba(109,93,246,0.3)]";
    }
  };

  const getHoverBorder = (color: Project["color"]) => {
    switch (color) {
      case "gold":
        return "group-hover:border-[#D9B44A]/40 group-hover:shadow-[0_0_20px_rgba(217,180,74,0.15)]";
      case "emerald":
        return "group-hover:border-[#5BE7C4]/40 group-hover:shadow-[0_0_20px_rgba(91,231,196,0.15)]";
      case "violet":
      default:
        return "group-hover:border-[#6D5DF6]/40 group-hover:shadow-[0_0_20px_rgba(109,93,246,0.15)]";
    }
  };

  return (
    <section id="projects" className="relative py-24 section-backdrop">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#6D5DF6]/15 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-20">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl sm:text-5xl font-light tracking-[3px] text-[#DCE3F0] mb-3">
            Active <span className="font-semibold text-[#6D5DF6] glow-text-violet">Quests</span>
          </h2>
          <div className="h-[2px] w-24 bg-gradient-to-r from-[#6D5DF6] via-[#D9B44A] to-[#5BE7C4] mx-auto mt-4 rounded-full" />
        </div>

        {/* Quest Board Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="flex"
            >
              {/* Card Container with 3D Tilt */}
              <div
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className={`group flex flex-col justify-between rounded-xl glass-panel border border-[#DCE3F0]/8 overflow-hidden transition-all duration-300 ease-out cursor-pointer ${getHoverBorder(
                  project.color
                )} w-full`}
                style={{
                  transformStyle: "preserve-3d",
                  transition: "transform 0.15s ease-out, border-color 0.3s, box-shadow 0.3s",
                }}
              >
                {/* Project Image Wrapper */}
                <div className="relative w-full aspect-video overflow-hidden border-b border-[#DCE3F0]/10">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  {/* Floating Rank Badge */}
                  <div className={`absolute top-3 right-3 px-2.5 py-1 rounded font-mono text-xs border uppercase ${getRankBadgeColor(project.rank)}`}>
                    <div className="flex items-center gap-1">
                      <Award className="w-3.5 h-3.5" />
                      <span>{project.rank}</span>
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div className="mb-6">
                    <h3 className="font-serif text-xl font-bold tracking-[1px] text-[#DCE3F0] mb-3 group-hover:text-white transition-colors">
                      {project.title}
                    </h3>
                    <p className="font-sans text-sm text-[#DCE3F0]/75 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    {/* Tech Stack Badges */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="font-mono text-[10px] tracking-[0.5px] px-2 py-0.5 rounded bg-[#05070f] border border-[#DCE3F0]/5 text-[#DCE3F0]/60"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Links */}
                    <div className="flex gap-4 pt-4 border-t border-[#DCE3F0]/5">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 font-sans text-xs tracking-[1px] uppercase text-[#DCE3F0]/70 hover:text-[#5BE7C4] transition-colors"
                      >
                        <GithubIcon className="w-4 h-4" />
                        <span>Source Scroll</span>
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 font-sans text-xs tracking-[1px] uppercase text-[#DCE3F0]/70 hover:text-[#5BE7C4] transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Manifest Spell</span>
                      </a>
                    </div>
                  </div>

                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
