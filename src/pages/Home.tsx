import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';
import Hero from '../components/Hero';
import FeaturedProjects from '../components/FeaturedProjects';
import Skills from '../components/Skills';
import { profile } from '../data/profile';

const Home = () => (
  <>
    <Hero />
    <FeaturedProjects />
    <Skills />
    <section aria-labelledby="cta-title" className="relative overflow-hidden py-24 bg-ink-950">
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-72 bg-gradient-to-r from-cyan-500/15 via-violet-500/20 to-rose-500/15 blur-3xl" aria-hidden="true" />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 id="cta-title" className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4 text-balance">
          Vous cherchez un alternant Data ?
        </h2>
        <p className="text-slate-400 mb-8 max-w-2xl mx-auto">{profile.availabilityLong}</p>
        <div className="flex flex-col sm:flex-row justify-center gap-3">
          <Link
            to="/contact"
            className="inline-flex justify-center items-center gap-2 min-h-[48px] px-6 text-ink-950 rounded-xl font-bold bg-gradient-to-r from-cyan-300 via-violet-300 to-rose-300 hover:brightness-110 transition"
          >
            <Mail className="w-5 h-5" aria-hidden="true" />
            Me contacter
          </Link>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex justify-center items-center min-h-[48px] px-6 text-slate-200 border border-white/15 bg-white/5 rounded-xl font-semibold hover:border-white/30 transition-colors"
          >
            {profile.email}
          </a>
        </div>
      </div>
    </section>
  </>
);

export default Home;
