import React from 'react';
import {
  Atom,
  FileCode2,
  FileCode,
  FileJson2,
  Server,
  Database,
  GitBranch,
  Shield,
  Network,
  Lock,
} from 'lucide-react';
import { motion } from 'framer-motion';

const skills = {
  Frontend: [
    { name: 'React', level: 80, icon: <Atom className="text-cyan-400" /> },
    { name: 'JavaScript', level: 85, icon: <FileCode2 className="text-yellow-400" /> },
    { name: 'TypeScript', level: 70, icon: <FileCode className="text-blue-400" /> },
    { name: 'HTML/CSS', level: 90, icon: <FileJson2 className="text-orange-400" /> },
  ],
  Backend: [
    { name: 'Node.js', level: 30, icon: <Server className="text-green-400" /> },
    { name: 'Python', level: 60, icon: <FileCode className="text-yellow-500" /> },
    { name: 'PHP', level: 60, icon: <FileCode className="text-indigo-400" /> },
    { name: 'MySQL/SQL', level: 60, icon: <Database className="text-blue-300" /> },
  ],
  "Réseaux & Sécurité": [
    { name: 'Linux (Apache, SSH, FTP)', level: 65, icon: <Server className="text-orange-400" /> },
    { name: 'VLAN & Routage', level: 60, icon: <Network className="text-purple-400" /> },
    { name: 'Wireshark & ARP Spoofing', level: 55, icon: <Shield className="text-red-400" /> },
    { name: 'Sécurisation SSH/Telnet', level: 60, icon: <Lock className="text-green-400" /> },
  ],
  Other: [
    { name: 'Git', level: 70, icon: <GitBranch className="text-red-400" /> },
    { name: 'Cisco Packet Tracer', level: 65, icon: <Network className="text-blue-400" /> },
  ],
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
};

const Skills = () => {
  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Mes <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Compétences</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Découvrez les technologies et outils que je maîtrise, répartis par domaine d'expertise.
          </p>
        </div>

        {Object.entries(skills).map(([category, skillList], index) => (
          <motion.div
            key={index}
            className="mb-16 last:mb-0"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <h3 className="text-2xl font-bold text-gray-200 mb-8 border-l-4 border-cyan-500 pl-4 inline-block">
              {category}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {skillList.map((skill, skillIndex) => (
                <motion.div
                  key={skillIndex}
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 group"
                >
                  <div className="flex justify-between items-center mb-4">
                    <span className="p-3 bg-slate-700/50 rounded-lg group-hover:bg-slate-700 transition-colors">
                      {skill.icon}
                    </span>
                    <span className="font-bold text-gray-400 group-hover:text-cyan-400 transition-colors">
                      {skill.level}%
                    </span>
                  </div>

                  <h4 className="text-lg font-semibold text-white mb-3">{skill.name}</h4>

                  <div className="w-full bg-slate-700/50 rounded-full h-2 overflow-hidden">
                    <motion.div
                      className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
