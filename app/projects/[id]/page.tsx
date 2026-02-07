import { projects } from '@/lib/data';
import { Metadata } from 'next';
import ProjectDetails from './ProjectDetails';

interface ProjectPageProps {
    params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
    const { id } = await params;
    const project = projects.find((p) => p.id === parseInt(id));

    if (!project) {
        return {
            title: 'Project Not Found | Portfolio',
        };
    }

    return {
        title: `${project.title} | Portfolio`,
        // Default to English description for metadata if available, otherwise fallback
        description: project.description.en || project.description.fr,
    };
}

export default async function Page({ params }: ProjectPageProps) {
    const { id } = await params;
    return <ProjectDetails id={id} />;
}
