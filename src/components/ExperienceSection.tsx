'use client'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next';

const experience = [
    {
        title: 'experience.exp1_title',
        company: 'experience.exp1_company',
        date: 'experience.exp1_date',
        description: 'experience.exp1_desc',
    },
    {
        title: 'experience.exp2_title',
        company: 'experience.exp2_company',
        date: 'experience.exp2_date',
        description: 'experience.exp2_desc',
    },
];

const ExperienceSection = () => {
    const { t } = useTranslation();

    return (
        <section className="py-24 px-6" id="experience">
            <div className="container mx-auto max-w-[80vw] md:max-w-[70vw]">

                <div className="mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: -12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="flex items-baseline gap-4 border-b border-white/[0.08] pb-4"
                    >
                        <span className="font-mono text-sm text-acid">02 /</span>
                        <h2 className="font-display uppercase text-3xl sm:text-5xl tracking-wide text-ink">
                            {t("experience.title")}
                        </h2>
                    </motion.div>
                </div>

                <div className="relative">
                    {/* Vertical line */}
                    <div className="absolute left-4 top-0 bottom-0 w-px bg-white/[0.12]" />

                    <div className="space-y-10">
                        {experience.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.15 }}
                                className="relative pl-12"
                            >
                                {/* Timeline marker */}
                                <div className="absolute left-[11px] top-7 w-2.5 h-2.5 bg-acid rotate-45 shadow-[0_0_12px_rgba(198,242,78,0.4)]" />

                                {/* Card */}
                                <div className="bg-white/[0.02] border border-white/[0.08] p-6 transition-colors duration-200 hover:border-acid/30">
                                    <div className="flex items-start justify-between gap-4 mb-4">
                                        <div className="min-w-0">
                                            <h3 className="text-lg sm:text-xl font-semibold text-ink">{t(exp.title)}</h3>
                                            <p className="text-sm text-acid mt-0.5 font-mono">{t(exp.company)}</p>
                                        </div>
                                        <span className="self-start shrink-0 whitespace-nowrap bg-white/[0.04] border border-white/[0.08] px-3 py-1 font-mono text-xs text-muted">
                                            {t(exp.date)}
                                        </span>
                                    </div>
                                    <p className="text-muted text-sm leading-relaxed">{t(exp.description)}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    )
}

export default ExperienceSection
