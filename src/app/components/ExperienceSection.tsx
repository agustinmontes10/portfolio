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

const ExperienceSection = () => {
    return (
        <section className="py-20 px-6">
            <div className="container mx-auto max-w-[60vw]">
                <div className="w-full flex justify-center">
                    <h2 className="text-4xl font-bold text-center mb-16 w-fit relative z-10">
                        Experiencia
                        <span className='absolute bottom-0 left-10/12 transform -translate-x-2/5 -translate-y-0 rounded w-2/5 h-5 bg-[#e3f3d3] -z-10'></span>
                    </h2>
                </div>
                <div className="container mx-auto">
                    <div className="relative">
                        <div className="border-l-2 border-gray-400 absolute h-full left-0 transform -translate-x-1/2"></div>
                        <div className="space-y-8">
                            {experience.map((exp, index) => (
                                <div key={index} className="relative flex flex-col space-x-8">
                                    <div className="bg-gray-900 w-6 h-6 rounded-full border-2 border-gray-400 absolute left-0 transform -translate-x-1/2"></div>
                                    <div className="px-8">
                                        <h3 className="text-3xl font-bold mb-2">{exp.title}</h3>
                                        <p className="text-gray-400 mb-4">{exp.company}</p>
                                        <p className="text-gray-400 mb-4">{exp.date}</p>
                                    </div>
                                    <div className="px-8">
                                        <p className="text-gray-400">{exp.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ExperienceSection;