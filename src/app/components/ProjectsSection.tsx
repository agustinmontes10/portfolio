import Link from 'next/link';
import { ArrowUpLeft } from "lucide-react";
import { projects } from '../data/projectsData';



const ProjectsSection = () => {
    return (
        <section className="py-20 px-6 bg-primary">
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
                                className={`bg-gray-100 rounded-xl overflow-hidden`}
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
