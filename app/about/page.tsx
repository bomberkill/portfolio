import { Metadata } from 'next';
import AboutClient from './AboutClient';

export const metadata: Metadata = {
    title: 'About | Portfolio',
    description: 'About Ronald Kamgaing, fullstack developer.',
};

export default function AboutPage() {
    return <AboutClient />;
}
