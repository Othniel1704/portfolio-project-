import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Jeu Snake en Python',
    description: 'Implémentation du jeu classique Snake avec interface graphique et gestion des scores.',
    image: 'https://images.unsplash.com/photo-1553481187-be93c21490a9?auto=format&fit=crop&q=80&w=800',
    github: 'https://github.com',
    demo: '#',
    tags: ['Python', 'Pygame']
  },
  {
    title: 'Application de Chat',
    description: 'Chat en temps réel avec authentification et historique des messages.',
    image: 'https://images.unsplash.com/photo-1611606063065-ee7946f0787a?auto=format&fit=crop&q=80&w=800',
    github: 'https://github.com',
    demo: '#',
    tags: ['React', 'Node.js', 'Socket.io']
  },
  {
    title: 'Site E-commerce',
    description: 'Plateforme de vente en ligne avec panier et système de paiement.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    github: 'https://github.com',
    demo: '#',
    tags: ['Next.js', 'Stripe', 'MongoDB']
  },
];

interface Project {
  title: string;
  description: string;
  image: string;
  github: string;
  demo: string;
  tags: string[];
}

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="bg-slate-800 rounded-xl shadow-xl overflow-hidden border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:-translate-y-2">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
        <p className="text-gray-300 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag: string) => (
            <span
              key={tag}
              className="px-3 py-1 bg-purple-900/50 text-purple-300 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex space-x-4">
          <a
            href={project.github}
            className="inline-flex items-center text-gray-400 hover:text-purple-400 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="h-5 w-5 mr-1" />
            Code
          </a>
          <a
            href={project.demo}
            className="inline-flex items-center text-gray-400 hover:text-purple-400 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink className="h-5 w-5 mr-1" />
            Demo
          </a>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Mes Projets
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;