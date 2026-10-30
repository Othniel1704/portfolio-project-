import { Download, Compass, GraduationCap, Target, Heart } from 'lucide-react';
import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

import PageHeader from '../components/PageHeader';
import Education from '../components/Education';
import Certifications from '../components/Certifications';
import { skillStyles } from '../components/Skills';
import { skillGroups } from '../data/profile';

const blocks: { title: string; icon: ReactNode; color: string; body: ReactNode }[] = [
  {
    title: 'Mon approche',
    icon: <Compass className="w-5 h-5" aria-hidden="true" />,
    color: 'text-cyan-300',
    body: (
      <>
        Je transforme des données brutes en informations exploitables : explorer un jeu de données avec Python et SQL,
        construire un modèle (scoring de risque de crédit sur 150 000 emprunteurs, AUC 0,854), modéliser une base
        relationnelle (StageMatch, PostgreSQL) ou automatiser un traitement avec des APIs IA (workflow n8n).
      </>
    ),
  },
  {
    title: 'Mon parcours',
    icon: <GraduationCap className="w-5 h-5" aria-hidden="true" />,
    color: 'text-violet-300',
    body: (
      <>
        J'ai découvert la programmation en licence Math-Info, puis je me suis professionnalisé avec un BTS SIO (option
        SLAM) et deux stages de développement web. Je suis aujourd'hui en Bachelor Data &amp; Intelligence Artificielle
        (3ᵉ année) à PST&amp;B.
      </>
    ),
  },
  {
    title: 'Ce que je recherche',
    icon: <Target className="w-5 h-5" aria-hidden="true" />,
    color: 'text-rose-300',
    body: (
      <>
        Une alternance Data / BI / IA en Île-de-France, avec un démarrage immédiat possible (3 jours en entreprise / 2
        jours à l'école) : data analyst, analyste BI ou reporting, analyste CRM, automatisation IA.
      </>
    ),
  },
  {
    title: 'Mes valeurs',
    icon: <Heart className="w-5 h-5" aria-hidden="true" />,
    color: 'text-amber-300',
    body: <>Curieux et autonome, j'aime le travail propre et vérifiable, et j'avance mieux en équipe.</>,
  },
];

const About = () => (
  <div className="min-h-dvh bg-ink-950 pb-24">
    <PageHeader tone="cyan" title="Konan Othniel Kouakou" subtitle="Étudiant en Data & IA, développeur de formation, en recherche d'alternance.">
      <div className="mt-8 flex flex-col sm:flex-row gap-3">
        <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" className="btn-primary">
          <Download className="h-5 w-5" aria-hidden="true" />
          Télécharger mon CV
        </a>
      </div>
    </PageHeader>

    <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-6">
        <motion.ul
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
        >
          {blocks.map((b) => (
            <motion.li
              key={b.title}
              variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } }}
              className="surface p-6"
            >
              <h2 className={`flex items-center gap-2 text-lg font-bold mb-3 ${b.color}`}>
                <span className="p-1.5 rounded-lg bg-white/5">{b.icon}</span>
                {b.title}
              </h2>
              <p className="text-slate-300 leading-relaxed">{b.body}</p>
            </motion.li>
          ))}
        </motion.ul>

        <div className="surface p-6 sm:p-8">
          <h2 className="text-2xl font-extrabold tracking-tight text-white mb-6">Compétences</h2>
          <div className="space-y-6">
            {skillGroups.map((group) => {
              const st = skillStyles[group.category];
              return (
                <div key={group.category}>
                  <h3 className={`flex items-center gap-2 text-base font-bold mb-3 ${st.text}`}>
                    {st.icon}
                    {group.category}
                  </h3>
                  <ul className="flex flex-wrap gap-2">
                    {group.items.map((skill) => (
                      <li key={skill} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-ink-950/60 border border-white/10 text-sm text-slate-200">
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
      </div>

      <Education />
      <Certifications />
    </div>
  </div>
);

export default About;
