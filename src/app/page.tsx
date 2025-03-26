"use client"
import Image from "next/image";
import { useEffect, useState } from "react";
import { Github, Linkedin, Mail, ChevronDown, Code2, Palette, Database, Globe } from 'lucide-react';
import HeroSection from "./components/HeroSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import Navbar from "./components/Navbar";
import ExperienceSection from "./components/ExperienceSection";

export default function Home() {
  return (
    <div className="min-h-screen text-gray-700 bg-[#ffffff]">
      <Navbar />

      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />

      {/* Footer */}
      <footer className="bg-black/50 backdrop-blur-sm py-8">
        <div className="container mx-auto px-6 text-center text-gray-400">
          <p>© 2025 Portfolio. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
