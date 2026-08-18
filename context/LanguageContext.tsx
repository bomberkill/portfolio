'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'fr' | 'en';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

const translations = {
    fr: {
        // Header
        'nav.about': 'À propos',
        'nav.projects': 'Projets',
        'nav.contact': 'Contact',

        // Hero
        'hero.positioning': "Je conçois et je livre des produits de messagerie et de prospection — mobile, web et les API qui les font tourner. Je construis actuellement ReachDem.",
        'hero.work': 'Travail',
        'hero.email': 'Email',

        // Currently
        'currently.label': 'Actuellement',
        'currently.text': "Je construis actuellement ReachDem — un système d'exploitation marketing pour la prospection directe. Campagnes email et SMS, groupes et segments de contacts, boîte de réception partagée, analyses de livraison et API publique, dans un seul tableau de bord.",

        // About
        'about.title': 'À propos de moi',
        'about.subtitle': 'Qui suis-je ?',
        'about.text1': "Développeur fullstack et CTO avec plus de 4 ans d'expérience dans la construction d'applications web et mobiles hautement performantes, de bout en bout. Je me spécialise dans React, Next.js, React Native, et les back-ends Node.js / NestJS, en livrant des plateformes SaaS scalables, des API sécurisées et une infrastructure cloud.",
        'about.text2': "J'allie ingénierie de terrain et leadership technique pour livrer des produits fiables dans des environnements qui évoluent vite — actuellement CTO et co-fondateur chez ReachDem.",
        'about.cv': 'Télécharger le CV',
        'about.experience': 'Expérience',
        'about.education': 'Formation',
        'about.skills': 'Compétences',

        // Projects
        'projects.title': 'Mes Projets',
        'projects.viewCode': 'Voir le Code',
        'projects.viewSite': 'voir le Site',
        'work.seeAll': 'Voir tout le travail',

        // Contact
        'contact.title': 'Me Contacter',
        'contact.text': "Je suis actuellement disponible pour de nouvelles opportunités en freelance ou CDI. Que ce soit pour discuter d'un projet ou juste dire bonjour, ma boîte mail est ouverte !",

        // Footer
        'footer.rights': 'Tous droits réservés.',
        'footer.madeWith': 'Fait avec passion et du code.',
        'footer.updated': 'Dernière mise à jour : août 2026',

        // 404
        'notfound.title': 'Page introuvable',
        'notfound.message': "La page que vous cherchez n'existe pas.",
        'notfound.cta': "Retour à l'accueil",

        // General Attributes via Components potentially
        'general.available': 'Disponible pour missions',
    },
    en: {
        // Header
        'nav.about': 'About',
        'nav.projects': 'Projects',
        'nav.contact': 'Contact',

        // Hero
        'hero.positioning': 'I build and ship messaging and outreach products — mobile, web and the APIs behind them. Currently building ReachDem.',
        'hero.work': 'Work',
        'hero.email': 'Email',

        // Currently
        'currently.label': 'Currently',
        'currently.text': 'Currently building ReachDem — a marketing operating system for direct outreach. Email and SMS campaigns, contact groups and segments, a shared inbox, delivery analytics and a public API, in one dashboard.',

        // About
        'about.title': 'About Me',
        'about.subtitle': 'Who am I?',
        'about.text1': 'Full-stack developer and CTO with 4+ years building high-performance web and mobile applications end to end. I specialize in React, Next.js, React Native, and Node.js / NestJS back-ends, delivering scalable SaaS platforms, secure APIs, and cloud infrastructure.',
        'about.text2': 'I pair hands-on engineering with technical leadership to ship reliable products in fast-moving environments — currently CTO and co-founder at ReachDem.',
        'about.cv': 'Download CV',
        'about.experience': 'Experience',
        'about.education': 'Education',
        'about.skills': 'Skills',

        // Projects
        'projects.title': 'My Projects',
        'projects.viewCode': 'View Code',
        'projects.viewSite': 'View Site',
        'work.seeAll': 'See all work',

        // Contact
        'contact.title': 'Contact Me',
        'contact.text': "I am currently available for new freelance or full-time opportunities. Whether to discuss a project or just say hi, my inbox is open!",

        // Footer
        'footer.rights': 'All rights reserved.',
        'footer.madeWith': 'Made with passion and code.',
        'footer.updated': 'Last updated: Aug 2026',

        // 404
        'notfound.title': 'Page not found',
        'notfound.message': "The page you're looking for doesn't exist.",
        'notfound.cta': 'Return home',

        // General
        'general.available': 'Available for work',
    }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [language, setLanguageState] = useState<Language>('fr');

    useEffect(() => {
        const timer = setTimeout(() => {
            const stored = localStorage.getItem('language');
            if (stored === 'fr' || stored === 'en') {
                setLanguageState(stored);
                return;
            }
            const browserLang = navigator.language || navigator.languages?.[0] || '';
            setLanguageState(browserLang.toLowerCase().startsWith('fr') ? 'fr' : 'en');
        }, 0);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        document.documentElement.lang = language;
    }, [language]);

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
        localStorage.setItem('language', lang);
    };

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
