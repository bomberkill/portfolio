'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SectionHeader from '@/components/SectionHeader';
import WorkRow from '@/components/WorkRow';
import { useLanguage } from '@/context/LanguageContext';
import { projects } from '@/lib/data';

export default function WorkIndexClient() {
    const { language } = useLanguage();

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow pt-32 pb-24">
                <div className="container mx-auto px-6 max-w-4xl">
                    <SectionHeader number="00" label="Work" />
                    <div>
                        {projects.map((project) => (
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
                </div>
            </main>
            <Footer />
        </div>
    );
}
