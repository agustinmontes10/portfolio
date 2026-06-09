"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { EffectCards } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useTranslation } from "react-i18next";
import { ArrowLeft, ArrowRight, ExternalLink, Github, Globe, Zap } from "lucide-react";
import { ProjectProps, ProjectCategory, projects } from "../../../../data/projectsData";
import Background from "@/components/Background";

const categoryMeta: Record<ProjectCategory, {
    label: string;
    icon: React.ElementType;
    text: string;
    bg: string;
    border: string;
}> = {
    web: {
        label: "Web Dev",
        icon: Globe,
        text: "text-blue-400",
        bg: "bg-blue-500/10",
        border: "border-blue-500/20",
    },
    automation: {
        label: "Automation",
        icon: Zap,
        text: "text-violet-400",
        bg: "bg-violet-500/10",
        border: "border-violet-500/20",
    },
};

function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
    const [project, setProject] = useState<ProjectProps | null>(null);
    const [loading, setLoading] = useState(true);
    const { t } = useTranslation();

    useEffect(() => {
        (async () => {
            const resolved = await params;
            const found = projects.find((p) => p.id === parseInt(resolved.id)) || null;
            setProject(found);
            setLoading(false);
        })();
    }, [params]);

    if (loading) {
        return (
            <div className="relative min-h-screen bg-[#060609] text-gray-300 flex items-center justify-center">
                <Background />
                <div className="relative z-10 flex flex-col items-center gap-4">
                    <div className="w-8 h-8 border-2 border-white/10 border-t-blue-400 rounded-full animate-spin" />
                    <p className="text-sm text-gray-500">{t("projectDetail.loading")}</p>
                </div>
            </div>
        );
    }

    if (!project) {
        return (
            <div className="relative min-h-screen bg-[#060609] text-gray-300 flex items-center justify-center">
                <Background />
                <div className="relative z-10 flex flex-col items-center gap-6 text-center px-6">
                    <p className="text-2xl font-semibold text-white">{t("projectDetail.notFound")}</p>
                    <Link
                        href="/#projects"
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/[0.05] hover:bg-white/10 border border-white/[0.08] rounded-full transition-all text-sm"
                    >
                        <ArrowLeft size={16} />
                        {t("projectDetail.backToProjects")}
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="relative min-h-screen bg-[#060609] text-gray-300">
            <Background />

            <div className="relative z-10 flex flex-col min-h-screen">
                <div className="container mx-auto max-w-[85vw] xl:max-w-6xl flex-1 pt-8 pb-16">

                    {/* Back nav */}
                    <Link
                        href="/#projects"
                        className="inline-flex items-center gap-2 mb-12 px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.08] text-sm text-gray-400 hover:text-white hover:bg-white/[0.08] transition-all"
                    >
                        <ArrowLeft size={16} />
                        {t("projectDetail.back")}
                    </Link>

                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                        {/* Image carousel */}
                        <div className="w-full max-w-[420px] mx-auto lg:mx-0">
                            <Swiper effect="cards" grabCursor modules={[EffectCards]}>
                                {project.images.map((image, index) => (
                                    <SwiperSlide key={index} className="rounded-2xl overflow-hidden border border-white/10">
                                        <Image
                                            width={500}
                                            height={500}
                                            src={image}
                                            alt={`${project.title} ${index + 1}`}
                                            className="w-full h-auto object-cover"
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>

                        {/* Info */}
                        <div className="flex flex-col">
                            {/* Category badges */}
                            <div className="flex flex-wrap gap-2 mb-5">
                                {project.categories.map((c) => {
                                    const m = categoryMeta[c];
                                    const Icon = m.icon;
                                    return (
                                        <span
                                            key={c}
                                            className={`inline-flex items-center gap-1.5 ${m.bg} ${m.text} border ${m.border} text-xs px-3 py-1 rounded-full font-medium`}
                                        >
                                            <Icon size={12} />
                                            {m.label}
                                        </span>
                                    );
                                })}
                            </div>

                            <h1 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
                                {project.title}
                            </h1>

                            <p className="mt-4 text-lg text-gray-300">
                                {t(`projects.${project.description}`)}
                            </p>

                            {/* Overview */}
                            <div className="mt-8">
                                <h2 className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-3">
                                    {t("projectDetail.overview")}
                                </h2>
                                <p className="text-gray-400 leading-relaxed">
                                    {t(`projects.${project.text}`)}
                                </p>
                            </div>

                            {/* Tech stack */}
                            <div className="mt-8">
                                <h2 className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-3">
                                    {t("projectDetail.techStack")}
                                </h2>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, index) => (
                                        <span
                                            key={index}
                                            className="bg-white/[0.05] text-gray-400 px-3 py-1.5 rounded-md text-sm border border-white/[0.06] font-mono"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Actions */}
                            {(project.deployment || project.linkGithub) && (
                            <div className="flex flex-wrap gap-3 mt-10">
                                {project.deployment && (
                                    <a
                                        href={project.deployment}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white text-sm font-medium transition-all"
                                    >
                                        <ExternalLink size={16} />
                                        {t("projectDetail.viewLive")}
                                    </a>
                                )}
                                {project.linkGithub && (
                                    <a
                                        href={project.linkGithub}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.05] hover:bg-white/10 border border-white/[0.08] text-gray-300 hover:text-white text-sm font-medium transition-all"
                                    >
                                        <Github size={16} />
                                        {t("projectDetail.sourceCode")}
                                    </a>
                                )}
                            </div>
                            )}
                        </div>
                    </div>

                    {/* Back to all projects */}
                    <div className="mt-20 pt-10 border-t border-white/[0.06]">
                        <Link
                            href="/#projects"
                            className="group inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                        >
                            {t("projectDetail.backToProjects")}
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>

                <footer className="relative z-10 py-8">
                    <div className="container mx-auto px-6 text-center text-gray-500 text-sm">
                        <p>© 2026 Agustin Montes.</p>
                    </div>
                </footer>
            </div>
        </div>
    );
}

export default ProjectPage;
