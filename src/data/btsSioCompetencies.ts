export interface BtsSioCompetency {
    id: string;
    name: string;
    bloc: 'Bloc 1' | 'Bloc 2' | 'Bloc 3';
}

export const btsSioCompetencies: BtsSioCompetency[] = [
    // Bloc 1 - Support et mise à disposition de services informatiques
    { id: 'B1.1', name: 'Gérer le patrimoine informatique', bloc: 'Bloc 1' },
    { id: 'B1.2', name: "Répondre aux incidents et aux demandes d'assistance et d'évolution", bloc: 'Bloc 1' },
    { id: 'B1.3', name: "Développer la présence en ligne de l'organisation", bloc: 'Bloc 1' },
    { id: 'B1.4', name: 'Travailler en mode projet', bloc: 'Bloc 1' },
    { id: 'B1.5', name: 'Mettre à disposition des utilisateurs un service informatique', bloc: 'Bloc 1' },
    { id: 'B1.6', name: 'Organiser son développement professionnel', bloc: 'Bloc 1' },

    // Bloc 2 - Conception et développement d'applications (SLAM)
    { id: 'B2.1', name: 'Concevoir et développer une solution applicative', bloc: 'Bloc 2' },
    { id: 'B2.2', name: "Assurer la maintenance d'une solution applicative", bloc: 'Bloc 2' },
    { id: 'B2.3', name: 'Gérer les données', bloc: 'Bloc 2' },

    // Bloc 3 - Cybersécurité des services informatiques
    { id: 'B3.1', name: 'Protéger les données à caractère personnel', bloc: 'Bloc 3' },
    { id: 'B3.2', name: "Préserver l'identité numérique de l'organisation", bloc: 'Bloc 3' },
    { id: 'B3.3', name: 'Sécuriser les équipements et les usages des utilisateurs', bloc: 'Bloc 3' },
    { id: 'B3.4', name: "Garantir la disponibilité, l'intégrité et la confidentialité des services informatiques et des données de l'organisation face à des cyberattaques", bloc: 'Bloc 3' }
];

export const getCompetencyById = (id: string) => btsSioCompetencies.find(c => c.id === id);
