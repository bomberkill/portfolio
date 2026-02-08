'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link as ScrollLink } from 'react-scroll';
import { useLanguage } from '@/context/LanguageContext';

const Hero = () => {
    const { t } = useLanguage();

    return (
        <section id="hero" className="min-h-screen flex items-center justify-center pt-20 overflow-hidden relative">
            {/* Background decoration - Distinct for Light/Dark */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="hidden dark:block absolute top-[20%] right-[10%] w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] animate-pulse" />
                <div className="hidden dark:block absolute bottom-[10%] left-[10%] w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }} />

                {/* Light Mode Blobs */}
                <div className="dark:hidden absolute top-[10%] right-[10%] w-[400px] h-[400px] bg-primary/20 rounded-full blur-[80px]" />
                <div className="dark:hidden absolute bottom-[20%] left-[20%] w-[300px] h-[300px] bg-secondary/20 rounded-full blur-[60px]" />
            </div>

            {/* Stars/Grid Overlay - Adaptive */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-30 dark:opacity-10 [mask-image:linear-gradient(180deg,black,rgba(0,0,0,0))]" />

            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="text-left"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex items-center gap-2 mb-6"
                    >
                        <span className="px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-mono border border-primary/20 flex items-center gap-2 shadow-sm">
                            <Sparkles size={14} /> Available for work
                        </span>
                    </motion.div>

                    <h1 className="text-5xl md:text-7xl font-bold font-inter leading-tight mb-8 tracking-tight">
                        <span className="block text-foreground drop-shadow-sm">{t('hero.greeting').replace('Bonjour, je suis', 'Ronald')}</span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary text-glow animate-gradient">
                            Full Stack Dev
                        </span>
                    </h1>

                    <p className="text-foreground/70 text-lg md:text-xl mb-10 max-w-lg leading-relaxed font-light">
                        {t('hero.description')}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-5">
                        <ScrollLink
                            to="projects"
                            smooth={true}
                            duration={500}
                            offset={-50}
                            className="group relative px-8 py-4 rounded-full font-bold text-white overflow-hidden cursor-pointer shadow-lg hover:shadow-xl transition-all hover:scale-105"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent group-hover:opacity-90 transition-opacity duration-300" />
                            <span className="relative z-10 flex items-center justify-center gap-2">
                                {t('hero.projects')} <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </span>
                        </ScrollLink>

                        <ScrollLink
                            to="contact"
                            smooth={true}
                            duration={500}
                            offset={-50}
                            className="px-8 py-4 rounded-full font-bold border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5 transition-all flex items-center justify-center gap-2 cursor-pointer text-foreground hover:shadow-md hover:scale-105"
                        >
                            {t('hero.contact')}
                        </ScrollLink>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                    className="relative flex justify-center perspective-1000"
                >
                    {/* Glass Card - Holographic Effect */}
                    <div className="glass-card p-8 rounded-3xl w-full max-w-md animate-[float_6s_ease-in-out_infinite] relative overflow-hidden group">

                        {/* Internal Glow - Dark Only */}
                        <div className="hidden dark:block absolute -top-20 -right-20 w-40 h-40 bg-accent/30 rounded-full blur-3xl group-hover:bg-accent/50 transition-colors" />

                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-3 h-3 rounded-full bg-red-500 shadow-sm" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500 shadow-sm" />
                            <div className="w-3 h-3 rounded-full bg-green-500 shadow-sm" />
                            <div className="flex-1 text-center text-xs text-foreground/40 font-mono">dev_profile.tsx</div>
                        </div>

                        <div className="space-y-3 font-mono text-sm relative z-10 text-foreground">
                            <div className="flex">
                                <span className="text-accent mr-2">const</span>
                                <span className="text-secondary mr-2">Expertise</span>
                                <span className="text-foreground">=</span>
                                <span className="text-foreground ml-2">{'{'}</span>
                            </div>
                            <div className="div pl-6 border-l border-foreground/10 ml-1">
                                <div className="py-1">
                                    <span className="text-primary mr-2">currentStack:</span>
                                    <span className="text-yellow-600 dark:text-yellow-300">[&apos;React&apos;, &apos;Next.js&apos;, &apos;Node&apos;]</span>,
                                </div>
                                <div className="py-1">
                                    <span className="text-primary mr-2">passion:</span>
                                    <span className="text-green-600 dark:text-green-400">&apos;Creative Coding&apos;</span>,
                                </div>
                                <div className="py-1">
                                    <span className="text-primary mr-2">mission:</span>
                                    <span className="text-orange-600 dark:text-orange-400">&apos;Build Future&apos;</span>
                                </div>
                            </div>
                            <div className="flex">
                                <span className="text-foreground">{'};'}</span>
                            </div>
                        </div>
                    </div>

                    {/* Orbital Elements - Adaptive */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full border border-primary/20 dark:border-white/5 border-dashed -z-10"
                    />
                </motion.div>
            </div>
        </section>
    );
};
export default Hero;
