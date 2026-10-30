import { lazy, Suspense, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Github, Linkedin, Mail } from 'lucide-react';
import { MotionConfig } from 'framer-motion';
import { profile } from './data/profile';

import Navbar from './components/Navbar';

// Chargement paresseux des pages : chaque route est un chunk séparé,
// ce qui allège le bundle initial (notamment la visionneuse PDF du CV).
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const CVPage = lazy(() => import('./pages/CVPage'));
const Projects = lazy(() => import('./pages/Projects'));
const Contact = lazy(() => import('./pages/Contact'));
const TechWatch = lazy(() => import('./pages/TechWatch'));
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'));
const Legal = lazy(() => import('./pages/Legal'));

const PageLoader = () => (
  <div className="flex items-center justify-center min-h-[60vh] text-cyan-400">
    <div className="w-10 h-10 border-2 border-cyan-500/30 border-t-cyan-400 rounded-full animate-spin" />
  </div>
);

// À chaque changement de page : retour en haut et focus sur le contenu
// principal (lecteurs d'écran), sauf au premier chargement.
const RouteChangeHandler = ({ mainRef }: { mainRef: React.RefObject<HTMLElement> }) => {
  const { pathname } = useLocation();
  const first = useRef(true);
  useEffect(() => {
    if (first.current) { first.current = false; return; }
    window.scrollTo(0, 0);
    mainRef.current?.focus({ preventScroll: true });
  }, [pathname, mainRef]);
  return null;
};

function App() {
  const mainRef = useRef<HTMLElement>(null);
  return (
    <Router>
      <MotionConfig reducedMotion="user">
      <RouteChangeHandler mainRef={mainRef} />
      <div className="min-h-dvh bg-ink-950">
        <a
          href="#contenu"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-cyan-300 focus:text-ink-950 focus:font-semibold"
        >
          Aller au contenu
        </a>
        <Navbar />

        <main id="contenu" ref={mainRef} tabIndex={-1} className="pt-16 focus:outline-none">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/cv" element={<CVPage />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/:id" element={<ProjectDetail />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/veille" element={<TechWatch />} />
              <Route path="/mentions-legales" element={<Legal />} />
            </Routes>
          </Suspense>
        </main>


        <footer className="bg-ink-950 border-t border-white/10 py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4">
              <div className="text-gray-400 text-sm">
                <p>© {new Date().getFullYear()} {profile.name}</p>
                <Link to="/mentions-legales" className="hover:text-cyan-400 transition">Mentions Légales</Link>
              </div>
              <div className="flex gap-2 mt-4 md:mt-0">
                <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub (nouvel onglet)" className="p-2 text-gray-400 hover:text-cyan-400 transition">
                  <Github className="w-6 h-6" aria-hidden="true" />
                </a>
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn (nouvel onglet)" className="p-2 text-gray-400 hover:text-cyan-400 transition">
                  <Linkedin className="w-6 h-6" aria-hidden="true" />
                </a>
                <a href={`mailto:${profile.email}`} aria-label="Envoyer un e-mail" className="p-2 text-gray-400 hover:text-cyan-400 transition">
                  <Mail className="w-6 h-6" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
      </MotionConfig>
    </Router>
  );
}

export default App;