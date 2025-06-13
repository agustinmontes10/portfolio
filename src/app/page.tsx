"use client"
import Image from "next/image";
import { useEffect, useState } from "react";
import { Github, Linkedin, Mail, ChevronDown, Code2, Palette, Database, Globe } from 'lucide-react';
import Navbar from "../../components/Navbar";
import HeroSection from "../../components/HeroSection";
import SkillsSection from "../../components/SkillsSection";
import ProjectsSection from "../../components/ProjectsSection";
import ExperienceSection from "../../components/ExperienceSection";
import ContactSection from "../../components/ContactSection";


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
