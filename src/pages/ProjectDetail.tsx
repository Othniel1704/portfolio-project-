import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, User, Code2, Link as LinkIcon, FileText, CheckCircle2, Image as ImageIcon } from 'lucide-react';
import { projectsData } from '../data/projectsData';
import { getCompetencyById } from '../data/btsSioCompetencies';
import { categoryAccent } from '../lib/spotlight';

const ProjectDetail = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const project = projectsData.find(p => p.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const accent = categoryAccent[project?.category ?? 'Autre'] ?? categoryAccent.Autre;

    if (!project) {
        return (
            <div className="min-h-screen bg-ink-950 flex items-center justify-center">
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
        <div className="relative min-h-dvh bg-ink-950 pt-12 pb-24 overflow-hidden" style={{ ['--accent' as string]: accent.rgb }}>
            <div className="absolute inset-x-0 top-0 h-[36rem] pointer-events-none" aria-hidden="true">
                <div className="absolute -top-40 -left-24 w-[32rem] h-[32rem] rounded-full blur-[110px] motion-safe:animate-aurora" style={{ background: 'rgb(var(--accent) / 0.22)' }} />
                <div className="absolute -top-24 right-[-8rem] w-[28rem] h-[28rem] rounded-full bg-violet-600/15 blur-[110px] motion-safe:animate-aurora-slow" />
            </div>
            <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.button
                    onClick={() => navigate('/projects')}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center min-h-[44px] text-slate-300 hover:text-white transition-colors mb-8 group"
                >
                    <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" aria-hidden="true" />
                    Retour aux projets
                </motion.button>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16"
                >
                    <div>
                        <p className={`inline-flex items-center gap-2 text-sm font-semibold mb-4 ${accent.text}`}>
                            <span className="w-2.5 h-2.5 rounded-full" style={{ background: 'rgb(var(--accent))' }} aria-hidden="true" />
                            {accent.label}
                        </p>
                        <h1 className="font-display text-4xl md:text-5xl font-extrabold tracking-[-0.02em] leading-[1.08] text-white mb-6 text-balance">
                            {project.title}
                        </h1>
                        <p className="text-xl text-gray-300 leading-relaxed mb-8">
                            {project.shortDescription}
                        </p>

                        <div className="flex flex-wrap gap-3 mb-8">
                            {project.tags.map(tag => (
                                <span key={tag} className="px-3 py-1 rounded-full text-sm border text-white/90" style={{ background: 'rgb(var(--accent) / 0.12)', borderColor: 'rgb(var(--accent) / 0.35)' }}>
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <div className="space-y-4 text-gray-400">
                            <div className="flex items-center">
                                <Calendar className="w-5 h-5 mr-3 " style={{ color: 'rgb(var(--accent))' }} aria-hidden="true" />
                                <span>{project.duration}</span>
                            </div>
                            <div className="flex items-center">
                                <User className="w-5 h-5 mr-3 " style={{ color: 'rgb(var(--accent))' }} aria-hidden="true" />
                                <span>{project.role}</span>
                            </div>
                        </div>
                    </div>

                    <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/40 border border-white/10">
                        {/* Use a placeholder if image fails or is empty, but for now assuming data is valid or has placeholders */}
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 to-transparent" />
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2 space-y-12">

                        {/* Context Section */}
                        <section className="surface p-6 sm:p-8">
                            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                                <FileText className="w-6 h-6 mr-3 text-cyan-400" />
                                Contexte & Besoin
                            </h2>
                            <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                                {project.fullDescription}
                            </p>
                            <div className="mt-6 p-4 bg-white/5 rounded-xl border-l-4" style={{ borderColor: 'rgb(var(--accent))' }}>
                                <h3 className={`text-sm font-bold mb-1 ${accent.text}`}>Cadre du projet</h3>
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
                                        className="flex items-center p-4 bg-ink-800/60 border border-white/10 hover:border-white/30 rounded-2xl transition-colors group"
                                    >
                                        <div className="p-3 bg-ink-900 rounded-lg mr-4 group-hover:scale-110 transition-transform">
                                            {proof.type === 'image' && <ImageIcon className="w-5 h-5 text-blue-400" />}
                                            {proof.type === 'pdf' && <FileText className="w-5 h-5 text-red-400" />}
                                            {proof.type === 'code' && <Code2 className="w-5 h-5 text-yellow-400" />}
                                            {proof.type === 'link' && <LinkIcon className="w-5 h-5 text-green-400" />}
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-white">
                                                {proof.title}
                                            </h4>
                                            <span className="text-xs text-slate-400">{proof.type}</span>
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
                                    <span key={tech} className="px-4 py-2 bg-white/5 border border-white/10 text-slate-200 rounded-full font-medium">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </section>
                    </div>

                    <div className="space-y-8">
                        {/* Competencies Section - Crucial for BTS SIO */}
                        <div className="surface p-6 sticky top-24">
                            <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                                <CheckCircle2 className="w-5 h-5 mr-3 text-green-400" />
                                Compétences Validées
                            </h3>
                            <div className="space-y-4">
                                {project.competencies.map((comp, idx) => {
                                    const btsComp = getCompetencyById(comp.id);
                                    if (!btsComp) return null;
                                    return (
                                        <div key={idx} className="flex items-start bg-ink-950/50 p-4 rounded-2xl border border-white/10">
                                            <div className="mt-0.5 mr-4 min-w-[32px]">
                                                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-400 text-sm font-bold border border-cyan-500/20 shadow-inner">
                                                    {btsComp.id}
                                                </div>
                                            </div>
                                            <div>
                                                <div className="flex items-center gap-2 mb-1.5">
                                                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-white/10 text-slate-200">
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
                                        className="btn-secondary flex-1"
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
                                        className="btn-primary flex-1"
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
