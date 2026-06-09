"use client"

import Background from "@/components/Background";
import ContactSection from "@/components/ContactSection";
import ExperienceSection from "@/components/ExperienceSection";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ProjectsSection from "@/components/ProjectsSection";


export default function Home() {
  return (
    <div className="min-h-screen w-full relative bg-[#060609] text-gray-300 selection:bg-blue-500/30">
      <Background />

      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        {/* <SkillsSection /> */}
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />

        {/* Footer */}
        <footer className="py-8">
          <div className="container mx-auto px-6 text-center text-gray-400">
            <p>© 2026 Agustin Montes.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
