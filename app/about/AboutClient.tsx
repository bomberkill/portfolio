'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SectionHeader from '@/components/SectionHeader';
import DefinitionList from '@/components/DefinitionList';
import TextLink from '@/components/TextLink';
import { useLanguage } from '@/context/LanguageContext';
import { GithubIcon, LinkedinIcon } from '@/components/Icons';

const experience = [
    { role: 'Chief Technology Officer (CTO)', place: 'ReachDem', period: 'Sep 2025–Present' },
    { role: 'Front-End Developer', place: 'Nobisoft, Douala', period: 'Sep 2022–Jan 2025' },
    { role: 'Web Development Intern', place: 'Nobisoft, Douala', period: 'Jun 2022–Sep 2022' },
];

const education = [
    { role: 'B.Tech, Systems & Network Administration', place: 'IUT of Douala', period: '2021–2022' },
    { role: 'University Diploma, Computer Engineering', place: 'IUT of Douala', period: '2019–2021' },
];

const skills = [
    { label: 'Front-end', value: 'React, Next.js, React Native, Tailwind, Mantine, shadcn/ui, Refine' },
    { label: 'Back-end', value: 'Node.js, NestJS, GraphQL, REST' },
    { label: 'Data & State', value: 'PostgreSQL, MongoDB, Prisma, Redis, Redux, MobX-State-Tree, Zustand' },
    { label: 'Cloud & DevOps', value: 'Firebase, Supabase, Cloudflare Workers, Docker, Vercel' },
];

export default function AboutClient() {
    const { t } = useLanguage();
    const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'ronaldkamwa@yahoo.com';

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow pt-32 pb-24">
                <div className="container mx-auto px-6 max-w-3xl">
                    <SectionHeader number="01" label={t('about.title')} />

                    <h2 className="text-lg text-foreground mb-6">{t('about.subtitle')}</h2>

                    <div className="space-y-4 mb-8">
                        <p className="text-foreground/80 text-base leading-relaxed max-w-[34em]">{t('about.text1')}</p>
                        <p className="text-foreground/80 text-base leading-relaxed max-w-[34em]">{t('about.text2')}</p>
                    </div>

                    <p className="mb-12">
                        <TextLink href="/ronald-kamgaing-resume.pdf">{t('about.cv')}</TextLink>
                    </p>

                    <section className="mb-12">
                        <h3 className="text-[26px] font-bold text-foreground mb-4">{t('about.experience')}</h3>
                        <DefinitionList items={experience.map((e) => ({ label: e.period, value: `${e.role} — ${e.place}` }))} />
                    </section>

                    <section className="mb-12">
                        <h3 className="text-[26px] font-bold text-foreground mb-4">{t('about.education')}</h3>
                        <DefinitionList items={education.map((e) => ({ label: e.period, value: `${e.role} — ${e.place}` }))} />
                    </section>

                    <section className="mb-12">
                        <h3 className="text-[26px] font-bold text-foreground mb-4">{t('about.skills')}</h3>
                        <DefinitionList items={skills} />
                    </section>

                    <p className="mb-4">
                        <TextLink href={`mailto:${contactEmail}`} className="text-lg font-bold">
                            {contactEmail}
                        </TextLink>
                    </p>

                    <div className="flex gap-6">
                        <a href="https://www.linkedin.com/in/ronald-kamgaing-1819662b8/" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary transition-colors" aria-label="LinkedIn">
                            <LinkedinIcon size={22} />
                        </a>
                        <a href="https://github.com/bomberkill" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary transition-colors" aria-label="GitHub">
                            <GithubIcon size={22} />
                        </a>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
