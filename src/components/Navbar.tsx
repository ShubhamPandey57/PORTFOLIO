"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Compass } from "lucide-react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Determine if background should be darker
      setScrolled(window.scrollY > 50);

      // Scroll spy logic
      const sections = navItems.map((item) =>
        document.getElementById(item.href.replace("#", ""))
      );

      const scrollPosition = window.scrollY + 250; // Offset for trigger line

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section) {
          const rect = section.getBoundingClientRect();
          const offsetTop = rect.top + window.scrollY;
          if (scrollPosition >= offsetTop) {
            setActiveSection(navItems[i].href.replace("#", ""));
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial run

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 w-full z-45 transition-all duration-500 ${
          scrolled
            ? "glass-panel py-3 bg-[#0B1020]/75"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo with Moon-Lily flower */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("home");
            }}
            className="flex items-center gap-2.5 group"
          >
            <div className="relative flex items-center justify-center w-9 h-9 rounded-full border border-[#6D5DF6]/30 bg-[#0B1020]/40 group-hover:border-[#5BE7C4]/50 transition-colors duration-300">
              <Compass className="w-5 h-5 text-[#6D5DF6] group-hover:text-[#5BE7C4] transition-all duration-300 group-hover:rotate-45" />
              {/* Pulsing Magic Lily Aura */}
              <div className="absolute inset-0 rounded-full bg-[#5BE7C4]/10 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300 animate-pulse" />
            </div>
            <span className="font-serif font-semibold text-lg tracking-[2px] text-[#DCE3F0] group-hover:text-[#5BE7C4] transition-colors duration-300">
              FRIEREN
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const id = item.href.replace("#", "");
              const isActive = activeSection === id;

              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(id);
                  }}
                  className={`relative font-sans text-sm tracking-[1.5px] uppercase transition-colors duration-300 hover:text-[#D9B44A] ${
                    isActive ? "text-[#5BE7C4]" : "text-[#DCE3F0]/70"
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <motion.span
                      layoutId="activeIndicator"
                      className="absolute -bottom-1.5 left-0 w-full h-[2px] bg-gradient-to-r from-[#5BE7C4] to-[#6D5DF6] rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* Mobile Toggle Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-md text-[#DCE3F0]/80 hover:text-[#5BE7C4] transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Sliding Menu overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.31 }}
            className="fixed inset-x-0 top-[60px] glass-panel bg-[#0B1020]/90 z-40 md:hidden border-t border-[#DCE3F0]/10 flex flex-col p-6 gap-5 shadow-2xl"
          >
            {navItems.map((item) => {
              const id = item.href.replace("*", "");
              const isActive = activeSection === id;

              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(id);
                  }}
                  className={`font-sans text-base tracking-[2px] uppercase py-2 border-b border-[#DCE3F0]/5 ${
                    isActive ? "text-[#5BE7C4] font-medium" : "text-[#DCE3F0]/80"
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
