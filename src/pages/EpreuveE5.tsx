import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Check, Info } from 'lucide-react';
import { projectsData } from '../data/projectsData';
import { btsSioCompetencies } from '../data/btsSioCompetencies';

const EpreuveE5 = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Helper functions
    const getCompetenciesByBloc = (bloc: string) => 
        btsSioCompetencies.filter(c => c.bloc === bloc);

    const hasCompetency = (projectId: string, competencyId: string) => {
        const project = projectsData.find(p => p.id === projectId);
        return project?.competencies.some(c => c.id === competencyId);
    };

    // Filter to only Bloc 1 (which are the only ones assessed in E5)
    const e5Competencies = getCompetenciesByBloc('Bloc 1');

    // Filter projects tracked in E5 and sort by exact PDF order
    const e5Projects = projectsData
        .filter(project => project.showInE5)
        .sort((a, b) => (a.e5Order || 99) - (b.e5Order || 99));

    return (
        <div className="min-h-screen bg-slate-950 pt-24 pb-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Épreuve E5 - BTS SIO
                    </h1>
                    <p className="text-xl text-cyan-400 mb-2 font-semibold">
                        Support et mise à disposition de services informatiques
                    </p>
                    <p className="text-lg text-gray-400">
                        Tableau de synthèse des réalisations professionnelles
                    </p>
                </motion.div>

                {/* Legend or Information */}
                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 lg:p-8 mb-12 shadow-xl shadow-black/20">
                    <h2 className="text-xl font-bold text-white mb-6 flex items-center">
                        <Info className="w-6 h-6 mr-3 text-cyan-400" />
                        Légende du Bloc 1 (Évalué en E5)
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-4 md:col-span-2">
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {e5Competencies.map(comp => (
                                    <li key={comp.id} className="text-sm text-gray-300 flex items-start group">
                                        <span className="font-mono text-cyan-500 mr-3 px-1.5 py-0.5 bg-slate-800 rounded text-xs group-hover:bg-cyan-500/20 group-hover:text-cyan-300 transition-colors shrink-0">
                                            {comp.id}
                                        </span>
                                        <span className="leading-snug pt-0.5">{comp.name}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Matrix Table */}
                <div className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden shadow-2xl shadow-black/30">
                    <div className="overflow-x-auto custom-scrollbar">
                        <table className="w-full text-left text-sm text-gray-300 border-collapse">
                            <thead className="bg-slate-800 text-xs uppercase font-medium">
                                <tr>
                                    <th className="px-6 py-5 font-bold text-white sticky left-0 bg-slate-800 z-20 min-w-[20rem] shadow-[4px_0_12px_rgba(0,0,0,0.5)]">
                                        Réalisations Professionnelles
                                    </th>
                                    {e5Competencies.map(comp => (
                                        <th key={comp.id} className="px-3 py-5 text-center min-w-[70px] border-l border-slate-700/50" title={comp.name}>
                                            <div className="font-mono text-cyan-400 font-bold">{comp.id}</div>
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-800/50">
                                {e5Projects.map((project, index) => (
                                    <tr key={project.id} className="hover:bg-slate-800/30 transition-colors group">
                                        <td className="px-6 py-4 sticky left-0 bg-slate-900 group-hover:bg-slate-800/90 z-10 font-medium text-gray-200 border-r border-slate-800/50 shadow-[4px_0_12px_rgba(0,0,0,0.2)] transition-colors">
                                            <div className="flex flex-col">
                                                <div className="flex items-center">
                                                    <span className="text-cyan-500 font-mono text-xs mr-3 opacity-50">{(index + 1).toString().padStart(2, '0')}</span>
                                                    <span className="truncate max-w-[400px]" title={project.title}>{project.title}</span>
                                                </div>
                                            </div>
                                        </td>
                                        {e5Competencies.map(comp => (
                                            <td key={`${project.id}-${comp.id}`} className="px-3 py-4 text-center border-l border-slate-800/50">
                                                {hasCompetency(project.id, comp.id) ? (
                                                    <div className="flex justify-center transform group-hover:scale-110 transition-transform">
                                                        <div className="w-7 h-7 rounded-md bg-green-500/10 border border-green-500/20 flex items-center justify-center">
                                                            <Check className="w-4 h-4 text-green-400" />
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <span className="text-slate-800">-</span>
                                                )}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                
                <div className="mt-8 text-center space-y-2">
                    <p className="text-gray-500 text-sm">
                        * Ce tableau est calqué et conforme à la grille officielle fournie pour la session d'examen.
                    </p>
                    <p className="text-gray-500 text-sm">
                        * Survolez ou consultez la légende pour le détail des compétences.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default EpreuveE5;
