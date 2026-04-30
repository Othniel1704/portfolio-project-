import { Share2, Brain, Sparkles, Code2, Bot } from 'lucide-react';

export interface TechItem {
  id: number;
  title: string;
  date: string;
  category: 'AI' | 'Vibe Coding' | 'Dev';
  description: string;
  icon: any;
  link?: string;
}

export const techWatchData: TechItem[] = [];
