"use client"
import { ChevronDown, Download, Eye, Github, Linkedin, X } from "lucide-react";
import { useEffect, useState, ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { skills } from "./SkillsSection";

const HeroSection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [showPreview, setShowPreview] = useState(false);
    const { t } = useTranslation();

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
                className={`container mx-auto max-w-5xl flex flex-col items-start text-left transition-all duration-1000 gap-6 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
            >
                {/* Status line */}
                <div className="w-full flex items-center justify-between font-mono text-xs uppercase tracking-widest text-muted mb-6">
                    <span className="inline-flex items-center gap-2 border border-white/[0.08] bg-white/[0.03] px-3 py-1.5">
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full rounded-full bg-acid opacity-75 animate-ping" />
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-acid" />
                        </span>
                        {t("hero.available")}
                    </span>
                    <span className="hidden sm:block text-muted/60">v.2026</span>
                </div>

                {/* Main heading */}
                <div>
                    <p className="font-mono text-sm text-muted mb-3">{t("hero.title")}</p>
                    <h1 className="font-display uppercase leading-[0.9] text-[clamp(3.5rem,12vw,9rem)] text-ink">
                        Agustín
                        <br />
                        <span
                            className="text-transparent"
                            style={{ WebkitTextStroke: "2px #c6f24e" }}
                        >
                            Montes
                        </span>
                    </h1>
                </div>

                {/* Role + spinning words */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-lg md:text-xl mt-4">
                    <p className="text-muted">
                        <span className="text-acid font-mono mr-2">──</span>
                        {t("hero.role")} · {t("hero.subtitle")}
                    </p>
                </div>
                {/* Stats */}
                {/* <div className="flex gap-8 sm:gap-14 mt-4">
                    {[
                        { value: "5+", labelKey: "hero.statsYears" },
                        { value: "8", labelKey: "hero.statsProjects" },
                        { value: "4", labelKey: "hero.statsAgents" },
                    ].map((stat) => (
                        <div key={stat.labelKey} className="border-l-2 border-acid/40 pl-4">
                            <p className="font-display text-3xl sm:text-4xl text-ink leading-none">
                                {stat.value}
                            </p>
                            <p className="font-mono text-[10px] uppercase tracking-widest text-muted mt-2 max-w-[120px]">
                                {t(stat.labelKey)}
                            </p>
                        </div>
                    ))}
                </div> */}

                <div className="flex items-center gap-2 font-mono text-base text-muted">
                    <span className="text-acid">&gt;</span>
                    <span className="words text-left">
                        <p className="word">n8n</p>
                        <p className="word">llms</p>
                        <p className="word">next.js</p>
                        <p className="word">node.js</p>
                        <p className="word">react</p>
                        <p className="word">typescript</p>
                        <p className="word">supabase</p>
                        <p className="word">firebase</p>
                        <p className="word">tailwind</p>
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
                                        className="relative group p-2 bg-white/[0.02] border border-white/[0.06] hover:border-acid/40 hover:bg-white/[0.05] transition-colors cursor-pointer"
                                    >
                                        <div className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center">
                                            {skill.icon}
                                        </div>
                                        <div className="hidden md:block absolute -top-9 left-1/2 -translate-x-1/2 px-2 py-1 bg-[#111113] text-ink font-mono text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-white/10 z-10">
                                            {skill.title}
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
                <a
                    href="/AgustinMontes3.pdf"
                    download="Agustin_Montes_CV.pdf"
                    className="flex items-center gap-2 px-6 py-3 bg-acid text-black font-mono text-xs uppercase tracking-widest hover:-translate-y-0.5 hover:shadow-[0_0_24px_rgba(198,242,78,0.25)] transition-all cursor-pointer"
                >
                    <Download size={14} />
                    {t("hero.downloadCV")}
                </a>

                <button
                    onClick={() => setShowPreview(true)}
                    className="flex items-center gap-2 px-6 py-3 bg-transparent border border-white/[0.12] hover:border-acid/50 font-mono text-xs uppercase tracking-widest text-muted hover:text-ink transition-all group cursor-pointer"
                >
                    <Eye size={14} className="group-hover:text-acid transition-colors" />
                    Preview CV
                </button>

                <div className="flex items-center gap-2 ml-1">
                    <a
                        href="https://github.com/agustinmontes10"
                        target="_blank"
                        className="p-3 border border-white/[0.12] text-muted hover:text-acid hover:border-acid/50 transition-all"
                        aria-label="GitHub"
                    >
                        <Github size={16} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/agustinmontes10/"
                        target="_blank"
                        className="p-3 border border-white/[0.12] text-muted hover:text-acid hover:border-acid/50 transition-all"
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
                            className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-[#111113] p-2 border border-white/[0.08]"
                        >
                            <button
                                onClick={() => setShowPreview(false)}
                                className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 text-white transition-colors z-10"
                            >
                                <X size={20} />
                            </button>
                            <img
                                src="/AgustinMontesCV3.jpg"
                                alt="CV Preview"
                                className="w-full h-auto shadow-2xl"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Scroll cue */}
            <a href="#projects" className="absolute bottom-8 flex flex-col items-center gap-1 text-muted/60 hover:text-acid transition-colors">
                <span className="font-mono text-[10px] uppercase tracking-widest">scroll</span>
                <ChevronDown size={20} className="animate-bounce" />
            </a>
        </section>
    );
}

export default HeroSection;
