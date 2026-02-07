'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'fr' | 'en';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

const translations = {
    fr: {
        // Header
        'nav.home': 'Accueil',
        'nav.about': 'À propos',
        'nav.projects': 'Projets',
        'nav.contact': 'Contact',

        // Hero
        'hero.greeting': 'Bonjour, je suis',
        'hero.role': 'Développeur Web & Mobile',
        'hero.description': 'Je conçois des expériences digitales minimalistes, performantes et intuitives.',
        'hero.projects': 'Voir mes projets',
        'hero.contact': 'Me contacter',

        // About
        'about.title': 'À propos de moi',
        'about.subtitle': 'Qui suis-je ?',
        'about.text1': "Développeur passionné avec une expertise couvrant l'ensemble du spectre web et mobile. J'aime transformer des problèmes complexes en interfaces simples, intuitives et performantes.",
        'about.text2': "Mon approche privilégie code propre, architecture scalable et expérience utilisateur fluide. Que ce soit pour une application mobile grand public ou un dashboard analytique complexe, je m'engage à livrer des produits de haute qualité.",
        'about.more': 'En savoir plus sur mon parcours',

        // Projects
        'projects.title': 'Mes Projets',
        'projects.filter.all': 'Tous',
        'projects.filter.web': 'Web',
        'projects.filter.mobile': 'Mobile',
        'projects.filter.backend': 'Backend',
        'projects.viewCode': 'Voir le Code',
        'projects.viewSite': 'voir le Site',

        // Contact
        'contact.title': 'Me Contacter',
        'contact.text': "Je suis actuellement disponible pour de nouvelles opportunités en freelance ou CDI. Que ce soit pour discuter d'un projet ou juste dire bonjour, ma boîte mail est ouverte !",

        // Footer
        'footer.rights': 'Tous droits réservés.',
        'footer.madeWith': 'Fait avec passion et du code.',

        // General Attributes via Components potentially
        'general.available': 'Disponible pour missions',
    },
    en: {
        // Header
        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.projects': 'Projects',
        'nav.contact': 'Contact',

        // Hero
        'hero.greeting': 'Hello, I am',
        'hero.role': 'Web & Mobile Developer',
        'hero.description': 'I design minimalist, high-performance, and intuitive digital experiences.',
        'hero.projects': 'View my projects',
        'hero.contact': 'Contact me',

        // About
        'about.title': 'About Me',
        'about.subtitle': 'Who am I?',
        'about.text1': 'Passionate developer with expertise covering the entire web and mobile spectrum. I love transforming complex problems into simple, intuitive, and high-performance interfaces.',
        'about.text2': 'My approach prioritizes clean code, scalable architecture, and fluid user experience. Whether for a consumer mobile app or a complex analytics dashboard, I am committed to delivering high-quality products.',
        'about.more': 'Learn more about my journey',

        // Projects
        'projects.title': 'My Projects',
        'projects.filter.all': 'All',
        'projects.filter.web': 'Web',
        'projects.filter.mobile': 'Mobile',
        'projects.filter.backend': 'Backend',
        'projects.viewCode': 'View Code',
        'projects.viewSite': 'View Site',

        // Contact
        'contact.title': 'Contact Me',
        'contact.text': "I am currently available for new freelance or full-time opportunities. Whether to discuss a project or just say hi, my inbox is open!",

        // Footer
        'footer.rights': 'All rights reserved.',
        'footer.madeWith': 'Made with passion and code.',

        // General
        'general.available': 'Available for work',
    }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [language, setLanguage] = useState<Language>('fr');

    const t = (key: string) => {
        return translations[language][key as keyof typeof translations['fr']] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
