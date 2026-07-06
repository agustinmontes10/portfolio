'use client';

import Link from 'next/link';
import { ArrowRight, Globe, Zap, Bot } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { projects, ProjectCategory } from '../../data/projectsData';
import { useTranslation } from 'react-i18next';

type FilterTab = 'all' | ProjectCategory;

const categoryConfig: Record<ProjectCategory, {
  label: string;
  icon: React.ElementType;
  textColor: string;
  badgeBg: string;
  badgeBorder: string;
  cardHoverBorder: string;
}> = {
  web: {
    label: 'Web Dev',
    icon: Globe,
    textColor: 'text-blue-400',
    badgeBg: 'bg-blue-500/10',
    badgeBorder: 'border-blue-500/20',
    cardHoverBorder: 'hover:border-blue-500/30',
  },
  automation: {
    label: 'Automation',
    icon: Zap,
    textColor: 'text-violet-400',
    badgeBg: 'bg-violet-500/10',
    badgeBorder: 'border-violet-500/20',
    cardHoverBorder: 'hover:border-violet-500/30',
  },
  'ai-agent': {
    label: 'AI Agent',
    icon: Bot,
    textColor: 'text-emerald-400',
    badgeBg: 'bg-emerald-500/10',
    badgeBorder: 'border-emerald-500/20',
    cardHoverBorder: 'hover:border-emerald-500/30',
  },
};

const TABS: { id: FilterTab; labelKey: string }[] = [
  { id: 'all', labelKey: 'projects.filter.all' },
  { id: 'ai-agent', labelKey: 'projects.filter.aiAgent' },
  { id: 'automation', labelKey: 'projects.filter.automation' },
  { id: 'web', labelKey: 'projects.filter.web' },
];

const ProjectsSection = () => {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState<FilterTab>('all');

  const filtered =
    activeFilter === 'all' ? projects : projects.filter(p => p.categories.includes(activeFilter));

  return (
    <section className="py-24 px-4 sm:px-6" id="projects">
      <div className="container mx-auto max-w-[80vw] md:max-w-[70vw]">

        {/* Header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: -12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-extrabold inline-block"
          >
            {t('projects.title')}
            <span className="block h-[3px] w-1/3 bg-gradient-to-r from-blue-500 to-violet-500 mt-2 mx-auto rounded-full" />
          </motion.h2>
        </div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.4 }}
          className="flex justify-center mb-12"
        >
          <div className="flex gap-1 bg-white/[0.04] border border-white/[0.08] rounded-xl p-1">
            {TABS.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`relative px-5 py-2 text-sm font-medium rounded-lg transition-colors duration-200 cursor-pointer ${
                  activeFilter === tab.id ? 'text-white' : 'text-gray-500 hover:text-gray-300'
                }`}
              >
                {activeFilter === tab.id && (
                  <motion.span
                    layoutId="activeTab"
                    className="absolute inset-0 bg-white/10 rounded-lg"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
                  />
                )}
                <span className="relative z-10">{t(tab.labelKey)}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 items-start">
          <AnimatePresence mode="popLayout">
            {filtered.length === 0 ? (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="col-span-full flex flex-col items-center py-20 text-gray-600"
              >
                <Zap size={32} className="mb-3 opacity-25" />
                <p className="text-sm">{t('projects.empty')}</p>
              </motion.div>
            ) : (
              filtered.map((project, index) => {
                const primary = categoryConfig[project.categories[0]];

                return (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, y: 24 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      transition: { delay: index * 0.07, duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] },
                    }}
                    exit={{ opacity: 0, scale: 0.97, transition: { duration: 0.18 } }}
                  >
                    <Link href={`/projects/${project.id}`}>
                      <div
                        className={`group relative rounded-2xl overflow-hidden border border-white/[0.08] bg-white/[0.02] transition-all duration-300 ${primary.cardHoverBorder}`}
                      >
                        {/* Image */}
                        <div className="relative overflow-hidden h-52 sm:h-64 bg-[#080c14]">
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            sizes="(max-width: 640px) 100vw, 45vw"
                            loading="eager"
                            className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                          />
                          {/* Category badges */}
                          <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                            {project.categories.map((c) => {
                              const m = categoryConfig[c];
                              const Icon = m.icon;
                              return (
                                <span
                                  key={c}
                                  className={`flex items-center gap-1.5 ${m.badgeBg} ${m.textColor} border ${m.badgeBorder} text-xs px-3 py-1 rounded-full backdrop-blur-sm font-medium`}
                                >
                                  <Icon size={11} />
                                  {m.label}
                                </span>
                              );
                            })}
                          </div>
                        </div>

                        {/* Info */}
                        <div className="p-5 sm:p-6">
                          <div className="flex items-start justify-between gap-3 mb-2">
                            <h3 className="text-base sm:text-lg font-bold text-white leading-tight">
                              {project.title}
                            </h3>
                            <ArrowRight
                              size={16}
                              className={`shrink-0 mt-0.5 ${primary.textColor} opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-200`}
                            />
                          </div>

                          <p className="text-gray-500 text-sm mb-5 line-clamp-2 leading-relaxed">
                            {t(`projects.${project.description}`)}
                          </p>

                          <div className="flex flex-wrap gap-1.5">
                            {project.tags.slice(0, 4).map((tag, i) => (
                              <span
                                key={i}
                                className="bg-white/[0.05] text-gray-400 px-2.5 py-1 rounded-md text-xs border border-white/[0.06] font-mono"
                              >
                                {tag}
                              </span>
                            ))}
                            {project.tags.length > 4 && (
                              <span className="text-gray-600 text-xs self-center">
                                +{project.tags.length - 4}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;
