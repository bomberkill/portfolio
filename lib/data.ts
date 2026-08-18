import { Project } from '@/types/project';

export const projects: Project[] = [
    {
        id: 1,
        slug: 'reachdem',
        title: 'ReachDem',
        category: 'web',
        year: '2025–26',
        featured: true,
        description: {
            en: 'Marketing operating system for direct outreach: email and SMS campaigns, contacts, inbox and a public API.',
            fr: "Système d'exploitation marketing pour la prospection directe : campagnes email et SMS, contacts, boîte de réception et API publique."
        },
        tech: ['Next.js 16', 'React 19', 'TypeScript', 'Cloudflare Workers', 'Prisma', 'Neon Postgres'],
        links: { live: 'https://reachdem.cc' },
        caseStudy: {
            result: {
                en: 'ReachDem is a live marketing operating system running email and SMS outreach campaigns, contact segmentation, a shared inbox, delivery analytics and a public API, for political organisations, agencies and startups doing direct outreach.',
                fr: "ReachDem est un système d'exploitation marketing en production qui gère des campagnes d'emailing et de SMS, la segmentation de contacts, une boîte de réception partagée, des analyses de livraison et une API publique, pour les organisations politiques, agences et startups qui font de la prospection directe."
            },
            role: 'CTO, Co-founder, Fullstack Developer',
            period: 'Nov 2025–Present',
            type: 'B2B SaaS',
            team: '2 — Belrick (CEO, Co-founder, Fullstack Developer), Ronald (CTO, Co-founder, Fullstack Developer)',
            context: {
                en: 'Political organisations, agencies and startups running outreach at volume were stitching together separate tools for email, SMS and contact management, with no shared view of delivery. ReachDem consolidates campaigns, contacts, inbox and analytics into one operating system, with WhatsApp on the roadmap.',
                fr: "Les organisations politiques, agences et startups qui font de la prospection à grande échelle jonglaient avec des outils séparés pour l'email, le SMS et la gestion de contacts, sans vue partagée sur la livraison. ReachDem regroupe campagnes, contacts, boîte de réception et analyses dans un seul système, avec WhatsApp prévu à terme."
            },
            hardPart: {
                en: 'Making sure every campaign is delivered exactly once, across three separate channels running independently. Each channel handled retries differently, and email was missing safety checks SMS already had — a real risk of sending the same message twice. Fix in progress: one shared piece of logic every channel uses, instead of three separate copies that could drift apart.',
                fr: "S'assurer que chaque campagne est livrée une seule fois, sur trois canaux qui tournent indépendamment. Chaque canal gérait ses tentatives de renvoi différemment, et l'email n'avait pas encore les mêmes garde-fous que le SMS — un vrai risque d'envoyer deux fois le même message. Correction en cours : une seule logique partagée utilisée par tous les canaux, plutôt que trois versions séparées qui pouvaient diverger."
            },
            decisions: [
                { text: { en: "Built each channel (email, SMS, WhatsApp) as its own separate service instead of one big system — easier to isolate problems and scale each independently; the cost is more coordination between the pieces.", fr: "Chaque canal (email, SMS, WhatsApp) est construit comme un service séparé plutôt qu'un seul gros système — plus facile d'isoler les problèmes et de faire évoluer chacun indépendamment ; le coût est plus de coordination entre les pièces." } },
                { text: { en: "Kept the old system running only for existing tests while new work happens in the new architecture — a safer transition, at the cost of temporarily maintaining two versions.", fr: "L'ancien système ne tourne plus que pour les tests existants pendant que le nouveau travail se fait dans la nouvelle architecture — transition plus sûre, au prix de maintenir temporairement deux versions." } },
                { text: { en: "Chose a database that scales down to zero cost when idle rather than one that's always running — cheaper at our stage; the trade-off is a small delay on the first request after a quiet period.", fr: "Choix d'une base de données qui peut descendre à coût zéro à l'arrêt plutôt qu'une base toujours active — moins cher à notre stade ; en contrepartie, un léger délai sur la première requête après une pause." } },
                { text: { en: "Defined strict, validated contracts for how the different parts of the system talk to each other — keeps things stable as the product grows; the cost is more upkeep on those definitions.", fr: "Définition de contrats stricts et validés pour la communication entre les différentes parties du système — garde les choses stables à mesure que le produit grandit ; le coût est plus d'entretien de ces définitions." } },
                { text: { en: "Fixed SMS's reliability gaps before email's — SMS was the channel most exposed to failures, so it came first; the equivalent fix for email is next.", fr: "Les lacunes de fiabilité du SMS ont été corrigées avant celles de l'email — le SMS était le canal le plus exposé aux pannes ; le correctif équivalent pour l'email arrive ensuite." } },
            ],
            stack: {
                frontend: ['Next.js 16 (App Router)', 'React 19', 'TypeScript', 'Tailwind CSS v4', 'Radix UI', 'Tabler Icons', 'Framer Motion', 'Recharts', 'Tiptap / Maily'],
                backend: ['better-auth', 'Prisma 7'],
                infra: ['Neon Postgres (serverless)', 'Cloudflare Workers + Queues', 'OpenTelemetry / Jaeger', 'Resend + Alibaba Direct Mail', 'Evolution API (WhatsApp)', 'SMS gateways', 'PostHog', 'Sentry'],
            },
            next: {
                en: "Close the same reliability gap on email that's already closed on SMS.",
                fr: "Combler sur l'email le même écart de fiabilité déjà comblé sur le SMS."
            },
            links: { live: 'https://reachdem.cc', repoPrivate: true },
        },
    },
    {
        id: 2,
        slug: 'reachdem-dashboard',
        title: 'ReachDem Dashboard',
        category: 'internal',
        year: '2026',
        description: {
            en: 'Internal ops console for running ReachDem — finance, growth, coupons, invitations, card inventory and analytics.',
            fr: "Console interne pour piloter ReachDem — finance, croissance, coupons, invitations, inventaire des cartes et analyses."
        },
        tech: ['Next.js 16', 'React 19', 'iron-session', 'Recharts'],
        links: {},
        caseStudy: {
            result: {
                en: 'ReachDem Dashboard is the internal console Belrick and I use to run ReachDem — finance, growth, coupons, invitations, card inventory and analytics in one place. Not customer-facing.',
                fr: "ReachDem Dashboard est la console interne que Belrick et moi utilisons pour piloter ReachDem — finance, croissance, coupons, invitations, inventaire des cartes et analyses réunis au même endroit. Non destiné aux clients."
            },
            role: 'Fullstack Developer',
            period: 'Apr 2026–Present',
            type: 'Internal ops console',
            team: '2 (same as ReachDem)',
            context: {
                en: 'Running ReachDem meant tracking finance, coupon codes, invitations, card inventory and growth metrics with no shared view. The Dashboard consolidates all of it into one internal tool.',
                fr: "Piloter ReachDem impliquait de suivre la finance, les codes coupon, les invitations, l'inventaire des cartes et les métriques de croissance sans vue partagée. Le Dashboard regroupe tout cela dans un seul outil interne."
            },
            hardPart: {
                en: 'Reconciling analytics and finance data from multiple sources into consistent dashboard numbers.',
                fr: "Réconcilier les données analytiques et financières issues de plusieurs sources en des chiffres cohérents."
            },
            decisions: [],
            stack: {
                frontend: ['Next.js 16.2', 'React 19.2', 'Recharts', 'Tiptap + React Email Editor'],
                backend: ['iron-session', 'shared @reachdem/core, database, observability packages'],
                infra: ['AWS S3', 'same Neon/Cloudflare infra as ReachDem'],
            },
            links: { repoPrivate: true },
        },
    },
    {
        id: 3,
        slug: 'reachdem-links',
        title: 'ReachDem Links',
        category: 'web',
        year: '2026',
        description: {
            en: 'Link-in-bio product with personalized public profiles, templates, and NFC-tap redemption.',
            fr: "Produit de liens en ligne avec profils publics personnalisés, modèles et redirection par tag NFC."
        },
        tech: ['Next.js 16', 'React 19', 'better-auth', 'PostHog'],
        links: { live: 'https://links.reachdem.cc' },
        caseStudy: {
            result: {
                en: "ReachDem Links is a live link-in-bio product — personalized public profile pages, templates, NFC-tap redemption — and it's also the backend that powers ReachDem Cards' physical card activation.",
                fr: "ReachDem Links est un produit de liens en ligne en production — pages de profil publiques personnalisées, modèles, redirection par tag NFC — et c'est aussi le backend qui alimente l'activation des cartes physiques de ReachDem Cards."
            },
            role: 'Fullstack Developer',
            period: 'Feb 2026–Present',
            type: 'Creator product + internal activation API',
            team: '2 (same as ReachDem)',
            context: {
                en: 'Creators and small businesses needed a personalized public profile to point people to, and the physical NFC cards needed a real way to bind a tap to an account. Links does both.',
                fr: "Créateurs et petites entreprises avaient besoin d'un profil public personnalisé à partager, et les cartes NFC physiques avaient besoin d'un vrai moyen de lier un tap à un compte. Links fait les deux."
            },
            hardPart: {
                en: "Two real challenges. First, letting people use their existing ReachDem account here without creating a second one, while keeping the two apps independent of each other. Second, Links quietly acts as the backend for activating the physical NFC cards — verifying a code, confirming it's really you, and connecting the card to your profile, from a separate app calling in.",
                fr: "Deux vrais défis. D'abord, permettre aux utilisateurs de se connecter avec leur compte ReachDem existant sans en créer un second, tout en gardant les deux applications indépendantes. Ensuite, Links sert discrètement de backend pour l'activation des cartes NFC physiques — vérifier un code, confirmer que c'est bien vous, puis relier la carte à votre profil, depuis une autre application qui l'appelle."
            },
            decisions: [
                { text: { en: 'One account works across both products with no extra sign-up — the trade-off is more complexity behind the scenes to keep sessions separate.', fr: "Un seul compte fonctionne sur les deux produits sans inscription supplémentaire — la contrepartie est plus de complexité en coulisses pour garder les sessions séparées." } },
                { text: { en: 'Card activation is a clearly defined service that the Cards app calls into, rather than sharing a database directly — keeps the two products independent and separately deployable; the cost is relying on that connection being available.', fr: "L'activation des cartes est un service bien défini que l'application Cards appelle, plutôt qu'un partage direct de base de données — garde les deux produits indépendants ; le coût est de dépendre de la disponibilité de cette connexion." } },
                { text: { en: 'Uses the same login system as the main app rather than the Dashboard — needed so accounts stay linked; the cost is two different login systems now exist across the ReachDem products.', fr: "Utilise le même système de connexion que l'application principale plutôt que celui du Dashboard — nécessaire pour que les comptes restent liés ; le coût est que deux systèmes de connexion différents existent désormais entre les produits ReachDem." } },
            ],
            stack: {
                frontend: ['Next.js 16.2', 'React 19', 'Sentry', 'PostHog', 'qrcode', 'libphonenumber-js', 'dnd-kit', 'sharp', 'Framer Motion'],
                backend: ['better-auth', 'shared @reachdem/auth, core, database, i18n packages'],
                infra: ['same Neon/Cloudflare infra as ReachDem'],
            },
            links: { live: 'https://links.reachdem.cc', repoPrivate: true },
        },
    },
    {
        id: 4,
        slug: 'reachdem-cards',
        title: 'ReachDem Cards',
        category: 'web',
        year: '2026',
        featured: true,
        description: {
            en: 'Physical NFC business card product — order, activate, tap to share a profile.',
            fr: "Produit de carte de visite NFC physique — commander, activer, taper pour partager un profil."
        },
        tech: ['Next.js 16', 'React 19', 'Mobile Money', 'react-hook-form'],
        links: { live: 'https://cards.reachdem.cc' },
        caseStudy: {
            result: {
                en: 'ReachDem Cards is a live physical NFC business card product — order, activate, tap to share a profile — with 31 cards provisioned and shipped.',
                fr: "ReachDem Cards est un produit de carte de visite NFC physique en production — commander, activer, taper pour partager un profil — avec 31 cartes provisionnées et expédiées."
            },
            role: 'Fullstack Developer',
            period: 'Mar–Jul 2026',
            type: 'Physical product + storefront + activation flow',
            team: '2 (same as ReachDem)',
            context: {
                en: 'People wanted a physical way to share their ReachDem profile without typing a URL. Cards sells NFC-embedded cards through its own storefront, then walks the buyer through activation to bind their card to a profile.',
                fr: "Les utilisateurs voulaient un moyen physique de partager leur profil ReachDem sans taper d'URL. Cards vend des cartes à puce NFC via sa propre boutique, puis guide l'acheteur à travers l'activation pour lier sa carte à un profil."
            },
            hardPart: {
                en: "Connecting a physical card to a real person's account, safely, without Cards ever storing user data itself. Every step of activation — reading the card, verifying it's you by email code, creating the account — actually happens over on Links, with Cards just calling out to it.",
                fr: "Relier une carte physique à un vrai compte utilisateur, en toute sécurité, sans que Cards ne stocke jamais de données utilisateur elle-même. Chaque étape de l'activation — lire la carte, vérifier que c'est bien vous par code email, créer le compte — se passe en réalité sur Links, Cards se contentant de l'appeler."
            },
            decisions: [
                { text: { en: 'Cards handles the store and payments, Links handles accounts and identity — keeps the two clearly separated; the cost is Cards depends on Links being available for every activation.', fr: "Cards gère la boutique et les paiements, Links gère les comptes et l'identité — garde les deux bien séparés ; le coût est que Cards dépend de la disponibilité de Links pour chaque activation." } },
                { text: { en: 'Mobile money instead of Stripe for payment — matches how customers actually pay here; the cost is a custom integration instead of an off-the-shelf option.', fr: "Mobile money plutôt que Stripe pour le paiement — correspond à la façon dont les clients paient réellement ici ; le coût est une intégration sur mesure." } },
                { text: { en: "An email code is required to activate a card, instead of trusting the tap alone — closes an obvious way someone could activate a card that isn't theirs; the cost is one extra step when unboxing.", fr: "Un code envoyé par email est requis pour activer une carte, plutôt que de faire confiance au seul tap — ferme une faille évidente où quelqu'un pourrait activer la carte de quelqu'un d'autre ; le coût est une étape de plus au déballage." } },
                { text: { en: 'Order confirmations and design proofs are generated directly in the store rather than through a separate service.', fr: "Les confirmations de commande et les épreuves de design sont générées directement dans la boutique plutôt que via un service séparé." } },
            ],
            numbers: {
                en: '31 cards provisioned and shipped. No activation/order-count data available — next to measure: activation completion rate, time-to-activate after purchase.',
                fr: "31 cartes provisionnées et expédiées. Aucune donnée d'activation ou de commandes disponible — prochaines mesures : taux de complétion de l'activation, délai d'activation après achat."
            },
            stack: {
                frontend: ['Next.js 16.1', 'React 19.2', 'Framer Motion', 'embla-carousel', 'react-hook-form + zod'],
                backend: ['payments + PDF routes only — identity delegated to Links'],
                infra: ['Mobile money gateway', 'cross-service HTTP to Links'],
            },
            links: { live: 'https://cards.reachdem.cc', repoPrivate: true },
        },
    },
    {
        id: 5,
        slug: 'pms-connect',
        title: 'PMS Connect',
        category: 'web',
        year: '2025–26',
        featured: true,
        description: {
            en: 'Social network PWA for healthcare professionals with real-time feed, messaging and offline support.',
            fr: "PWA de réseau social pour professionnels de santé avec fil en temps réel, messagerie et support hors ligne."
        },
        tech: ['Next.js 15', 'NestJS', 'GraphQL', 'PostgreSQL', 'Prisma'],
        links: { github: 'https://github.com/bomberkill/pms-connect' },
        caseStudy: {
            result: {
                en: 'PMS Connect is a social network Progressive Web App built for healthcare professionals — real-time feed, messaging, offline support — currently under maintenance.',
                fr: "PMS Connect est une Progressive Web App de réseau social conçue pour les professionnels de santé — fil d'actualité en temps réel, messagerie, support hors ligne — actuellement en maintenance."
            },
            role: 'Fullstack Developer',
            period: 'Jun 2025–Jul 2026',
            type: 'Web PWA + GraphQL API + admin dashboard (3 surfaces)',
            team: 'Solo',
            status: { en: 'Under maintenance', fr: 'En maintenance' },
            context: {
                en: 'Healthcare professionals needed a dedicated network built for their workflow rather than a generic social app assuming constant connectivity. PMS Connect combines a PWA front end, a GraphQL API, and a moderation dashboard into one product.',
                fr: "Les professionnels de santé avaient besoin d'un réseau dédié à leur usage plutôt que d'une app sociale générique supposant une connectivité constante. PMS Connect combine un frontend PWA, une API GraphQL et un dashboard de modération en un seul produit."
            },
            hardPart: {
                en: 'Keeping the real-time feed securely connected and working, while the same app also had to work fully offline with push notifications. Real-time and offline-first pull in opposite directions, and both had to work in the same app.',
                fr: "Garder le fil en temps réel connecté de façon sécurisée, tout en faisant fonctionner la même application entièrement hors ligne avec des notifications push. Le temps réel et le hors-ligne tirent dans des directions opposées, et les deux devaient fonctionner ensemble."
            },
            decisions: [
                { text: { en: 'Replaced an inefficient way of loading related data with a batching approach — stopped the server from crashing on large groups; cost was more upfront complexity in that part of the code.', fr: "Remplacement d'une méthode de chargement de données liées peu efficace par une approche de regroupement — a empêché le serveur de planter sur les grands groupes ; coût : plus de complexité au départ dans cette partie du code." } },
                { text: { en: 'Fixed a bug where two people joining a group at the same time could create duplicate entries — closed with a safer, atomic database update; cost was slightly more complex query logic.', fr: "Correction d'un bug où deux personnes rejoignant un groupe en même temps pouvaient créer des doublons — corrigé avec une mise à jour de base de données plus sûre ; coût : une logique de requête légèrement plus complexe." } },
                { text: { en: 'Migrated the database from MongoDB to PostgreSQL, adding a caching layer — gained more reliable data integrity and faster responses; cost was the migration effort itself.', fr: "Migration de la base de données de MongoDB vers PostgreSQL, avec ajout d'une couche de cache — gain de fiabilité et de rapidité ; coût : l'effort de migration lui-même." } },
                { text: { en: 'Removed session-based login in favor of tokens — removes a category of server-side risk in a distributed setup; cost is that revoking access is a bit harder than before.', fr: "Suppression de la connexion par session au profit de jetons — supprime une catégorie de risque côté serveur ; coût : révoquer un accès est un peu plus difficile qu'avant." } },
                { text: { en: 'The app now refuses to start if required configuration is missing, instead of quietly falling back to an unsafe default — trades a bit of developer convenience for closing a real security risk.', fr: "L'application refuse désormais de démarrer si une configuration requise est manquante, au lieu de se replier silencieusement sur une valeur par défaut non sécurisée — sacrifie un peu de confort de développement pour fermer un vrai risque de sécurité." } },
            ],
            stack: {
                frontend: ['Next.js 15', 'Apollo Client', 'GraphQL-WS', 'next-pwa (Workbox)', 'Firebase', 'Formik', 'better-auth'],
                admin: ['Refine', 'React Router v7', 'Apollo/GraphQL', 'i18next', 'Tailwind CSS v4'],
                backend: ['NestJS 10', 'Apollo Server 4', 'Prisma 7', 'PostgreSQL', 'Redis', 'DataLoader', 'class-validator'],
                infra: ['PostgreSQL', 'Redis', 'AWS S3', 'Firebase (push, admin)'],
            },
            next: {
                en: 'Finish the admin dashboard (currently mostly scaffolded) and restore monitoring before bringing it out of maintenance.',
                fr: "Finaliser le dashboard admin (encore largement à l'état d'ébauche) et rétablir le monitoring avant de sortir le projet de maintenance."
            },
            links: {
                github: 'https://github.com/bomberkill/pms-connect',
                extraRepos: [
                    { label: 'pms-connect-api', url: 'https://github.com/bomberkill/pms-connect-api' },
                    { label: 'pms-connect-admin', url: 'https://github.com/bomberkill/pms-connect-admin' },
                ],
            },
        },
    },
    {
        id: 6,
        slug: 'angels-closet',
        title: "Angel's Closet",
        category: 'web',
        year: '2025',
        description: {
            fr: "Refonte complète d'une plateforme de services à domicile (Déménagement, Nettoyage, Rénovation) avec une identité visuelle 'Premium' et une architecture modulaire.",
            en: "Complete redesign of a home services platform (Moving, Cleaning, Renovation) with a 'Premium' visual identity and modular architecture."
        },
        tech: [
            "Next.js 15 (App Router)",
            "TypeScript",
            "TailwindCSS",
            "Framer Motion",
            "Nodemailer (SMTP Pool)"
        ],
        links: {
            live: "https://angelsclosets.com",
            github: "https://github.com/bomberkill/angels-closet-web"
        },
        caseStudy: {
            result: {
                en: "Angel's Closet is a live showcase website for a home services company (moving, cleaning, renovation), redesigned with a premium visual identity and a modular architecture that supports adding new services without a rewrite.",
                fr: "Angel's Closet est un site vitrine en production pour une entreprise de services à domicile (déménagement, nettoyage, rénovation), repensé avec une identité visuelle premium et une architecture modulaire permettant d'ajouter de nouveaux services sans tout réécrire."
            },
            role: 'Web Developer',
            period: '2025',
            type: 'Showcase website',
            team: 'Solo',
            context: {
                en: 'Angel\'s Closet needed a full redesign of its home services brand into one premium, modular site, replacing a dated design that could not easily support new services.',
                fr: "Angel's Closet avait besoin d'une refonte complète de sa marque de services à domicile en un site premium et modulaire, remplaçant un design daté qui ne pouvait plus facilement accueillir de nouveaux services."
            },
            hardPart: {
                en: 'Delivering a fully bilingual (EN/FR) experience with reliable transactional emails (quotes, booking confirmations) across a modular set of services, all on a single pooled SMTP setup.',
                fr: "Offrir une expérience entièrement bilingue (EN/FR) avec des emails transactionnels fiables (devis, confirmations de réservation) sur un ensemble modulaire de services, via une seule configuration SMTP mutualisée."
            },
            decisions: [],
            stack: {
                frontend: ['Next.js 15 (App Router)', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
                backend: ['Nodemailer (SMTP Pool)'],
            },
            links: { live: 'https://angelsclosets.com', github: 'https://github.com/bomberkill/angels-closet-web' },
        },
    },
];
