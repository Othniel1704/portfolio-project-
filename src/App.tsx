import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Github, Linkedin, Mail } from 'lucide-react';

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

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-950">
        <Navbar />

        <main className="pt-16">
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


        <footer className="bg-slate-900 border-t border-slate-800 py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4">
              <div className="text-gray-400 text-sm">
                <p>© 2026 Konan Othniel Kouakou.</p>
                <Link to="/mentions-legales" className="hover:text-cyan-400 transition">Mentions Légales</Link>
              </div>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="https://github.com/Othniel1704" className="text-gray-400 hover:text-cyan-400 transition">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/in/othniel-kouakou" className="text-gray-400 hover:text-cyan-400 transition">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="mailto:kkonanothniel@gmail.com" className="text-gray-400 hover:text-cyan-400 transition">
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div >
    </Router >
  );
}

export default App;