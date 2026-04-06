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
        image: "https://images.unsplash.com/photo-1558494949-ef526b0042a0?w=800&h=600&fit=crop",
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
        image: "https://images.unsplash.com/photo-1558494949-ef526b0042a0?w=800&h=600&fit=crop",
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
        github: "https://github.com/Othniel1704/quiz-app",
        showInE5: true,
        e5Order: 3
    },
    {
        id: "trac",
        title: "Gestion des demandes et incidents avec l'outil TRAC (TP BlueTeam)",
        shortDescription: "Utilisation et personnalisation d'un système de gestion de tickets d'incidents.",
        fullDescription: "Mise en situation de support informatique de niveau 1 et 2 (BlueTeam). Utilisation de TRAC pour créer, assigner, suivre et résoudre des tickets d'incidents, tout en respectant les SLAs du service.",
        context: "Atelier professionnel (2024-2025)",
        role: "Technicien Support & Maintenance",
        duration: "2 semaines",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
        technologies: ["TRAC", "ITSM", "Ticketing"],
        category: 'Projet Académique (PPE)',
        tags: ["Maintenance", "Support"],
        highlights: ["Gestion du cycle de vie des incidents", "Communication utilisateur"],
        competencies: [
            { id: "B1.2", description: "Collecte, suivi et résolution des demandes d'assistance." },
            { id: "B1.4", description: "Analyse des objectifs de résolution et indicateurs de suivi (SLA)." },
            { id: "B2.2", description: "Correction d'anomalies logiciels." }
        ],
        proofs: [
            { title: "Capture Ticket Avant Correction", type: "image", url: "/images/proofs/trac_bug_before.png" },
            { title: "Capture Ticket Après Correction", type: "image", url: "/images/proofs/trac_bug_after.png" },
            { title: "Rapport de maintenance", type: "pdf", url: "/documents/rapport_maintenance_trac.pdf" }
        ],
        github: "https://github.com/Othniel1704/trac-maintenance",
        showInE5: true,
        e5Order: 4
    },
    {
        id: "portfolio",
        title: "Portfolio Professionnel et Veille Technologique",
        shortDescription: "Plateforme web personnelle incluant CV, projets et agrégation de veille.",
        fullDescription: "Conception et développement d'un portfolio servant d'identité numérique et de plateforme de veille technologique. Reflète mes compétences professionnelles et ma démarche continue d'apprentissage (2024-2026).",
        context: "Examen E4 et E5 (2024-2026)",
        role: "Développeur Full Stack",
        duration: "Continu",
        image: "images/portfolio.png",
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
        duration: "4 mois",
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
        image: "images/chat.png",
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
        duration: "4 semaines",
        image: "images/lebonbazaar.png",
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
        image: "https://images.unsplash.com/photo-1558494949-ef526b0042a0?w=800&h=600&fit=crop",
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
        fullDescription: "Recueil du besoin client auprès de l'auto-école, rédaction du cahier des charges, maquettage Figma et développement d'un site sur-mesure. Le site a été hébergé et est utilisé quotidiennement pour attirer des prospects.",
        context: "Stage en milieu professionnel (juin-juillet 2025)",
        role: "Développeur Full Stack",
        duration: "5 semaines",
        image: "images/nbautoecoledelamairie_homepage_1766077079814.png",
        technologies: ["React", "HTML/CSS", "Hébergement web"],
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
            { title: "Cahier des charges", type: "pdf", url: "/documents/cahier_des_charges_autoecole.pdf" },
            { title: "Site en ligne", type: "link", url: "https://nbautoecoledelamairie.fr" }
        ],
        github: "https://github.com/Othniel1704/nb-auto-ecole",
        demo: "https://nbautoecoledelamairie.fr",
        showInE5: true,
        e5Order: 11
    },
    {
        id: "stage-2-prototype",
        title: "Stage 2ème année : Analyse et prototypage d'une application Web (Projet interrompu)",
        shortDescription: "Travaux d'avant-vente et d'architecture pour une plateforme web complexe.",
        fullDescription: "Participation à la phase d'étude d'un nouveau produit numérique. Création de spécifications techniques, de maquettes d'interface utilisateur et de POCs (Proof Of Concept) avant interruption décisionnelle du projet.",
        context: "Stage en milieu professionnel (décembre 2025-janvier 2026)",
        role: "Assistant Chef de Projet / Développeur",
        duration: "6 semaines",
        image: "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=800&h=600&fit=crop",
        technologies: ["Figma", "UML", "Prototypage Rapide"],
        category: 'Stage',
        tags: ["Stage", "Management", "Design"],
        highlights: ["Rédaction de spécifications", "Modélisation UML"],
        competencies: [
            { id: "B1.4", description: "Planification d'un projet, analyse de faisabilité et arrêt prématuré (gestion des risques)." },
            { id: "B1.6", description: "Adaptation professionnelle face à un aléa (projet interrompu) et prise de recul." }
        ],
        proofs: [
            { title: "Maquettes & Spécifications (Interne)", type: "pdf", url: "#" }
        ],
        showInE5: true,
        e5Order: 12
    },

    // --- NON-E5 PROJECTS (Kept for normal projects route, hidden from E5 table) ---

    {
        id: "chess-game",
        title: "Jeu d'Expert - Échecs",
        shortDescription: "Jeu d'échecs complet développé en Java avec interface graphique.",
        fullDescription: "Implémentation d'un jeu d'échecs complet respectant les règles FIDE. Interface graphique développée en JavaFX.",
        context: "Projet personnel d'approfondissement Java.",
        role: "Développeur",
        duration: "2 mois",
        image: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&q=80&w=1000",
        technologies: ["Java", "JavaFX", "POO"],
        category: 'Projet Personnel',
        tags: ["Desktop", "Jeu", "Algorithme"],
        highlights: ["Intelligence Artificielle (Minimax)", "Sauvegarde de partie"],
        competencies: [
            { id: "B2.1", description: "Programmation Orientée Objet avancée" }
        ],
        proofs: [],
        github: "https://github.com/Othniel1704/chess-game",
        showInE5: false
    },
    {
        id: "winforms-auth",
        title: "Application WinForms - Authentification",
        shortDescription: "Système complet d'inscription et authentification sécurisé en C#.",
        fullDescription: "Application de gestion utilisateurs développée en C# WinForms. Intègre validation client et connexion sécurisée.",
        context: "Projet scolaire - Développement d'application lourde.",
        role: "Développeur .NET",
        duration: "2 semaines",
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1000",
        technologies: ["C#", "WinForms", ".NET", "SQL Server"],
        category: 'Projet Académique (PPE)',
        tags: ["Desktop", "Security", "C#"],
        highlights: ["Validation Regex", "Hachage SHA-256"],
        competencies: [
            { id: "B2.1", description: "Application riche avec gestion d'événements" }
        ],
        proofs: [],
        github: "https://github.com/Othniel1704/winforms-auth",
        showInE5: false
    }
];