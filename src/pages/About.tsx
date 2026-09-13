import React from 'react';
import { Download, Atom, FileCode, FileCode2, FileJson2, Server, Database, GitBranch, FileText, Brain, BarChart3, Workflow, Bot, Cloud, Terminal } from 'lucide-react';


import Education from '../components/Education';
import Certifications from '../components/Certifications';

const skills = {
  Frontend: [
    { name: 'React', icon: <Atom size={18} /> },
    { name: 'JavaScript', icon: <FileCode2 size={18} /> },
    { name: 'TypeScript', icon: <FileCode size={18} /> },
    { name: 'HTML/CSS', icon: <FileJson2 size={18} /> },
  ],
  Backend: [
    { name: 'Node.js', icon: <Server size={18} /> },
    { name: 'Python', icon: <FileCode size={18} /> },
    { name: 'PHP', icon: <FileCode size={18} /> },
    { name: 'MySQL/SQL', icon: <Database size={18} /> },
  ],
  "Data & IA": [
    { name: 'pandas / NumPy', icon: <BarChart3 size={18} /> },
    { name: 'scikit-learn', icon: <Brain size={18} /> },
    { name: 'SQL avancé', icon: <Database size={18} /> },
    { name: 'Power BI (notions)', icon: <BarChart3 size={18} /> },
    { name: 'APIs IA (OpenAI, Gemini)', icon: <Bot size={18} /> },
    { name: 'Automatisation n8n', icon: <Workflow size={18} /> },
  ],
  "Outils & DevOps": [
    { name: 'Git / GitHub', icon: <GitBranch size={18} /> },
    { name: 'Firebase', icon: <Cloud size={18} /> },
    { name: 'PostgreSQL / Supabase', icon: <Database size={18} /> },
    { name: 'Linux / Proxmox', icon: <Terminal size={18} /> },
  ],
};

const About = () => {
  return (
    <div className="min-h-screen py-20 px-4 bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-4">À propos de </h2>
        <h1 className='text-6xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-16'>Konan Othniel Kouakou</h1>
        <div className="grid grid-cols-1 gap-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-cyan-500/50 transition-colors">
              <div className="text-lg text-gray-300 mb-8 leading-relaxed space-y-6">
                <div>
                  <h3 className="text-xl text-cyan-400 font-semibold mb-2">Mon approche technique</h3>
                  <p>Ce que j'aime, c'est transformer des données brutes et des besoins flous en solutions exploitables.
                    Je travaille aussi bien sur la modélisation et l'interrogation de bases de données (SQL avancé, PostgreSQL, SQL Server) que sur des modèles de prédiction en Python et sur l'intégration d'API d'intelligence artificielle dans des applications réelles.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl text-cyan-400 font-semibold mb-2">Mon parcours</h3>
                  <p>
                    J'ai découvert la programmation en licence Math-Info, où j'ai conçu des algorithmes d'optimisation en Python et structuré des logiques complexes.
                    J'ai poursuivi en BTS SIO option SLAM (obtenu en 2026, Institut F2I), avec deux stages en entreprise : un site vitrine Next.js passé en production pour une auto-école, puis Palais Mobile, une plateforme d'achat international développée en binôme sur Firebase.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl text-cyan-400 font-semibold mb-2">Projet Professionnel</h3>
                  <p>
                    Je suis aujourd'hui en Bachelor Data & Intelligence Artificielle (3ème année) à Paris School of Technology & Business, et je recherche une alternance à partir de septembre 2026 sur un poste Data Analyst, Développeur BI ou IA appliquée.
                    Mon objectif : m'appuyer sur ma base de développeur pour livrer des analyses et des automatisations qui servent directement une décision métier.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl text-cyan-400 font-semibold mb-2">Mes valeurs</h3>
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
                <a
                  href="/tableau_synthese.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-slate-700 text-white rounded-full text-lg font-bold hover:bg-slate-600 transition transform hover:scale-105 border border-slate-600"
                >
                  Tableau de Synthèse
                  <FileText className="ml-2 h-5 w-5" />
                </a>
              </div>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-cyan-500/50 transition-colors">
              <h3 className="text-2xl font-semibold text-white mb-8">Mes compétences</h3>
              <div className="space-y-10">
                {Object.entries(skills).map(([category, skillList]) => (
                  <div key={category}>
                    <h4 className="text-xl text-cyan-400 font-semibold mb-4">{category}</h4>
                    <div className="grid grid-cols-2 lg:grid-cols-2 gap-4">
                      {skillList.map((skill) => (
                        <div key={skill.name} className="flex items-center gap-3 p-3 bg-slate-700/30 rounded-lg border border-slate-700/50">
                          <span className="text-cyan-400">{skill.icon}</span>
                          <span className="text-gray-300 font-medium">{skill.name}</span>
                        </div>
                      ))}
                    </div>
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
