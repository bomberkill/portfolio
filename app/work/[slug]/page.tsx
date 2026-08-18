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
        return { title: 'Not found' };
    }

    const title = project.title;
    const description = project.caseStudy.result.en;

    return {
        title,
        description,
        openGraph: { title: `${title} | Ronald Kamgaing`, description },
        twitter: { title: `${title} | Ronald Kamgaing`, description },
    };
}

export default async function Page({ params }: CaseStudyPageProps) {
    const { slug } = await params;
    return <CaseStudyView slug={slug} />;
}
