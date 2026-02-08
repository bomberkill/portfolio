'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Link as ScrollLink } from 'react-scroll';
import { useTheme } from 'next-themes';
import { useLanguage } from '@/context/LanguageContext';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { theme, setTheme } = useTheme();
    const { language, setLanguage, t } = useLanguage();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setMounted(true), 0);
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearTimeout(timer);
        };
    }, []);

    const navLinks = [
        { name: t('nav.home'), to: 'hero' },
        { name: t('nav.about'), to: 'about' },
        { name: t('nav.projects'), to: 'projects' },
        { name: t('nav.contact'), to: 'contact' },
    ];

    if (!mounted) return null;

    return (
        <div className="fixed top-0 w-full z-50 flex justify-center pt-6 px-4">
            <motion.header
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className={`w-full max-w-5xl transition-all duration-300 rounded-full px-6 py-3 ${scrolled
                    ? 'glass-card'
                    : 'bg-transparent'
                    }`}
            >
                <div className="flex justify-between items-center">
                    <Link href="/" className="text-xl font-bold font-inter tracking-tighter group flex items-center gap-1">
                        <span className="text-primary group-hover:text-glow transition-all">&lt;</span>
                        <span className="text-foreground">Ronald</span>
                        <span className="text-primary group-hover:text-glow transition-all">/&gt;</span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <nav className="flex space-x-1">
                            {navLinks.map((link) => (
                                <ScrollLink
                                    key={link.to}
                                    to={link.to}
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    offset={-100}
                                    activeClass="bg-primary/10 text-primary dark:bg-white/10 dark:text-white"
                                    className="cursor-pointer px-4 py-2 rounded-full text-sm font-medium text-foreground/80 hover:text-primary dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-300"
                                >
                                    {link.name}
                                </ScrollLink>
                            ))}
                        </nav>

                        <div className="h-6 w-px bg-foreground/10 mx-2" />

                        <div className="flex items-center space-x-2">
                            {/* Language Toggler */}
                            <button
                                onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
                                className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors flex items-center gap-1 text-xs font-bold text-foreground/80 hover:text-primary dark:hover:text-white"
                                aria-label="Toggle Language"
                            >
                                {language.toUpperCase()}
                            </button>

                            {/* Theme Toggler */}
                            <button
                                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                                className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors text-foreground/80 hover:text-yellow-500 dark:hover:text-yellow-300"
                                aria-label="Toggle Theme"
                            >
                                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-foreground focus:outline-none"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -20, scale: 0.95 }}
                            className="absolute top-full left-0 right-0 mt-4 mx-4 glass-card rounded-2xl overflow-hidden p-4 flex flex-col gap-2 md:hidden"
                        >
                            {navLinks.map((link) => (
                                <ScrollLink
                                    key={link.to}
                                    to={link.to}
                                    smooth={true}
                                    duration={500}
                                    className="cursor-pointer px-4 py-3 rounded-xl text-foreground/90 hover:bg-black/5 dark:hover:bg-white/5 hover:text-primary transition-all font-medium"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </ScrollLink>
                            ))}

                            <div className="h-px bg-foreground/10 my-2" />

                            <div className="flex justify-between items-center px-4 py-2">
                                <span className="text-sm font-medium text-foreground/70">{t('nav.contact') === 'Contact' ? 'Settings' : 'Paramètres'}</span>
                                <div className="flex items-center gap-3">
                                    <button
                                        onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
                                        className="bg-black/5 dark:bg-white/5 px-3 py-1 rounded-full text-xs font-bold text-foreground border border-black/5 dark:border-white/5"
                                    >
                                        {language.toUpperCase()}
                                    </button>
                                    <button
                                        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                                        className="p-2 rounded-full bg-black/5 dark:bg-white/5 text-foreground hover:text-yellow-500 dark:hover:text-yellow-300 transition-colors border border-black/5 dark:border-white/5"
                                        aria-label="Toggle Theme"
                                    >
                                        {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.header>
        </div>
    );
};

export default Header;
