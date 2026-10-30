import { Link } from 'react-router-dom';
import { ArrowRight, Download, Github, Linkedin, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { profile } from '../data/profile';
import { projectsData } from '../data/projectsData';

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

const stats = [
  { value: `${projectsData.length}`, label: 'projets documentés' },
  { value: '2', label: 'stages en entreprise' },
  { value: '0,854', label: 'AUC du modèle de scoring' },
];

const Hero = () => (
  <section
    aria-labelledby="hero-title"
    className="relative overflow-hidden bg-slate-950 pt-12 pb-20 sm:pt-20 sm:pb-28"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900" aria-hidden="true" />
    <div className="absolute -top-24 right-0 w-[28rem] h-[28rem] bg-cyan-500/15 rounded-full blur-3xl" aria-hidden="true" />
    <div className="absolute bottom-0 -left-24 w-[24rem] h-[24rem] bg-blue-500/10 rounded-full blur-3xl" aria-hidden="true" />

    <motion.div
      className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-12 items-center"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <div>
        <motion.p variants={item}>
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-sm font-medium">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 motion-safe:animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            {profile.availabilityShort} pour une alternance
          </span>
        </motion.p>

        <motion.h1
          id="hero-title"
          variants={item}
          className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1] text-balance"
        >
          Konan Othniel Kouakou
          <span className="block mt-3 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Data, BI &amp; IA appliquée
          </span>
        </motion.h1>

        <motion.p variants={item} className="mt-6 text-lg sm:text-xl text-slate-300 max-w-xl leading-relaxed">
          Je transforme des données brutes en informations exploitables : SQL, Python, tableaux de bord
          et automatisations IA. Étudiant en {profile.school} après un BTS SIO SLAM.
        </motion.p>

        <motion.p variants={item} className="mt-3 flex items-start gap-2 text-slate-400 max-w-xl">
          <MapPin className="w-5 h-5 mt-0.5 shrink-0 text-cyan-400" aria-hidden="true" />
          <span>{profile.availabilityLong}</span>
        </motion.p>

        <motion.div variants={item} className="mt-8 flex flex-col sm:flex-row gap-3">
          <Link
            to="/projects"
            className="inline-flex justify-center items-center gap-2 min-h-[48px] px-6 bg-cyan-500 text-slate-950 rounded-xl font-bold whitespace-nowrap shadow-lg shadow-cyan-500/25 hover:bg-cyan-400 transition-colors"
          >
            Voir mes projets
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </Link>
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex justify-center items-center gap-2 min-h-[48px] px-6 bg-slate-800 text-white border border-slate-700 rounded-xl font-semibold whitespace-nowrap hover:border-cyan-500/60 hover:bg-slate-700 transition-colors"
          >
            <Download className="h-5 w-5" aria-hidden="true" />
            Télécharger mon CV
          </a>
          <Link
            to="/contact"
            className="inline-flex justify-center items-center min-h-[48px] px-6 text-slate-200 rounded-xl font-semibold whitespace-nowrap hover:text-cyan-300 transition-colors"
          >
            Me contacter
          </Link>
        </motion.div>

        <motion.dl variants={item} className="mt-10 grid grid-cols-3 gap-4 max-w-lg">
          {stats.map((s) => (
            <div key={s.label} className="border-l-2 border-cyan-500/40 pl-3">
              <dt className="sr-only">{s.label}</dt>
              <dd className="text-2xl sm:text-3xl font-bold text-white tabular-nums">{s.value}</dd>
              <dd className="text-xs sm:text-sm text-slate-400 leading-snug">{s.label}</dd>
            </div>
          ))}
        </motion.dl>

        <motion.div variants={item} className="mt-8 flex gap-2">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Mon GitHub (nouvel onglet)"
            className="p-3 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <Github className="w-6 h-6" aria-hidden="true" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Mon LinkedIn (nouvel onglet)"
            className="p-3 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <Linkedin className="w-6 h-6" aria-hidden="true" />
          </a>
        </motion.div>
      </div>

      <motion.div
        className="relative hidden lg:block"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="relative w-full max-w-[440px] ml-auto aspect-square rounded-3xl overflow-hidden border border-cyan-500/30 shadow-2xl shadow-cyan-500/10">
          <img
            src="/images/hero-avatar.png"
            alt="Portrait de Konan Othniel Kouakou"
            width={440}
            height={440}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent" aria-hidden="true" />
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
