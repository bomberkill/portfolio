'use client';
import { ArrowUp } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const Footer = () => {
    const { t } = useLanguage();

    return (
        <footer className="py-8 relative z-10 border-t border-border bg-background">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="text-center md:text-left">
                    <span className="text-lg font-bold font-sans tracking-tighter text-foreground">Ronald <span className="text-primary">Kamgaing</span></span>
                    <p className="text-sm text-foreground/50 mt-1">{t('footer.updated')} · {t('footer.rights')}</p>
                </div>

                <div className="flex items-center gap-6">
                    <span className="text-sm text-foreground/50 font-mono hidden md:block">{t('footer.madeWith')}</span>
                </div>
            </div>

            <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="fixed bottom-8 right-8 p-3 bg-background border border-border text-foreground rounded-full cursor-pointer hover:text-primary transition-colors z-40 hidden md:flex items-center justify-center"
                aria-label="Back to top"
            >
                <ArrowUp size={20} />
            </button>
        </footer>
    );
};
export default Footer;
