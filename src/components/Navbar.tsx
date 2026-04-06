import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const [scrolled, setScrolled] = useState(false);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close menu when route changes
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    const navLinks = [
        { name: 'À propos', path: '/about' },
        { name: 'Projets', path: '/projects' },
        { name: 'Veille', path: '/veille' },
        { name: 'Épreuve E5', path: '/epreuve-e5' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/95 backdrop-blur-md border-b border-slate-800 shadow-md' : 'bg-transparent'
            }`}>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link to="/" className="text-xl font-bold text-white hover:text-cyan-400 transition flex items-center gap-2">
                            <span className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center text-white text-sm">
                                KO
                            </span>
                            Portfolio
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`text-sm font-medium transition-colors duration-200 ${location.pathname === link.path
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
                            className="text-gray-400 hover:text-white transition"
                        >
                            <Github className="w-5 h-5" />
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-300 hover:text-white p-2"
                            aria-label="Toggle menu"
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
                        className="md:hidden bg-slate-900 border-b border-slate-800 overflow-hidden"
                    >
                        <div className="px-4 pt-2 pb-6 space-y-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className={`block px-3 py-3 rounded-md text-base font-medium ${location.pathname === link.path
                                        ? 'bg-cyan-500/10 text-cyan-400'
                                        : 'text-gray-300 hover:text-white hover:bg-slate-800'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="pt-4 flex justify-center space-x-6 border-t border-slate-800 mt-4">
                                <a href="https://github.com/Othniel1704" className="text-gray-400 hover:text-cyan-400">
                                    <Github className="w-6 h-6" />
                                </a>
                                <a href="https://www.linkedin.com/in/othniel-kouakou" className="text-gray-400 hover:text-cyan-400">
                                    <Linkedin className="w-6 h-6" />
                                </a>
                                <a href="mailto:kkonanothniel@gmail.com" className="text-gray-400 hover:text-cyan-400">
                                    <Mail className="w-6 h-6" />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
