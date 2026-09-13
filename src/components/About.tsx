import { Download } from 'lucide-react';


const skills = [
  { name: 'React' },
  { name: 'JavaScript' },
  { name: 'TypeScript' },
  { name: 'Node.js' },
  { name: 'python' },
  { name: 'php' },
  { name: 'mysql/sql' },
  { name: 'HTML/CSS' },
  { name: 'Git' }
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-white" data-testid="about-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">À propos de moi</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <p className="text-lg text-gray-600 mb-6">
              Étudiant en BTS SIO, je me spécialise en développement web avec une approche orientée sur la résolution de problèmes techniques.
              Je conçois et déploie des applications modernes en optimisant le code, de la structuration des bases de données jusqu'à l'interface utilisateur.
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
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill.name}
                  className="px-4 py-2 bg-indigo-50 text-indigo-700 rounded-full font-medium"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;