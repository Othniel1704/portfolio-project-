import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "Jeu Snake en Python",
    description:
      "Jeu du Snake développé en Python, mettant en œuvre les principes de la programmation orientée objet. Ce projet inclut une interface graphique interactive et un système de gestion des scores, offrant une expérience utilisateur complète et engageante.",
    image: "https://media.istockphoto.com/id/1430779013/vector/classic-snake-video-game-pixel-art-style-8-bit.jpg?s=612x612&w=0&k=20&c=6d987Y9mYk9R9G3h25QjN1qTq6_c2z92X6mE_bE31yQ=",
    github: 'https://github.com/Othniel1704',
    demo: "#",
    tags: ["Python", "Pygame"],
  },
  {
    title: "Application de Chat",
    description:
      "Développement d'une application de chat en temps réel. Les utilisateurs peuvent s'inscrire, se connecter et échanger des messages instantanément. Le système inclut une authentification sécurisée et l'historique des messages est conservé.",
    image: "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    github: "https://github.com/Othniel1704",
    demo: "#",
    tags: ["PHP", "HTML", "CSS", "MYSQL"],
  },
  {
    title: "Site E-commerce",
    description: "Création d'une plateforme de e-commerce complète, incluant un catalogue de produits, un panier d'achat dynamique et un système de paiement sécurisé. Les clients peuvent parcourir les articles, ajouter des produits à leur panier et effectuer des achats.",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=2980&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    github: "https://github.com/Othniel1704",
    demo: "#",
    tags: ["PHP", "JavaScipte", "HTML/CSS"],
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