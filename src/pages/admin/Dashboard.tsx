import React, { useEffect, useState } from 'react';
import { supabase, Article } from '../../lib/supabaseClient';
import { Play, Plus, Edit, Trash2, CheckCircle, XCircle, ExternalLink, X } from 'lucide-react';
import { fetchAndAnalyzeArticles } from '../../services/contentManager';

const Dashboard = () => {
    const [articles, setArticles] = useState<Article[]>([]);
    const [loading, setLoading] = useState(true);
    const [processing, setProcessing] = useState(false);

    // Modal State
    const [showModal, setShowModal] = useState(false);
    const [newArticle, setNewArticle] = useState({
        title: '',
        link: '',
        category: 'AI',
        summary: '',
        source: 'Manuel'
    });

    useEffect(() => {
        fetchArticles();
    }, []);

    const fetchArticles = async () => {
        try {
            if (!supabase) {
                setLoading(false);
                return;
            }

            const { data, error } = await supabase
                .from('articles')
                .select('*')
                .order('created_at', { ascending: false });

            if (error) throw error;
            setArticles(data || []);
        } catch (error) {
            console.error('Error fetching articles:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleRunVeille = async () => {
        setProcessing(true);
        try {
            await fetchAndAnalyzeArticles();
            await fetchArticles();
            alert("Veille terminée !");
        } catch (error) {
            console.error("Error running veille:", error);
            alert("Erreur lors de la veille. Vérifiez la console.");
        } finally {
            setProcessing(false);
        }
    };

    const handleAddManual = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!supabase) return;

        const { error } = await supabase.from('articles').insert({
            ...newArticle,
            status: 'draft',
            date: new Date().toISOString().split('T')[0]
        });

        if (error) {
            alert("Erreur lors de l'ajout: " + error.message);
        } else {
            setShowModal(false);
            setNewArticle({ title: '', link: '', category: 'AI', summary: '', source: 'Manuel' });
            fetchArticles();
        }
    };

    const toggleStatus = async (id: number, currentStatus: string) => {
        if (!supabase) return;
        const newStatus = currentStatus === 'draft' ? 'published' : 'draft';
        const { error } = await supabase.from('articles').update({ status: newStatus }).eq('id', id);
        if (!error) fetchArticles();
    };

    const deleteArticle = async (id: number) => {
        if (confirm("Supprimer cet article ?")) {
            if (!supabase) return;
            const { error } = await supabase.from('articles').delete().eq('id', id);
            if (!error) fetchArticles();
        }
    };

    return (
        <div>
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold text-white">Dashboard</h1>
                <div className="flex gap-4">
                    <button
                        onClick={handleRunVeille}
                        disabled={processing}
                        className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white px-4 py-2 rounded-lg transition-all disabled:opacity-50"
                    >
                        <Play size={18} className={processing ? "animate-pulse" : ""} />
                        {processing ? 'Analyse en cours...' : 'Lancer la Veille IA'}
                    </button>
                    <button
                        onClick={() => setShowModal(true)}
                        className="flex items-center gap-2 bg-cyan-600 hover:bg-cyan-500 text-white px-4 py-2 rounded-lg transition-colors"
                    >
                        <Plus size={18} />
                        Ajouter manuellement
                    </button>
                </div>
            </div>

            {/* Manual Add Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 w-full max-w-lg shadow-2xl">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-xl font-bold text-white">Ajouter un article</h2>
                            <button onClick={() => setShowModal(false)} className="text-gray-400 hover:text-white">
                                <X size={24} />
                            </button>
                        </div>
                        <form onSubmit={handleAddManual} className="space-y-4">
                            <div>
                                <label className="block text-gray-400 text-sm mb-1">Titre</label>
                                <input
                                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white"
                                    value={newArticle.title}
                                    onChange={e => setNewArticle({ ...newArticle, title: e.target.value })}
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-gray-400 text-sm mb-1">Lien</label>
                                <input
                                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white"
                                    value={newArticle.link}
                                    onChange={e => setNewArticle({ ...newArticle, link: e.target.value })}
                                    required
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-gray-400 text-sm mb-1">Catégorie</label>
                                    <select
                                        className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white"
                                        value={newArticle.category}
                                        onChange={e => setNewArticle({ ...newArticle, category: e.target.value })}
                                    >
                                        <option value="AI">AI</option>
                                        <option value="Vibe Coding">Vibe Coding</option>
                                        <option value="Dev">Dev</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-gray-400 text-sm mb-1">Source</label>
                                    <input
                                        className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white"
                                        value={newArticle.source}
                                        onChange={e => setNewArticle({ ...newArticle, source: e.target.value })}
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-gray-400 text-sm mb-1">Résumé</label>
                                <textarea
                                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white h-24"
                                    value={newArticle.summary}
                                    onChange={e => setNewArticle({ ...newArticle, summary: e.target.value })}
                                    required
                                />
                            </div>
                            <div className="flex justify-end gap-3 mt-6">
                                <button
                                    type="button"
                                    onClick={() => setShowModal(false)}
                                    className="px-4 py-2 text-gray-400 hover:text-white"
                                >
                                    Annuler
                                </button>
                                <button
                                    type="submit"
                                    className="bg-cyan-600 hover:bg-cyan-500 text-white px-4 py-2 rounded-lg"
                                >
                                    Ajouter
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            <div className="bg-slate-900 rounded-xl border border-slate-800 overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-slate-800 text-gray-400">
                        <tr>
                            <th className="p-4 font-medium">Titre</th>
                            <th className="p-4 font-medium">Source</th>
                            <th className="p-4 font-medium">Catégorie</th>
                            <th className="p-4 font-medium">Statut</th>
                            <th className="p-4 font-medium text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800">
                        {loading ? (
                            <tr><td colSpan={5} className="p-4 text-center text-gray-400">Chargement...</td></tr>
                        ) : articles.length === 0 ? (
                            <tr><td colSpan={5} className="p-4 text-center text-gray-400">Aucun article.</td></tr>
                        ) : (
                            articles.map((article) => (
                                <tr key={article.id} className="hover:bg-slate-800/50 transition-colors">
                                    <td className="p-4">
                                        <div className="font-medium text-white">{article.title}</div>
                                        <div className="text-sm text-gray-500 truncate max-w-xs">{article.summary}</div>
                                    </td>
                                    <td className="p-4 text-gray-400">
                                        <a href={article.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-cyan-400">
                                            {article.source} <ExternalLink size={12} />
                                        </a>
                                    </td>
                                    <td className="p-4">
                                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${article.category === 'AI' ? 'bg-purple-500/10 text-purple-400' :
                                            article.category === 'Vibe Coding' ? 'bg-pink-500/10 text-pink-400' :
                                                'bg-blue-500/10 text-blue-400'
                                            }`}>
                                            {article.category}
                                        </span>
                                    </td>
                                    <td className="p-4">
                                        <button
                                            onClick={() => toggleStatus(article.id, article.status)}
                                            className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium cursor-pointer transition-colors ${article.status === 'published'
                                                ? 'bg-green-500/10 text-green-400 hover:bg-green-500/20'
                                                : 'bg-yellow-500/10 text-yellow-400 hover:bg-yellow-500/20'
                                                }`}
                                        >
                                            {article.status === 'published' ? <CheckCircle size={12} /> : <XCircle size={12} />}
                                            {article.status === 'published' ? 'Publié' : 'Brouillon'}
                                        </button>
                                    </td>
                                    <td className="p-4 text-right">
                                        <div className="flex justify-end gap-2">
                                            <button className="p-2 text-gray-400 hover:text-cyan-400 transition-colors">
                                                <Edit size={16} />
                                            </button>
                                            <button
                                                onClick={() => deleteArticle(article.id)}
                                                className="p-2 text-gray-400 hover:text-red-400 transition-colors"
                                            >
                                                <Trash2 size={16} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Dashboard;
