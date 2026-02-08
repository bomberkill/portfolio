'use client';
import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { GithubIcon } from '@/components/Icons';
import { useLanguage } from '@/context/LanguageContext';
import { projects } from '@/lib/data';

const Projects = () => {
    const { t, language } = useLanguage();
    const [filter, setFilter] = useState('all');

    const filteredProjects = filter === 'all'
        ? projects
        : projects.filter(p => p.category === filter);

    return (
        <section id="projects" className="py-32 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <div className="h-px w-8 bg-primary"></div>
                        <span className="text-primary font-mono text-sm uppercase tracking-widest">Portfolio</span>
                        <div className="h-px w-8 bg-primary"></div>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold font-inter text-foreground mb-8 text-glow">{t('projects.title')}</h2>

                    <div className="flex flex-wrap justify-center gap-4">
                        {['all', 'web', 'mobile', 'backend'].map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-6 py-2 rounded-full capitalize transition-all font-medium border ${filter === cat
                                    ? 'bg-primary/20 border-primary text-primary dark:text-white shadow-[0_0_15px_rgba(139,92,246,0.3)]'
                                    : 'bg-transparent border-black/10 dark:border-white/10 text-foreground/60 hover:border-primary/50 hover:text-primary'
                                    }`}
                            >
                                {t(`projects.filter.${cat}`)}
                            </button>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    layout
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence mode='popLayout'>
                        {filteredProjects.map((project) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                key={project.id}
                                className="glass-card rounded-2xl overflow-hidden group hover:shadow-[0_0_30px_rgba(139,92,246,0.15)] transition-all duration-500 flex flex-col h-full"
                            >
                                <Link href={`/projects/${project.id}`} className="block relative overflow-hidden h-56 w-full cursor-pointer">
                                    <div
                                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                        style={{ backgroundImage: project.image }}
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />

                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/40 backdrop-blur-sm transition-all duration-300">
                                        <span className="px-6 py-2 bg-white/20 rounded-full text-white font-medium border border-white/30 backdrop-blur-md flex items-center gap-2">
                                            View Details <ArrowRight size={16} />
                                        </span>
                                    </div>
                                </Link>

                                <div className="p-8 flex-grow flex flex-col">
                                    <div className="flex justify-between items-start mb-4">
                                        <Link href={`/projects/${project.id}`}>
                                            <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors cursor-pointer">{project.title}</h3>
                                        </Link>
                                        <span className="text-[10px] font-bold px-3 py-1 bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 text-foreground/70 rounded-full uppercase tracking-wider">{project.category}</span>
                                    </div>
                                    <p className="text-foreground/70 mb-8 text-sm flex-grow leading-relaxed font-light">{project.description[language]}</p>
                                    <div className="flex flex-wrap gap-2 mt-auto">
                                        {project.tech.slice(0, 3).map((t, i) => (
                                            <span key={i} className="text-xs font-medium px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-md font-mono">
                                                {t}
                                            </span>
                                        ))}
                                        {project.tech.length > 3 && (
                                            <span className="text-xs font-medium px-2 py-1 text-foreground/50 font-mono">+{project.tech.length - 3}</span>
                                        )}
                                    </div>

                                    {/* Quick Links in Card */}
                                    <div className="flex gap-4 mt-6 pt-6 border-t border-black/5 dark:border-white/5">
                                        {project.links.github && (
                                            <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="p-2 bg-black/5 dark:bg-white/5 rounded-full hover:bg-primary hover:text-white dark:hover:text-white transition-all text-foreground/60" title={t('projects.viewCode')}>
                                                <GithubIcon size={18} />
                                            </a>
                                        )}
                                        {project.links.live && (
                                            <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="p-2 bg-black/5 dark:bg-white/5 rounded-full hover:bg-secondary hover:text-white dark:hover:text-white transition-all text-foreground/60" title={t('projects.viewSite')}>
                                                <ExternalLink size={18} />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};
export default Projects;
