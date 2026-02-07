'use client';
import { Link as ScrollLink } from 'react-scroll';
import { ArrowUp } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const Footer = () => {
    const { t } = useLanguage();

    return (
        <footer className="py-8 relative z-10 border-t border-border bg-background/50 backdrop-blur-sm">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="text-center md:text-left">
                    <span className="text-lg font-bold font-inter tracking-tighter text-foreground">Ronald<span className="text-primary">.dev</span></span>
                    <p className="text-sm text-foreground/50 mt-1">© 2024. {t('footer.rights')}</p>
                </div>

                <div className="flex items-center gap-6">
                    <span className="text-sm text-foreground/50 font-mono hidden md:block">{t('footer.madeWith')}</span>
                </div>
            </div>

            <ScrollLink
                to="hero"
                smooth={true}
                duration={1000}
                className="fixed bottom-8 right-8 p-3 bg-gradient-to-r from-primary to-secondary text-white rounded-full cursor-pointer hover:shadow-lg transition-all z-40 hidden md:flex items-center justify-center hover:scale-110"
                aria-label="Back to top"
            >
                <ArrowUp size={20} />
            </ScrollLink>
        </footer>
    );
};
export default Footer;
