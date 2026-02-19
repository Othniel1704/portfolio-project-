import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import { techWatchData } from '../data/techWatchData'; // Fallback data
import { ExternalLink, Calendar, Brain, Sparkles, Code2, Bot, Rss, Twitter, Search, Newspaper, Monitor, Layers, Zap } from 'lucide-react';

const TechWatch = () => {
    const [articles, setArticles] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchArticles = async () => {
            // If no Supabase client or URL, use static data
            if (!supabase) {
                setArticles(techWatchData);
                setLoading(false);
                return;
            }

            const { data, error } = await supabase
                .from('articles')
                .select('*')
                .eq('status', 'published')
                .order('date', { ascending: false });

            if (error) {
                console.error('Error fetching articles:', error);
                setArticles(techWatchData);
            } else {
                const mappedData = (data || []).map(item => ({
                    ...item,
                    icon: getIconForCategory(item.category)
                }));
                setArticles(mappedData.length > 0 ? mappedData : techWatchData);
            }
            setLoading(false);
        };

        fetchArticles();
    }, []);

    const getIconForCategory = (category: string) => {
        switch (category) {
            case 'AI': return Brain;
            case 'Vibe Coding': return Sparkles;
            case 'Dev': return Code2;
            default: return Bot;
        }
    };

    const tools = [
        { name: "Feedly", icon: <Rss className="text-orange-400" />, description: "Agrégateur de flux RSS pour suivre les blogs techniques." },
        { name: "Twitter / X", icon: <Twitter className="text-blue-400" />, description: "Suivi des leaders d'opinion et threads techniques." },
        { name: "Daily.dev", icon: <Newspaper className="text-purple-400" />, description: "Extension pour découvrir les articles tendance." },
        { name: "GitHub Trending", icon: <Search className="text-gray-200" />, description: "Découverte des nouveaux repos et outils open-source." }
    ];

    const themes = [
        { name: "Intelligence Artificielle", icon: <Brain />, description: "LLMs, Agents autonomes, RAG" },
        { name: "Vibe Coding", icon: <Sparkles />, description: "Nouvelle approche du dev assisté par IA" },
        { name: "Performance Web", icon: <Zap />, description: "Core Web Vitals, Optimisation React" },
        { name: "Architecture", icon: <Layers />, description: "Micro-frontends, Server Components" }
    ];

    return (
        <div className="min-h-screen bg-slate-950 pt-24 pb-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <header className="mb-16 text-center">
                    <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                        Veille <span className="text-cyan-400">Technologique</span>
                    </h1>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        Ma stratégie pour rester à jour dans un écosystème en constante évolution.
                        Outils, thèmes de prédilection et synthèse des dernières découvertes.
                    </p>
                </header>

                {/* Section 1: Outils de Veille */}
                <section className="mb-20">
                    <h2 className="text-3xl font-bold text-white mb-10 flex items-center border-b border-slate-800 pb-4">
                        <Monitor className="mr-3 text-cyan-400" />
                        Mes Outils de Veille
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {tools.map((tool, idx) => (
                            <div key={idx} className="bg-slate-900/50 p-6 rounded-xl border border-slate-800 hover:border-cyan-500/30 transition-all hover:-translate-y-1">
                                <div className="mb-4 bg-slate-800 w-12 h-12 rounded-lg flex items-center justify-center">
                                    {tool.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">{tool.name}</h3>
                                <p className="text-gray-400 text-sm">{tool.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Section 2: Thèmes Suivis */}
                <section className="mb-20">
                    <h2 className="text-3xl font-bold text-white mb-10 flex items-center border-b border-slate-800 pb-4">
                        <Layers className="mr-3 text-purple-400" />
                        Thèmes Suivis
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {themes.map((theme, idx) => (
                            <div key={idx} className="flex items-start p-6 bg-slate-900 rounded-xl border-l-4 border-cyan-500">
                                <div className="mr-4 mt-1 text-cyan-400">
                                    {theme.icon}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-1">{theme.name}</h3>
                                    <p className="text-gray-400">{theme.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Section 3: Synthèse & Actualités */}
                <section>
                    <h2 className="text-3xl font-bold text-white mb-10 flex items-center border-b border-slate-800 pb-4">
                        <Newspaper className="mr-3 text-green-400" />
                        Synthèse & Actualités
                    </h2>
                    <div className="grid gap-8">
                        {loading ? (
                            <div className="text-center text-gray-500">Chargement...</div>
                        ) : (
                            articles.map((item) => {
                                const Icon = item.icon || getIconForCategory(item.category);
                                return (
                                    <div
                                        key={item.id}
                                        className="bg-slate-900/50 rounded-xl p-6 border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 group"
                                    >
                                        <div className="flex items-start gap-4">
                                            <div className="hidden sm:flex p-3 bg-slate-800 rounded-lg group-hover:bg-cyan-500/20 group-hover:text-cyan-400 transition-colors">
                                                <Icon size={24} />
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                                                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                                                        {item.title}
                                                    </h3>
                                                    <div className="flex items-center gap-3 text-sm text-gray-500">
                                                        <span className="flex items-center gap-1">
                                                            <Calendar size={14} />
                                                            {item.date}
                                                        </span>
                                                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${item.category === 'AI' ? 'bg-purple-500/10 text-purple-400' :
                                                            item.category === 'Vibe Coding' ? 'bg-pink-500/10 text-pink-400' :
                                                                'bg-blue-500/10 text-blue-400'
                                                            }`}>
                                                            {item.category}
                                                        </span>
                                                    </div>
                                                </div>

                                                <p className="text-gray-300 leading-relaxed mb-4">
                                                    {item.summary || item.description}
                                                </p>

                                                {item.link && (
                                                    <a
                                                        href={item.link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
                                                    >
                                                        En savoir plus <ExternalLink size={14} />
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        )}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default TechWatch;
