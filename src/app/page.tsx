"use client"

import ContactSection from "@/components/ContactSection";
import ExperienceSection from "@/components/ExperienceSection";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ProjectsSection from "@/components/ProjectsSection";


export default function Home() {
  return (
    <div className="min-h-screen w-full relative bg-black text-gray-300 selection:bg-purple-500/30">
      <div
        className="fixed inset-0 z-0"
        style={{
          // background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(139, 92, 246, 0.25), transparent 70%), #000000",

          // background: `
          //   radial-gradient(ellipse 70% 55% at 50% 50%, rgba(255, 20, 147, 0.15), transparent 50%),
          //   radial-gradient(ellipse 160% 130% at 10% 10%, rgba(0, 255, 255, 0.12), transparent 60%),
          //   radial-gradient(ellipse 160% 130% at 90% 90%, rgba(138, 43, 226, 0.18), transparent 65%),
          //   radial-gradient(ellipse 110% 50% at 80% 30%, rgba(255, 215, 0, 0.08), transparent 40%),
          //   #000000
          // `,

          // background: `
          //   radial-gradient(ellipse 140% 50% at 15% 60%, rgba(124, 58, 237, 0.11), transparent 48%),
          //   radial-gradient(ellipse 90% 80% at 85% 25%, rgba(245, 101, 101, 0.09), transparent 58%),
          //   radial-gradient(ellipse 120% 65% at 40% 90%, rgba(34, 197, 94, 0.13), transparent 52%),
          //   radial-gradient(ellipse 100% 45% at 70% 5%, rgba(251, 191, 36, 0.07), transparent 42%),
          //   radial-gradient(ellipse 80% 75% at 90% 80%, rgba(168, 85, 247, 0.10), transparent 55%),
          //   #000000
          // `,

          background: "radial-gradient(ellipse 80% 100% at 50% 40%, rgba(99, 102, 241, 0.25), transparent 70%), #000000",

          // background: "radial-gradient(125% 125% at 50% 10%, #000000 40%, #0d1a36 100%)",
        }}
      />

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
            <p>© 2025 Portfolio. Todos los derechos reservados.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
