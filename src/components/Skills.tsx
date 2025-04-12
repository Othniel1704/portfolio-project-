import React from 'react';

const skills = [
  { name: 'HTML5', level: 95 },
  { name: 'CSS3', level: 90 },
  { name: 'JavaScript (ES6+)', level: 85 },
  { name: 'TypeScript', level: 80 },
  { name: 'React', level: 85 },
  { name: 'Node.js', level: 75 },
  { name: 'Express.js', level: 70 },
  { name: 'Git', level: 90 },
  { name: 'GitHub', level: 90 },
  { name: 'Tailwind CSS', level: 80 },
  { name: 'Responsive Design', level: 95 },
  { name: 'RESTful APIs', level: 80 },
  { name: 'MongoDB', level: 70 },
  { name: 'SQL', level: 65 },
  { name: 'Vite', level: 80},
];

const Skills = () => {
  return (
    <section className="py-20 bg-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">My Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="mb-6">
              <div className="flex justify-between mb-2">
                <span className="text-lg font-medium text-purple-400">{skill.name}</span>
                <span className="text-lg font-medium text-gray-300">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-3">
                <div 
                  className="bg-gradient-to-r from-purple-500 to-pink-600 h-3 rounded-full" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
