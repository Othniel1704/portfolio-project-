import { useState } from 'react';
import { Github, ArrowUpRight, Calendar, Check, Layers, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { projectsData } from '../data/projectsData';
import { categoryAccent, trackSpotlight } from '../lib/spotlight';

type Project = (typeof projectsData)[number];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 90, damping: 16 } },
};

const ProjectCard = ({ project }: { project: Project }) => {
  const accent = categoryAccent[project.category] ?? categoryAccent.Autre;
  return (
    <motion.li variants={cardVariants} className="h-full">
      <article
        onMouseMove={trackSpotlight}
        style={{ ['--accent' as string]: accent.rgb }}
        className="group relative flex flex-col h-full rounded-3xl overflow-hidden bg-ink-900 border border-white/10 hover:border-[rgb(var(--accent)/0.55)] transition-colors"
      >
        <span className="spotlight" aria-hidden="true" />
        <span className="h-1 w-full" style={{ background: 'rgb(var(--accent))' }} aria-hidden="true" />
        <Link to={`/projects/${project.id}`} className="block relative aspect-[16/9] overflow-hidden bg-ink-800" tabIndex={-1} aria-hidden="true">
          <img
            src={project.image}
            alt=""
            loading="lazy"
            width={640}
            height={360}
            className="w-full h-full object-cover motion-safe:transition-transform motion-safe:duration-700 group-hover:scale-[1.04]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-transparent to-transparent" />
          <div className="absolute top-3 right-3 flex flex-col items-end gap-2">
            {project.duration && (
              <span className="px-2.5 py-1 bg-ink-950/80 backdrop-blur border border-white/15 rounded-full text-xs text-slate-200 font-semibold inline-flex items-center">
                <Calendar className="w-3 h-3 mr-1" aria-hidden="true" />
                {project.duration}
              </span>
            )}
            {project.projectSize && (
              <span className="px-2.5 py-1 bg-ink-950/80 backdrop-blur border border-white/15 rounded-full text-xs text-slate-200 font-semibold inline-flex items-center">
                {project.projectSize === 'Lourd' ? (
                  <><Layers className="w-3 h-3 mr-1" aria-hidden="true" />Projet lourd</>
                ) : (
                  <><Zap className="w-3 h-3 mr-1" aria-hidden="true" />Projet léger</>
                )}
              </span>
            )}
          </div>
        </Link>

        <div className="relative p-6 flex flex-col flex-grow">
          <h3 className="text-lg font-bold text-white mb-2 leading-snug">
            <Link to={`/projects/${project.id}`} className="after:absolute after:inset-0 after:content-[''] focus:outline-none">
              {project.title}
            </Link>
          </h3>
          <p className="text-slate-400 mb-4 text-sm leading-relaxed line-clamp-3">{project.shortDescription}</p>

          {project.highlights?.length > 0 && (
            <ul className="mb-5 space-y-1.5">
              {project.highlights.slice(0, 3).map((h) => (
                <li key={h} className="text-xs text-slate-300 flex items-start">
                  <Check className={`w-3.5 h-3.5 mr-2 mt-0.5 shrink-0 ${accent.text}`} aria-hidden="true" />
                  {h}
                </li>
              ))}
            </ul>
          )}

          <ul className="flex flex-wrap gap-1.5 mb-5" aria-label="Thèmes">
            {project.tags.slice(0, 4).map((tag) => (
              <li key={tag} className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-slate-300">
                {tag}
              </li>
            ))}
          </ul>

          <div className="mt-auto flex justify-between items-center">
            <span className={`inline-flex items-center gap-1 text-sm font-semibold ${accent.text}`}>
              Voir le détail
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
            </span>
            {project.github && (
              <a
                href={project.github}
                className="relative z-10 p-2 -m-2 text-slate-400 hover:text-white transition-colors"
                aria-label={`Code source de ${project.title} sur GitHub (nouvel onglet)`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5" aria-hidden="true" />
              </a>
            )}
          </div>
        </div>
      </article>
    </motion.li>
  );
};

// Projets Data / IA en tête de liste
const PRIORITY = ['credit-scoring', 'stagematch', 'ai-document-generator'];
const rank = (id: string) => (PRIORITY.includes(id) ? PRIORITY.indexOf(id) : PRIORITY.length);
const sorted = [...projectsData].sort((a, b) => rank(a.id) - rank(b.id));

const categories = ['Tous', 'Projet Personnel', 'Stage', 'Projet Académique (PPE)'] as const;

const Grid = ({ items }: { items: Project[] }) => (
  <motion.ul
    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: '-60px' }}
    variants={{ visible: { transition: { staggerChildren: 0.07 } } }}
  >
    {items.map((p) => (
      <ProjectCard key={p.id} project={p} />
    ))}
  </motion.ul>
);

const Projects = () => {
  const [active, setActive] = useState<(typeof categories)[number]>('Tous');

  const count = (c: string) => (c === 'Tous' ? projectsData.length : projectsData.filter((p) => p.category === c).length);
  const filtered = sorted.filter((p) => active === 'Tous' || p.category === active);

  return (
    <section aria-label="Liste des projets" className="relative pb-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-2 mb-12" role="group" aria-label="Filtrer par catégorie">
          {categories.map((c) => {
            const on = active === c;
            const label = c === 'Tous' ? 'Tous' : categoryAccent[c].label;
            return (
              <button
                key={c}
                type="button"
                aria-pressed={on}
                onClick={() => setActive(c)}
                className={`min-h-[44px] px-4 rounded-full text-sm font-semibold transition-colors inline-flex items-center gap-2 ${
                  on ? 'bg-gradient-to-r from-cyan-300 via-violet-300 to-rose-300 text-ink-950' : 'bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:border-white/25'
                }`}
              >
                {c !== 'Tous' && (
                  <span className="w-2 h-2 rounded-full" style={{ background: `rgb(${categoryAccent[c].rgb})` }} aria-hidden="true" />
                )}
                {label}
                <span className={`tabular-nums text-xs ${on ? 'text-ink-950/70' : 'text-slate-500'}`}>{count(c)}</span>
              </button>
            );
          })}
        </div>

        {active === 'Tous' ? (
          <div className="space-y-16">
            {categories
              .filter((c) => c !== 'Tous')
              .map((c) => {
                const items = sorted.filter((p) => p.category === c);
                if (!items.length) return null;
                const accent = categoryAccent[c];
                return (
                  <div key={c}>
                    <h2 className="flex items-center gap-3 text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-6">
                      <span className="w-3 h-3 rounded-full" style={{ background: `rgb(${accent.rgb})` }} aria-hidden="true" />
                      {accent.label}
                    </h2>
                    <Grid items={items} />
                  </div>
                );
              })}
          </div>
        ) : (
          <Grid key={active} items={filtered} />
        )}

        {filtered.length === 0 && <p className="text-center text-slate-400 mt-12">Aucun projet dans cette catégorie pour le moment.</p>}
      </div>
    </section>
  );
};

export default Projects;
