"use client"
import { ChevronDown, Download, Eye, X } from "lucide-react";
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

    const animMakerData = () => {
        fetch("/assets/markerAnimation.json")
            .then((response) => response.json())
            .then((data) => setMarkerAnimation(data))
            .catch((error) => console.error("Error loading animation:", error));
    };

    useEffect(() => {
        animMakerData();
    }, [])

    useEffect(() => {
        setIsVisible(true);
    }, []);


    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        
        handleResize(); // Check on mount
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const allSkills = Object.values(skills).flat();
    
    // Split skills into rows: 1 for desktop, 3 for mobile to fit screen
    const rows = isMobile 
        ? [
            allSkills.slice(0, Math.ceil(allSkills.length / 3)), 
            allSkills.slice(Math.ceil(allSkills.length / 3), Math.ceil(allSkills.length * 2 / 3)),
            allSkills.slice(Math.ceil(allSkills.length * 2 / 3))
          ]
        : [allSkills];

    return (
        <section className="min-h-screen flex flex-col items-center justify-center py-20 px-4 sm:px-6" id="home">
            <div className="container mx-auto max-w-[80vw] flex flex-col md:flex-row justify-center items-center gap-10">
                <div className={`text-center transform transition-all duration-1000 flex flex-col gap-10 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}>
                    {/* <p className="text-2xl md:text-4xl font-medium text-gray-400 mb-2">
                        Agustín Montes
                    </p> */}
                    <h1 className="text-5xl md:text-7xl font-bold mt-10 mb-6">
                        {t("hero.title")} {" "}
                        <span className="text-blue-400 relative inline-block">
                            {t("hero.role")}
                            {markerAnimation && (
                                <Lottie
                                    animationData={markerAnimation}
                                    className="absolute top-[-100%] left-[-5%] w-[110%] pointer-events-none -z-1"
                                    loop={false}
                                />
                            )}
                        </span>
                    </h1>
                    <div className="flex flex-col md:flex-row items-center md:items-stretch gap-2 text-xl md:text-2xl justify-center my-8">
                        <p className="text-gray-400">
                            {t("hero.subtitle")}
                        </p>
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

                    {/* Skills Icons - Curved Rows */}
                    <div className="flex flex-col items-center gap-16 sm:gap-12 mt-8 w-full max-w-5xl">
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
                                                staggerChildren: 0.1,
                                                delayChildren: 0.5 + (rowIndex * 0.2) // Slight delay for second row
                                            }
                                        }
                                    }}
                                    className="flex flex-nowrap justify-center gap-3 sm:gap-3 px-1"
                                >
                                    {rowSkills.map((skill: { icon: ReactNode; title: string }, index: number) => {
                                        const dist = Math.abs(index - centerIndex);
                                        // Curve calculation:
                                        // dist^2 gives parabola
                                        const yOffset = Math.pow(dist, 2) * (isMobile ? 2 : 1.5); 
                                        
                                        return (
                                            <motion.div
                                                key={index}
                                                custom={yOffset}
                                                variants={{
                                                    hidden: { opacity: 0, scale: 0, y: 50 },
                                                    visible: (y) => ({ 
                                                        opacity: 1, 
                                                        scale: 1, 
                                                        y: y, 
                                                        transition: { 
                                                            type: "spring", 
                                                            stiffness: 200, 
                                                            damping: 15 
                                                        } 
                                                    })
                                                }}
                                                className="relative group p-1 sm:p-2 hover:bg-white/5 rounded-lg transition-colors cursor-pointer"
                                                style={{ marginTop: '-20px' }} // Pull up slightly to reduce gap
                                            >
                                                <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center">
                                                    {skill.icon}
                                                </div>
                                                
                                                {/* Tooltip */}
                                                <div className="hidden md:block absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-800 text-white text-[10px] sm:text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-gray-700 z-10">
                                                    {skill.title}
                                                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-800" />
                                                </div>
                                            </motion.div>
                                        );
                                    })}
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* Old Social Icons
                    <div className="flex justify-center gap-10">
                        <a href="https://www.linkedin.com/in/agustinmontes10/" target="_blank">
                            <svg className="" viewBox="0 0 128 128" height={40} width={40}>
                                <path fill="#0076b2" d="M116 3H12a8.91 8.91 0 00-9 8.8v104.42a8.91 8.91 0 009 8.78h104a8.93 8.93 0 009-8.81V11.77A8.93 8.93 0 00116 3z"></path><path fill="#fff" d="M21.06 48.73h18.11V107H21.06zm9.06-29a10.5 10.5 0 11-10.5 10.49 10.5 10.5 0 0110.5-10.49M50.53 48.73h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75v32H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53z"></path>
                            </svg>
                        </a>

                        <a href="https://github.com/agustinmontes10" target="_blank">
                            <svg className="" viewBox="0 0 128 128" height={40} width={40}>
                                <g fill="#d1d5dc"><path fillRule="evenodd" clipRule="evenodd" d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"></path><path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"></path></g>
                            </svg>
                        </a>

                        <a href="mailto:montesagustin99@gmail.com">
                            <svg className="" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={40} height={40} viewBox="0 0 48 48">
                                <path fill="#4caf50" d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"></path><path fill="#1e88e5" d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z"></path><polygon fill="#e53935" points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"></polygon><path fill="#c62828" d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z"></path><path fill="#fbc02d" d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z"></path>
                            </svg>
                        </a>
                    </div> 
                    */}
                </div>
            </div>
            <div className="mt-12 flex flex-col md:flex-row gap-6 z-10">
                {/* Preview Button */}
                <button 
                    onClick={() => setShowPreview(true)}
                    className="flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-all group cursor-pointer"
                >
                    <Eye size={20} className="text-gray-400 group-hover:text-blue-400 transition-colors" />
                    <span className="text-gray-300 group-hover:text-white">Preview CV</span>
                </button>

                {/* Download Button */}
                <a 
                    href="/AgustinMontesCV2.pdf" 
                    download="Agustin_Montes_CV.pdf"
                    className="flex items-center gap-2 px-6 py-3 bg-blue-600/20 hover:bg-blue-600/30 border border-blue-500/30 rounded-full transition-all group cursor-pointer"
                >
                    <Download size={20} className="text-blue-400 group-hover:text-blue-300 transition-colors" />
                    <span className="text-blue-100 group-hover:text-white">{t("hero.downloadCV")}</span>
                </a>
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
                            className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-gray-900 rounded-lg p-2"
                        >
                            <button 
                                onClick={() => setShowPreview(false)}
                                className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors z-10"
                            >
                                <X size={24} />
                            </button>
                            <img 
                                src="/AgustinMontesCV2.jpg" 
                                alt="CV Preview" 
                                className="w-full h-auto rounded shadow-2xl"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
            <div className="mt-12 animate-bounce">
                <ChevronDown size={52} className="mx-auto" />
            </div>
        </section >
    );
}

export default HeroSection;