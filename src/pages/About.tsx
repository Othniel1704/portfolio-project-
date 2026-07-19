import { Download, Atom, FileCode, FileCode2, FileJson2, Server, Database, GitBranch, Github, Brain, BarChart3, Flame, Boxes, FileSpreadsheet, Braces } from 'lucide-react';


import Education from '../components/Education';
import Certifications from '../components/Certifications';

const skills = {
  "Data & BI": [
    { name: 'SQL avancé', icon: <Database size={18} /> },
    { name: 'PostgreSQL / Supabase', icon: <Database size={18} /> },
    { name: 'SQL Server / MySQL', icon: <Database size={18} /> },
    { name: 'Machine Learning (notions)', icon: <Brain size={18} /> },
    { name: 'Analyse & KPI', icon: <BarChart3 size={18} /> },
  ],
  Frontend: [
    { name: 'React', icon: <Atom size={18} /> },
    { name: 'JavaScript', icon: <FileCode2 size={18} /> },
    { name: 'TypeScript', icon: <FileCode size={18} /> },
    { name: 'HTML/CSS', icon: <FileJson2 size={18} /> },
  ],
  "Backend & API": [
    { name: 'Python', icon: <FileCode size={18} /> },
    { name: 'FastAPI', icon: <Server size={18} /> },
    { name: 'C# / .NET', icon: <Braces size={18} /> },
    { name: 'PHP', icon: <FileCode size={18} /> },
    { name: 'Node.js', icon: <Server size={18} /> },
  ],
  "Outils & DevOps": [
    { name: 'Git', icon: <GitBranch size={18} /> },
    { name: 'GitHub', icon: <Github size={18} /> },
    { name: 'Firebase', icon: <Flame size={18} /> },
    { name: '.NET', icon: <Boxes size={18} /> },
    { name: 'Excel', icon: <FileSpreadsheet size={18} /> },
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
                  <p>Ce que j'aime dans le développement, c'est concevoir des solutions robustes à des problèmes concrets.
                    J'ai notamment travaillé sur l'optimisation d'architectures de bases de données, la structuration d'API performantes et la création d'interfaces utilisateur interactives. Chaque bug est pour moi une opportunité d'améliorer la fiabilité du code.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl text-cyan-400 font-semibold mb-2">Mon parcours</h3>
                  <p>
                    J'ai découvert la programmation en licence Math-Info, où j'ai conçu des algorithmes d'optimisation en Python et structuré des logiques complexes.
                    Après un BTS SIO (option SLAM), je poursuis aujourd'hui un <span className="text-cyan-400 font-semibold">Bachelor Data &amp; Intelligence Artificielle (3ᵉ année) à PST&amp;B</span>, en mettant ces compétences au service de projets data et applicatifs concrets.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl text-cyan-400 font-semibold mb-2">Projet Professionnel</h3>
                  <p>
                    Entre développement Full Stack et Data / BI, je m'appuie sur une solide base en SQL, en conception de bases de données et en analyse de données.
                    Je recherche une <span className="text-cyan-400 font-semibold">alternance en Data / BI / Développement en Île-de-France pour la rentrée de septembre 2026</span> (rythme 2 jours école / 3 jours entreprise). Mon objectif : monter en compétence sur des projets concrets tout en apportant l'autonomie et la rigueur acquises durant mes stages.
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
