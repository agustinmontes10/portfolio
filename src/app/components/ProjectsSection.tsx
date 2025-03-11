const projects = [
    {
        title: "E-commerce Platform",
        description: "Plataforma de comercio electrónico con React y Node.js",
        image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800",
        tags: ["React", "Node.js", "MongoDB"]
    },
    {
        title: "App de Gestión",
        description: "Sistema de gestión empresarial completo",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
        tags: ["TypeScript", "React", "PostgreSQL"]
    },
    {
        title: "Portfolio Personal",
        description: "Diseño y desarrollo de portfolio interactivo",
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800",
        tags: ["React", "TailwindCSS"]
    }
];

const ProjectsSection = () => {
    return (
        <section className="py-20 px-6">
            <div className="container mx-auto max-w-[80vw]">
                <h2 className="text-4xl font-bold text-center mb-16">Proyectos</h2>
                
            <i className="devicon-react-original"></i>
          
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden transform hover:scale-105 transition-all"
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                <p className="text-gray-400 mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, tagIndex) => (
                                        <span
                                            key={tagIndex}
                                            className="bg-blue-400/10 text-blue-400 px-3 py-1 rounded-full text-sm"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
};

export default ProjectsSection;
