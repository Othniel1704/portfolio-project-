import { Link } from 'react-router-dom';
import { ArrowRight, Download, Github, Linkedin, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { profile } from '../data/profile';
import { projectsData } from '../data/projectsData';
import DataField from './DataField';

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.09 } },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 120, damping: 18 } },
};

const stats = [
  { value: `${projectsData.length}`, label: 'projets documentés', color: 'text-cyan-300' },
  { value: '2', label: 'stages en entreprise', color: 'text-violet-300' },
  { value: '0,854', label: 'AUC de mon modèle de scoring', color: 'text-rose-300' },
];

const Hero = () => (
  <section aria-labelledby="hero-title" className="relative overflow-hidden bg-ink-950 pt-10 pb-20 sm:pt-16 sm:pb-28">
    {/* Aurore de fond : trois halos colorés qui dérivent lentement */}
    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
      <div className="absolute -top-40 -left-32 w-[36rem] h-[36rem] rounded-full bg-violet-600/25 blur-[110px] motion-safe:animate-aurora" />
      <div className="absolute top-10 right-[-10rem] w-[34rem] h-[34rem] rounded-full bg-cyan-500/20 blur-[110px] motion-safe:animate-aurora-slow" />
      <div className="absolute bottom-[-14rem] left-1/3 w-[30rem] h-[30rem] rounded-full bg-rose-500/15 blur-[110px] motion-safe:animate-aurora" />
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: 'radial-gradient(rgba(148,163,184,0.18) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          maskImage: 'radial-gradient(ellipse at 50% 30%, black 30%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(ellipse at 50% 30%, black 30%, transparent 75%)',
        }}
      />
    </div>

    <motion.div
      className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-14 items-center"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <div>
        <motion.p variants={item}>
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-400/10 border border-emerald-400/30 text-emerald-300 text-sm font-medium">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 motion-safe:animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            {profile.availabilityShort} pour une alternance Data
          </span>
        </motion.p>

        <h1 id="hero-title" className="mt-6">
          <motion.span variants={item} className="block text-lg sm:text-xl font-semibold text-slate-300">
            Konan Othniel Kouakou
          </motion.span>
          <motion.span
            variants={item}
            className="block mt-2 font-display text-[2.6rem] leading-[1.02] sm:text-6xl lg:text-[4.4rem] font-extrabold tracking-[-0.03em] text-transparent bg-clip-text bg-[linear-gradient(100deg,#ffffff_0%,#a5f3fc_35%,#c4b5fd_65%,#f9a8d4_100%)] text-balance"
          >
            Des données brutes aux décisions.
          </motion.span>
        </h1>

        <motion.p variants={item} className="mt-6 text-lg sm:text-xl text-slate-300 max-w-xl leading-relaxed">
          J'analyse, je modélise et j'automatise avec SQL, Python et les APIs IA. Étudiant en {profile.school},
          après un BTS SIO SLAM et deux stages de développement.
        </motion.p>

        <motion.p variants={item} className="mt-3 flex items-start gap-2 text-slate-400 max-w-xl">
          <MapPin className="w-5 h-5 mt-0.5 shrink-0 text-amber-300" aria-hidden="true" />
          <span>{profile.availabilityLong}</span>
        </motion.p>

        <motion.div variants={item} className="mt-8 flex flex-col sm:flex-row gap-3">
          <Link
            to="/projects"
            className="group inline-flex justify-center items-center gap-2 min-h-[50px] px-6 rounded-xl font-bold whitespace-nowrap text-ink-950 bg-gradient-to-r from-cyan-300 via-violet-300 to-rose-300 bg-[length:200%_100%] bg-left hover:bg-right transition-[background-position] duration-500 shadow-lg shadow-violet-500/25"
          >
            Voir mes projets
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </Link>
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex justify-center items-center gap-2 min-h-[50px] px-6 bg-white/5 text-white border border-white/15 rounded-xl font-semibold whitespace-nowrap hover:bg-white/10 hover:border-white/30 transition-colors backdrop-blur"
          >
            <Download className="h-5 w-5" aria-hidden="true" />
            Télécharger mon CV
          </a>
        </motion.div>

        <motion.dl variants={item} className="mt-10 grid grid-cols-3 gap-4 max-w-lg">
          {stats.map((s) => (
            <div key={s.label}>
              <dt className="sr-only">{s.label}</dt>
              <dd className={`font-display text-3xl sm:text-4xl font-bold tabular-nums ${s.color}`}>{s.value}</dd>
              <dd className="mt-1 text-xs sm:text-sm text-slate-400 leading-snug">{s.label}</dd>
            </div>
          ))}
        </motion.dl>

        <motion.div variants={item} className="mt-8 flex items-center gap-2">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Mon GitHub (nouvel onglet)"
            className="p-3 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
          >
            <Github className="w-6 h-6" aria-hidden="true" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Mon LinkedIn (nouvel onglet)"
            className="p-3 rounded-lg text-slate-400 hover:text-sky-300 hover:bg-white/5 transition-colors"
          >
            <Linkedin className="w-6 h-6" aria-hidden="true" />
          </a>
          <Link to="/contact" className="ml-2 inline-flex items-center min-h-[44px] px-2 text-slate-300 font-semibold hover:text-white underline-offset-4 hover:underline">
            Me contacter
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24, rotate: -1.5 }}
        animate={{ opacity: 1, y: 0, rotate: 0 }}
        transition={{ type: 'spring', stiffness: 70, damping: 16, delay: 0.35 }}
      >
        <DataField />
        <div className="mt-4 hidden lg:flex items-center gap-3">
          <img
            src="/images/hero-avatar.png"
            alt="Portrait de Konan Othniel Kouakou"
            width={48}
            height={48}
            className="w-12 h-12 rounded-full object-cover ring-2 ring-violet-400/60"
          />
          <p className="text-sm text-slate-400">
            Passez la souris sur les points : chaque point est une donnée.
          </p>
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
