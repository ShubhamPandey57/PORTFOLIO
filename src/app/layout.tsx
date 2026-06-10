import type { Metadata } from "next";
import { Inter, Cinzel } from "next/font/google";
import "./globals.css";
import ParallaxBackground from "@/components/ParallaxBackground";
import CanvasParticles from "@/components/CanvasParticles";
import MagicWisp from "@/components/MagicWisp";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Frieren | Mage & Developer Portfolio",
  description: "A premium personal portfolio inspired by Frieren: Beyond Journey's End. Discover projects, magical skills, and the journey of a creator.",
  keywords: "frieren, developer, portfolio, nextjs, typescript, framer motion, glassmorphism, creative developer",
  authors: [{ name: "Frieren" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${cinzel.variable} scroll-smooth`}
    >
      <body className="font-sans antialiased text-[#DCE3F0] bg-[#0B1020] min-h-screen relative overflow-x-hidden selection:bg-[#6D5DF6]/30 selection:text-[#5BE7C4]">
        {/* Fantasy Landscape Parallax Background */}
        <ParallaxBackground />

        {/* Particle and Wisp effects */}
        <CanvasParticles />
        <MagicWisp />
        
        {/* Main Content wrapper */}
        <div className="relative z-20 min-h-screen flex flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}

