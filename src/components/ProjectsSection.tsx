import Link from 'next/link';
import { ArrowUpLeft } from "lucide-react";
import { motion, Variants } from "framer-motion";
import Image from 'next/image';
import { projects } from '../../data/projectsData';
import { useTranslation } from 'react-i18next';

const fadeVariantLeftRight: Variants = {
  hidden: (custom: number) => ({
    opacity: 0,
    x: custom % 2 === 0 ? -100 : 100,
  }),
  visible: () => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeInOut", // String válido para easing
    },
  }),
};

const ProjectsSection = () => {
  const { t } = useTranslation();
  
  return (
    <section className="py-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-[80vw] md:max-w-[70vw]">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold relative inline-block">
            {t("projects.title")}
            <span className="block h-1 w-1/3 bg-blue-400 mt-2 mx-auto rounded" />
          </h2>
        </div>

        <div className="flex flex-wrap justify-between gap-10 sm:gap-12" id='projects'>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={fadeVariantLeftRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className={`project cursor-pointer w-full sm:w-[45%] ${index % 2 !== 0 ? 'sm:mt-80' : ''
                }`}
            >
              <Link href={`/projects/${project.id}`}>
                <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={500}
                    height={300}
                    className="w-full h-48 sm:h-[350px] object-cover"
                  />
                  <div className="p-5 sm:p-6 project-information bg-[#13203a]">
                    <div className='w-[77%]'>
                      <h3 className="text-lg sm:text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-gray-400 text-sm sm:text-base mb-4">
                        {t(`projects.${project.description}`)}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="bg-blue-400/10 text-blue-400 px-3 py-1 rounded-full text-xs sm:text-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="arrow mt-4">
                      <ArrowUpLeft />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
