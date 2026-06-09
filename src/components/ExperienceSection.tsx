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

                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: -12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl sm:text-4xl font-extrabold inline-block"
                    >
                        {t("experience.title")}
                        <span className="block h-[3px] w-1/3 bg-gradient-to-r from-blue-500 to-violet-500 mt-2 mx-auto rounded-full" />
                    </motion.h2>
                </div>

                <div className="relative">
                    {/* Gradient vertical line */}
                    <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-500 via-indigo-500 to-violet-500 rounded-full" />

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
                                {/* Timeline dot */}
                                <div className="absolute left-[10px] top-6 w-3.5 h-3.5 bg-blue-500 rounded-full ring-4 ring-blue-500/20 ring-offset-2 ring-offset-black" />

                                {/* Card */}
                                <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6 transition-colors duration-200 hover:border-white/[0.14]">
                                    <div className="flex items-start justify-between gap-4 mb-4">
                                        <div className="min-w-0">
                                            <h3 className="text-lg sm:text-xl font-semibold text-white">{t(exp.title)}</h3>
                                            <p className="text-sm text-blue-400 mt-0.5 font-medium">{t(exp.company)}</p>
                                        </div>
                                        <span className="self-start shrink-0 whitespace-nowrap rounded-full bg-white/[0.05] border border-white/[0.08] px-3 py-1 text-xs text-gray-400">
                                            {t(exp.date)}
                                        </span>
                                    </div>
                                    <p className="text-gray-400 text-sm leading-relaxed">{t(exp.description)}</p>
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
