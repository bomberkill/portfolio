import { Metadata } from 'next';
import WorkIndexClient from './WorkIndexClient';

const title = 'Work';
const description = 'Products and case studies — ReachDem, PMS Connect, and more.';

export const metadata: Metadata = {
    title,
    description,
    openGraph: { title: `${title} | Ronald Kamgaing`, description },
    twitter: { title: `${title} | Ronald Kamgaing`, description },
};

export default function WorkPage() {
    return <WorkIndexClient />;
}
