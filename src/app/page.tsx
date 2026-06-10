import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      {/* Sticky Header */}
      <Navbar />

      {/* Main Page Layout */}
      <main className="flex-grow">
        {/* Sections */}
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      {/* Cinematic/Magical Footer */}
      <footer className="relative py-12 bg-[#05070f] border-t border-[#DCE3F0]/5 overflow-hidden">
        {/* Ambient subtle glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-24 rounded-full bg-[#6D5DF6]/5 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center justify-center text-center gap-4">
          <div className="font-serif text-sm tracking-[2px] text-[#D9B44A] glow-text-gold">
            ✦ Made with patience and ordinary spells ✦
          </div>
          <p className="font-sans text-xs text-[#DCE3F0]/40 tracking-[1px] uppercase">
            © {new Date().getFullYear()} Frieren • Beyond Journey&apos;s End. All rights reserved.
          </p>
          <div className="font-mono text-[9px] text-[#DCE3F0]/20 max-w-xs mt-2 leading-relaxed">
            &quot;The journey may be long, and the endpoints distant, but it is the small flowers we collect along the path that give it meaning.&quot;
          </div>
        </div>
      </footer>
    </>
  );
}
