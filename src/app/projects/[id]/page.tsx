"use client";

import Image from "next/image";
import { ProjectProps, projects } from "../../../../data/projectsData";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { EffectCards } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useTranslation } from "react-i18next";

function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
    const [project, setProject] = useState<ProjectProps | null>(null);
    const { t } = useTranslation();

    useEffect(() => {
        async function fetchParams() {
            const resolvedParams = await params;
            const foundProject = projects.find((project) => project.id === parseInt(resolvedParams.id)) || null;
            setProject(foundProject);
        }

        fetchParams();
    }, [params]);

    if (!project) return <p className="text-center text-gray-500">Cargando proyecto...</p>;

    return (
        <div className="min-h-screen text-gray-300 bg-[linear-gradient(47deg,_#141526,_#010214)] flex flex-col justify-between">
            <div className="container mx-auto max-w-[80vw]">
                <Link href={'/'} className="flex gap-4 items-center mb-8 cursor-pointer pt-10" >
                    <ArrowLeft size={32} />
                    <p className="text-2xl font-bold">Portfolio</p>
                </Link>
                <div className="flex flex-col lg:flex-row items-center gap-y-12 lg:gap-x-12">
                    <div className="w-full lg:w-1/2">
                        <Swiper
                            effect={'cards'}
                            grabCursor={true}
                            modules={[EffectCards]}
                        >
                            {project.images.map((image, index) => (
                                <SwiperSlide key={index}>
                                    <Image
                                        width={400}
                                        height={400}
                                        src={image}
                                        alt={`Imagen ${index + 1}`}
                                        className="w-full h-auto object-cover rounded-lg shadow-md"
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    <div className="w-full lg:w-1/2 flex flex-col items-center text-center px-4">
                        <p className="text-3xl font-semibold">{project.title}</p>
                        <p className="mt-4 font-medium">{t(`projects.${project.description}`)}</p>
                        <p className="mt-6">{t(`projects.${project.text}`)}</p>

                        <div className="flex flex-wrap justify-center gap-2 mt-8">
                            {project?.tags.map((tag, index) => (
                                <span key={index} className="bg-[#51a2ff] text-black px-4 py-1 rounded-full text-sm">{tag}</span>
                            ))}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-6 mt-10">
                            <a className="flex gap-2 items-center justify-center" href={project.linkGithub} target="_blank">
                                <svg className="" viewBox="0 0 128 128" height={40} width={40}>
                                    <g fill="#d1d5dc"><path fillRule="evenodd" clipRule="evenodd" d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"></path><path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"></path></g>
                                </svg>
                                <p>Enlace a Github</p>
                            </a>
                            <a className="flex gap-2 items-center justify-center" href={project.deployment} target="_blank">
                                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" height={40} width={40}>
                                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect width="48" height="48" fill="white" fillOpacity="0.01"></rect> <path d="M24.7071 9.56496L9.85789 24.4142C6.34317 27.9289 6.34317 33.6274 9.85789 37.1421V37.1421C13.3726 40.6568 19.0711 40.6568 22.5858 37.1421L40.2635 19.4645C42.6066 17.1213 42.6066 13.3223 40.2635 10.9792V10.9792C37.9203 8.63603 34.1213 8.63603 31.7782 10.9792L14.1005 28.6568C12.929 29.8284 12.929 31.7279 14.1005 32.8995V32.8995C15.2721 34.0711 17.1716 34.0711 18.3432 32.8995L33.1924 18.0502" stroke="#d1d5dc" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                                <p>Deployment</p>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
            <footer className="py-8">
                <div className="container mx-auto px-6 text-center text-gray-400">
                    <p>© 2025 Portfolio. Todos los derechos reservados.</p>
                </div>
            </footer>
        </div>
    );
}

export default ProjectPage;