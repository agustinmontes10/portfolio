'use client'
import { motion } from 'framer-motion'

const experience = [
    {
        title: 'Desarrollador Frontend',
        company: 'Empresa de tecnología',
        date: '2020 - 2021',
        description: 'Desarrollo de aplicaciones web con React y Vue.js y diseño de interfaces de usuario con Figma y Adobe XD. Implementación de pruebas unitarias y de integración con Jest y React Testing Library.'
    },
    {
        title: 'Desarrollador Backend',
        company: 'Empresa de tecnología',
        date: '2018 - 2020',
        description: 'Desarrollo de APIs con Node.js y Python, bases de datos SQL y NoSQL con MongoDB y PostgreSQL y arquitectura de microservicios con Docker y Kubernetes. Implementación de CI/CD con Jenkins y GitLab.'
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
