import React from 'react';
import { Download } from 'lucide-react';


const skills = [
  { name: 'React', level: 40 },
  { name: 'JavaScript', level: 70 },
  { name: 'TypeScript', level: 30 },
  { name: 'Node.js', level: 30 },
  { name: 'python', level: 60 },
  { name: 'php', level: 60 },
  { name: 'mysql/sql', level: 60 },
  { name: 'HTML/CSS', level: 95 },
  { name: 'Git', level: 70 }
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-white" data-testid="about-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">À propos de moi</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <p className="text-lg text-gray-600 mb-6">
              Actuellement étudiant en BTS SIO, je suis passionné par le développement web et les nouvelles technologies.
              Mon objectif est de créer des applications web modernes et performantes qui répondent aux besoins des utilisateurs.
            </p>
            <a
              href="cv.pdf"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              download
            >
              Télécharger mon CV
              <Download className="ml-2 h-5 w-5" />
            </a>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Mes compétences</h3>
            <div className="space-y-4">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700">{skill.name}</span>
                    <span className="text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-indigo-600 h-2 rounded-full"
                      style={{ width: ${skill.level}% }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;