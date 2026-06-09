"use client"
import { ChevronDown, Download, Eye, Github, Linkedin, X } from "lucide-react";
import { useEffect, useState, ReactNode } from "react";
import dynamic from "next/dynamic";
import { useTranslation } from "react-i18next";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import { motion, AnimatePresence } from "framer-motion";
import { skills } from "./SkillsSection";

const HeroSection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [showPreview, setShowPreview] = useState(false);
    const [markerAnimation, setMarkerAnimation] = useState(null);
    const { t } = useTranslation();

    useEffect(() => {
        fetch("/assets/markerAnimation.json")
            .then((r) => r.json())
            .then((data) => setMarkerAnimation(data))
            .catch((err) => console.error("Error loading animation:", err));
    }, []);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const allSkills = Object.values(skills).flat();

    const rows = isMobile
        ? [
            allSkills.slice(0, Math.ceil(allSkills.length / 3)),
            allSkills.slice(Math.ceil(allSkills.length / 3), Math.ceil(allSkills.length * 2 / 3)),
            allSkills.slice(Math.ceil(allSkills.length * 2 / 3))
          ]
        : [allSkills];

    // Capped arc amplitude so edge icons never overflow into the buttons below
    const maxAmp = isMobile ? 22 : 30;

    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center py-28 px-4 sm:px-6" id="home">
            <div
                className={`container mx-auto max-w-3xl flex flex-col items-center text-center transition-all duration-1000 gap-8 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
            >
                {/* Availability badge */}
                <span className="inline-flex items-center gap-2 bg-white/[0.05] border border-white/[0.08] rounded-full px-4 py-1.5 text-sm text-gray-400 mb-8">
                    <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75 animate-ping" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                    </span>
                    {t("hero.available")}
                </span>

                {/* Main heading */}
                <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                    {t("hero.title")}{" "}
                    <span className="text-blue-400 relative inline-block">
                        {t("hero.role")}
                        {markerAnimation && (
                            <Lottie
                                animationData={markerAnimation}
                                className="absolute top-[-90%] left-[-5%] w-[110%] pointer-events-none -z-1"
                                loop={false}
                            />
                        )}
                    </span>
                </h1>

                {/* Subtitle + spinning words */}
                <div className="flex flex-col md:flex-row items-center gap-2 text-xl md:text-2xl justify-center mt-8">
                    <p className="text-gray-400">{t("hero.subtitle")}</p>
                    <span className="words text-center md:text-start">
                        <p className="word">next.js</p>
                        <p className="word">n8n</p>
                        <p className="word">node.js</p>
                        <p className="word">react</p>
                        <p className="word">typescript</p>
                        <p className="word">firebase</p>
                        <p className="word">tailwind</p>
                        <p className="word">supabase</p>
                        <p className="word">bootstrap</p>
                        <p className="word">others..</p>
                    </span>
                </div>
            </div>

            {/* Skills arc — capped amplitude, with bottom padding so transformed icons clear the buttons */}
            <div className="flex flex-col items-center gap-8 md:gap-4 mt-16 w-full max-w-5xl pb-12">
                {rows.map((rowSkills, rowIndex) => {
                    const centerIndex = (rowSkills.length - 1) / 2;
                    return (
                        <motion.div
                            key={rowIndex}
                            initial="hidden"
                            animate="visible"
                            variants={{
                                hidden: { opacity: 0 },
                                visible: {
                                    opacity: 1,
                                    transition: {
                                        staggerChildren: 0.06,
                                        delayChildren: 0.4 + rowIndex * 0.15,
                                    },
                                },
                            }}
                            className="flex flex-nowrap justify-center gap-2 sm:gap-3"
                        >
                            {rowSkills.map((skill: { icon: ReactNode; title: string }, index: number) => {
                                const norm = centerIndex === 0 ? 0 : Math.abs(index - centerIndex) / centerIndex;
                                const yOffset = maxAmp * norm * norm;
                                return (
                                    <motion.div
                                        key={index}
                                        custom={yOffset}
                                        variants={{
                                            hidden: { opacity: 0, scale: 0, y: 40 },
                                            visible: (y) => ({
                                                opacity: 1,
                                                scale: 1,
                                                y,
                                                transition: { type: "spring", stiffness: 200, damping: 16 },
                                            }),
                                        }}
                                        whileHover={{ scale: 1.15, y: yOffset - 6 }}
                                        className="relative group p-2 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.06] hover:border-white/10 transition-colors cursor-pointer"
                                    >
                                        <div className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center">
                                            {skill.icon}
                                        </div>
                                        <div className="hidden md:block absolute -top-9 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-white/10 z-10">
                                            {skill.title}
                                            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900" />
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    );
                })}
            </div>

            {/* CTA Buttons + Social links */}
            <div className="flex flex-wrap justify-center items-center gap-3 z-10">
                <button
                    onClick={() => setShowPreview(true)}
                    className="flex items-center gap-2 px-5 py-2.5 bg-white/[0.05] hover:bg-white/10 border border-white/[0.08] rounded-full transition-all group cursor-pointer"
                >
                    <Eye size={16} className="text-gray-400 group-hover:text-blue-400 transition-colors" />
                    <span className="text-sm text-gray-300 group-hover:text-white">Preview CV</span>
                </button>

                <a
                    href="/AgustinMontes3.pdf"
                    download="Agustin_Montes_CV.pdf"
                    className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-600/30 to-violet-600/30 hover:from-blue-600/40 hover:to-violet-600/40 border border-blue-500/30 rounded-full transition-all group cursor-pointer"
                >
                    <Download size={16} className="text-blue-400 group-hover:text-blue-300 transition-colors" />
                    <span className="text-sm text-blue-100 group-hover:text-white">{t("hero.downloadCV")}</span>
                </a>

                <div className="flex items-center gap-2 ml-1">
                    <a
                        href="https://github.com/agustinmontes10"
                        target="_blank"
                        className="p-2.5 rounded-full bg-white/[0.05] border border-white/[0.08] text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                        aria-label="GitHub"
                    >
                        <Github size={16} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/agustinmontes10/"
                        target="_blank"
                        className="p-2.5 rounded-full bg-white/[0.05] border border-white/[0.08] text-gray-400 hover:text-[#3b9dff] hover:bg-white/10 transition-all"
                        aria-label="LinkedIn"
                    >
                        <Linkedin size={16} />
                    </a>
                </div>
            </div>

            {/* CV Preview Modal */}
            <AnimatePresence>
                {showPreview && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setShowPreview(false)}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-gray-900 rounded-2xl p-2 border border-white/[0.08]"
                        >
                            <button
                                onClick={() => setShowPreview(false)}
                                className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors z-10"
                            >
                                <X size={20} />
                            </button>
                            <img
                                src="/AgustinMontesCV3.jpg"
                                alt="CV Preview"
                                className="w-full h-auto rounded-xl shadow-2xl"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Scroll cue */}
            <a href="#projects" className="absolute bottom-8 animate-bounce text-gray-600 hover:text-gray-400 transition-colors">
                <ChevronDown size={40} />
            </a>
        </section>
    );
}

export default HeroSection;
