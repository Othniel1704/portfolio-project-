import React, { useState, useEffect } from 'react';
import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom';
import { supabase } from '../../lib/supabaseClient';
import { LayoutDashboard, Newspaper, Router, LogOut } from 'lucide-react';

const AdminLayout = () => {
    const [session, setSession] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (!supabase) {
            setLoading(false);
            return;
        }

        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session);
            setLoading(false);
        });

        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session);
        });

        return () => subscription.unsubscribe();
    }, []);

    const handleLogout = async () => {
        if (supabase) await supabase.auth.signOut();
        navigate('/admin/login');
    };

    if (loading) {
        return <div className="min-h-screen bg-slate-950 flex items-center justify-center text-white">Loading...</div>;
    }

    // If not logged in and not on login page, redirect to login
    if (!session && location.pathname !== '/admin/login') {
        // For demo purposes, we might want to allow bypassing auth if keys are missing
        // But for now, let's enforce a simple check or mock login in the login component
        return <div className="min-h-screen bg-slate-950 flex items-center justify-center text-white">
            <Link to="/admin/login" className="text-cyan-400 hover:underline">Please Log In</Link>
        </div>;
    }

    return (
        <div className="min-h-screen bg-slate-950 flex">
            {/* Sidebar */}
            {session && (
                <aside className="w-64 bg-slate-900 border-r border-slate-800 text-white hidden md:block">
                    <div className="p-6 border-b border-slate-800">
                        <h2 className="text-xl font-bold text-cyan-400">Veille Admin</h2>
                    </div>
                    <nav className="p-4 space-y-2">
                        <Link
                            to="/admin/dashboard"
                            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${location.pathname === '/admin/dashboard'
                                ? 'bg-cyan-500/10 text-cyan-400'
                                : 'text-gray-400 hover:bg-slate-800 hover:text-white'
                                }`}
                        >
                            <LayoutDashboard size={20} />
                            Dashboard
                        </Link>
                        <Link
                            to="/admin/articles"
                            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${location.pathname === '/admin/articles'
                                ? 'bg-cyan-500/10 text-cyan-400'
                                : 'text-gray-400 hover:bg-slate-800 hover:text-white'
                                }`}
                        >
                            <Newspaper size={20} />
                            Articles
                        </Link>
                        <Link
                            to="/admin/sources"
                            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${location.pathname === '/admin/sources'
                                ? 'bg-cyan-500/10 text-cyan-400'
                                : 'text-gray-400 hover:bg-slate-800 hover:text-white'
                                }`}
                        >
                            <Router size={20} />
                            Sources
                        </Link>
                    </nav>
                    <div className="absolute bottom-0 w-64 p-4 border-t border-slate-800">
                        <button
                            onClick={handleLogout}
                            className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-red-400 transition-colors w-full"
                        >
                            <LogOut size={20} />
                            Déconnexion
                        </button>
                    </div>
                </aside>
            )}

            {/* Main Content */}
            <main className="flex-1 overflow-auto">
                <div className="p-8">
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export default AdminLayout;
