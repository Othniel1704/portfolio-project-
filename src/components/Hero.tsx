import { Link } from 'react-router-dom';

import { ArrowRight, Github, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

const MotionLink = motion(Link);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemFadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 50 } }
};

const Hero = () => (
  <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-slate-950">
    {/* Animated gradient background */}
    <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900" />

    {/* Glowing orbs */}
    <div className="absolute top-20 right-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
    <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

    <motion.div
      className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="max-w-4xl">
          <motion.div variants={itemFadeUp}>
            <span className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-medium text-sm mb-6">
              🎯 En recherche d'une alternance • Île-de-France • Rentrée septembre 2026
            </span>
          </motion.div>

          <motion.h1
            className="text-2xl sm:text-5xl font-bold text-white tracking-tight leading-tight mb-8"
            variants={itemFadeUp}
          >
            <span className='text-cyan-400 text-2xl'>
              Bonjour, je m'appelle
            </span>
            <br />
            Kouakou Konan Othniel
            <br />
          </motion.h1>
          <motion.h2
            className="text-2xl sm:text-5xl font-bold text-cyan-400 tracking-tight leading-tight mb-8"
            variants={itemFadeUp}
          >
            Développeur Full Stack
            <br />
            <span className="text-xl sm:text-3xl text-gray-400 font-semibold">Formation BTS SIO · option SLAM</span>
          </motion.h2>

          <motion.p
            className="text-xl sm:text-2xl text-gray-300 max-w-2xl mb-6 leading-relaxed"
            variants={itemFadeUp}
          >
            Je recherche une <span className="text-cyan-400 font-semibold">alternance d'un an en Île-de-France pour la rentrée de septembre 2026</span>. Découvrez mes projets, mes stages en entreprise et mon CV.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-6 mb-10 text-gray-400"
            variants={itemFadeUp}
          >
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-cyan-400">7+</span>
              <span className="text-sm">Projets<br />réalisés</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-cyan-400">12+</span>
              <span className="text-sm">Technologies</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-cyan-400">100%</span>
              <span className="text-sm">Motivé &<br />autonome</span>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            variants={itemFadeUp}
          >
            <MotionLink
              to="/projects"
              className="inline-flex justify-center items-center px-8 py-4 bg-cyan-500 text-slate-950 rounded-xl text-lg font-bold shadow-lg shadow-cyan-500/30 hover:bg-cyan-400 hover:shadow-cyan-400/40 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Voir mes projets
              <ArrowRight className="ml-2 h-5 w-5" />
            </MotionLink>

            <MotionLink
              to="/contact"
              className="inline-flex justify-center items-center px-8 py-4 bg-slate-800 text-white border border-slate-700 rounded-xl text-lg font-semibold hover:border-cyan-500/50 hover:bg-slate-700 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Me contacter
            </MotionLink>

            <motion.a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center items-center px-8 py-4 bg-slate-800 text-white border border-slate-700 rounded-xl text-lg font-semibold hover:border-cyan-500/50 hover:bg-slate-700 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Télécharger CV
            </motion.a>
          </motion.div>

          <motion.div
            className="flex gap-6 mt-12"
            variants={itemFadeUp}
          >
            <a href="https://github.com/Othniel1704" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Github size={32} />
            </a>
            <a href="https://www.linkedin.com/in/othniel-kouakou" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition-colors">
              <Linkedin size={32} />
            </a>
          </motion.div>
        </div>

        <motion.div
          className="relative hidden lg:block"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="relative z-10 w-full max-w-[500px] mx-auto aspect-square rounded-3xl overflow-hidden border-2 border-cyan-500/30 shadow-2xl shadow-cyan-500/20">
            <img
              src="/images/hero-avatar.png"
              alt="Konan Othniel Portrait"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent" />
          </div>
          {/* Decorative elements */}
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl animate-pulse" />
          <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        </motion.div>
      </div>
    </motion.div>
  </section>
);

export default Hero;
