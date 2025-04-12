import React from "react";
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

interface HeroProps {
  tagLine: string;
  imageUrl: string;
  buttonText: string
  buttonLink: string
}

const Hero: React.FC<HeroProps> = ({ tagLine, imageUrl, buttonText, buttonLink }) => {
  return (
    <div className="relative h-screen flex flex-col items-center justify-center text-center text-white overflow-hidden">
      {/* Image de fond */}
      <motion.img
        src={imageUrl}
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 1 }}
      />

      {/* Overlay sombre pour améliorer la lisibilité du texte */}
      <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>

      {/* Contenu */}
      <div className="relative z-20 px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            {tagLine}
          </h1>
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link to={buttonLink}>
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300"
              >
                {buttonText === "View My Projects"
                  ? "Voir mes projets"
                  : buttonText}
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
