
import React from 'react';
import { motion } from 'framer-motion';
import Skill from '../components/Skill'; 

const Skills: React.FC = () => {
  const skills = [
    { name: 'Python' },
    { name: 'PHP' },
    { name: 'JavaScript' },
    { name: 'HTML' },
    { name: 'MySQL' },
    { name: 'Git' },
    { name: 'GitHub' },
    { name: 'VS Code' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };
  const skillVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible" className="p-8 text-white">
      <motion.h1 variants={skillVariants} className="text-4xl font-bold mb-6">
        Mes Compétences
      </motion.h1>
      <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {skills.map((skill, index) => (
          <motion.div variants={skillVariants} key={index} >
            <Skill name={skill.name} />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Skills;