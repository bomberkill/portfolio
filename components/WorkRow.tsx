import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface WorkRowProps {
    year?: string | number;
    name: string;
    result: string;
    stack: string[];
    href: string;
}

const WorkRow = ({ year, name, result, stack, href }: WorkRowProps) => {
    return (
        <Link
            href={href}
            className="group grid grid-cols-12 items-center gap-4 px-2 -mx-2 py-6 border-t border-border hover:bg-foreground/[0.03] transition-colors"
        >
            <span className="col-span-2 md:col-span-1 label-text">{year ?? '—'}</span>
            <span className="col-span-10 md:col-span-3 font-bold text-lg text-foreground">{name}</span>
            <span className="hidden md:block md:col-span-5 text-sm text-muted leading-relaxed">{result}</span>
            <span className="hidden lg:block lg:col-span-2 font-mono text-xs text-muted truncate">{stack.join(', ')}</span>
            <span className="col-span-12 md:col-span-1 flex justify-end">
                <ArrowRight size={16} className="text-muted group-hover:text-primary group-hover:translate-x-1 transition-all" />
            </span>
        </Link>
    );
};

export default WorkRow;
