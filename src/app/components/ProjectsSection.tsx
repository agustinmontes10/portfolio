import Link from 'next/link';
import { ArrowUpLeft } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "E-commerce Platform",
        description: "Plataforma de comercio electrónico con React y Node.js",
        image: "/assets/projects/project-seguros.png",
        tags: ["React", "Node.js", "MongoDB"]
    },
    {
        id: 2,
        title: "App de Gestión",
        description: "Sistema de gestión empresarial completo",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
        tags: ["TypeScript", "React", "PostgreSQL"]
    },
    {
        id: 3,
        title: "Portfolio Personal",
        description: "Diseño y desarrollo de portfolio interactivo",
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800",
        tags: ["React", "TailwindCSS"]
    },
    {
        id: 4,
        title: "E-commerce Platform",
        description: "Plataforma de comercio electrónico con React y Node.js",
        image: "/assets/projects/project-seguros.png",
        tags: ["React", "Node.js", "MongoDB"]
    },
];

const ProjectsSection = () => {
    return (
        <section className="py-20 px-6 bg-[#e3f3d3]">
            <div className="container mx-auto max-w-[80vw]">
                <div className="w-full flex justify-center">
                    <h2 className="text-4xl font-bold text-center mb-16 w-fit relative z-10">
                        Projects
                        <span className='absolute bottom-0 left-10/12 transform -translate-x-2/5 -translate-y-0 rounded w-2/5 h-5 bg-[#7ab93e] -z-10'></span>
                    </h2>
                </div>
                <div className="flex flex-wrap justify-center gap-12">
                    {projects.map((project, index) => (
                        <Link className={`transform transition-all project cursor-pointer w-[45%] ${index % 2 !== 0 ? 'mt-30' : ''}`} key={index} href={`/projects/${project.id}`}>
                            <div 
                                className={`bg-[#1e2939] rounded-xl overflow-hidden`}
                            >
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-[300px] object-cover"
                                />
                                <div className="p-6 project-information">
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

                                    <div className="arrow">
                                        <ArrowUpLeft  />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
