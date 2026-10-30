import { Briefcase, GraduationCap } from 'lucide-react';

const experiences = [
  {
    type: 'education',
    date: '2026 - 2027',
    title: 'Bachelor Data & Intelligence Artificielle (3ᵉ année)',
    institution: 'Paris School of Technology & Business (PST&B), Paris',
    description: 'Data / BI, Big Data (Hadoop, Spark), bases de données relationnelles, analyse de données et KPI, Machine Learning et IA appliquée. En recherche d\'alternance (3 jours entreprise / 2 jours école).',
  },
  {
    type: 'work',
    date: 'Déc. 2025 - Janv. 2026',
    title: 'Stage Développeur Web',
    institution: 'Mazarin Conduite & Formation (MC&F), Chilly-Mazarin',
    description: 'Conception et mise en production du site de l\'auto-école en Next.js et Tailwind CSS, en lien direct avec le gérant.',
  },
  {
    type: 'work',
    date: 'Mai - Juin 2025',
    title: 'Stage Développeur Web',
    institution: 'NB Auto-École de la Mairie, Vigneux-sur-Seine',
    description: 'Seul développeur : site React.js + Firebase, du cahier des charges à la mise en ligne.',
  },
  {
    type: 'education',
    date: '2024 - 2026',
    title: 'BTS Services Informatiques aux Organisations (option SLAM)',
    institution: 'Institut F2I, Vincennes',
    description: 'Développement d\'applications logicielles et web, bases de données, cybersécurité et administration réseau. Réalisation de projets complets en respectant les bonnes pratiques.',
  },
  {
    type: 'education',
    date: '2020 - 2023',
    title: 'Licence 2 Mathématiques Informatiques',
    institution: 'Université Gustave Eiffel, Champs-sur-Marne',
    description: 'Algorithmique, programmation (Python, C), mathématiques appliquées et bases théoriques de l\'informatique.',
  },
  {
    type: 'education',
    date: '2019 - 2020',
    title: 'Baccalauréat',
    institution: 'Lycée scientifique, Yamoussoukro, Côte d\'Ivoire',
    description: '',
  },
];

const kinds = {
  education: { icon: GraduationCap, dot: 'bg-violet-400', text: 'text-violet-300', label: 'Formation' },
  work: { icon: Briefcase, dot: 'bg-amber-300', text: 'text-amber-300', label: 'Expérience' },
} as const;

const Education = () => (
  <section aria-labelledby="parcours-title" className="surface p-6 sm:p-10">
    <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-10">
      <h2 id="parcours-title" className="text-3xl font-extrabold tracking-tight text-white">
        Parcours et expériences
      </h2>
      <ul className="flex gap-4 text-sm text-slate-400">
        {Object.values(kinds).map((k) => (
          <li key={k.label} className="inline-flex items-center gap-2">
            <span className={`w-2.5 h-2.5 rounded-full ${k.dot}`} aria-hidden="true" />
            {k.label}
          </li>
        ))}
      </ul>
    </div>
    <ol className="relative border-l-2 border-white/10 ml-3 space-y-10">
      {experiences.map((exp) => {
        const k = kinds[exp.type as keyof typeof kinds] ?? kinds.education;
        const Icon = k.icon;
        return (
          <li key={exp.title + exp.date} className="relative pl-8">
            <span
              className={`absolute -left-[13px] top-0.5 flex items-center justify-center w-6 h-6 rounded-full ring-4 ring-ink-900 ${k.dot}`}
              aria-hidden="true"
            >
              <Icon className="w-3.5 h-3.5 text-ink-950" />
            </span>
            <p className={`text-sm font-semibold tabular-nums ${k.text}`}>
              <span className="sr-only">{k.label}, </span>
              {exp.date}
            </p>
            <h3 className="mt-1 text-lg font-bold text-white">{exp.title}</h3>
            <p className="text-sm text-slate-400 mb-2">{exp.institution}</p>
            {exp.description && <p className="text-slate-300 leading-relaxed max-w-3xl">{exp.description}</p>}
          </li>
        );
      })}
    </ol>
  </section>
);

export default Education;
