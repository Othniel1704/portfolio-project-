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
    <section aria-labelledby="cta-title" className="py-20 bg-slate-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 id="cta-title" className="text-3xl sm:text-4xl font-bold text-white mb-4 text-balance">
          Vous cherchez un alternant Data ?
        </h2>
        <p className="text-slate-400 mb-8 max-w-2xl mx-auto">{profile.availabilityLong}</p>
        <div className="flex flex-col sm:flex-row justify-center gap-3">
          <Link
            to="/contact"
            className="inline-flex justify-center items-center gap-2 min-h-[48px] px-6 bg-cyan-500 text-slate-950 rounded-xl font-bold hover:bg-cyan-400 transition-colors"
          >
            <Mail className="w-5 h-5" aria-hidden="true" />
            Me contacter
          </Link>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex justify-center items-center min-h-[48px] px-6 text-slate-200 border border-slate-700 rounded-xl font-semibold hover:border-cyan-500/60 transition-colors"
          >
            {profile.email}
          </a>
        </div>
      </div>
    </section>
  </>
);

export default Home;
