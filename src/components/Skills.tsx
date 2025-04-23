import React from 'react';
import {
  Atom,
  FileCode2,
  FileCode,
  FileJson2,
  Server,
  Database,
  GitBranch,
} from 'lucide-react';


const skills = {
  Frontend: [
    { name: 'React', level: 40, icon: <Atom /> }, // ici
    { name: 'JavaScript', level: 70, icon: <FileCode2 /> },
    { name: 'TypeScript', level: 30, icon: <FileCode /> },
    { name: 'HTML/CSS', level: 95, icon: <FileJson2 /> },
  ],  
  Backend: [
    { name: 'Node.js', level: 30, icon: <Server /> },
    { name: 'Python', level: 60, icon: <FileCode /> },
    { name: 'PHP', level: 60, icon: <FileCode /> },
    { name: 'MySQL/SQL', level: 60, icon: <Database /> },
  ],
  Other: [
    { name: 'Git', level: 70, icon: <GitBranch /> },
  ],
};

const Skills = () => {
  return (
    <section className="py-20 bg-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Mes Compétences</h2>
        {Object.entries(skills).map(([category, skillList], index) => (
          <div key={index} className="mb-12">
            <h3 className="text-2xl font-bold text-purple-400 mb-6">{category}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {skillList.map((skill, skillIndex) => (
                <div key={skillIndex} className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-lg font-medium text-white flex items-center space-x-2">
                      <span title={skill.name} aria-hidden="true">{skill.icon}</span>
                      <span>{skill.name}</span>
                    </span>
                    <span className={`text-lg font-medium ${skill.level > 80 ? 'text-green-400' : 'text-gray-300'}`}>
                      {skill.level}%
                    </span>
                  </div>
                  <div
                    className="w-full bg-gray-700 rounded-full h-3"
                    role="progressbar"
                    aria-valuenow={skill.level}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-label={`${skill.name} skill level`}
                  >
                    <div
                      className="bg-gradient-to-r from-purple-500 to-pink-600 h-3 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
