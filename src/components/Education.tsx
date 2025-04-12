import React from 'react';
import { Calendar, Briefcase, Code } from 'lucide-react';

const educations = [
  {
    type: 'education',
    date: '2023 - 2024',
    title: 'Brevet de Technicien Supérieur SIO (option SLAM)',
    institution: 'Institut F2I, Vincennes',
    description: 'Spécialisation en Solutions Logicielles et Applications Métiers',
  },
  {
    type: 'education',
    date: '2020 - 2023',
    title: 'Licence 2 Mathématiques et Informatique',
    institution: 'Université Gustave Eiffel, Champs-sur-Marne',
    description: 'Parcours universitaire en mathématiques et sciences informatiques.',
  },
  {
    type: 'education',
    date: '2019 - 2020',
    title: 'Baccalauréat Scientifique',
    institution: 'Lycée scientifique, Yamoussoukro',
    description: 'Obtention du diplôme de fin d\'études secondaires en filière scientifique.',
  },
  {
    type: 'volunteer',
    date: 'Août 2020',
    title: 'Professeur particulier (Bénévolat)',
    institution: 'Abidjan, Côte d\'Ivoire',
    description: 'Initiation à l\'informatique, enseignement des bases du traitement de texte, installation de logiciels et sensibilisation à la sécurité informatique.',
  },
];

const Education = () => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'education':
        return <Calendar className="w-6 h-6 text-purple-400" />;    
        case 'volunteer':
        return <Briefcase className="w-6 h-6 text-purple-400" />;
      case 'project':
        return <Code className="w-6 h-6 text-purple-400" />;
      default:
        return <Calendar className="w-6 h-6 text-purple-400" />;
    } 
  };

  return (
    <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700">
      <h3 className="text-2xl font-semibold text-white mb-8">Mon Parcours</h3>
      <div className="relative">
      {educations.map((education, index) => (
  <div key={index} className="mb-8 last:mb-0">
    <div className="flex items-start">
      <div className="flex-shrink-0 mr-4">
        {getIcon(education.type)}
      </div>
      <div>
        <div className="flex items-center mb-1">
          <span className="text-sm text-purple-400">{education.date}</span>
        </div>
        <h4 className="text-lg font-medium text-white mb-1">{education.title}</h4>
        <p className="text-sm text-gray-400 mb-2">{education.institution}</p>
        <p className="text-gray-300">{education.description}</p>
      </div>
    </div>

    {index !== educations.length - 1 && (
      <div className="absolute left-3 w-px h-full bg-slate-700" style={{ top: '2rem' }} />
    )}
  </div>
))}

      </div>
    </div>
  );
};

export default Education;