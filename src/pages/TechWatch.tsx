import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import { techWatchData } from '../data/techWatchData'; // Fallback data
import { fetchRSS, RSSArticle } from '../services/rssService';
import { ExternalLink, Calendar, Brain, Sparkles, Code2, Bot, Rss, Twitter, Search, Newspaper, Monitor, Layers, RefreshCw } from 'lucide-react';

const TechWatch = () => {
    const [articles, setArticles] = useState<any[]>([]);
    const [rssArticles, setRssArticles] = useState<RSSArticle[]>([]);
    const [loading, setLoading] = useState(true);
    const [rssLoading, setRssLoading] = useState(false);

    const loadRSS = async () => {
        setRssLoading(true);
        // Flux RSS de Dev.to (IA)
        const dailyArticles = await fetchRSS('https://dev.to/feed/tag/ai');
        setRssArticles(dailyArticles.slice(0, 6)); // Garder les 6 derniers
        setRssLoading(false);
    };

    useEffect(() => {
        const fetchArticles = async () => {
            // Logic for static/supabase articles
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
        loadRSS();
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
                    
                    {/* Featured Theme */}
                    <div className="mb-12">
                        <div className="relative group">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                            <div className="relative flex flex-col md:flex-row items-center p-8 bg-slate-900 rounded-2xl border border-slate-800 leading-none">
                                <div className="p-5 bg-cyan-500/10 rounded-2xl text-cyan-400 mb-6 md:mb-0 md:mr-8 shrink-0">
                                    <Brain size={48} />
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="px-2 py-1 bg-cyan-500 text-slate-950 text-[10px] font-black uppercase rounded tracking-widest">Thème Principal</span>
                                        <span className="text-gray-500 text-xs">• Veille Active</span>
                                    </div>
                                    <h3 className="text-3xl font-bold text-white mb-4">L'impact de l'IA sur le métier de développeur</h3>
                                    <div className="text-gray-400 text-base lg:text-lg leading-relaxed max-w-4xl space-y-4">
                                        <p>
                                            Pour ma veille technologique, je me suis intéressé à l'impact de l'intelligence artificielle sur le métier de développeur — un sujet que j'ai vécu directement durant mes deux stages.
                                        </p>
                                        <p>
                                            Aujourd'hui, l'IA s'est imposée comme un outil quotidien. Le <strong>State of Developer Ecosystem Report 2025 de JetBrains</strong> montre que la quasi-totalité des développeurs ont intégré l'IA dans leur workflow. J'ai personnellement utilisé <strong>GitHub Copilot</strong> et <strong>Firebase Studio</strong> (basé sur Gemini) sur mes projets. Une étude de GitHub a d'ailleurs montré que les développeurs réalisent certaines tâches jusqu'à <strong>55 % plus rapidement</strong> grâce à l'IA.
                                        </p>
                                        <p>
                                            Mais au-delà de la productivité, c'est la <strong>transformation du rôle du développeur</strong> qui est centrale. L'IA prend en charge les tâches répétitives (générer des composants, compléter des structures), ce qui nous libère pour nous concentrer sur l'essentiel : <strong>comprendre le besoin métier, définir l'architecture, et sécuriser les données</strong>.
                                        </p>
                                        <p>
                                            C'est exactement ce que j'ai vécu. Sur le projet d'auto-école, je générais des composants avec l'IA, puis je les évaluais et les adaptais au contexte réel. L'IA m'a fait gagner du temps, mais c'est moi qui ai défini les choix techniques et les contraintes.
                                        </p>
                                        <div className="p-5 mt-6 bg-cyan-500/10 border border-cyan-500/20 rounded-xl">
                                            <p className="text-cyan-400 font-medium italic">
                                                "Ma conclusion : L'IA n'est pas une menace pour le développeur — c'est un amplificateur de compétences, à condition de savoir évaluer ce qu'elle produit."
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </section>

                {/* Section 3: Veille Active en Direct */}
                <section className="mb-20">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-10 border-b border-slate-800 pb-4 gap-4">
                        <h2 className="text-3xl font-bold text-white flex items-center">
                            <Rss className="mr-3 text-orange-400" />
                            Flux en Direct : IA & Code
                        </h2>
                        <button 
                            onClick={loadRSS}
                            disabled={rssLoading}
                            className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-cyan-400 rounded-lg text-sm font-medium transition-colors disabled:opacity-50"
                        >
                            <RefreshCw className={`w-4 h-4 ${rssLoading ? 'animate-spin' : ''}`} />
                            {rssLoading ? 'Actualisation...' : 'Actualiser'}
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {rssLoading ? (
                            Array(6).fill(0).map((_, i) => (
                                <div key={i} className="bg-slate-900/50 rounded-xl h-48 animate-pulse border border-slate-800"></div>
                            ))
                        ) : rssArticles.length > 0 ? (
                            rssArticles.map((article, idx) => {
                                // Strip HTML tags from description
                                const plainDesc = article.description ? article.description.replace(/<[^>]*>?/gm, '') : '';
                                return (
                                    <a 
                                        key={idx}
                                        href={article.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex flex-col p-6 bg-slate-900/50 rounded-xl border border-slate-800 hover:border-orange-500/50 hover:shadow-lg hover:shadow-orange-500/10 hover:-translate-y-1 transition-all group"
                                    >
                                        <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                                            <Calendar size={14} />
                                            {new Date(article.pubDate).toLocaleDateString('fr-FR')}
                                        </div>
                                        <h3 className="text-lg font-bold text-white mb-3 group-hover:text-orange-400 transition-colors line-clamp-2">
                                            {article.title}
                                        </h3>
                                        <p className="text-gray-400 text-sm flex-grow line-clamp-3 mb-4">
                                            {plainDesc}
                                        </p>
                                        <div className="mt-auto text-orange-400 text-sm font-medium flex items-center">
                                            Lire sur Dev.to <ExternalLink size={14} className="ml-1" />
                                        </div>
                                    </a>
                                );
                            })
                        ) : (
                            <div className="col-span-full text-center text-gray-500 py-8 bg-slate-900/30 rounded-xl border border-slate-800 border-dashed">
                                Impossible de charger le flux RSS pour le moment.
                            </div>
                        )}
                    </div>
                </section>

                {/* Section 4: Mes Synthèses */}
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
