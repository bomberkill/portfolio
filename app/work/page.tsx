import { Metadata } from 'next';
import WorkIndexClient from './WorkIndexClient';

export const metadata: Metadata = {
    title: 'Work | Portfolio',
    description: 'All products and case studies.',
};

export default function WorkPage() {
    return <WorkIndexClient />;
}
