"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Sparkles, Send } from "lucide-react";

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

interface Sparkle {
  id: number;
  x: number;
  y: number;
  color: string;
}

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const spawnSparkles = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const colors = ["#5BE7C4", "#D9B44A", "#6D5DF6"];
    const newSparkles = Array.from({ length: 15 }).map((_, i) => ({
      id: Date.now() + i,
      x: x + (Math.random() * 40 - 20),
      y: y + (Math.random() * 40 - 20),
      color: colors[Math.floor(Math.random() * colors.length)],
    }));

    setSparkles((prev) => [...prev, ...newSparkles]);
    setTimeout(() => {
      setSparkles((prev) => prev.filter((s) => !newSparkles.find((ns) => ns.id === s.id)));
    }, 1000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    // Simulate sending message over network (spell formulation time)
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1800);
  };

  const socials = [
    { name: "Email", icon: <Mail className="w-5 h-5" />, href: "mailto:frieren@citadel.org", color: "emerald" },
    { name: "GitHub", icon: <GithubIcon className="w-5 h-5" />, href: "https://github.com", color: "gold" },
    { name: "LinkedIn", icon: <LinkedinIcon className="w-5 h-5" />, href: "https://linkedin.com", color: "violet" },
    { name: "Twitter/X", icon: <TwitterIcon className="w-5 h-5" />, href: "https://twitter.com", color: "cyan" },
  ];

  return (
    <section id="contact" className="relative py-24 section-backdrop">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#5BE7C4]/15 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-20">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl sm:text-5xl font-light tracking-[3px] text-[#DCE3F0] mb-3">
            Form a <span className="font-semibold text-[#5BE7C4] glow-text-emerald">Pact</span>
          </h2>
          <div className="h-[2px] w-24 bg-gradient-to-r from-[#5BE7C4] via-[#6D5DF6] to-[#D9B44A] mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Social Links & Spell Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex flex-col justify-between p-8 rounded-2xl glass-panel glow-border-violet"
          >
            <div>
              <h3 className="font-serif text-2xl font-semibold text-[#D9B44A] tracking-[1px] mb-6 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#D9B44A]" />
                <span>Establish Connection</span>
              </h3>
              <p className="font-sans text-sm sm:text-base text-[#DCE3F0]/80 leading-relaxed mb-8">
                Whether you have an S-Rank quest, want to collaborate on clean frontend architectures, or simply talk about ordinary magic spells, my gates are open. Send an owl or initiate a direct scroll link below.
              </p>

              {/* Runic decoration */}
              <div className="font-mono text-[9px] text-[#DCE3F0]/25 border-l-2 border-[#D9B44A]/30 pl-4 py-2 mb-8 leading-normal uppercase">
                spell code: link-channel <br />
                frequency: 2.4ghz-mana <br />
                encryption: runic-tls-1.3
              </div>
            </div>

            {/* Social Grid */}
            <div className="grid grid-cols-2 gap-4">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 p-4 rounded-xl border border-[#DCE3F0]/5 bg-[#05070f]/40 hover:bg-[#0B1020]/75 hover:border-[#D9B44A]/30 transition-all duration-300"
                >
                  <div className={`p-2.5 rounded-full border border-[#DCE3F0]/10 bg-[#05070f]/50 text-[#DCE3F0]/70 group-hover:text-[#D9B44A] group-hover:border-[#D9B44A]/40 transition-colors duration-300`}>
                    {social.icon}
                  </div>
                  <div>
                    <p className="font-sans text-xs text-[#DCE3F0]/50 font-medium">{social.name}</p>
                    <p className="font-serif text-xs text-[#DCE3F0] group-hover:text-[#D9B44A] transition-colors">Connect</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Pact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 p-8 rounded-2xl glass-panel glow-border-emerald relative"
          >
            {/* Elegant Corner Accents */}
            <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-[#5BE7C4]/40 rounded-tl" />
            <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-[#5BE7C4]/40 rounded-tr" />
            <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-[#5BE7C4]/40 rounded-bl" />
            <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-[#5BE7C4]/40 rounded-br" />

            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name */}
                <div className="flex flex-col">
                  <label htmlFor="name" className="font-mono text-xs uppercase text-[#DCE3F0]/50 tracking-[1px] mb-2">
                    Mage Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="E.g., Himmel"
                    className="px-4 py-3 rounded-lg border border-[#DCE3F0]/10 bg-[#05070f]/60 text-[#DCE3F0] placeholder-[#DCE3F0]/30 focus:outline-none focus:border-[#5BE7C4] focus:shadow-[0_0_10px_rgba(91,231,196,0.15)] transition-all font-sans text-sm"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col">
                  <label htmlFor="email" className="font-mono text-xs uppercase text-[#DCE3F0]/50 tracking-[1px] mb-2">
                    Scroll Channel (Email)
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="E.g., himmel@hero.org"
                    className="px-4 py-3 rounded-lg border border-[#DCE3F0]/10 bg-[#05070f]/60 text-[#DCE3F0] placeholder-[#DCE3F0]/30 focus:outline-none focus:border-[#5BE7C4] focus:shadow-[0_0_10px_rgba(91,231,196,0.15)] transition-all font-sans text-sm"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="flex flex-col">
                <label htmlFor="subject" className="font-mono text-xs uppercase text-[#DCE3F0]/50 tracking-[1px] mb-2">
                  Quest Title
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="E.g., Retrieve the Blue Moon-Lily"
                  className="px-4 py-3 rounded-lg border border-[#DCE3F0]/10 bg-[#05070f]/60 text-[#DCE3F0] placeholder-[#DCE3F0]/30 focus:outline-none focus:border-[#5BE7C4] focus:shadow-[0_0_10px_rgba(91,231,196,0.15)] transition-all font-sans text-sm"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col">
                <label htmlFor="message" className="font-mono text-xs uppercase text-[#DCE3F0]/50 tracking-[1px] mb-2">
                  Spell Details (Message)
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Outline the terms of your contract..."
                  className="px-4 py-3 rounded-lg border border-[#DCE3F0]/10 bg-[#05070f]/60 text-[#DCE3F0] placeholder-[#DCE3F0]/30 focus:outline-none focus:border-[#5BE7C4] focus:shadow-[0_0_10px_rgba(91,231,196,0.15)] transition-all font-sans text-sm resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="relative">
                <button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  onClick={spawnSparkles}
                  className="w-full relative py-3.5 rounded-lg font-sans text-xs tracking-[2px] uppercase font-bold text-[#0B1020] bg-gradient-to-r from-[#5BE7C4] via-[#D9B44A] to-[#6D5DF6] hover:shadow-[0_0_20px_rgba(91,231,196,0.4)] disabled:opacity-50 transition-all duration-300 flex items-center justify-center gap-2.5 overflow-hidden cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-[#0B1020] border-t-transparent rounded-full animate-spin" />
                      <span>Transmuting Scroll...</span>
                    </>
                  ) : isSubmitted ? (
                    <>
                      <span>Pact Sealed Successfully</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Seal the Pact</span>
                    </>
                  )}

                  {/* Render Click particles inside the button context */}
                  <AnimatePresence>
                    {sparkles.map((s) => (
                      <motion.span
                        key={s.id}
                        className="absolute w-2 h-2 rounded-full pointer-events-none"
                        style={{
                          left: s.x,
                          top: s.y,
                          background: s.color,
                          boxShadow: `0 0 6px ${s.color}`,
                        }}
                        initial={{ opacity: 1, scale: 1 }}
                        animate={{
                          opacity: 0,
                          scale: 0.1,
                          x: s.x + (Math.random() * 80 - 40),
                          y: s.y + (Math.random() * 80 - 40),
                        }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                      />
                    ))}
                  </AnimatePresence>
                </button>
              </div>

              {/* Status Message */}
              <AnimatePresence>
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-center font-serif text-sm text-[#5BE7C4] glow-text-emerald"
                  >
                    ✦ The spell has completed. Your message has drifted safely into my registry. ✦
                  </motion.div>
                )}
              </AnimatePresence>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
