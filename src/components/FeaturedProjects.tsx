import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { projectsData } from '../data/projectsData';

// Projets mis en avant sur l'accueil (ordre d'affichage).
const FEATURED_IDS = ['credit-scoring', 'stagematch', 'ai-document-generator'];

const FeaturedProjects = () => {
  const featured = FEATURED_IDS.map((id) => projectsData.find((p) => p.id === id)).filter(
    (p): p is (typeof projectsData)[number] => Boolean(p)
  );

  return (
    <section aria-labelledby="featured-title" className="py-20 sm:py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <h2 id="featured-title" className="text-3xl sm:text-4xl font-bold text-white mb-3">
              Projets Data &amp; IA
            </h2>
            <p className="text-slate-400 max-w-2xl">
              Trois projets qui montrent comment je travaille la donnée : modélisation, base relationnelle,
              automatisation.
            </p>
          </div>
          <Link
            to="/projects"
            className="inline-flex items-center gap-1 min-h-[44px] text-cyan-400 hover:text-cyan-300 font-semibold whitespace-nowrap"
          >
            Tous les projets
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((project) => (
            <li key={project.id}>
              <Link
                to={`/projects/${project.id}`}
                className="group flex flex-col h-full rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 hover:border-cyan-500/50 transition-colors"
              >
                <div className="aspect-[16/9] bg-slate-800 overflow-hidden">
                  <img
                    src={project.image}
                    alt=""
                    loading="lazy"
                    width={640}
                    height={360}
                    className="w-full h-full object-cover motion-safe:transition-transform motion-safe:duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col flex-1 p-6">
                  <p className="text-xs font-semibold uppercase tracking-wide text-cyan-400 mb-2">
                    {project.tags.slice(0, 2).join(' · ')}
                  </p>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed mb-4">{project.shortDescription}</p>
                  <ul className="mt-auto flex flex-wrap gap-1.5" aria-label="Technologies">
                    {project.technologies.slice(0, 4).map((t) => (
                      <li key={t} className="px-2 py-1 rounded-md bg-slate-800 text-xs text-slate-300">
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FeaturedProjects;
