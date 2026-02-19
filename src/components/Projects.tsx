import React from 'react';
import { Github, ArrowRight, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { projectsData } from '../data/projectsData';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 50 }
  }
};

const ProjectCard = ({ project }: { project: typeof projectsData[0] }) => {
  return (
    <motion.div
      variants={cardVariants}
      className="bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50 hover:border-cyan-500/50 shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 flex flex-col h-full group"
      whileHover={{ y: -5 }}
    >
      <Link to={`/projects/${project.id}`} className="block relative h-48 overflow-hidden bg-slate-900">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60" />
        {project.duration && (
          <div className="absolute top-4 right-4 px-3 py-1 bg-slate-900/80 backdrop-blur-sm border border-cyan-500/30 rounded-full text-xs text-cyan-400 font-semibold flex items-center">
            <Calendar className="w-3 h-3 mr-1" />
            {project.duration}
          </div>
        )}
      </Link>

      <div className="p-6 flex flex-col flex-grow">
        <Link to={`/projects/${project.id}`}>
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">{project.title}</h3>
        </Link>
        <p className="text-gray-400 mb-4 text-sm flex-grow leading-relaxed line-clamp-3">
          {project.shortDescription}
        </p>

        {project.highlights && project.highlights.length > 0 && (
          <div className="mb-4">
            <h4 className="text-xs font-semibold text-gray-500 uppercase mb-2">Points clés</h4>
            <ul className="space-y-1">
              {project.highlights.slice(0, 3).map((highlight, idx) => (
                <li key={idx} className="text-xs text-gray-400 flex items-start">
                  <span className="text-cyan-400 mr-2">✓</span>
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto flex justify-between items-center">
          <Link
            to={`/projects/${project.id}`}
            className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium transition-colors text-sm"
          >
            Voir le détail
            <ArrowRight className="w-4 h-4 ml-1" />
          </Link>

          {project.github && (
            <a
              href={project.github}
              className="inline-flex items-center text-gray-400 hover:text-white font-medium transition-colors group/git"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-5 w-5 group-hover/git:scale-110 transition-transform" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Mes <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Projets</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Une sélection de mes réalisations techniques et créatives, démontrant mes compétences en développement.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
