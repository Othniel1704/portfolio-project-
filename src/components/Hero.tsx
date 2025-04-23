import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
          <span className="block">Je transforme les idées en</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mt-2">expériences web captivantes</span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-300 mb-12">
        Développeur web junior, je suis passionné par la création d'interfaces utilisateur 
        élégantes et fonctionnelles.

        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
        <a
            href="https://github.com/Othniel1704/"
            target="_blank"
            className="inline-flex items-center px-8 py-4 border-2 border-purple-500 text-purple-400 rounded-full text-lg font-medium hover:bg-purple-500 hover:text-white transition transform hover:scale-105"
          >
            Mon GitHub
          </a>
          <Link
            to="/projects"
            className="inline-flex items-center px-8 py-4 bg-purple-600 text-white rounded-full text-lg font-medium hover:bg-purple-700 transition transform hover:scale-105"
          >
            Voir mes projets
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 border-2 border-purple-500 text-purple-400 rounded-full text-lg font-medium hover:bg-purple-500 hover:text-white transition transform hover:scale-105"
          >
            Me contacter
          </Link>
          <Link
            to="/cv"
            className="inline-flex items-center px-8 py-4 border-2 border-purple-500 text-purple-400 rounded-full text-lg font-medium hover:bg-purple-500 hover:text-white transition transform hover:scale-105"
          >
            Consulter mon CV
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;