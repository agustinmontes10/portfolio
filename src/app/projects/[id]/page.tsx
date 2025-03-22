"use client"
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const projects = [
    {
        id: 1,
        title: "E-commerce Platform",
        description: "Plataforma de comercio electrónico con React y Node.js",
        image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800",
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
    }
];

interface ProjectProps {
    id: number;
    title: string;
    description: string;
    image: string;
    tags: string[];
}

const ProjectPage = ( {id}: ProjectProps ) => {
    const [project, setProject] = useState<ProjectProps>()
    const router = useRouter();

    useEffect(() => {
        const project: ProjectProps | undefined = projects.find((project) => project.id === id);
        setProject(project)
    }, [id]);


    return (
        <>
        {project && 
            <div className="container mx-auto py-20 px-6">
            <h1 className="text-4xl font-bold mb-4">{project?.title}</h1>
            <img src={project?.image} alt={project?.title} className="w-full h-64 object-cover mb-4" />
            <p className="text-gray-400 mb-4">{project?.description}</p>
            <div className="flex flex-wrap gap-2">
                {project?.tags.map((tag, index) => (
                    <span key={index} className="bg-blue-400/10 text-blue-400 px-3 py-1 rounded-full text-sm">
                        {tag}
                    </span>
                ))}
            </div>
            </div>
        }
        </>

        
    );
};

export default ProjectPage;