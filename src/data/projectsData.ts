

export interface ProjectProof {
    title: string;
    type: 'image' | 'link' | 'pdf' | 'code';
    url: string;
    description?: string;
}

export interface ProjectCompetency {
    name: string;
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
    competencies: ProjectCompetency[]; // Compétences du Bloc 1 validées
    proofs: ProjectProof[];
    github?: string;
    demo?: string;
    tags: string[];
    highlights: string[];
}

export const projectsData: Project[] = [
    {
        id: "nb-auto-ecole",
        title: "NB Auto École de la Mairie",
        shortDescription: "Site vitrine moderne pour une auto-école avec système de contact et présentation des formations.",
        fullDescription: "Réalisation d'un site web professionnel pour l'auto-école NB Auto École de la Mairie située à Vigneux-sur-Seine. Le projet consistait à moderniser l'image de l'entreprise, faciliter la prise de contact pour les élèves et présenter clairement les différentes offres de formation (Permis B, AAC, Conduite Supervisée).",
        context: "Stage de première année (Mai-Juin 2024). Demande de la gérante pour remplacer une page Google Business obsolète.",
        role: "Développeur Full Stack (Stagiaire)",
        duration: "5 semaines",
        image: "images/nbautoecoledelamairie_homepage_1766077079814.png",
        technologies: ["React", "TypeScript", "Tailwind CSS", "EmailJS"],
        tags: ["Stage", "Web", "Responsive"],
        highlights: ["Site en production", "SEO optimisé", "Design responsive"],
        competencies: [
            { name: "Gérer le patrimoine informatique", description: "Mise en place de sauvegardes et versioning" },
            { name: "Développer la présence en ligne de l'organisation", description: "Création du site et référencement local" },
            { name: "Travailler en mode projet", description: "Respect du cahier des charges et délais" }
        ],
        proofs: [
            { title: "Site en ligne", type: "link", url: "https://nbautoecoledelamairie.fr" },
            { title: "Cahier des charges", type: "pdf", url: "/documents/cahier_des_charges_autoecole.pdf" },
            { title: "Maquettes Figma", type: "image", url: "/images/proofs/maquette_autoecole.png" }
        ],
        github: "https://github.com/Othniel1704/nb-auto-ecole", // Placeholder if private
        demo: "https://nbautoecoledelamairie.fr"
    },
    {
        id: "game-connect",
        title: "Game Connect",
        shortDescription: "Plateforme sociale pour gamers permettant de former des équipes et organiser des tournois.",
        fullDescription: "Application web de mise en relation de joueurs de jeux vidéo. Les utilisateurs peuvent créer des profils, rechercher des coéquipiers selon des critères (niveau, jeu, disponibilité), créer des équipes et organiser des matchs amicaux ou tournois.",
        context: "Projet scolaire (PPE) - 2ème année. Travail en équipe de 3 étudiants.",
        role: "Développeur Backend & Base de données",
        duration: "4 mois",
        image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=600&fit=crop", // Placeholder
        technologies: ["PHP", "Symfony", "MySQL", "Bootstrap"],
        tags: ["PPE", "Backend", "Full Stack"],
        highlights: ["Architecture MVC", "Système d'authentification", "Gestion de tournois"],
        competencies: [
            { name: "Concevoir et développer une solution applicative", description: "Architecture MVC, diagrammes UML" },
            { name: "Gérer les données", description: "Schéma relationnel, requêtes SQL complexes" }
        ],
        proofs: [
            { title: "Diagramme de la Base de Données (MCD/MPD)", type: "image", url: "/images/proofs/gameconnect_mcd.png" },
            { title: "Captures du code (Contrôleurs)", type: "code", url: "/images/proofs/gameconnect_code.png" },
            { title: "Dépôt GitHub", type: "link", url: "https://github.com/Othniel1704/game-connect" }
        ],
        github: "https://github.com/Othniel1704/game-connect"
    },
    {
        id: "trac",
        title: "TRAC (Ticket Management System)",
        shortDescription: "Système de gestion de tickets d'incidents pour le support informatique.",
        fullDescription: "Développement et maintenance d'un outil de ticketing utilisé par le service support. Le projet incluait la correction de bugs sur l'assignation des tickets et l'ajout d'une fonctionnalité de statistiques pour les administrateurs.",
        context: "Projet en cours de formation (Atelier professionnel). Simulation d'un environnement de maintenance corrective et évolutive.",
        role: "Développeur maintenance",
        duration: "2 semaines",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop", // Placeholder
        technologies: ["Java", "JavaFX", "MySQL"],
        tags: ["Maintenance", "Desktop", "Java"],
        highlights: ["Correction de bugs critiques", "Ajout de fonctionnalités", "Refactoring"],
        competencies: [
            { name: "Maintenir et faire évoluer une solution applicative", description: "Correction d'anomalies, ajouts fonctionnels" },
            { name: "Gérer les incidents", description: "Suivi et résolution de tickets" }
        ],
        proofs: [
            { title: "Capture Ticket Avant Correction", type: "image", url: "/images/proofs/trac_bug_before.png" },
            { title: "Capture Ticket Après Correction", type: "image", url: "/images/proofs/trac_bug_after.png" },
            { title: "Rapport de maintenance", type: "pdf", url: "/documents/rapport_maintenance_trac.pdf" }
        ],
        github: "https://github.com/Othniel1704/trac-maintenance"
    },
    {
        id: "labtainer",
        title: "Labtainer - Sécurité Réseau",
        shortDescription: "Exercices de cybersécurité et administration réseau sous Linux.",
        fullDescription: "Réalisation de laboratoires virtuels (Labtainers) pour l'apprentissage de la cybersécurité. Configuration de pare-feu, analyse de trames réseaux, sécurisation de services SSH/HTTP.",
        context: "Ateliers de Cybersécurité (2ème année).",
        role: "Administrateur Système & Réseau",
        duration: "Ponctuel",
        image: "https://images.unsplash.com/photo-1558494949-ef526b0042a0?w=800&h=600&fit=crop", // Placeholder
        technologies: ["Linux", "Bash", "Wireshark", "Iptables"],
        tags: ["Sécurité", "Réseau", "Linux"],
        highlights: ["Analyse de trafic", "Hardening serveur", "Scripting Bash"],
        competencies: [
            { name: "Protéger les services et les données", description: "Configuration firewall, chiffrement" },
            { name: "Administrer des systèmes", description: "Gestion utilisateurs, droits, services" }
        ],
        proofs: [
            { title: "Compte-rendu TP Firewall", type: "pdf", url: "/documents/tp_firewall.pdf" },
            { title: "Capture Wireshark (Analyse)", type: "image", url: "/images/proofs/wireshark_capture.png" }
        ]
    },
    {
        id: "portfolio",
        title: "Portfolio Personnel",
        shortDescription: "Mon portfolio professionnel présentant mes compétences et réalisations.",
        fullDescription: "Conception et développement de mon portfolio personnel pour l'épreuve E4 du BTS SIO. L'objectif était de créer une identité numérique forte, de présenter mes projets de manière interactive et de démontrer mes compétences techniques en développement web moderne.",
        context: "Projet personnel & Examen E4 (2024-2025).",
        role: "Concepteur & Développeur",
        duration: "Continu",
        image: "images/portfolio.png",
        technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
        tags: ["Personnel", "Web", "Design"],
        highlights: ["Design System personnalisé", "Animations fluides", "Architecture composable"],
        competencies: [
            { name: "Gérer son identité professionnelle", description: "CV, présence en ligne, portfolio" },
            { name: "Développer une interface utilisateur", description: "UX/UI, Responsive Design" }
        ],
        proofs: [
            { title: "Code source", type: "link", url: "https://github.com/Othniel1704/portfolio-project-" },
            { title: "Lighthouse Score", type: "image", url: "/images/proofs/lighthouse_score.png" }
        ],
        github: "https://github.com/Othniel1704/portfolio-project-",
        demo: "https://othniel-portfolio.netlify.app"
    },{
    id: "lebonbazaar",
    title: "LebonBazaar",
    shortDescription: "Plateforme de petites annonces avec gestion d'utilisateurs et messagerie interne.",
    fullDescription: "Conception et développement d'une application de type 'LeBonCoin' permettant le dépôt d'annonces, la gestion de favoris et la mise en relation entre vendeurs et acheteurs. Le projet inclut une base de données relationnelle complexe avec gestion des catégories, des images multiples et un historique de visites.",
    context: "Projet de développement web focalisé sur la gestion de bases de données relationnelles et le CRUD complet.",
    role: "Développeur Full Stack",
    duration: "4 semaines",
    image: "images/lebonbazaar.png",
    technologies: ["PHP", "MySQL", "CSS", "MariaDB"],
    tags: ["E-commerce", "Base de données", "Full Stack"],
    highlights: [
        "Schéma de base de données relationnelle robuste (FK, contraintes)",
        "Système de messagerie entre utilisateurs",
        "Gestion dynamique des annonces et des catégories",
        "Espace administration avec statistiques de visites"
    ],
    competencies: [
        { 
            name: "Concevoir et mettre en place une base de données", 
            description: "Modélisation du schéma SQL et implémentation des relations (Users, Annonces, Messages)." 
        },
        { 
            name: "Développer une interface utilisateur", 
            description: "Réalisation de mises en page responsives pour le catalogue d'annonces et la messagerie." 
        },
        { 
            name: "Gérer un back-end dynamique", 
            description: "Traitement des formulaires de dépôt et gestion des sessions utilisateurs." 
        }
    ],
    proofs: [
        { title: "Dépôt GitHub", type: "link", url: "https://github.com/Othniel1704/lebonbazaar" },
        { title: "Schéma SQL", type: "file", url: "leboncoindb.sql" }
    ],
    github: "https://github.com/Othniel1704/lebonbazaar"
},
    {
        id: "chat-app",
        title: "Chat App Temps Réel",
        shortDescription: "Application de messagerie instantanée avec salons et messages privés.",
        fullDescription: "Développement d'une application de chat permettant aux utilisateurs de discuter en temps réel dans des salons publics ou en privé. Utilisation d'AJAX pour le rafraîchissement des messages sans rechargement de page (ou WebSockets selon l'implémentation choisie).",
        context: "Projet personnel d'approfondissement JS/PHP.",
        role: "Développeur Full Stack",
        duration: "3 semaines",
        image: "images/chat.png",
        technologies: ["PHP", "MySQL", "JavaScript", "AJAX"],
        tags: ["Personnel", "Full Stack", "Temps Réel"],
        highlights: ["Authentification sécurisée", "Base de données optimisée", "Interface mobile-first"],
        competencies: [
            { name: "Développer une solution applicative", description: "Logique client/serveur" },
            { name: "Gérer les données", description: "Stockage des messages et utilisateurs" }
        ],
        proofs: [
            { title: "Dépôt GitHub", type: "link", url: "https://github.com/Othniel1704/chat" }
        ],
        github: "https://github.com/Othniel1704/chat"
    },
    {
        id: "chess-game",
        title: "Jeu d'Expert - Échecs",
        shortDescription: "Jeu d'échecs complet développé en Java avec interface graphique.",
        fullDescription: "Implémentation d'un jeu d'échecs complet respectant les règles FIDE. Gestion des déplacements, promotion, roque, et fin de partie (échec et mat, pat). Interface graphique développée en JavaFX.",
        context: "Projet personnel d'approfondissement Java.",
        role: "Développeur",
        duration: "2 mois",
        image: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&q=80&w=1000",
        technologies: ["Java", "JavaFX", "POO"],
        tags: ["Desktop", "Jeu", "Algorithme"],
        highlights: ["Intelligence Artificielle (Minimax)", "Sauvegarde de partie", "Interface responsive"],
        competencies: [
            { name: "Concevoir et développer une solution applicative", description: "Programmation Orientée Objet avancée" }
        ],
        proofs: [],
        github: "https://github.com/Othniel1704/chess-game"
    },
    {
        id: "quiz-interactive",
        title: "QCM Interactif",
        shortDescription: "Application web de quiz dynamique avec calcul de score.",
        fullDescription: "Plateforme de quiz permettant de tester ses connaissances sur divers sujets (Développement Web, Culture Générale). Système de feedback immédiat, chronomètre par question et classement des meilleurs scores.",
        context: "Projet de validation des acquis JS.",
        role: "Développeur Front-End",
        duration: "1 semaine",
        image: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?auto=format&fit=crop&q=80&w=1000",
        technologies: ["JavaScript", "HTML5", "CSS3"],
        tags: ["Web", "Interactive", "Frontend"],
        highlights: ["Manipulation du DOM", "Stockage local (LocalStorage)", "Animations CSS"],
        competencies: [],
        proofs: [],
        github: "https://github.com/Othniel1704/quiz-app"
    },
    {
        id: "scientific-calculator",
        title: "Calculatrice Scientifique",
        shortDescription: "Outil web de calcul mathématique avancé.",
        fullDescription: "Calculatrice web responsive intégrant les opérations standard et scientifiques (trigonométrie, logarithmes). Gestion de l'historique des calculs et support du clavier physique.",
        context: "Exercice d'algorithmie et interface.",
        role: "Développeur",
        duration: "3 jours",
        image: "https://images.unsplash.com/photo-1587145820266-a5951ee6f620?auto=format&fit=crop&q=80&w=1000",
        technologies: ["JavaScript", "CSS Grid", "HTML"],
        tags: ["Outil", "Web", "Math"],
        highlights: ["Design Neumorphism", "Gestion des événements clavier", "Zéro framework"],
        competencies: [],
        proofs: [],
        github: "https://github.com/Othniel1704/calculator"
    },
    {
        id: "winforms-auth",
        title: "Application WinForms - Authentification",
        shortDescription: "Système complet d'inscription et authentification sécurisé en C#.",
        fullDescription: "Application de gestion utilisateurs développée en C# WinForms. Elle intègre un système d'inscription avec validation client (regex, complexité mdp) et une connexion sécurisée via hachage SHA-256. La base de données SQL Server stocke les informations utilisateurs. Une analyse critique de la sécurité (absence de sel, connexion synchrone) a été réalisée pour identifier les axes d'amélioration.",
        context: "Projet scolaire - Développement d'application lourde.",
        role: "Développeur .NET",
        duration: "2 semaines",
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1000",
        technologies: ["C#", "WinForms", ".NET", "SQL Server"],
        tags: ["Desktop", "Security", "C#"],
        highlights: ["Validation Regex", "Architecture 2-Tiers", "Hachage SHA-256", "Connexion SQL Server"],
        competencies: [
            { name: "Développer une solution applicative", description: "Application riche avec gestion d'événements" },
            { name: "Gérer les données", description: "Interaction avec SQL Server via ADO.NET" }
        ],
        proofs: [],
        github: "https://github.com/Othniel1704/winforms-auth"
    },
    {
        id: "hardware-management",
        title: "Gestion de Parc Matériel Informatique",
        shortDescription: "Application desktop pour l'inventaire et la maintenance de matériel informatique.",
        fullDescription: "Application lourde développée en C# .NET 4.8 pour la gestion centralisée des équipements informatiques. Fonctionnalités clés : CRUD complet des matériels (PC, serveurs, périphériques), gestion des interventions de maintenance, et suivi des cycles de vie (MTBF). L'accès est sécurisé par une authentification forte (hachage PBKDF2) avec gestion des rôles (Admin/Technicien). L'interface WinForms utilise des DataGridView avancés pour le tri et le filtrage, et permet l'export des inventaires en CSV/Excel.",
        context: "Projet de fin d'année - Gestion d'infrastructure.",
        role: "Concepteur & Développeur Principal",
        duration: "5 semaines",
        image: "https://images.unsplash.com/photo-1591405351990-4726e331f141?auto=format&fit=crop&q=80&w=1000",
        technologies: ["C#", ".NET Framework 4.8", "WinForms", "SQL Server", "ADO.NET"],
        tags: ["Desktop", "Infrastructure", "Gestion"],
        highlights: ["Architecture n-tiers (DAL/BLL/UI)", "Authentification sécurisée (PBKDF2)", "Reporting & Export"],
        competencies: [
            { name: "Gérer le patrimoine informatique", description: "Inventaire et suivi du cycle de vie des équipements" },
            { name: "Répondre aux incidents et aux demandes d'assistance et d'évolution", description: "Suivi des maintenances et pannes" }
        ],
        proofs: [],
        github: "https://github.com/Othniel1704/hardware-manager"
    }
];
