import { Metadata } from 'next';
import { projects } from '@/lib/data';
import CaseStudyView from './CaseStudyView';

interface CaseStudyPageProps {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);

    if (!project || !project.caseStudy) {
        return { title: 'Not found | Portfolio' };
    }

    return {
        title: `${project.title} | Portfolio`,
        description: project.caseStudy.result.en,
    };
}

export default async function Page({ params }: CaseStudyPageProps) {
    const { slug } = await params;
    return <CaseStudyView slug={slug} />;
}
