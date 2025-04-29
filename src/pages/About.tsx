import React from 'react';
import { Download, Atom, FileCode, FileCode2, FileJson2, Server, Database, GitBranch } from 'lucide-react';
import { Link } from 'react-router-dom';

import Education from '../components/Education';

const skills = {
  Frontend: [
    { name: 'React', level: 40, icon: <Atom size={18} /> },
    { name: 'JavaScript', level: 70, icon: <FileCode2 size={18} /> },
    { name: 'TypeScript', level: 30, icon: <FileCode size={18} /> },
    { name: 'HTML/CSS', level: 95, icon: <FileJson2 size={18} /> },
  ],
  Backend: [
    { name: 'Node.js', level: 30, icon: <Server size={18} /> },
    { name: 'Python', level: 60, icon: <FileCode size={18} /> },
    { name: 'PHP', level: 60, icon: <FileCode size={18} /> },
    { name: 'MySQL/SQL', level: 60, icon: <Database size={18} /> },
  ],
  Autres: [
    { name: 'Git', level: 70, icon: <GitBranch size={18} /> },
  ],
};

const About = () => {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-16">À propos de </h2>
        <h1 className='text-6xl font-bold text-center text-white mb-16'>Konan Othniel Kouakou</h1>
        <div className="grid grid-cols-1 gap-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700">
              <div className="text-lg text-gray-300 mb-8 leading-relaxed space-y-6">
                <div>
                  <h3 className="text-xl text-purple-400 font-semibold mb-2">Ma passion</h3>
                  <p>Ce que j’aime dans le développement web, c’est créer à partir de rien, juste avec des lignes de code.
                    J’adore comprendre la logique derrière une fonctionnalité, résoudre des bugs, et trouver des solutions aux problèmes concrets.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl text-purple-400 font-semibold mb-2">Mon parcours</h3>
                  <p>
                    J’ai découvert la programmation en licence Math-Info, en développant des fonctions mathématiques pour résoudre des équations ou calculer des périmètres. 
                    Puis, j’ai rapidement évolué vers des mini-jeux en Python et JavaScript — et c’est là que ma passion s’est vraiment révélée.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl text-purple-400 font-semibold mb-2">Mes objectifs</h3>
                  <p>
                    Aujourd’hui, je suis étudiant en BTS SIO. Mon objectif : décrocher un stage et une alternance pour approfondir mes compétences, apprendre aux côtés de professionnels 
                    et contribuer à des projets concrets en front-end ou full-stack.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl text-purple-400 font-semibold mb-2">Mes valeurs</h3>
                  <p>
                    Je suis curieux, autonome, j’aime le travail bien fait, et je crois fortement à l’esprit d’équipe pour faire avancer les choses.
                  </p>
                </div>
              </div>
              <a
                className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-full text-lg font-medium hover:bg-purple-700 transition transform hover:scale-105"
              >
                <Link to="/cv" className="flex items-center">
                  Consulter mon CV
                  <Download className="ml-2 h-5 w-5" />
                </Link>
              </a>
            </div>
            <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700">
              <h3 className="text-2xl font-semibold text-white mb-8">Mes compétences</h3>
              <div className="space-y-10">
                {Object.entries(skills).map(([category, skillList]) => (
                  <div key={category}>
                    <h4 className="text-xl text-purple-400 font-semibold mb-4">{category}</h4>
                    <div className="space-y-4">
                      {skillList.map((skill) => (
                        <div key={skill.name}>
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-gray-300 flex items-center gap-2">
                              {skill.icon}
                              {skill.name}
                            </span>
                            <span className="text-purple-400">{skill.level}%</span>
                          </div>
                          <div className="w-full bg-slate-700 rounded-full h-2">
                            <div
                              className="bg-gradient-to-r from-purple-400 to-pink-600 h-2 rounded-full transition-all duration-500"
                              style={{ width: `${skill.level}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <Education />
        </div>
      </div>
    </div>
  );
};

export default About;
