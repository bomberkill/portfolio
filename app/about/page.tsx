import { Metadata } from 'next';
import AboutClient from './AboutClient';

const title = 'About';
const description = 'Ronald Kamgaing — fullstack developer and CTO, 4+ years building web and mobile products.';

export const metadata: Metadata = {
    title,
    description,
    openGraph: { title: `${title} | Ronald Kamgaing`, description },
    twitter: { title: `${title} | Ronald Kamgaing`, description },
};

export default function AboutPage() {
    return <AboutClient />;
}
