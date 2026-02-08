'use client';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/Icons';
import { useLanguage } from '@/context/LanguageContext';

const Contact = () => {
    const { t } = useLanguage();
    const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'contact@example.com';

    return (
        <section id="contact" className="py-32 relative">
            <div className="container mx-auto px-6 max-w-4xl text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="glass-card p-12 rounded-3xl relative overflow-hidden"
                >
                    {/* Background Glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px] -z-10" />

                    <h2 className="text-4xl md:text-5xl font-bold font-inter text-foreground mb-6 tracking-tight">{t('contact.title')}</h2>
                    <p className="text-foreground/70 text-lg mb-12 max-w-2xl mx-auto font-light">
                        {t('contact.text')}
                    </p>

                    <a
                        href={`mailto:${contactEmail}`}
                        className="inline-flex items-center justify-center space-x-2 md:space-x-4 px-5 py-3 md:px-8 md:py-4 bg-primary text-white rounded-full font-bold shadow-lg hover:shadow-xl hover:bg-primary/90 hover:scale-105 transition-all mb-12 max-w-full"
                    >
                        <Mail className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" />
                        <span className="text-sm md:text-lg truncate">{contactEmail}</span>
                    </a>

                    <div className="flex justify-center space-x-6">
                        <a href="https://www.linkedin.com/in/ronald-kamgaing-1819662b8/" target="_blank" rel="noopener noreferrer" className="p-4 bg-black/5 dark:bg-white/5 rounded-full hover:bg-secondary/20 hover:text-secondary text-foreground transition-all border border-black/10 dark:border-white/10 hover:border-secondary/50 group">
                            <LinkedinIcon size={28} className="group-hover:scale-110 transition-transform" />
                        </a>
                        <a href="https://github.com/bomberkill" target="_blank" rel="noopener noreferrer" className="p-4 bg-black/5 dark:bg-white/5 rounded-full hover:bg-black/20 dark:hover:bg-white/20 hover:text-foreground dark:hover:text-white text-foreground transition-all border border-black/10 dark:border-white/10 hover:border-foreground/50 group">
                            <GithubIcon size={28} className="group-hover:scale-110 transition-transform" />
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
export default Contact;
