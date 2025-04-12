import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center text-white p-8 m-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1
        className="text-5xl font-bold mb-6 text-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        À propos de moi
      </motion.h1>
      <motion.p
        className="text-lg mb-6 text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >        Je suis un développeur junior motivé. Ma passion pour le codage m'a conduit à travailler sur plusieurs projets personnels.
        </motion.p>
      <motion.p className="text-white mb-8" initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.6 }}>
        En tant que développeur junior, j'apprends et améliore constamment mes
        compétences pour créer des applications passionnantes et utiles.
      </motion.p>
      <Link to="/" className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        Back to Home
      </Link>
    </motion.div>
  );
};

export default About;