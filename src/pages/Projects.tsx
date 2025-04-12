import React from 'react'
import Project from '../components/Project';
import { motion } from 'framer-motion';

const ProjectsPage = () => {
  const projects = [
    {
      title: "Mini Games Made with Python",
      description: "A collection of mini-games developed using Python. These projects helped me practice my Python skills.",
      animation: { opacity: 0, x: -50 },
      image: "/images/python-games.jpg",
      tags: ["Python", "Games", "CLI"],
    },
    {
      title: "Online Shop Made with PHP and MySQL",
      description: "A dynamic e-commerce platform developed using PHP and MySQL. This project allowed me to manage databases and strengthen my PHP skills.",
      animation: { opacity: 0, y: 50 },
      image: "/images/php-shop.jpg",
      tags: ["PHP", "MySQL", "E-commerce"],
    },
    {
      title: "Chat Made with PHP and MySQL",
      description: "A real-time chat application with features such as user authentication and dynamic messaging.",
      animation: { opacity: 0, x: 50 },
      image: "/images/chat-app.jpg",
      tags: ["PHP", "MySQL", "Chat"],
    },
  ];
  

  return (
    <motion.div
      className="min-h-screen p-10 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-5xl font-bold mb-8">Projets</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">        
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={project.animation}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Project title={project.title} description={project.description} />
            </motion.div>
          ))}
      </div>
    </motion.div>
  );
};

export default ProjectsPage;