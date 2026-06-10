"use client";

import React, { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  fadeSpeed: number;
  color: string;
}

export default function CanvasParticles() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const maxParticles = 60;

    // Mouse coordinates tracker
    const mouse = {
      x: -1000,
      y: -1000,
      radius: 120,
    };

    const colors = [
      "rgba(255, 248, 220, 0.35)", // Warm sunlight mote
      "rgba(217, 180, 74, 0.3)",   // Gold
      "rgba(91, 231, 196, 0.3)",   // Emerald
      "rgba(186, 230, 180, 0.25)", // Soft green (landscape harmony)
      "rgba(109, 93, 246, 0.25)",  // Violet (subtle)
    ];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    const createParticle = (x?: number, y?: number, sizeScale = 1): Particle => {
      const size = (Math.random() * 2.5 + 0.8) * sizeScale;
      return {
        x: x ?? Math.random() * canvas.width,
        y: y ?? canvas.height + Math.random() * 20,
        size,
        speedX: (Math.random() * 0.4 - 0.2),
        speedY: -(Math.random() * 0.6 + 0.2), // Slow drift upwards
        opacity: Math.random() * 0.5 + 0.1,
        fadeSpeed: Math.random() * 0.002 + 0.001,
        color: colors[Math.floor(Math.random() * colors.length)],
      };
    };

    // Populate initial particles
    for (let i = 0; i < maxParticles; i++) {
      particles.push(createParticle(undefined, Math.random() * canvas.height));
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;

      // Spark trail occasionally
      if (Math.random() < 0.25) {
        particles.push(createParticle(e.clientX, e.clientY, 1.5));
        if (particles.length > maxParticles + 20) {
          particles.shift();
        }
      }
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        
        // Move particle
        p.x += p.speedX;
        p.y += p.speedY;

        // Interaction with mouse
        if (mouse.x !== -1000) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouse.radius) {
            // Gentle attraction
            const force = (mouse.radius - dist) / mouse.radius;
            p.x += (dx / dist) * force * 0.4;
            p.y += (dy / dist) * force * 0.4;
          }
        }

        // Star twinkle (minor size/opacity changes)
        p.opacity -= p.fadeSpeed;
        
        // Draw particle
        ctx.beginPath();
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 2);
        gradient.addColorStop(0, p.color.replace(/[\d.]+\)$/, `${p.opacity})`));
        gradient.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = gradient;
        ctx.arc(p.x, p.y, p.size * 2, 0, Math.PI * 2);
        ctx.fill();

        // If particle goes off screen or completely fades, reset it
        if (p.y < -10 || p.x < -10 || p.x > canvas.width + 10 || p.opacity <= 0) {
          particles[i] = createParticle();
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-10"
      style={{ mixBlendMode: "screen" }}
    />
  );
}
