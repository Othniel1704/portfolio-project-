import React from 'react';
import {
  Atom,
  FileCode2,
  FileCode,
  FileJson2,
  Server,
  Database,
  GitBranch,
  Brain,
  BarChart3,
  Workflow,
  Bot,
  Cloud,
  Terminal,
} from 'lucide-react';


const skills = {
  Frontend: [
    { name: 'React', icon: <Atom className="text-cyan-400" /> },
    { name: 'JavaScript', icon: <FileCode2 className="text-yellow-400" /> },
    { name: 'TypeScript', icon: <FileCode className="text-blue-400" /> },
    { name: 'HTML/CSS', icon: <FileJson2 className="text-orange-400" /> },
  ],
  Backend: [
    { name: 'Node.js', icon: <Server className="text-green-400" /> },
    { name: 'Python', icon: <FileCode className="text-yellow-500" /> },
    { name: 'PHP', icon: <FileCode className="text-indigo-400" /> },
    { name: 'MySQL/SQL', icon: <Database className="text-blue-300" /> },
  ],
  "Data & IA": [
    { name: 'pandas / NumPy', icon: <BarChart3 className="text-emerald-400" /> },
    { name: 'scikit-learn', icon: <Brain className="text-purple-400" /> },
    { name: 'SQL avancé', icon: <Database className="text-blue-300" /> },
    { name: 'Power BI (notions)', icon: <BarChart3 className="text-yellow-400" /> },
    { name: 'APIs IA (OpenAI, Gemini)', icon: <Bot className="text-cyan-400" /> },
    { name: 'Automatisation n8n', icon: <Workflow className="text-pink-400" /> },
  ],
  "Outils & DevOps": [
    { name: 'Git / GitHub', icon: <GitBranch className="text-red-400" /> },
    { name: 'Firebase', icon: <Cloud className="text-amber-400" /> },
    { name: 'PostgreSQL / Supabase', icon: <Database className="text-emerald-400" /> },
    { name: 'Linux / Proxmox', icon: <Terminal className="text-slate-300" /> },
  ],
};

const Skills = () => {
  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-white mb-16 text-center">
          Mes <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Compétences</span>
        </h2>

        {Object.entries(skills).map(([category, skillList], index) => (
          <div key={index} className="mb-16 last:mb-0">
            <h3 className="text-2xl font-bold text-gray-200 mb-8 border-l-4 border-cyan-500 pl-4">
              {category}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skillList.map((skill, skillIndex) => (
                <div
                  key={skillIndex}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 group flex items-center justify-start gap-4"
                >
                  <span className="p-3 bg-slate-700/50 rounded-lg group-hover:bg-slate-700 transition-colors">
                    {skill.icon}
                  </span>
                  <h4 className="text-lg font-semibold text-white">{skill.name}</h4>
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
