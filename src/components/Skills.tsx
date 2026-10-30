import { BarChart3, Bot, Code2, Wrench } from 'lucide-react';
import type { ReactNode } from 'react';
import { skillGroups } from '../data/profile';

const icons: Record<string, ReactNode> = {
  'Data & BI': <BarChart3 className="w-5 h-5" aria-hidden="true" />,
  'IA & Automatisation': <Bot className="w-5 h-5" aria-hidden="true" />,
  Développement: <Code2 className="w-5 h-5" aria-hidden="true" />,
  'Outils & Infra': <Wrench className="w-5 h-5" aria-hidden="true" />,
};

const Skills = () => (
  <section aria-labelledby="skills-title" className="py-20 sm:py-24 bg-slate-900">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 id="skills-title" className="text-3xl sm:text-4xl font-bold text-white mb-3">
        Compétences
      </h2>
      <p className="text-slate-400 mb-10 max-w-2xl">
        Le cœur de mon profil : la donnée, de la requête SQL au modèle, avec un socle de développement solide.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillGroups.map((group) => (
          <div key={group.category} className="rounded-2xl bg-slate-800/50 border border-slate-700/60 p-6">
            <h3 className="flex items-center gap-3 text-lg font-semibold text-white mb-4">
              <span className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">{icons[group.category]}</span>
              {group.category}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <li
                  key={skill}
                  className="px-3 py-1.5 rounded-lg bg-slate-900/70 border border-slate-700 text-sm text-slate-200"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
