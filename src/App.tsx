import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Skills from './pages/Skills';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
      <Router>
        <AppContent /> {/* Composant enfant pour utiliser useLocation */}
      </Router>
    </div>
  );
}

// Nouveau composant interne
function AppContent() {
  const location = useLocation(); // Maintenant valide car enfant de <Router>

  return (
    <>
      <nav className="bg-black text-white p-4">
        <div className="flex justify-center">
          <ul className="flex space-x-4">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/skills">Skills</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </nav>
      <main className="pt-16">
        <TransitionGroup>
          <CSSTransition key={location.key} timeout={300} classNames="page-transition">
            <Routes>
            <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<Home />} />
            </Routes>
          </CSSTransition>
        </TransitionGroup>
      </main>
    </>
  );
}

export default App;