import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

// Composants animés
const MotionLink = motion(Link);
const MotionArrow = motion(ArrowRight);

// Variants pour orchestrer l'apparition en cascade
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3, when: 'beforeChildren' }
  }
};

// Animation de fade + translation vers le bas
const itemFadeDown = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } }
};

// Animation de fade + translation vers le haut
const itemFadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } }
};

const Hero = () => (
  <section className="relative min-h-screen overflow-hidden">
    {/* Background animé */}
    <motion.div
      className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800"
      style={{ backgroundSize: '200% 200%' }}
      animate={{ backgroundPosition: ['0% 50%', '100% 50%'] }}
      transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
    />

    {/* Formes décoratives flottantes */}
    <motion.div
      className="absolute top-10 left-10 w-40 h-40 bg-purple-600 rounded-full opacity-20"
      animate={{ y: [0, 20, 0], x: [0, 20, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
    />
    <motion.div
      className="absolute bottom-20 right-20 w-32 h-32 bg-pink-600 rounded-full opacity-20"
      animate={{ y: [0, -20, 0], x: [0, -20, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
    />

    {/* Contenu animé */}
    <motion.div
      className="relative z-10 flex min-h-screen items-center justify-center px-4 sm:px-6 lg:px-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-6xl text-center">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6"
          variants={itemFadeDown}
        >
          Bonjour, je suis{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            Othniel
          </span>
        </motion.h1>

        <motion.div variants={itemFadeDown}>
          <motion.span
            className="block text-3xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
            initial={{ scale: 0.8 }}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            Je transforme les idées en
          </motion.span>
          <motion.span
            className="block text-3xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mt-2"
            initial={{ scale: 0.8 }}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
          >
            expériences web captivantes
          </motion.span>
        </motion.div>

        <motion.p
          className="mt-6 text-xl sm:text-2xl text-gray-300 mb-12"
          variants={itemFadeUp}
        >
          Développeur Full Stack passionné, je crée des interfaces élégantes et des services back-end robustes pour donner vie à vos projets.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-6"
          variants={itemFadeUp}
        >
          <motion.a
            href="https://github.com/Othniel1704/"
            target="_blank"
            className="inline-flex items-center px-8 py-4 border-2 border-purple-500 text-purple-400 rounded-full text-lg font-medium transition"
            whileHover={{ scale: 1.1, rotate: 2 }}
            whileTap={{ scale: 0.9, rotate: -2 }}
          >
            Mon GitHub
          </motion.a>

          <MotionLink
            to="/projects"
            className="inline-flex items-center px-8 py-4 bg-purple-600 text-white rounded-full text-lg font-medium transition"
            whileHover={{ scale: 1.1, rotate: 2 }}
            whileTap={{ scale: 0.9, rotate: -2 }}
          >
            Voir mes projets
            <MotionArrow
              className="ml-2 h-5 w-5"
              animate={{ x: [0, 5, 0], y: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            />
          </MotionLink>

          <MotionLink
            to="/contact"
            className="inline-flex items-center px-8 py-4 border-2 border-purple-500 text-purple-400 rounded-full text-lg font-medium transition"
            whileHover={{ scale: 1.1, rotate: 2 }}
            whileTap={{ scale: 0.9, rotate: -2 }}
          >
            Me contacter
          </MotionLink>

          <MotionLink
            to="/cv"
            className="inline-flex items-center px-8 py-4 border-2 border-purple-500 text-purple-400 rounded-full text-lg font-medium transition"
            whileHover={{ scale: 1.1, rotate: 2 }}
            whileTap={{ scale: 0.9, rotate: -2 }}
          >
            Consulter mon CV
          </MotionLink>
        </motion.div>
      </div>
    </motion.div>
  </section>
);

export default Hero;
