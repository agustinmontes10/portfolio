"use client"
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { t } = useTranslation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Scroll spy: highlight the section currently in view
  useEffect(() => {
    const ids = ["home", "skills", "projects", "experience", "contact"]
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { rootMargin: "-40% 0px -55% 0px" }
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const navSections = [
    { label: t("navbar.home"), id: "home" },
    { label: t("navbar.skills"), id: "skills" },
    { label: t("navbar.projects"), id: "projects" },
    { label: t("navbar.experience"), id: "experience" },
    { label: t("navbar.contact"), id: "contact" },
  ]

  const handleNavClick = (id: string) => {
    setActiveSection(id)
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-300 navbar backdrop-blur-xl ${
          scrolled
            ? "bg-[#0a0a0b]/80 border-b border-white/[0.06]"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">

            <a href="#home" className="flex items-center gap-2.5 group">
              <Image
                src="/assets/avatar.png"
                width={26}
                height={26}
                alt=""
                className="rounded-full opacity-90 grayscale group-hover:grayscale-0 transition-all"
              />
              <span className="font-mono text-sm tracking-tight text-ink">
                agustin<span className="text-acid">.</span>montes
              </span>
            </a>

            {/* Hamburger */}
            <button
              onClick={() => setIsMobileMenuOpen(p => !p)}
              className="md:hidden p-2 text-gray-400 hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait" initial={false}>
                {isMobileMenuOpen ? (
                  <motion.span
                    key="x"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    className="block"
                  >
                    <X size={22} />
                  </motion.span>
                ) : (
                  <motion.span
                    key="m"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    className="block"
                  >
                    <Menu size={22} />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-1">
              {navSections.map((item, i) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative px-4 py-2 font-mono text-xs uppercase tracking-widest transition-colors cursor-pointer ${
                    activeSection === item.id
                      ? "text-acid"
                      : "text-muted hover:text-ink"
                  }`}
                >
                  <span className="text-muted/50 mr-1">0{i + 1}</span>
                  {item.label}
                </a>
              ))}
            </div>

            <div className="hidden md:flex gap-4">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile full-screen overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed inset-0 bg-[#0a0a0b]/95 backdrop-blur-2xl z-40 flex flex-col items-center justify-center gap-8"
          >
            {navSections.map((item, i) => (
              <motion.a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => handleNavClick(item.id)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07, duration: 0.3 }}
                className={`flex items-baseline gap-3 text-3xl font-display uppercase tracking-wide cursor-pointer transition-colors ${
                  activeSection === item.id
                    ? "text-acid"
                    : "text-ink hover:text-acid"
                }`}
              >
                <span className="font-mono text-xs text-muted">0{i + 1}</span>
                {item.label}
              </motion.a>
            ))}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: navSections.length * 0.07 + 0.1 }}
            >
              <LanguageSwitcher />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar;
