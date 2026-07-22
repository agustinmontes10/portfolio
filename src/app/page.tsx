"use client"

import Background from "@/components/Background";
import ContactSection from "@/components/ContactSection";
import ExperienceSection from "@/components/ExperienceSection";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ProjectsSection from "@/components/ProjectsSection";
import ScrollProgress from "@/components/ScrollProgress";
import SkillsSection from "@/components/SkillsSection";


export default function Home() {
  return (
    <div className="min-h-screen w-full relative bg-[#0a0a0b] text-ink">
      <Background />

      <div className="relative z-10">
        <ScrollProgress />
        <Navbar />
        <HeroSection />
        {/* <SkillsSection /> */}
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />

        {/* Footer */}
        <footer className="py-8 border-t border-white/[0.06]">
          <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-[11px] text-muted uppercase tracking-widest">
            <p>© 2026 Agustin Montes<span className="text-acid">.</span></p>
            <p className="text-muted/50">Built with Next.js + Tailwind</p>
            <p>Argentina <span className="text-acid">[GMT-3]</span></p>
          </div>
        </footer>
      </div>
    </div>
  );
}
