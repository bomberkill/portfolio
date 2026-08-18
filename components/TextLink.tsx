import Link from 'next/link';
import { ReactNode } from 'react';

interface TextLinkProps {
    href: string;
    children: ReactNode;
    className?: string;
}

const TextLink = ({ href, children, className = '' }: TextLinkProps) => {
    const isExternal = href.startsWith('http');
    const baseClass = `text-foreground hover:text-primary underline decoration-1 underline-offset-[0.15em] transition-colors ${className}`;

    const content = (
        <>
            {children}
            {isExternal && <span aria-hidden="true"> ↗</span>}
        </>
    );

    if (isExternal) {
        return (
            <a href={href} target="_blank" rel="noopener noreferrer" className={baseClass}>
                {content}
            </a>
        );
    }

    return (
        <Link href={href} className={baseClass}>
            {content}
        </Link>
    );
};

export default TextLink;
