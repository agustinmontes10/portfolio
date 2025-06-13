"use client"

import ContactSection from "@/components/ContactSection";
import ExperienceSection from "@/components/ExperienceSection";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";

export default function Home() {
  return (
    <div className="min-h-screen text-gray-300 bg-[linear-gradient(47deg,_#141526,_#010214)]">
      <Navbar />
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />

      {/* Footer */}
      <footer className="py-8">
        <div className="container mx-auto px-6 text-center text-gray-400">
          <p>© 2025 Portfolio. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
