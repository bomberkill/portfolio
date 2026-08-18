'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TextLink from '@/components/TextLink';
import { useLanguage } from '@/context/LanguageContext';

export default function NotFound() {
    const { t } = useLanguage();

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow flex items-center pt-20">
                <div className="container mx-auto px-6 max-w-3xl">
                    <p className="label-text mb-4">404</p>
                    <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">
                        {t('notfound.title')}
                    </h1>
                    <p className="text-foreground/80 text-base leading-relaxed max-w-[34em] mb-8">
                        {t('notfound.message')}
                    </p>
                    <TextLink href="/">{t('notfound.cta')}</TextLink>
                </div>
            </main>
            <Footer />
        </div>
    );
}
