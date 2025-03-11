"use client"
import { useState } from "react";

const Navbar = () => {
    const [activeSection, setActiveSection] = useState('inicio');

    return (
        <nav className="fixed w-full bg-black/50 backdrop-blur-sm z-50">
            <div className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold">Portfolio</span>
                    <div className="hidden md:flex space-x-8">
                        {['Inicio', 'Sobre Mí', 'Proyectos', 'Contacto'].map((item) => (
                            <button
                                key={item}
                                onClick={() => setActiveSection(item.toLowerCase())}
                                className={`hover:text-blue-400 transition-colors ${activeSection === item.toLowerCase() ? 'text-blue-400' : ''
                                    }`}
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;