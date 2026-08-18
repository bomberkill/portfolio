'use client';
import { motion } from 'framer-motion';
import { GithubIcon, LinkedinIcon } from '@/components/Icons';
import { useLanguage } from '@/context/LanguageContext';
import SectionHeader from '@/components/SectionHeader';
import TextLink from '@/components/TextLink';

const Contact = () => {
    const { t } = useLanguage();
    const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'ronaldkamwa@yahoo.com';

    return (
        <section id="contact" className="py-24 relative">
            <div className="container mx-auto px-6 max-w-3xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <SectionHeader number="03" label={t('contact.title')} />

                    <p className="text-foreground/80 text-base leading-relaxed max-w-[34em] mb-8">
                        {t('contact.text')}
                    </p>

                    <p className="mb-8">
                        <TextLink href={`mailto:${contactEmail}`} className="text-lg font-bold">
                            {contactEmail}
                        </TextLink>
                    </p>

                    <div className="flex gap-6">
                        <a href="https://www.linkedin.com/in/ronald-kamgaing-1819662b8/" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary transition-colors" aria-label="LinkedIn">
                            <LinkedinIcon size={22} />
                        </a>
                        <a href="https://github.com/bomberkill" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary transition-colors" aria-label="GitHub">
                            <GithubIcon size={22} />
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
export default Contact;
