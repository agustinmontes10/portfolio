"use client"
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useState } from "react";

const HeroSection = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <section className="min-h-screen flex items-center justify-center px-6 pt-20">
            <div className="container mx-auto max-w-[80vw]">
                <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}>
                    <p className="text-2xl md:text-4xl font-medium text-gray-300 mb-2">
                        Agustín Montes
                    </p>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6">
                        Hola, soy <span className="text-blue-400">Developer</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 mb-8">
                        Desarrollador Full Stack & Diseñador UI/UX
                    </p>
                    <div className="flex justify-center space-x-6">
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">
                            <Github size={24} />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">
                            <Linkedin size={24} />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">
                            <Mail size={24} />
                        </a>
                    </div>
                    <div className="mt-12 animate-bounce">
                        <ChevronDown size={32} className="mx-auto" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;