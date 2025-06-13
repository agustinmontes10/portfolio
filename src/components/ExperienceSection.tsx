'use client'
import { motion } from 'framer-motion'

const experience = [
    {
        title: 'Desarrollador web full stack',
        company: 'Noswar Studios',
        date: '2023 - 2025',
        description: 'Participé en diversos proyectos utilizando tecnologías como React, Next.js, SCSS y otras herramientas modernas del ecosistema web. A lo largo de estas experiencias, trabajé con distintos equipos, adoptando metodologías ágiles y colaborativas que me permitieron adaptarme fácilmente y contribuir de forma efectiva al desarrollo del producto.'
    },
    {
        title: 'Desarrollador web full stack',
        company: 'Freelance',
        date: '2021 - 2023',
        description: 'Desarrollo de aplicaciones web de forma freelance, con un enfoque principalmente frontend, utilizando tecnologías modernas como Next.js, Firebase, Supabase, Tailwind CSS, Bootstrap, entre otras. Cuento con experiencia en el trato directo con clientes, abarcando todo el proceso de desarrollo: desde la planificación inicial hasta la implementación y entrega final.'
    }
]

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
}

const ExperienceSection = () => {
    return (
        <section className="py-20 px-6">
            <div className="container mx-auto max-w-4xl">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-extrabold relative inline-block">
                        Experiencia
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
                                    <h3 className="text-2xl font-semibold">{exp.title}</h3>
                                    <p className="text-sm text-blue-400">{exp.company} · {exp.date}</p>
                                    <p className="text-gray-300 mt-4">{exp.description}</p>
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
