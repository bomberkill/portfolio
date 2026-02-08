import { Project } from '@/types/project';

export const projects: Project[] = [
    {
        id: 1,
        title: "Fast Invoice",
        category: "mobile",
        description: {
            fr: "Application mobile de facturation et devis 100% hors ligne pour entrepreneurs.",
            en: "100% offline mobile invoicing and quoting application for entrepreneurs."
        },
        goal: {
            fr: "Permettre la création instantanée de documents PDF professionnels sans dépendance internet.",
            en: "Enable instant creation of professional PDF documents without internet dependency."
        },
        role: {
            fr: "Mobile Developer",
            en: "Mobile Developer"
        },
        team: "Solo",
        tech: ["React Native", "Expo", "SQLite", "Google Mobile Ads"],
        image: "url('/fast-invoice-google-play.jpg')",
        links: {
            github: "https://github.com/bomberkill/fast-invoice"
        }
    },
    {
        id: 2,
        title: "SmsBroadcast",
        category: "mobile",
        description: {
            fr: "Gestionnaire de campagnes SMS de masse avec assistance IA pour le contenu.",
            en: "Mass SMS campaign manager with AI assistance for content generation."
        },
        goal: {
            fr: "Automatiser le marketing SMS avec une génération de texte intelligente via Gemini Nano.",
            en: "Automate SMS marketing with intelligent text generation via Gemini Nano."
        },
        role: {
            fr: "Mobile Developer",
            en: "Mobile Developer"
        },
        team: "Solo",
        tech: ["React Native", "Expo", "Google GenAI", "Zustand"],
        image: "url('/sms-broadcast-google-play.jpg')",
        links: {
            github: "https://github.com/bomberkill/smsbroadcast"
        }
    },
    {
        id: 3,
        title: "SmsBroadcast API",
        category: "backend",
        description: {
            fr: "API robuste pour la gestion des comptes, abonnements et paiements.",
            en: "Robust API for managing accounts, subscriptions, and payments."
        },
        goal: {
            fr: "Sécuriser les données utilisateurs et gérer les transactions financières via NotchPay.",
            en: "Secure user data and handle financial transactions via NotchPay."
        },
        role: {
            fr: "Backend Architect",
            en: "Backend Architect"
        },
        team: "Solo",
        tech: ["NestJS", "MongoDB", "Passport JWT", "NotchPay"],
        image: "url('/sms-api-image.jpg')",
        links: {
            github: "https://github.com/bomberkill/Smsbroadcast-api"
        }
    },
    {
        id: 4,
        title: "PMS Connect",
        category: "web",
        description: {
            fr: "Progressive Web App (PWA) de réseau social avec support hors ligne, fil d'actualité en temps réel et messagerie.",
            en: "Social network Progressive Web App (PWA) with offline support, real-time feed, and messaging."
        },
        goal: {
            fr: "Offrir une expérience utilisateur fluide et native sur mobile et desktop avec une architecture optimisée pour le SEO et la performance.",
            en: "Deliver a fluid, native-like user experience on mobile and desktop with an architecture optimized for SEO and performance."
        },
        role: {
            fr: "Frontend Developer",
            en: "Frontend Developer"
        },
        team: "Solo",
        tech: ["Next.js 15", "React 19", "Redux Toolkit", "TailwindCSS v4", "Apollo Client", "Firebase", "PWA"],
        image: "url('/pms-connect-image.jpg')",
        links: {
            github: "https://github.com/bomberkill/pms-connect",
            live: "https://pms-connect.vercel.app"
        }
    },
    {
        id: 5,
        title: "PMS Connect API",
        category: "backend",
        description: {
            fr: "API GraphQL scalable gérant l'authentification, les données sociales, les notifications push et les abonnements temps réel.",
            en: "Scalable GraphQL API managing authentication, social data, push notifications, and real-time subscriptions."
        },
        goal: {
            fr: "Fournir une source de vérité robuste et performante avec mise en cache Redis et communication événementielle.",
            en: "Provide a robust and performant source of truth with Redis caching and event-driven communication."
        },
        role: {
            fr: "Backend Architect",
            en: "Backend Architect"
        },
        team: "Solo",
        tech: ["NestJS", "GraphQL", "MongoDB", "Firebase Admin", "Passport.js"],
        image: "url('/pms-connect-api.jpg')",
        links: {
            github: "https://github.com/bomberkill/pms-connect-api"
        }
    },
    {
        id: 6,
        title: "PMS Admin Dashboard",
        category: "web",
        description: {
            fr: "Interface d'administration interne pour la modération de contenu, la gestion des utilisateurs et l'analyse des métriques.",
            en: "Internal admin interface for content moderation, user management, and metrics analysis."
        },
        goal: {
            fr: "Permettre aux administrateurs de superviser la plateforme efficacement grâce à une UI CRUD générée automatiquement.",
            en: "Enable administrators to efficiently supervise the platform thanks to an automatically generated CRUD UI."
        },
        role: {
            fr: "Frontend Developer",
            en: "Frontend Developer"
        },
        team: "Solo",
        tech: ["Vite", "React 18", "Refine", "GraphQL", "TailwindCSS"],
        image: "url('/pms-connect-dashboard-image.jpg')",
        links: {
            github: "https://github.com/bomberkill/pms-connect-admin"
        }
    },
    {
        id: 7,
        title: "Angel's Closet",
        category: "web",
        description: {
            fr: "Refonte complète d'une plateforme de services à domicile (Déménagement, Nettoyage, Rénovation) avec une identité visuelle 'Premium' et une architecture modulaire.",
            en: "Complete redesign of a home services platform (Moving, Cleaning, Renovation) with a 'Premium' visual identity and modular architecture."
        },
        goal: {
            fr: "Moderniser l'expérience utilisateur avec une UI immersive (Midnight/Gold), assurer une accessibilité bilingue (EN/FR) et garantir la fiabilité des notifications transactionnelles.",
            en: "Modernize user experience with an immersive UI (Midnight/Gold), ensure bilingual accessibility (EN/FR), and guarantee reliable transactional notifications."
        },
        role: {
            fr: "Web Developer",
            en: "Web Developer"
        },
        team: "Solo",
        tech: [
            "Next.js 15 (App Router)",
            "TypeScript",
            "TailwindCSS",
            "Framer Motion",
            "Nodemailer (SMTP Pool)"
        ],
        image: "url('/angels-closet-logo.jpg')",
        links: {
            live: "https://angelsclosets.com",
            github: "https://github.com/bomberkill/angels-closet-web"
        }
    }
];
