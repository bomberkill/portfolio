'use client';

import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DefinitionList from '@/components/DefinitionList';
import TextLink from '@/components/TextLink';
import { useLanguage } from '@/context/LanguageContext';
import { projects } from '@/lib/data';

export default function CaseStudyView({ slug }: { slug: string }) {
    const { language } = useLanguage();
    const project = projects.find((p) => p.slug === slug);

    if (!project || !project.caseStudy) {
        notFound();
    }

    const cs = project.caseStudy;

    const metaItems = [
        { label: 'Role', value: cs.role },
        { label: 'Period', value: cs.period },
        { label: 'Type', value: cs.type },
        { label: 'Team', value: cs.team },
        ...(cs.status ? [{ label: 'Status', value: cs.status[language] }] : []),
    ];

    const stackItems = [
        ...(cs.stack.frontend ? [{ label: 'Frontend', value: cs.stack.frontend.join(', ') }] : []),
        ...(cs.stack.admin ? [{ label: 'Admin', value: cs.stack.admin.join(', ') }] : []),
        ...(cs.stack.backend ? [{ label: 'Backend', value: cs.stack.backend.join(', ') }] : []),
        ...(cs.stack.infra ? [{ label: 'Infra', value: cs.stack.infra.join(', ') }] : []),
    ];

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow pt-32 pb-24">
                <div className="container mx-auto px-6 max-w-3xl">
                    <p className="label-text mb-4">{project.year}</p>
                    <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6 tracking-tight">{project.title}</h1>
                    <p className="text-lg text-foreground/80 leading-relaxed mb-10 max-w-[34em]">{cs.result[language]}</p>

                    <div className="mb-12">
                        <DefinitionList items={metaItems} />
                    </div>

                    <section className="mb-12">
                        <h2 className="text-[26px] font-bold text-foreground mb-4">Context</h2>
                        <p className="text-base text-foreground/80 leading-relaxed max-w-[34em]">{cs.context[language]}</p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-[26px] font-bold text-foreground mb-4">The hard part</h2>
                        <p className="text-base text-foreground/80 leading-relaxed max-w-[34em]">{cs.hardPart[language]}</p>
                    </section>

                    {cs.decisions.length > 0 && (
                        <section className="mb-12">
                            <h2 className="text-[26px] font-bold text-foreground mb-4">Decisions</h2>
                            <ol className="space-y-4">
                                {cs.decisions.map((d, i) => (
                                    <li key={i} className="flex gap-4">
                                        <span className="label-text pt-1">{String(i + 1).padStart(2, '0')}</span>
                                        <span className="text-base text-foreground/80 leading-relaxed max-w-[34em]">{d.text[language]}</span>
                                    </li>
                                ))}
                            </ol>
                        </section>
                    )}

                    {cs.numbers && (
                        <section className="mb-12">
                            <h2 className="text-[26px] font-bold text-foreground mb-4">Numbers</h2>
                            <p className="text-base text-foreground/80 leading-relaxed max-w-[34em]">{cs.numbers[language]}</p>
                        </section>
                    )}

                    <section className="mb-12">
                        <h2 className="text-[26px] font-bold text-foreground mb-4">Stack</h2>
                        <DefinitionList items={stackItems} />
                    </section>

                    <section>
                        <h2 className="text-[26px] font-bold text-foreground mb-4">Links{cs.next ? ' + next' : ''}</h2>
                        <div className="flex flex-wrap gap-x-6 gap-y-2 mb-4">
                            {cs.links.live && <TextLink href={cs.links.live}>Live</TextLink>}
                            {cs.links.github && <TextLink href={cs.links.github}>Repo</TextLink>}
                            {cs.links.repoPrivate && <span className="text-sm text-muted">Repo private</span>}
                            {cs.links.extraRepos?.map((r) => (
                                <TextLink key={r.url} href={r.url}>{r.label}</TextLink>
                            ))}
                        </div>
                        {cs.next && (
                            <p className="text-base text-foreground/80 leading-relaxed max-w-[34em]">{cs.next[language]}</p>
                        )}
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
}
