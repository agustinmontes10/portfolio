"use client"
import { useState } from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import { motion, AnimatePresence } from "framer-motion"

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("inicio")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { t } = useTranslation()

  const navSections = [
    { label: t("navbar.home"), id: "home" },
    { label: t("navbar.skills"), id: "skills" },
    { label: t("navbar.projects"), id: "projects" },
    { label: t("navbar.experience"), id: "experience" },
    { label: t("navbar.contact"), id: "contact" },
  ]

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev)

  const handleNavClick = (item: string) => {
    setActiveSection(item.toLowerCase())
    setIsMobileMenuOpen(false)
  }

  return (
    <nav className="fixed w-full z-50 transition-colors duration-700 navbar backdrop-blur-xl shadow-md">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold">Agustin Montes</span>

          {/* Botón hamburguesa */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-2xl focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? "✖" : "☰"}
          </button>

          {/* Navegación Desktop */}
          <div className="hidden md:flex space-x-8 font-medium text-lg">
            {navSections.map((item) => (
              <motion.a
                key={item.id}
                href={`#${item.id}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                onClick={() => handleNavClick(item.id)}
                className={`relative group transition-colors px-4 py-3 cursor-pointer ${
                  activeSection === item.id ? "text-blue-400" : ""
                }`}
              >
                {item.label}
              </motion.a>
            ))}
          </div>

          {/* Switchers (desktop) */}
          <div className="hidden md:flex gap-4">
            <LanguageSwitcher />
            {/* <ThemeSwitcher /> */}
          </div>
        </div>

        {/* Menú Mobile Animado */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              key="mobileMenu"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="md:hidden items-center mt-4 flex flex-col gap-4 font-medium text-lg"
            >
              {navSections.map((item, index) => (
                <motion.a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className={`px-4 py-2 cursor-pointer ${
                    activeSection === item.id ? "text-blue-400" : ""
                  }`}
                >
                  {item.label}
                </motion.a>
              ))}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: navSections.length * 0.05 }}
                className="flex justify-center gap-4 mt-4"
              >
                <LanguageSwitcher />
                {/* <ThemeSwitcher /> */}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}
export default Navbar;