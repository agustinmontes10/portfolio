import Link from 'next/link';
import { ArrowUpLeft } from "lucide-react";
import { motion, Variants } from "framer-motion";
import Image from 'next/image';
import { projects } from '../../data/projectsData';

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
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-[80vw]">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold relative inline-block">
            Projectos
            <span className="block h-1 w-1/3 bg-blue-400 mt-2 mx-auto rounded"></span>
          </h2>
        </div>
        <div className="flex flex-wrap justify-center gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={fadeVariantLeftRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className={`project cursor-pointer w-[45%] ${index % 2 !== 0 ? 'mt-80' : ''}`}
            >
              <Link href={`/projects/${project.id}`}>
                <div className={`bg-[#fff] rounded-xl overflow-hidden`}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={500}
                    height={300}
                    className="w-full h-[350px] object-cover"
                  />
                  <div className="p-6 project-information bg-[#13203a]">
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
