'use client';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import SectionHeader from '@/components/SectionHeader';

const Currently = () => {
    const { t } = useLanguage();

    return (
        <section className="py-24 relative">
            <div className="container mx-auto px-6 max-w-3xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <SectionHeader number="02" label={t('currently.label')} />
                    <p className="text-base text-foreground/80 leading-relaxed max-w-[34em]">
                        {t('currently.text')}
                    </p>
                </motion.div>
            </div>
        </section>
    );
};
export default Currently;
