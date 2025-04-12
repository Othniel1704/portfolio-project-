import React from 'react';
import { Download } from 'lucide-react';
import Education from '../components/Education';

const skills = [
  { name: 'React', level: 90 },
  { name: 'JavaScript', level: 85 },
  { name: 'TypeScript', level: 75 },
  { name: 'Node.js', level: 70 },
  { name: 'python', level: 60 },
  { name: 'php', level: 60 },
  { name: 'mysql/sql', level: 60 },
  { name: 'HTML/CSS', level: 95 },
  { name: 'Git', level: 80 }
];

const About = () => {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-16">À propos de moi</h2>
        <div className="grid grid-cols-1 gap-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700">
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Actuellement étudiant en BTS SIO, je suis passionné par le développement web et les nouvelles technologies.
                Mon objectif est de créer des applications web modernes et performantes qui répondent aux besoins des utilisateurs.
              </p>
              <a
                href="/cv.pdf"
                className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-full text-lg font-medium hover:bg-purple-700 transition transform hover:scale-105"
              >
                Télécharger mon CV
                <Download className="ml-2 h-5 w-5" />
              </a>
            </div>
            <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700">
              <h3 className="text-2xl font-semibold text-white mb-8">Mes compétences</h3>
              <div className="space-y-6">
                {skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">{skill.name}</span>
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
          </div>
          <Education />
        </div>
      </div>
    </div>
  );
};

export default About;