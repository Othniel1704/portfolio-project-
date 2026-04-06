import React from 'react';
import { Calendar, Briefcase, Code } from 'lucide-react';

const experiences = [
  {
    type: 'education',
    date: '2024 - Present',
    title: 'BTS Services Informatiques aux Organisations (option SLAM)',
    institution: 'Institut F2I, Vincennes',
    description: 'Développement d\'applications logicielles et web, bases de données, cybersécurité et administration réseau. Réalisation de projets complets en respectant les bonnes pratiques.',
  },
  {
    type: 'education',
    date: '2020 - 2023',
    title: 'Licence 2 Mathématiques Informatiques',
    institution: 'Université Gustave Eiffel, Champs-sur-Marne',
    description: 'Algorithmique, programmation (Python, C), mathématiques appliquées et bases théoriques de l\'informatique.',
  },
  {
    type: 'education',
    date: '2019 - 2020',
    title: 'Baccalauréat',
    institution: 'Lycée scientifique, Yamoussoukro, Côte d\'Ivoire',
    description: '',
  },
];

const Education = () => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'education':
        return <Calendar className="w-6 h-6 text-purple-400" />;
      case 'work':
        return <Briefcase className="w-6 h-6 text-purple-400" />;
      case 'project':
        return <Code className="w-6 h-6 text-purple-400" />;
      default:
        return <Calendar className="w-6 h-6 text-purple-400" />;
    }
  };

  return (
    <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700">
      <h3 className="text-2xl font-semibold text-white mb-8">Parcours et Expériences</h3>
      <div className="relative">
        {experiences.map((experience, index) => (
          <div key={index} className="mb-8 last:mb-0">
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-4">
                {getIcon(experience.type)}
              </div>
              <div>
                <div className="flex items-center mb-1">
                  <span className="text-sm text-purple-400">{experience.date}</span>
                </div>
                <h4 className="text-lg font-medium text-white mb-1">{experience.title}</h4>
                <p className="text-sm text-gray-400 mb-2">{experience.institution}</p>
                <p className="text-gray-300">{experience.description}</p>
              </div>
            </div>
            {index !== experiences.length - 1 && (
              <div className="absolute left-3 w-px h-full bg-slate-700" style={{ top: '2rem' }} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;