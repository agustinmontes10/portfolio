"use client"
import { useState } from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

const Navbar = () => {
    const [activeSection, setActiveSection] = useState('inicio');
    const { t } = useTranslation()

    return (
        <nav className={`fixed w-full z-50 transition-colors duration-700 navbar`} >
            <div className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold">{t('welcome')}</span>
                    <div className="hidden md:flex space-x-8 font-medium text-lg">
                        {['Inicio', 'Sobre Mí', 'Proyectos', 'Contacto'].map((item) => (
                            <a
                                key={item}
                                onClick={() => setActiveSection(item.toLowerCase())}
                                className={`relative group transition-colors px-4 py-3 cursor-pointer ${activeSection === item.toLowerCase() ? 'text-blue-400' : ''
                                    }`}
                            >
                                {item}
                        
                            </a>

                        ))}
                    </div>
                    <div className="flex gap-4">
                        <LanguageSwitcher />
                        {/* <ThemeSwitcher /> */}
                    </div>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;