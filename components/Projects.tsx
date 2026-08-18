'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { projects } from '@/lib/data';
import SectionHeader from '@/components/SectionHeader';
import WorkRow from '@/components/WorkRow';

const Projects = () => {
    const { t, language } = useLanguage();
    const featured = projects.filter((p) => p.featured);

    return (
        <section id="projects" className="py-24 relative">
            <div className="container mx-auto px-6 max-w-3xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <SectionHeader number="01" label={t('projects.title')} />
                </motion.div>

                <div>
                    {featured.map((project) => (
                        <WorkRow
                            key={project.id}
                            year={project.year}
                            name={project.title}
                            result={project.description[language]}
                            stack={project.tech}
                            href={project.caseStudy ? `/work/${project.slug}` : (project.links.github || project.links.live || '#')}
                        />
                    ))}
                    <div className="border-t border-border" />
                </div>

                <div className="mt-6">
                    <Link href="/work" className="text-foreground hover:text-primary underline decoration-1 underline-offset-[0.15em] transition-colors text-sm font-medium">
                        {t('work.seeAll')}
                    </Link>
                </div>
            </div>
        </section>
    );
};
export default Projects;
