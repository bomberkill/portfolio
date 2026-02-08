'use client';
import { motion } from 'framer-motion';
import { Server, Smartphone, Layout, Cpu, Globe } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const About = () => {
    const { t } = useLanguage();

    const skills = [
        { name: 'Front-end', icon: <Layout size={24} />, items: ['React', 'Next.js', 'TailwindCSS', 'Framer Motion'], color: 'text-primary' },
        { name: 'Back-end', icon: <Server size={24} />, items: ['Node.js', 'NestJs', 'MongoDB', 'Firebase'], color: 'text-secondary' },
        { name: 'Mobile', icon: <Smartphone size={24} />, items: ['React Native', 'Expo', 'iOS & Android'], color: 'text-accent' },
        { name: 'DevOps & Tools', icon: <Cpu size={24} />, items: ['Git', 'Docker'], color: 'text-foreground' },
    ];

    return (
        <section id="about" className="py-32 relative bg-transparent">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-16 text-center"
                >
                    <span className="text-secondary font-mono text-sm uppercase tracking-widest mb-2 block">Profile</span>
                    <h2 className="text-4xl md:text-5xl font-bold font-inter text-foreground mb-6 drop-shadow-sm">{t('about.title')}</h2>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="space-y-8"
                    >
                        <h3 className="text-3xl font-bold font-inter text-foreground/90">
                            <span className="text-primary">{t('about.subtitle')}</span>
                        </h3>
                        <div className="glass-card p-6 rounded-2xl relative">
                            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-secondary rounded-l-2xl opacity-80" />
                            <p className="text-foreground/80 text-lg leading-relaxed mb-4">
                                {t('about.text1')}
                            </p>
                            <p className="text-foreground/80 text-lg leading-relaxed">
                                {t('about.text2')}
                            </p>
                        </div>

                        <div className="pt-2">
                            <a href="#" className="inline-flex items-center gap-3 text-foreground font-medium hover:text-accent transition-colors group">
                                <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:border-accent transition-colors">
                                    <Globe size={18} className="text-primary group-hover:text-accent" />
                                </span>
                                {t('about.more')}
                            </a>
                        </div>
                    </motion.div>

                    {/* Skills Grid - Holographic Cards */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                    >
                        {skills.map((skill, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ y: -5, scale: 1.02 }}
                                className="glass-card p-6 rounded-xl relative overflow-hidden group"
                            >
                                <div className={`hidden dark:block absolute -right-6 -top-6 w-24 h-24 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-xl group-hover:scale-150 transition-transform duration-500`} />

                                <div className={`mb-4 w-12 h-12 flex items-center justify-center rounded-lg bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 ${skill.color} shadow-sm`}>
                                    {skill.icon}
                                </div>

                                <h3 className="font-bold text-xl mb-3 text-foreground tracking-tight">{skill.name}</h3>

                                <div className="flex flex-wrap gap-2">
                                    {skill.items.map((item, idx) => (
                                        <span key={idx} className="text-xs font-mono px-2 py-1 rounded bg-black/5 dark:bg-white/5 text-foreground/70 border border-black/5 dark:border-white/5">
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
export default About;
