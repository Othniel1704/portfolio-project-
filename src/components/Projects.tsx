import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "Portfolio Website",
    description: "My own portfolio website built to showcase my skills and projects as a web developer.",
    image: "/images/portfolio.png",
    github: "https://github.com/Thomas-Dbt/portfolio",
    demo: "https://www.thomasdebout.com",
    tags: ["React", "TypeScript", "Tailwind CSS", "Vite"],
  },
  {
    title: "Snake Game",
    description: "A classic Snake game implemented in Python using Pygame, with score management and increasing difficulty.",
    image: "/images/snake-game.jpg",
    github: "https://github.com/Thomas-Dbt/snake-game",
    demo: "https://github.com/Thomas-Dbt/snake-game",
    tags: ["Python", "Pygame"],
  },
  {
    title: "Real-Time Chat Application",
    description: "A real-time chat application with user authentication and message history, built using a modern stack.",
    image: "/images/chat-app.jpg",
    github: "https://github.com/Thomas-Dbt/chat-app",
    demo: "https://github.com/Thomas-Dbt/chat-app",
    tags: ["React", "Node.js", "Socket.io", "Express"],
  },
  {
    title: "E-commerce Website",
    description: "An e-commerce platform with a shopping cart, payment system, and product management capabilities.",
    image: "/images/ecommerce-site.png",
    github: "https://github.com/Thomas-Dbt/ecommerce-site",
    demo: "https://github.com/Thomas-Dbt/ecommerce-site",
    tags: ["Next.js", "Stripe", "MongoDB"],
  },
];

interface Project {
  title: string
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
      <div className='p-6'>
        <h3 className='text-xl font-semibold text-white mb-2'>{project.title}</h3>
        <p className='text-gray-300 mb-4'>{project.description}</p>
        <div className='flex flex-wrap gap-2 mb-4'>
          {project.tags.map((tag: string) => (
            <span key={tag} className='px-3 py-1 bg-purple-900/50 text-purple-300 rounded-full text-sm'>
              {tag}
            </span>
          ))}
        </div>
        <div className="flex space-x-4">
          <a
            href={project.github} className='inline-flex items-center text-gray-400 hover:text-purple-400 transition' target='_blank' rel='noopener noreferrer'>
            <Github className='h-5 w-5 mr-1' /> Code
          </a>
          <a href={project.demo} className='inline-flex items-center text-gray-400 hover:text-purple-400 transition' target='_blank' rel='noopener noreferrer'>

          
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