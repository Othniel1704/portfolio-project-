import { createClient } from '@supabase/supabase-js';

// These environment variables will need to be set in a .env file
// For now, we'll use empty strings placeholders to avoid runtime errors
// The user will need to provide their own keys
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

const isPlaceholder = supabaseUrl.includes('hczlkxbacmlzoidkskmf');

export const supabase = (supabaseUrl && !isPlaceholder)
    ? createClient(supabaseUrl, supabaseAnonKey)
    : null;

export type Article = {
    id: number;
    title: string;
    summary: string;
    link: string;
    source: string;
    date: string;
    category: 'AI' | 'Vibe Coding' | 'Dev';
    status: 'draft' | 'published';
    created_at?: string;
};

export type Source = {
    id: number;
    name: string;
    url: string;
    rss_url: string;
    category: 'AI' | 'Vibe Coding' | 'Dev';
    enabled: boolean;
};
