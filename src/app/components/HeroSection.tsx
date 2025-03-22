"use client"
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const HeroSection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const calculatePupilPosition = (eyeRef: any) => {
        if (!eyeRef.current) return { x: 0, y: 0 };

        const eyeRect = eyeRef.current.getBoundingClientRect();
        const eyeCenterX = eyeRect.left + eyeRect.width / 2;
        const eyeCenterY = eyeRect.top + eyeRect.height / 2;

        const deltaX = mousePosition.x - eyeCenterX;
        const deltaY = mousePosition.y - eyeCenterY;

        const distance = Math.min(10, Math.hypot(deltaX, deltaY));

        const angle = Math.atan2(deltaY, deltaX);

        const x = Math.cos(angle) * distance;
        let y = Math.sin(angle) * distance;

        const maxDownwardMovement = 1; // Ajusta este valor según sea necesario
        y = Math.min(y, maxDownwardMovement);
    

        return { x, y };
    };

    const eyeLeftRef = useRef(null);
    const eyeRightRef = useRef(null);

    const pupilLeftPosition = calculatePupilPosition(eyeLeftRef);
    const pupilRightPosition = calculatePupilPosition(eyeRightRef);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    useEffect(() => {
        const handleMouseMove = (event: any) => {
            setMousePosition({ x: event.clientX, y: event.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <section className="min-h-screen flex items-center justify-center px-6 pt-20">
            <div className="container mx-auto max-w-[80vw] flex flex-col md:flex-row justify-center items-center gap-10">
                <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}>
                    <p className="text-2xl md:text-4xl font-medium text-gray-300 mb-2">
                        Agustín Montes
                    </p>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6">
                        Hola, soy <span className="text-blue-400">Developer</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 mb-8">
                        Desarrollador Web Full Stack
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

                <div className="avatar">
                    <div className="eyes-container">
                        <div className="eyes-left">
                            <div className="eyeLeft" ref={eyeLeftRef}>
                                <div className="iris" style={{ transform: `translate(${pupilLeftPosition.x}px, ${pupilLeftPosition.y}px)` }}>
                                    <div className="pupil"></div>
                                </div>
                            </div>
                        </div>

                        <div className="eyes-right">
                            <div className="eyeRight" ref={eyeRightRef}>
                                <div className="iris" style={{ transform: `translate(${pupilRightPosition.x}px, ${pupilRightPosition.y}px)` }}>
                                    <div className="pupil"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;