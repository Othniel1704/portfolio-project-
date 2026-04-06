import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, User, Code2, Link as LinkIcon, FileText, CheckCircle2, Image as ImageIcon } from 'lucide-react';
import { projectsData } from '../data/projectsData';
import { getCompetencyById } from '../data/btsSioCompetencies';

const ProjectDetail = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const project = projectsData.find(p => p.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!project) {
        return (
            <div className="min-h-screen bg-slate-950 flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl text-white mb-4">Projet non trouvé</h2>
                    <Link to="/projects" className="text-cyan-400 hover:text-cyan-300">
                        Retour aux projets
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-950 pt-20 pb-12">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.button
                    onClick={() => navigate('/projects')}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center text-gray-400 hover:text-cyan-400 transition-colors mb-8 group"
                >
                    <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                    Retour aux projets
                </motion.button>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16"
                >
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            {project.title}
                        </h1>
                        <p className="text-xl text-gray-300 leading-relaxed mb-8">
                            {project.shortDescription}
                        </p>

                        <div className="flex flex-wrap gap-3 mb-8">
                            {project.tags.map(tag => (
                                <span key={tag} className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 rounded-full text-sm">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <div className="space-y-4 text-gray-400">
                            <div className="flex items-center">
                                <Calendar className="w-5 h-5 mr-3 text-cyan-500" />
                                <span>{project.duration}</span>
                            </div>
                            <div className="flex items-center">
                                <User className="w-5 h-5 mr-3 text-cyan-500" />
                                <span>{project.role}</span>
                            </div>
                        </div>
                    </div>

                    <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-cyan-500/10 border border-slate-800">
                        {/* Use a placeholder if image fails or is empty, but for now assuming data is valid or has placeholders */}
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2 space-y-12">

                        {/* Context Section */}
                        <section className="bg-slate-900/50 rounded-2xl p-8 border border-slate-800">
                            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                                <FileText className="w-6 h-6 mr-3 text-cyan-400" />
                                Contexte & Besoin
                            </h2>
                            <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                                {project.fullDescription}
                            </p>
                            <div className="mt-4 p-4 bg-slate-800/50 rounded-lg border-l-4 border-cyan-500">
                                <h4 className="text-sm font-bold text-cyan-400 mb-1 uppercase tracking-wide">Cadre du projet</h4>
                                <p className="text-gray-400 text-sm">{project.context}</p>
                            </div>
                        </section>

                        {/* Proofs Section */}
                        <section className="space-y-6">
                            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                                <ImageIcon className="w-6 h-6 mr-3 text-purple-400" />
                                Preuves & Livrables
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {project.proofs.map((proof, idx) => (
                                    <a
                                        key={idx}
                                        href={proof.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center p-4 bg-slate-800 hover:bg-slate-750 border border-slate-700 hover:border-cyan-500/50 rounded-xl transition-all group"
                                    >
                                        <div className="p-3 bg-slate-900 rounded-lg mr-4 group-hover:scale-110 transition-transform">
                                            {proof.type === 'image' && <ImageIcon className="w-5 h-5 text-blue-400" />}
                                            {proof.type === 'pdf' && <FileText className="w-5 h-5 text-red-400" />}
                                            {proof.type === 'code' && <Code2 className="w-5 h-5 text-yellow-400" />}
                                            {proof.type === 'link' && <LinkIcon className="w-5 h-5 text-green-400" />}
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-white group-hover:text-cyan-400 transition-colors">
                                                {proof.title}
                                            </h4>
                                            <span className="text-xs text-slate-500 uppercase tracking-wider">{proof.type}</span>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </section>

                        {/* Technologies */}
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                                <Code2 className="w-6 h-6 mr-3 text-cyan-400" />
                                Technologies
                            </h2>
                            <div className="flex flex-wrap gap-3">
                                {project.technologies.map(tech => (
                                    <span key={tech} className="px-4 py-2 bg-slate-800 border border-slate-700 text-gray-300 rounded-lg font-medium">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </section>
                    </div>

                    <div className="space-y-8">
                        {/* Competencies Section - Crucial for BTS SIO */}
                        <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800 sticky top-24">
                            <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                                <CheckCircle2 className="w-5 h-5 mr-3 text-green-400" />
                                Compétences Validées
                            </h3>
                            <div className="space-y-4">
                                {project.competencies.map((comp, idx) => {
                                    const btsComp = getCompetencyById(comp.id);
                                    if (!btsComp) return null;
                                    return (
                                        <div key={idx} className="flex items-start bg-slate-800/50 p-4 rounded-xl border border-slate-700/50 hover:border-cyan-500/30 transition-colors">
                                            <div className="mt-0.5 mr-4 min-w-[32px]">
                                                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-400 text-sm font-bold border border-cyan-500/20 shadow-inner">
                                                    {btsComp.id}
                                                </div>
                                            </div>
                                            <div>
                                                <div className="flex items-center gap-2 mb-1.5">
                                                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-700 text-gray-300">
                                                        {btsComp.bloc}
                                                    </span>
                                                </div>
                                                <h4 className="text-white font-medium mb-1">{btsComp.name}</h4>
                                                {comp.description && (
                                                    <p className="text-gray-400 text-sm leading-relaxed">{comp.description}</p>
                                                )}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Links */}
                        {(project.github || project.demo) && (
                            <div className="flex gap-4">
                                {project.github && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 flex justify-center items-center px-6 py-3 bg-slate-800 text-white rounded-xl font-bold hover:bg-slate-700 border border-slate-700 transition"
                                    >
                                        <Code2 className="w-5 h-5 mr-2" />
                                        GitHub
                                    </a>
                                )}
                                {project.demo && (
                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 flex justify-center items-center px-6 py-3 bg-cyan-500 text-slate-950 rounded-xl font-bold hover:bg-cyan-400 transition shadow-lg shadow-cyan-500/20"
                                    >
                                        <LinkIcon className="w-5 h-5 mr-2" />
                                        Voir le site
                                    </a>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail;
