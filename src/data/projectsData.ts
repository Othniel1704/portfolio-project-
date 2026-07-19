export interface ProjectProof {
    title: string;
    type: 'image' | 'link' | 'pdf' | 'code';
    url: string;
    description?: string;
}

export interface ProjectCompetency {
    id: string; // The ID of the BTS SIO competency (e.g. 'B1.1')
    description?: string;
}

export interface Project {
    id: string;
    title: string;
    shortDescription: string;
    fullDescription: string;
    context: string; // Contexte de réalisation (dates, entreprise/école, besoin)
    role: string;
    duration: string;
    teamSize?: number;
    image: string;
    technologies: string[];
    category: 'Stage' | 'Projet Personnel' | 'Projet Académique (PPE)' | 'Autre';
    projectSize?: 'Lourd' | 'Léger';
    competencies: ProjectCompetency[]; // Compétences du Bloc 1, 2 ou 3 validées
    proofs: ProjectProof[];
    github?: string;
    demo?: string;
    tags: string[];
    highlights: string[];
    showInE5?: boolean;
    e5Order?: number;
}

export const projectsData: Project[] = [
    // --- OFFICIALLY MAPPED E5 PROJECTS ---
    {
        id: "dhcp-dns",
        title: "Mise en place de services réseaux d'infrastructure (DHCP et DNS)",
        shortDescription: "Configuration et déploiement de services réseaux de base sur une architecture locale.",
        fullDescription: "Installation, configuration et test de serveurs DHCP et DNS pour attribuer automatiquement des adresses IP et résoudre les noms de domaine dans un réseau local professionnel simulé.",
        context: "Projet scolaire (2024-2025)",
        role: "Administrateur Réseau",
        duration: "1 semaine",
        image: "/images/network.jpg",
        technologies: ["Windows Server / Linux", "DHCP", "DNS", "Réseau Local"],
        category: 'Projet Académique (PPE)',
        tags: ["Infrastructure", "Réseau"],
        highlights: ["Adressage dynamique", "Résolution de nom"],
        competencies: [
            { id: "B1.1", description: "Recensement et exploitation du réseau (DHCP/DNS)." },
            { id: "B1.5", description: "Mise à disposition du service de connectivité réseau pour les utilisateurs." }
        ],
        proofs: [],
        showInE5: true,
        e5Order: 1
    },
    {
        id: "labtainer",
        title: "Audit de sécurité applicative : Injection SQL (TP Labtainer)",
        shortDescription: "Exercices de cybersécurité et analyse de vulnérabilités.",
        fullDescription: "Réalisation d'audits de sécurité sur des environnements virtuels (Labtainers) pour identifier et exploiter des failles d'injection SQL afin de comprendre les mécanismes d'attaque et proposer des correctifs.",
        context: "Ateliers de Cybersécurité (2024-2025)",
        role: "Testeur de pénétration / Analyste Sécurité",
        duration: "Ponctuel",
        image: "/images/security.jpg",
        technologies: ["Linux", "SQL", "Cybersec Tools"],
        category: 'Projet Académique (PPE)',
        tags: ["Sécurité", "Audit", "SQL"],
        highlights: ["Identification de vulnérabilités applicatives", "Rapport d'audit"],
        competencies: [
            { id: "B1.1", description: "Exploitation d'un environnement vulnérable à auditer." },
            { id: "B1.2", description: "Traitement d'incidents de sécurité simulés." },
            { id: "B1.5", description: "Accompagnement sur les bonnes pratiques de sécurité (remédiation)." },
            { id: "B3.3", description: "Détection des failles applicatives (SQLi)." }
        ],
        proofs: [
            { title: "Capture Wireshark (Analyse)", type: "image", url: "/images/proofs/wireshark_capture.png" }
        ],
        showInE5: true,
        e5Order: 2
    },
    {
        id: "quiz-interactive",
        title: "Développement d'une plateforme de QCM interactif avec statistiques",
        shortDescription: "Application web de quiz dynamique intégrant un suivi des scores.",
        fullDescription: "Plateforme de quiz interactive pour évaluer les connaissances des utilisateurs. Intègre un calcul de score temps réel, un tableau de bord statistique et une interface dynamique.",
        context: "Projet scolaire (2024-2025)",
        role: "Développeur Front-End",
        duration: "1 semaine",
        image: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?auto=format&fit=crop&q=80&w=1000",
        technologies: ["JavaScript", "HTML5", "CSS3"],
        category: 'Projet Académique (PPE)',
        tags: ["Web", "Interactive"],
        highlights: ["Statistiques temps réel", "Interface réactive"],
        competencies: [
            { id: "B1.5", description: "Déploiement et mise à disposition de l'application de QCM." },
            { id: "B2.1", description: "Conception du front-end et logique métier en JavaScript." }
        ],
        proofs: [],
        github: "https://github.com/Othniel1704/qcm",
        showInE5: true,
        e5Order: 3
    },
    {
        id: "portfolio",
        title: "Portfolio Professionnel et Veille Technologique",
        shortDescription: "Plateforme web personnelle incluant CV, projets et agrégation de veille.",
        fullDescription: "Conception et développement d'un portfolio servant d'identité numérique et de plateforme de veille technologique. Reflète mes compétences professionnelles et ma démarche continue d'apprentissage (2024-2026).",
        context: "Projet personnel (2024-2026)",
        role: "Développeur Full Stack",
        duration: "Continu",
        image: "/images/portfolio.png",
        technologies: ["React", "TypeScript", "Tailwind CSS"],
        category: 'Projet Personnel',
        projectSize: 'Lourd',
        tags: ["Personnel", "Veille", "Identité Numérique"],
        highlights: ["Outils de veille intégrés", "Déploiement CI/CD"],
        competencies: [
            { id: "B1.1", description: "Gestion du patrimoine avec versioning (GitHub) du code source." },
            { id: "B1.3", description: "Développement d'une présence en ligne professionnelle." },
            { id: "B1.6", description: "Gestion de l'identité professionnelle et des outils de veille." },
            { id: "B2.1", description: "Développement UI avec React." }
        ],
        proofs: [
            { title: "Code source", type: "link", url: "https://github.com/Othniel1704/portfolio-project-" }
        ],
        github: "https://github.com/Othniel1704/portfolio-project-",
        demo: "https://othniel-portfolio.netlify.app",
        showInE5: true,
        e5Order: 5
    },
    {
        id: "game-connect",
        title: "Développement du réseau social \"Game Connect\" avec intégration évolutive d'un Chat",
        shortDescription: "Plateforme sociale pour gamers permettant la mise en relation et incluant un chat.",
        fullDescription: "Application web de mise en relation de joueurs (profils, équipes, tournois). Intégration d'un module de chat pour faciliter la communication directe entre membres de l'équipe.",
        context: "Projet de groupe (2024-2025)",
        role: "Développeur Backend & Base de données",
        duration: "4 semaines",
        image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=600&fit=crop",
        technologies: ["PHP", "Symfony", "MySQL"],
        category: 'Projet Académique (PPE)',
        tags: ["Social", "Full Stack"],
        highlights: ["Architecture MVC", "Système d'authentification", "Chat intégré"],
        competencies: [
            { id: "B1.3", description: "Participation au framework web pour valoriser les interactions sociales." },
            { id: "B1.4", description: "Travail coopératif en groupe, planification des activités via un backlog." },
            { id: "B1.5", description: "Intégration d'un module de chat et déploiement." },
            { id: "B2.1", description: "Architecture MVC via Symfony." },
            { id: "B2.3", description: "Requêtes complexes et Doctrine." }
        ],
        proofs: [
            { title: "Diagramme MCD", type: "image", url: "/images/proofs/gameconnect_mcd.png" },
            { title: "Dépôt GitHub", type: "link", url: "https://github.com/Othniel1704/game-connect" }
        ],
        github: "https://github.com/Othniel1704/game-connect",
        showInE5: true,
        e5Order: 6
    },
    {
        id: "chat-app",
        title: "Module de Chat type Forum",
        shortDescription: "Application de discussion thématique en ligne.",
        fullDescription: "Création d'un chat organisé en salles de type forum pour centraliser les échanges. Les utilisateurs peuvent poster des messages asynchrones et lire l'historique des canaux.",
        context: "Projet scolaire (2024-2025)",
        role: "Développeur Front/Back",
        duration: "3 semaines",
        image: "/images/chat.png",
        technologies: ["PHP", "MySQL", "JavaScript", "AJAX"],
        category: 'Projet Académique (PPE)',
        tags: ["Messagerie", "Temps Réel"],
        highlights: ["Actualisation AJAX", "Gestion de l'historique"],
        competencies: [
            { id: "B1.5", description: "Tests d'intégration et déploiement du service de messagerie auprès des camarades." },
            { id: "B2.1", description: "Logique applicative client/serveur." }
        ],
        proofs: [
            { title: "Dépôt GitHub", type: "link", url: "https://github.com/Othniel1704/chat" }
        ],
        github: "https://github.com/Othniel1704/chat",
        showInE5: true,
        e5Order: 7
    },
    {
        id: "lebonbazaar",
        title: "Application web de petites annonces (type \"leboncoin\")",
        shortDescription: "Plateforme complète C2C (Client-to-Client) pour l'échange de biens.",
        fullDescription: "Développement d'une application de petites annonces avec dépôt d'annonces multicatégories, gestion des utilisateurs, recherche avancée et tableau de bord administration sécurisé.",
        context: "Projet personnel formatif (2024-2025)",
        role: "Développeur Full Stack",
        duration: "5 semaines",
        image: "/images/lebonbazaar.png",
        technologies: ["PHP", "MySQL", "CSS", "MariaDB"],
        category: 'Projet Académique (PPE)',
        projectSize: 'Léger',
        tags: ["E-commerce", "Base de données"],
        highlights: ["Relationnel complexe", "Interface vendeur/acheteur"],
        competencies: [
            { id: "B1.1", description: "Sécurisation et définition des droits d'accès administrateur/visiteur." },
            { id: "B1.4", description: "Analyse des objectifs fonctionnels et conception des maquettes en amont." },
            { id: "B2.3", description: "Modélisation des relations (Users, Annonces)." }
        ],
        proofs: [
            { title: "Dépôt GitHub", type: "link", url: "https://github.com/Othniel1704/lebonbazaar" }
        ],
        github: "https://github.com/Othniel1704/lebonbazaar",
        showInE5: true,
        e5Order: 8
    },
    {
        id: "hardware-management",
        title: "Application WinForms Gestion de Parc Matériel Informatique",
        shortDescription: "Logiciel client lourd pour l'inventaire physique et logiciel.",
        fullDescription: "Application Desktop sécurisée en C# pour référencer le parc informatique d'une entreprise fictive, suivre les attributions de postes et tracer l'historique des pannes ainsi que l'usure.",
        context: "Projet de gestion d'infrastructure (2025-2026)",
        role: "Développeur .NET",
        duration: "5 semaines",
        image: "https://images.unsplash.com/photo-1591405351990-4726e331f141?auto=format&fit=crop&q=80&w=1000",
        technologies: ["C#", ".NET", "WinForms", "SQL Server"],
        category: 'Projet Académique (PPE)',
        projectSize: 'Lourd',
        tags: ["Gestion de parc", "Desktop .NET"],
        highlights: ["Génération de rapports d'inventaire", "Authentification sécurisée"],
        competencies: [
            { id: "B1.1", description: "Centralisation de l'inventaire et suivi du cycle de vie des équipements." },
            { id: "B1.2", description: "Processus de signalement matériel des erreurs de maintenance." },
            { id: "B1.4", description: "Identification du cahier des charges et évaluation de l'avancement." },
            { id: "B1.5", description: "Déploiement de l'exécutable client sur les postes techniciens." },
            { id: "B2.1", description: "Architecture n-tiers." }
        ],
        proofs: [],
        github: "https://github.com/Othniel1704/hardware-manager",
        showInE5: true,
        e5Order: 9
    },
    {
        id: "vlan-config",
        title: "Configuration de VLAN POUR separer les réseaux",
        shortDescription: "Segmentation logique d'architectures réseaux d'entreprise.",
        fullDescription: "Paramétrage de commutateurs Cisco pour isoler les flux réseaux (ex: Direction, Compta, Invités) via des Virtual LAN. Sécurisation du réseau niveau 2.",
        context: "Atelier Réseau (2024-2025)",
        role: "Administrateur Systèmes et Réseaux",
        duration: "1 semaine",
        image: "/images/vlan.jpg",
        technologies: ["Cisco IOS", "Packet Tracer", "VLAN", "Ethernet"],
        category: 'Projet Académique (PPE)',
        tags: ["Réseau", "Infrastucture"],
        highlights: ["Segmentation V-LAN", "Isolation du trafic broadcast"],
        competencies: [
            { id: "B1.1", description: "Application des règles de séparation logique sur le matériel." },
            { id: "B1.5", description: "Déploiement d'un service de connectivité étanche." }
        ],
        proofs: [],
        showInE5: true,
        e5Order: 10
    },
    {
        id: "stage-1-auto-ecole",
        title: "Stage 1ère année : Conception et déploiement d'un site Web pour une auto-école",
        shortDescription: "Réalisation d'un site vitrine complet remplaçant une page Google d'entreprise.",
        fullDescription: "Recueil du besoin client auprès de l'auto-école, rédaction du cahier des charges et développement d'un site sur-mesure. Le site a été hébergé et est utilisé quotidiennement pour attirer des prospects.",
        context: "Stage en milieu professionnel (juin-juillet 2025)",
        role: "Développeur Full Stack",
        duration: "7 semaines",
        image: "/images/nbautoecoledelamairie_homepage_1766077079814.png",
        technologies: ["Nextjs","TypeScript", "CSS","Hébergement web","hostinger"],
        category: 'Stage',
        tags: ["Stage", "Web Corporate"],
        highlights: ["Passage en production", "Relation client directe"],
        competencies: [
            { id: "B1.1", description: "Mise en ligne, gestion de l'hébergement et du nom de domaine." },
            { id: "B1.3", description: "Optimisation de la présence en ligne locale (SEO) et e-boutique." },
            { id: "B1.4", description: "Direction du projet en autonomie de A à Z (Cahier des charges)." },
            { id: "B1.5", description: "Accompagnement de la cliente pour la gestion des demandes de contact." },
            { id: "B2.1", description: "Développement frontend." }
        ],
        proofs: [
            { title: "Site en ligne", type: "link", url: "https://nbautoecoledelamairie.fr" }
        ],
        demo: "https://nbautoecoledelamairie.fr",
        showInE5: true,
        e5Order: 11
    },
    {
        id: "stage-2-menad-conseil",
        title: "Stage 2ème année : MENAD CONSEIL & FORMATION — Chilly-Mazarin",
        shortDescription: "Conception et développement d'un site web responsive, structuration des contenus et optimisation de l'affichage mobile pour l'auto-école.",
        fullDescription: "Ce projet de stage a consisté à concevoir et développer le site web responsive de l'auto-école MENAD CONSEIL & FORMATION (opérant sous le nom commercial Mazarin Conduite & Formation) à Chilly-Mazarin. L'objectif principal était de structurer et d'intégrer les différents contenus (présentation de l'établissement, formules et tarifs des permis, code de la route, contact) afin de remplacer la présence en ligne existante par une solution moderne. Une attention particulière a été accordée à l'optimisation mobile (Responsive Design) et à l'amélioration globale de l'expérience utilisateur (UX/UI). Tout au long du projet, des échanges réguliers ont été menés avec le client afin d'adapter l'arborescence, valider le design et répondre précisément à ses attentes professionnelles.",
        context: "Stage en milieu professionnel (décembre 2025 - janvier 2026)",
        role: "Développeur Web & Concepteur UX/UI",
        duration: "6 semaines",
        image: "/images/mazarin-conduite.jpg",
        technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "SEO", "Responsive Design"],
        category: 'Stage',
        projectSize: 'Léger',
        tags: ["Stage", "Web Showcase", "Responsive Design", "Client Relations"],
        highlights: [
            "Conception et développement d'un site web responsive",
            "Intégration et structuration des contenus (présentation, services, contact)",
            "Optimisation de l'affichage mobile et amélioration de l'expérience utilisateur",
            "Échanges réguliers et validations de livrables avec le client"
        ],
        competencies: [
            { id: "B1.2", description: "Prise en compte des retours et demandes d'évolution du client pour adapter l'arborescence et l'interface." },
            { id: "B1.3", description: "Structuration et intégration complète des contenus professionnels pour valoriser la présence en ligne locale." },
            { id: "B1.4", description: "Travail en mode projet avec le client via des échanges réguliers et des revues de maquettes périodiques." },
            { id: "B1.5", description: "Optimisation de l'accessibilité mobile, des performances d'affichage et mise en production du site." },
            { id: "B2.1", description: "Développement frontend moderne avec Next.js et Tailwind CSS d'un site web responsive et adaptatif." }
        ],
        proofs: [
            { title: "Site en ligne", type: "link", url: "https://mazarinconduiteformation.fr/" }
        ],
        demo: "https://mazarinconduiteformation.fr/",
        showInE5: true,
        e5Order: 12
    },
    {
        id: "palais-mobile",
        title: "Palais Mobile — Plateforme d'achat international",
        shortDescription: "Application web full-stack facilitant l'achat de produits à l'international avec suivi de commande en temps réel et chat intégré.",
        fullDescription: "Palais Mobile est une application web full-stack conçue pour faciliter l'achat de produits à l'international. L'application permet aux résidents d'Afrique de l'Ouest de commander des produits depuis l'Europe, les USA et l'Asie. Elle gère le cycle complet : soumission de demande d'achat (via URL ou saisie manuelle), génération de devis, validation, paiement, suivi de livraison en temps réel et messagerie directe avec le support client. Le projet a été réalisé en binôme avec répartition des tâches via Git (branches et merge requests).",
        context: "Projet personnel de développement (2025-2026)",
        role: "Développeur Full Stack (Dashboard Client, Auth, Sécurité, Chat temps réel)",
        duration: "6 semaines",
        teamSize: 2,
        image: "/images/palais-mobile.png",
        technologies: ["React 19", "Tailwind CSS", "Firebase (Firestore, Auth, Hosting)", "Cloud Functions", "Google Gemini API", "Git/GitHub"],
        category: 'Projet Personnel',
        projectSize: 'Lourd',
        tags: ["Personnel", "E-commerce", "Full Stack", "Firebase", "IA"],
        highlights: [
            "Suivi de commande en temps réel (WebSockets Firestore)",
            "Chat client-support intégré",
            "Sécurité granulaire via Firestore Rules",
            "Intégration IA Gemini (sécurisée via Cloud Functions)",
            "Travail en binôme avec Git (branches, merge requests)"
        ],
        competencies: [
            { id: "B1.1", description: "Gestion du code source avec Git/GitHub (branches, merge requests) et sécurisation des données utilisateur via Firestore Rules." },
            { id: "B1.2", description: "Traitement des demandes clients via le système de chat temps réel et suivi des commandes." },
            { id: "B1.4", description: "Travail coopératif en binôme : répartition des tâches (Dashboard Client vs Admin), synchronisation quotidienne, planification des sprints." },
            { id: "B1.5", description: "Déploiement de l'application sur Firebase Hosting et mise à disposition du service pour les utilisateurs finaux." },
            { id: "B2.1", description: "Développement frontend React 19 avec TypeScript, architecture par composants, hooks personnalisés (useEffect, observeOrders)." },
            { id: "B2.3", description: "Modélisation NoSQL (collections Firestore : users, orders, conversations/messages) et requêtes temps réel." },
            { id: "B3.3", description: "Sécurisation de l'API Gemini via migration côté serveur (Cloud Functions), règles Firestore empêchant la modification de prix par le client." }
        ],
        proofs: [
            { title: "Lien Démo", type: "link", url: "https://palaismobile.com/" }
        ],
        demo: "https://palaismobile.com/",
        showInE5: true,
        e5Order: 13
    },

    // --- NON-E5 PROJECTS (Kept for normal projects route, hidden from E5 table) ---

    {
        id: "chess-game",
        title: "Jeu d'Expert - Échecs",
        shortDescription: "Jeu d'échecs complet développé en Java avec interface graphique.",
        fullDescription: "Implémentation d'un jeu d'échecs complet respectant les règles FIDE. Interface graphique développée en JavaFX.",
        context: "Projet personnel d'approfondissement Java.",
        role: "Développeur",
        duration: "",
        image: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&q=80&w=1000",
        technologies: ["Java", "JavaFX", "POO"],
        category: 'Projet Personnel',
        tags: ["Desktop", "Jeu", "Algorithme"],
        highlights: ["Sauvegarde de partie"],
        competencies: [
            { id: "B2.1", description: "Programmation Orientée Objet avancée" }
        ],
        proofs: [],
        github: "https://github.com/Othniel1704/chess-game",
        showInE5: false
    },

    {
        id: "stagematch",
        title: "StageMatch — Matching stages / alternances",
        shortDescription: "Plateforme de mise en relation candidats / offres avec matching automatique par compétences et KPI.",
        fullDescription: "StageMatch met en relation candidats et entreprises pour des stages et alternances. L'application s'appuie sur une architecture de données PostgreSQL / Supabase et un moteur de matching automatique qui score la compatibilité entre profils et offres à partir des compétences et d'indicateurs (KPI). Une API FastAPI expose la gestion des candidatures et des offres.",
        context: "Projet personnel Data (2025-2026)",
        role: "Développeur & Data / Architecture BDD",
        duration: "En cours",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1000",
        technologies: ["Python", "FastAPI", "PostgreSQL", "Supabase", "SQL avancé"],
        category: 'Projet Personnel',
        projectSize: 'Lourd',
        tags: ["Data", "Matching", "API", "Base de données"],
        highlights: [
            "Architecture de données PostgreSQL / Supabase",
            "Matching automatique par compétences et KPI",
            "API FastAPI pour la gestion des candidatures et des offres"
        ],
        competencies: [
            { id: "B2.1", description: "Développement de l'API et de la logique de matching en Python (FastAPI)." },
            { id: "B2.3", description: "Modélisation et exploitation d'une base relationnelle (PostgreSQL / Supabase) et requêtes avancées." }
        ],
        proofs: [],
        github: "https://github.com/Othniel1704/stagematch",
        showInE5: false
    },

];