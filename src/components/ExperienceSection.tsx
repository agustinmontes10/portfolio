'use client'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next';

const experience = [
    {
        title: 'experience.exp1_title',
        company: 'experience.exp1_company',
        date: 'experience.exp1_date',
        description: 'experience.exp1_desc'
    },
    {
        title: 'experience.exp2_title',
        company: 'experience.exp2_company',
        date: 'experience.exp2_date',
        description: 'experience.exp2_desc'
    }
];

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
}

const ExperienceSection = () => {
    const { t } = useTranslation();

    return (
        <section className="py-20 px-6" id='experience'>
            <div className="container mx-auto max-w-[80vw] md:max-w-[70vw]">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-extrabold relative inline-block">
                        {t("experience.title")}
                        <span className="block h-1 w-1/3 bg-blue-400 mt-2 mx-auto rounded"></span>
                    </h2>
                </div>
                <div className="relative">
                    <div className="absolute left-4 top-0 bottom-0 w-1 bg-blue-400 rounded"></div>
                    <div className="space-y-12">
                        {experience.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                variants={fadeUp}
                                className="relative pl-12"
                            >
                                <div className="absolute left-4 top-2 w-4 h-4 bg-emerald-500 border-4 border-white rounded-full shadow-md"></div>
                                <div className="bg-[linear-gradient(45deg,_#13203a,_transparent)] p-6 rounded-xl shadow-md">
                                    <h3 className="text-2xl font-semibold">{t(exp.title)}</h3>
                                    <p className="text-sm text-blue-400">{t(exp.company)} · {t(exp.date)}</p>
                                    <p className="text-gray-300 mt-4">{t(exp.description)}</p>
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
