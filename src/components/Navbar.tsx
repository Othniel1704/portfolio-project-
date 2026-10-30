import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const [scrolled, setScrolled] = useState(false);
    const [progress, setProgress] = useState(0);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
            const max = document.documentElement.scrollHeight - window.innerHeight;
            setProgress(max > 0 ? window.scrollY / max : 0);
        };
        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close menu when route changes
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    const navLinks = [
        { name: 'À propos', path: '/about' },
        { name: 'Projets', path: '/projects' },
        { name: 'CV', path: '/cv' },
        { name: 'Veille', path: '/veille' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-ink-950/85 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
            }`}>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link to="/" className="text-xl font-bold text-white hover:text-cyan-400 transition flex items-center gap-2">
                            <span aria-hidden="true" className="w-8 h-8 bg-gradient-to-br from-cyan-400 via-violet-500 to-rose-400 rounded-lg font-display flex items-center justify-center text-white text-sm">
                                KO
                            </span>
                            <span>Konan Kouakou</span>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                aria-current={location.pathname === link.path ? 'page' : undefined}
                                className={`text-sm font-medium py-2 transition-colors duration-200 ${location.pathname === link.path
                                    ? 'text-cyan-400'
                                    : 'text-gray-300 hover:text-white'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <a
                            href="https://github.com/Othniel1704"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub (nouvel onglet)"
                            className="p-2 text-gray-400 hover:text-white transition"
                        >
                            <Github className="w-5 h-5" aria-hidden="true" />
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-300 hover:text-white p-2"
                            aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
                            aria-expanded={isOpen}
                            aria-controls="menu-mobile"
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        id="menu-mobile"
                        className="md:hidden bg-ink-950 border-b border-white/10 overflow-hidden"
                    >
                        <div className="px-4 pt-2 pb-6 space-y-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    aria-current={location.pathname === link.path ? 'page' : undefined}
                                    className={`block px-3 py-3 rounded-md text-base font-medium ${location.pathname === link.path
                                        ? 'bg-cyan-500/10 text-cyan-400'
                                        : 'text-gray-300 hover:text-white hover:bg-ink-800'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="pt-4 flex justify-center gap-4 border-t border-white/10 mt-4">
                                <a href="https://github.com/Othniel1704" aria-label="GitHub" className="p-2 text-gray-400 hover:text-cyan-400">
                                    <Github className="w-6 h-6" aria-hidden="true" />
                                </a>
                                <a href="https://www.linkedin.com/in/othniel-kouakou" aria-label="LinkedIn" className="p-2 text-gray-400 hover:text-cyan-400">
                                    <Linkedin className="w-6 h-6" aria-hidden="true" />
                                </a>
                                <a href="mailto:kkonanothniel@gmail.com" aria-label="E-mail" className="p-2 text-gray-400 hover:text-cyan-400">
                                    <Mail className="w-6 h-6" aria-hidden="true" />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
            {/* Barre de progression de lecture */}
            <div
                className="absolute left-0 bottom-0 h-[2px] w-full origin-left bg-gradient-to-r from-cyan-300 via-violet-400 to-rose-400"
                style={{ transform: `scaleX(${progress})` }}
                aria-hidden="true"
            />
        </nav>
    );
};

export default Navbar;
