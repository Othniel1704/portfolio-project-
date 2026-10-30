import { Download } from 'lucide-react';

import Education from '../components/Education';
import Certifications from '../components/Certifications';
import { skillGroups } from '../data/profile';

const About = () => {
  return (
    <div className="min-h-dvh py-20 px-4 bg-ink-950">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-center mb-16">
          <span className="block text-2xl sm:text-3xl font-bold text-white mb-3">À propos de</span>
          <span className="block text-4xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 text-balance">Konan Othniel Kouakou</span>
        </h1>
        <div className="grid grid-cols-1 gap-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-cyan-500/50 transition-colors">
              <div className="text-lg text-gray-300 mb-8 leading-relaxed space-y-6">
                <div>
                  <h2 className="text-xl text-cyan-400 font-semibold mb-2">Mon approche</h2>
                  <p>Je transforme des données brutes en informations exploitables. Concrètement : nettoyer et explorer un jeu de données avec Python et SQL, construire un modèle (scoring de risque de crédit sur 150 000 emprunteurs, AUC 0,854), modéliser une base relationnelle (StageMatch, PostgreSQL) ou automatiser un traitement avec des APIs IA (workflow n8n).
                  </p>
                </div>
                <div>
                  <h2 className="text-xl text-cyan-400 font-semibold mb-2">Mon parcours</h2>
                  <p>
                    J'ai découvert la programmation en licence Math-Info, où j'ai conçu des algorithmes d'optimisation en Python et structuré des logiques complexes.
                    Après un BTS SIO (option SLAM), je poursuis aujourd'hui un <span className="text-cyan-400 font-semibold">Bachelor Data &amp; Intelligence Artificielle (3ᵉ année) à PST&amp;B</span>, en mettant ces compétences au service de projets data et applicatifs concrets.
                  </p>
                </div>
                <div>
                  <h2 className="text-xl text-cyan-400 font-semibold mb-2">Ce que je recherche</h2>
                  <p>
                    Une <span className="text-cyan-400 font-semibold">alternance Data / BI / IA en Île-de-France, avec un démarrage immédiat possible</span> (rythme 3 jours en entreprise / 2 jours à l'école). Data analyst, analyste BI ou reporting, analyste CRM, automatisation IA : je veux contribuer à des projets concrets en apportant l'autonomie et la rigueur acquises pendant mes deux stages de développement.
                  </p>
                </div>
                <div>
                  <h2 className="text-xl text-cyan-400 font-semibold mb-2">Mes valeurs</h2>
                  <p>
                    Je suis curieux, autonome, j'aime le code propre et maintenable, et je crois fortement à l'esprit d'équipe pour construire des projets ambitieux.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <a
                  href="/cv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-cyan-500 text-slate-950 rounded-full text-lg font-bold hover:bg-cyan-400 transition transform hover:scale-105 shadow-lg shadow-cyan-500/30"
                >
                  Télécharger mon CV
                  <Download className="ml-2 h-5 w-5" />
                </a>
              </div>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-cyan-500/50 transition-colors">
              <h2 className="text-2xl font-semibold text-white mb-8">Mes compétences</h2>
              <div className="space-y-8">
                {skillGroups.map((group) => (
                  <div key={group.category}>
                    <h3 className="text-lg text-cyan-400 font-semibold mb-3">{group.category}</h3>
                    <ul className="flex flex-wrap gap-2">
                      {group.items.map((skill) => (
                        <li key={skill} className="px-3 py-1.5 bg-slate-700/30 rounded-lg border border-slate-700/50 text-sm text-slate-200">
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <Certifications />
          <Education />
        </div>
      </div>
    </div>
  );
};

export default About;
