"use client"
import { useState } from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

const Navbar = () => {
    const [activeSection, setActiveSection] = useState('inicio');
    const { t } = useTranslation()

    return (
        <nav className={`fixed w-full z-50 transition-colors duration-700`} >
            <div className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold">{t('welcome')}</span>
                    <div className="hidden md:flex space-x-8 font-medium text-lg">
                        {['Inicio', 'Sobre Mí', 'Proyectos', 'Contacto'].map((item) => (
                            <button
                                key={item}
                                onClick={() => setActiveSection(item.toLowerCase())}
                                className={`relative group transition-colors p-4 ${activeSection === item.toLowerCase() ? 'text-blue-400' : ''
                                    }`}
                            >
                                {item}
                                <span className="absolute left-0 bottom-4 -z-1 w-full h-[20px] bg-[#ede488] rounded blur-[2px] skew-x-[15deg] transition-transform scale-x-0 group-hover:scale-x-100 origin-left duration-500"></span>
                            </button>

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