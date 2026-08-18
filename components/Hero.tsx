'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

const Hero = () => {
    const { t } = useLanguage();
    const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'ronaldkamwa@yahoo.com';

    return (
        <section id="hero" className="min-h-screen flex items-center pt-20">
            <div className="container mx-auto px-6 max-w-3xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                >
                    <div className="flex items-center gap-2 mb-8">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span className="label-text">{t('general.available')}</span>
                    </div>

                    <h1 className="text-[40px] md:text-[72px] font-medium leading-[1.02] tracking-[-0.03em] text-foreground mb-8">
                        Ronald Kamgaing
                    </h1>

                    <p className="text-lg md:text-xl text-foreground/80 leading-relaxed max-w-[34em] mb-10">
                        {t('hero.positioning')}
                    </p>

                    <div className="flex items-center gap-8">
                        <Link href="/work" className="text-foreground hover:text-primary underline decoration-1 underline-offset-[0.15em] transition-colors font-medium">
                            {t('hero.work')}
                        </Link>
                        <a href={`mailto:${contactEmail}`} className="text-foreground hover:text-primary underline decoration-1 underline-offset-[0.15em] transition-colors font-medium">
                            {t('hero.email')}
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
export default Hero;
