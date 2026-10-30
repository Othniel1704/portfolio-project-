import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import type { MouseEvent } from 'react';
import { motion } from 'framer-motion';
import { projectsData } from '../data/projectsData';

// Projets mis en avant sur l'accueil, chacun avec sa couleur.
const FEATURED = [
  { id: 'credit-scoring', kind: 'Machine learning', accent: '167 139 250', text: 'text-violet-300' },
  { id: 'stagematch', kind: 'Base de données et matching', accent: '34 211 238', text: 'text-cyan-300' },
  { id: 'ai-document-generator', kind: 'Automatisation IA', accent: '52 211 153', text: 'text-emerald-300' },
];

// Halo lumineux qui suit le curseur sur la carte survolée.
const trackSpotlight = (e: MouseEvent<HTMLElement>) => {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`);
  e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`);
};

const FeaturedProjects = () => {
  const featured = FEATURED.map((f) => ({ ...f, project: projectsData.find((p) => p.id === f.id) })).filter(
    (f) => f.project
  );

  return (
    <section aria-labelledby="featured-title" className="relative py-20 sm:py-24 bg-ink-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <h2 id="featured-title" className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-3">
              Projets Data &amp; IA
            </h2>
            <p className="text-slate-400 max-w-2xl text-lg">
              Modéliser, structurer, automatiser : trois projets qui montrent ma façon de travailler la donnée.
            </p>
          </div>
          <Link
            to="/projects"
            className="inline-flex items-center gap-1 min-h-[44px] text-slate-200 hover:text-white font-semibold whitespace-nowrap underline-offset-4 hover:underline"
          >
            Tous les projets
            <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>

        <motion.ul
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {featured.map(({ project, kind, accent, text }) => (
            <motion.li
              key={project!.id}
              variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 90, damping: 16 } } }}
            >
              <Link
                to={`/projects/${project!.id}`}
                onMouseMove={trackSpotlight}
                style={{ ['--accent' as string]: accent }}
                className="group relative flex flex-col h-full rounded-3xl overflow-hidden bg-ink-900 border border-white/10 hover:border-[rgb(var(--accent)/0.6)] transition-colors"
              >
                <span
                  className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: 'radial-gradient(380px circle at var(--mx) var(--my), rgb(var(--accent) / 0.16), transparent 60%)' }}
                  aria-hidden="true"
                />
                <span className="h-1 w-full" style={{ background: 'rgb(var(--accent))' }} aria-hidden="true" />
                <div className="aspect-[16/9] bg-ink-800 overflow-hidden">
                  <img
                    src={project!.image}
                    alt=""
                    loading="lazy"
                    width={640}
                    height={360}
                    className="w-full h-full object-cover motion-safe:transition-transform motion-safe:duration-700 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="relative flex flex-col flex-1 p-6">
                  <p className={`text-sm font-semibold mb-2 ${text}`}>{kind}</p>
                  <h3 className="text-xl font-bold text-white mb-2 leading-snug">{project!.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed mb-5">{project!.shortDescription}</p>
                  <ul className="mt-auto flex flex-wrap gap-1.5" aria-label="Technologies">
                    {project!.technologies.slice(0, 4).map((t) => (
                      <li key={t} className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-slate-300">
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};

export default FeaturedProjects;
