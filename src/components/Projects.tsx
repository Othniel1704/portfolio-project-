// Suggested code may be subject to a license. Learn more: ~LicenseLog:842276496.
import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "Jeu Snake en Python",
    description:
      "Jeu du Snake développé en Python, mettant en œuvre les principes de la programmation orientée objet. Ce projet inclut une interface graphique interactive et un système de gestion des scores, offrant une expérience utilisateur complète et engageante.",
    image: "https://www.presse-citron.net/app/uploads/2019/10/google-snake.jpg",
    github: 'https://github.com/Othniel1704/snake',
    tags: ["Python", "Pygame"],
  },
  {
    title: "Développement d'une Application de Chat Forum",
    description:
      "Ce projet vise à créer une application de type forum de chat offrant aux utilisateurs la possibilité d'échanger des messages instantanés, publics ou privés.Les utilisateurs peuvent s'inscrire et se connecter via une authentification sécurisée.Un système intégré permet de conserver l'historique des messages pour un accès ultérieur.",
    image: "images/chat.png",
    github: "https://github.com/Othniel1704/chat",
    tags: ["PHP", "HTML", "CSS","SQL/MySQL"],
  },
  {
    title: "Portfolio",
    description:
      "Voici mon portfolio personnel, le site sur lequel vous vous trouvez en ce moment. Il présente mes compétences et mes projets, et sert de vitrine à mon expertise en développement web. La conception et le développement du site ont été entièrement réalisés par mes soins.",
    image: "images/portfolio.png",
    github: 'https://github.com/Othniel1704/portfolio-project-',
    tags: ["React.js", "Tailwind","css"],
  },
  {
    title: "Site d'annonces en ligne",
    description: "Ce projet, développé dans le cadre de votre formation, est un clone de la plateforme Leboncoin, dédiée aux petites annonces en ligne. Il a été conçu pour offrir aux utilisateurs une expérience fluide et intuitive tant sur ordinateur que sur mobile. Faciliter la publication, la recherche et la consultation d'annonces classées.Mettre à disposition une interface simple et accessible à tous",
    image: "images/ecommerce-site.PNG",
    github: "https://github.com/Othniel1704/lebonbazaar",
    tags: ["PHP", "JavaScipte", "HTML/CSS","SQL/MySQL"],
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
        className="w-full h-49 object-cover"
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
