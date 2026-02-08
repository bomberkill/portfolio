'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Download, Layers, Users, Target, Rocket } from 'lucide-react';
import { GithubIcon } from '@/components/Icons';
import { projects } from '@/lib/data';
import { LocalizedText } from '@/types/project';
import { useLanguage } from '@/context/LanguageContext';

export default function ProjectDetails({ id }: { id: string }) {
    const { language } = useLanguage();
    const project = projects.find(p => p.id === parseInt(id));

    if (!project) return <div className="min-h-screen flex items-center justify-center text-foreground">Loading...</div>;

    // Helper to safely access localized text
    const getLocalized = (content: LocalizedText | string | undefined) => {
        if (!content) return '';
        if (typeof content === 'string') return content;
        return content[language] || content['en']; // Fallback
    };

    return (
        <div className="min-h-screen pt-24 pb-20 relative">
            {/* Deep Space Background for this page */}
            <div className="absolute inset-0 z-0 pointer-events-none fixed">
                <div className="absolute top-[10%] right-[30%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-[10%] left-[10%] w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[120px]" />
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
            </div>

            <div className="container mx-auto px-6 relative z-10 max-w-5xl">

                {/* Back Button */}
                <Link href="/#projects" className="inline-flex items-center gap-2 text-foreground/60 hover:text-primary transition-colors mb-8 group">
                    <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> Back to Projects
                </Link>

                {/* Hero Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-12"
                >
                    <div className="relative h-64 md:h-96 w-full rounded-3xl overflow-hidden mb-8 shadow-2xl border border-white/10 group">
                        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: project.image }} />
                        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 justify-between items-start md:items-center mb-6">
                        <div>
                            <div className="flex items-center gap-3 mb-2">
                                <h1 className="text-4xl md:text-6xl font-bold font-inter text-foreground drop-shadow-lg">{project.title}</h1>
                                <span className="px-3 py-1 rounded-full bg-primary/20 text-primary border border-primary/30 text-xs font-mono uppercase tracking-widest">{project.category}</span>
                            </div>
                            <p className="text-xl text-foreground/70 font-light max-w-2xl">{getLocalized(project.description)}</p>
                        </div>

                        <div className="flex gap-4">
                            {project.links.github && (
                                <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 dark:bg-white/10 rounded-full hover:bg-primary hover:text-white text-foreground transition-all border border-white/10" title="Source Code">
                                    <GithubIcon size={24} />
                                </a>
                            )}
                            {project.links.live && (
                                <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 dark:bg-white/10 rounded-full hover:bg-secondary hover:text-white text-foreground transition-all border border-white/10" title="Live Demo">
                                    <ExternalLink size={24} />
                                </a>
                            )}
                            {project.links.download && (
                                <a href={project.links.download} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 dark:bg-white/10 rounded-full hover:bg-green-500 hover:text-white text-foreground transition-all border border-white/10" title="Download">
                                    <Download size={24} />
                                </a>
                            )}
                        </div>
                    </div>
                </motion.div>

                {/* Content Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Main Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="md:col-span-2 space-y-6"
                    >
                        <div className="glass-card p-8 rounded-3xl relative overflow-hidden">
                            <div className="flex items-center gap-3 mb-6">
                                <Target className="text-primary" size={28} />
                                <h2 className="text-2xl font-bold text-foreground">Project Goal</h2>
                            </div>
                            <p className="text-foreground/80 leading-relaxed text-lg">
                                {getLocalized(project.goal) || "The main objective of this project was to creating a seamless user experience while ensuring high performance and scalability."}
                            </p>
                        </div>

                        <div className="glass-card p-8 rounded-3xl relative overflow-hidden">
                            <div className="flex items-center gap-3 mb-6">
                                <Layers className="text-secondary" size={28} />
                                <h2 className="text-2xl font-bold text-foreground">Tech Stack</h2>
                            </div>
                            <div className="flex flex-wrap gap-3">
                                {project.tech.map((tech, i) => (
                                    <span key={i} className="px-4 py-2 bg-gradient-to-r from-white/5 to-white/10 border border-white/10 rounded-xl text-foreground font-mono text-sm shadow-sm hover:border-primary/50 transition-colors">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Sidebar Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="space-y-6"
                    >
                        <div className="glass-card p-6 rounded-3xl">
                            <h3 className="text-sm font-mono uppercase text-foreground/50 mb-4 tracking-wider">My Role</h3>
                            <div className="flex items-center gap-3 mb-4">
                                <Rocket className="text-accent" />
                                <span className="text-lg font-bold text-foreground">{getLocalized(project.role) || "Developer"}</span>
                            </div>
                            <div className="h-px w-full bg-white/10 my-4" />
                            <h3 className="text-sm font-mono uppercase text-foreground/50 mb-4 tracking-wider">Team</h3>
                            <div className="flex items-center gap-3">
                                <Users className="text-secondary" />
                                <span className="text-lg font-bold text-foreground">{project.team || "Solo"}</span>
                            </div>
                        </div>
                    </motion.div>
                </div>

            </div>
        </div>
    );
}
