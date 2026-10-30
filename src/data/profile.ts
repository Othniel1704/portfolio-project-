// Données de profil partagées (accueil, à propos, méta).
// Mettre à jour ici quand la situation change : tout le site suit.

export const profile = {
  name: 'Konan Othniel Kouakou',
  email: 'kkonanothniel@gmail.com',
  github: 'https://github.com/Othniel1704',
  linkedin: 'https://www.linkedin.com/in/othniel-kouakou',
  location: 'Bezons (95), Île-de-France',
  availabilityShort: 'Disponible dès maintenant',
  availabilityLong:
    "Alternance Data / BI / IA en Île-de-France, démarrage immédiat possible, rythme 3 jours en entreprise / 2 jours à l'école.",
  school: 'Bachelor Data & IA (PST&B)',
  rncp: 'RNCP36146',
};

export type SkillGroup = { category: string; items: string[] };

export const skillGroups: SkillGroup[] = [
  {
    category: 'Data & BI',
    items: [
      'SQL avancé',
      'PostgreSQL / Supabase',
      'SQL Server / MySQL',
      'Python (pandas)',
      'scikit-learn',
      'Analyse & KPI',
      'Power BI (notions)',
      'Excel',
    ],
  },
  {
    category: 'IA & Automatisation',
    items: [
      'APIs IA (OpenAI, Gemini)',
      'Prompt engineering',
      'Workflows n8n',
      'Agents IA (Claude, Claude Code)',
    ],
  },
  {
    category: 'Développement',
    items: ['React', 'TypeScript', 'JavaScript', 'FastAPI', 'Node.js', 'PHP', 'C# / .NET', 'HTML / CSS'],
  },
  {
    category: 'Outils & Infra',
    items: ['Git / GitHub', 'Firebase', 'Linux (Debian)', 'Proxmox / VM', 'Netlify'],
  },
];
