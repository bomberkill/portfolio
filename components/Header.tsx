'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useLanguage } from '@/context/LanguageContext';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { theme, setTheme } = useTheme();
    const { language, setLanguage, t } = useLanguage();
    const [mounted, setMounted] = useState(false);
    const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'ronaldkamwa@yahoo.com';

    useEffect(() => {
        const timer = setTimeout(() => setMounted(true), 0);
        return () => clearTimeout(timer);
    }, []);

    const navLinks = [
        { name: t('nav.about'), href: '/about' },
        { name: t('nav.projects'), href: '/work' },
        { name: t('nav.contact'), href: `mailto:${contactEmail}` },
    ];

    if (!mounted) return null;

    return (
        <header className="fixed top-0 w-full z-50 bg-background border-b border-border">
            <div className="container mx-auto px-6">
                <div className="flex justify-between items-center h-16">
                    <Link href="/" className="text-lg font-bold tracking-tight text-foreground">
                        Ronald Kamgaing
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        <nav className="flex items-center gap-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </nav>

                        <div className="h-4 w-px bg-border" />

                        <div className="flex items-center gap-4">
                            <button
                                onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
                                className="label-text hover:text-primary transition-colors"
                                aria-label="Toggle Language"
                            >
                                {language.toUpperCase()}
                            </button>

                            <button
                                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                                className="text-foreground/80 hover:text-primary transition-colors"
                                aria-label="Toggle Theme"
                            >
                                {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-foreground focus:outline-none"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden border-b border-border bg-background overflow-hidden"
                    >
                        <div className="container mx-auto px-6 py-4 flex flex-col gap-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="py-3 text-foreground/90 hover:text-primary transition-colors font-medium"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}

                            <div className="h-px bg-border my-2" />

                            <div className="flex justify-between items-center py-2">
                                <span className="label-text">{language === 'en' ? 'Settings' : 'Paramètres'}</span>
                                <div className="flex items-center gap-4">
                                    <button
                                        onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
                                        className="label-text hover:text-primary transition-colors"
                                    >
                                        {language.toUpperCase()}
                                    </button>
                                    <button
                                        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                                        className="text-foreground/80 hover:text-primary transition-colors"
                                        aria-label="Toggle Theme"
                                    >
                                        {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
