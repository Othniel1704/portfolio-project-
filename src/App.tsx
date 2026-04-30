
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Github, Linkedin, Mail } from 'lucide-react';
import Home from './pages/Home';
import About from './pages/About';
import CVPage from './pages/CVPage';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import TechWatch from './pages/TechWatch';
import ProjectDetail from './pages/ProjectDetail';
import Legal from './pages/Legal';
import EpreuveE5 from './pages/EpreuveE5';


import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-950">
        <Navbar />

        <main className="pt-16">
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



          </Routes>
        </main>


        <footer className="bg-slate-900 border-t border-slate-800 py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4">
              <div className="text-gray-400 text-sm">
                <p>© 2024 Konan Othniel Kouakou.</p>
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