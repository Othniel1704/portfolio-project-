import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Github, Linkedin, Mail } from 'lucide-react';
import React, { Suspense, lazy } from 'react';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const CVPage = lazy(() => import('./pages/CVPage'));
const Projects = lazy(() => import('./pages/Projects'));
const Contact = lazy(() => import('./pages/Contact'));
const TechWatch = lazy(() => import('./pages/TechWatch'));
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'));
const Legal = lazy(() => import('./pages/Legal'));
const EpreuveE5 = lazy(() => import('./pages/EpreuveE5'));

import AdminLayout from './components/admin/AdminLayout';
const AdminLogin = lazy(() => import('./pages/admin/Login'));
const Dashboard = lazy(() => import('./pages/admin/Dashboard'));

import Navbar from './components/Navbar';

// Loading Fallback Component
const LoadingFallback = () => (
  <div className="flex justify-center items-center h-[50vh]">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-500"></div>
  </div>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-950 flex flex-col font-sans transition-colors duration-300">
        <Navbar />

        <main className="pt-16 flex-grow">
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/cv" element={<CVPage />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/:id" element={<ProjectDetail />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/veille" element={<TechWatch />} />
              <Route path="/epreuve-e5" element={<EpreuveE5 />} />
              <Route path="/mentions-legales" element={<Legal />} />

              {/* Admin Routes */}
              <Route path="/admin" element={<AdminLayout />}>
                <Route path="login" element={<AdminLogin />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route index element={<AdminLogin />} />
              </Route>
            </Routes>
          </Suspense>
        </main>

        <footer className="bg-slate-900 border-t border-slate-800 py-12 mt-auto">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4">
              <div className="text-gray-400 text-sm">
                <p>© {new Date().getFullYear()} Konan Othniel Kouakou.</p>
                <Link to="/mentions-legales" className="hover:text-cyan-400 transition-colors">Mentions Légales</Link>
              </div>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="https://github.com/Othniel1704" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-transform hover:scale-110">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/in/othniel-kouakou" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition-transform hover:scale-110">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="mailto:kkonanothniel@gmail.com" className="text-gray-400 hover:text-red-500 transition-transform hover:scale-110">
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
