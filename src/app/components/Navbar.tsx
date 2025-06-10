"use client"
import { useState, useEffect } from "react";

const Navbar = () => {
    const [activeSection, setActiveSection] = useState('inicio');
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav
            className={`fixed w-full z-50 transition-colors duration-700 ${isScrolled ? 'bg-primary' : 'bg-transparent'
                }`}
        >
            <div className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold">Portfolio</span>
                    <div className="hidden md:flex space-x-8 font-medium text-lg">
                        {['Inicio', 'Sobre Mí', 'Proyectos', 'Contacto'].map((item) => (
                            <button
                            key={item}
                            onClick={() => setActiveSection(item.toLowerCase())}
                            className={`relative group transition-colors p-4 ${
                                activeSection === item.toLowerCase() ? 'text-blue-400' : ''
                            }`}
                        >
                            {item}
                            <span className="absolute left-0 bottom-4 -z-1 w-full h-[20px] bg-[#ede488] rounded blur-[2px] skew-x-[15deg] transition-transform scale-x-0 group-hover:scale-x-100 origin-left duration-500"></span>
                        </button>
                        
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;