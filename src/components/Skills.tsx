import { BarChart3, Bot, Code2, Wrench } from 'lucide-react';
import type { ReactNode } from 'react';
import { skillGroups } from '../data/profile';

// Une couleur par famille de compétences, reprise dans tout le bloc.
const styles: Record<string, { icon: ReactNode; text: string; dot: string; ring: string; glow: string }> = {
  'Data & BI': {
    icon: <BarChart3 className="w-5 h-5" aria-hidden="true" />,
    text: 'text-cyan-300',
    dot: 'bg-cyan-300',
    ring: 'hover:border-cyan-400/50',
    glow: 'from-cyan-400/15',
  },
  'IA & Automatisation': {
    icon: <Bot className="w-5 h-5" aria-hidden="true" />,
    text: 'text-violet-300',
    dot: 'bg-violet-300',
    ring: 'hover:border-violet-400/50',
    glow: 'from-violet-400/15',
  },
  Développement: {
    icon: <Code2 className="w-5 h-5" aria-hidden="true" />,
    text: 'text-rose-300',
    dot: 'bg-rose-300',
    ring: 'hover:border-rose-400/50',
    glow: 'from-rose-400/15',
  },
  'Outils & Infra': {
    icon: <Wrench className="w-5 h-5" aria-hidden="true" />,
    text: 'text-amber-300',
    dot: 'bg-amber-300',
    ring: 'hover:border-amber-400/50',
    glow: 'from-amber-400/15',
  },
};

const Skills = () => (
  <section aria-labelledby="skills-title" className="py-20 sm:py-24 bg-ink-900">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 id="skills-title" className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-3">
        Compétences
      </h2>
      <p className="text-slate-400 mb-10 max-w-2xl text-lg">
        La donnée d'abord, de la requête SQL au modèle, sur un socle de développement solide.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {skillGroups.map((group) => {
          const st = styles[group.category];
          return (
            <div
              key={group.category}
              className={`relative overflow-hidden rounded-3xl bg-ink-800/70 border border-white/10 p-6 transition-colors ${st.ring}`}
            >
              <div className={`absolute -top-16 -right-16 w-48 h-48 rounded-full bg-gradient-to-br ${st.glow} to-transparent blur-2xl`} aria-hidden="true" />
              <h3 className={`relative flex items-center gap-3 text-xl font-bold mb-5 ${st.text}`}>
                <span className="p-2 rounded-xl bg-white/5">{st.icon}</span>
                {group.category}
              </h3>
              <ul className="relative flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <li
                    key={skill}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-ink-950/60 border border-white/10 text-sm text-slate-200"
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${st.dot}`} aria-hidden="true" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default Skills;
