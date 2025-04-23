import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Github, Linkedin, Mail } from 'lucide-react';
import Home from './pages/Home';
import About from './pages/About';
import CVPage from './pages/CVPage';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
        <nav className="fixed top-0 w-full bg-slate-900/90 backdrop-blur-sm z-50 border-b border-slate-700">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <Link to="/" className="text-xl font-bold text-white hover:text-purple-400 transition">Portfolio</Link>
              </div>
              <div className="flex items-center space-x-6">
                <Link to="/about" className="text-gray-300 hover:text-purple-400 transition">À propos</Link>
                <Link to="/projects" className="text-gray-300 hover:text-purple-400 transition">Projets</Link>
                <Link to="/contact" className="text-gray-300 hover:text-purple-400 transition">Contact</Link>
              </div>
            </div>
          </div>
        </nav>

        <main className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/cv" element={<CVPage />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <footer className="bg-slate-900 text-white py-8 border-t border-slate-700">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400">© 2024 Portfolio. Tous droits réservés.</p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="https://github.com/Othniel1704" className="text-gray-400 hover:text-purple-400 transition">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/in/othniel-kouakou" className="text-gray-400 hover:text-purple-400 transition">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="mailto:kkonanothniel@gmail.com" className="text-gray-400 hover:text-purple-400 transition">
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