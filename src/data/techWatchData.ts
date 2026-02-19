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

export const techWatchData: TechItem[] = [
  {
    id: 1,
    title: "L'Ère du Vibe Coding",
    date: "Mars 2024",
    category: 'Vibe Coding',
    description: "Le 'Vibe Coding', concept popularisé par Andrej Karpathy, marque un tournant où l'on écrit du code en langage naturel. Ce n'est plus la syntaxe qui compte, mais l'intention et la supervision de l'IA.",
    icon: Sparkles
  },
  {
    id: 2,
    title: "DeepSeek & Modèles de Raisonnement",
    date: "Février 2024",
    category: 'AI',
    description: "L'émergence de modèles comme DeepSeek R1 montre que l'open-source rivalise désormais avec les géants propriétaires. Ces modèles excellent dans le raisonnement complexe à moindre coût.",
    icon: Brain
  },
  {
    id: 3,
    title: "L'IA comme collaborateur, pas seulement outil",
    date: "Janvier 2024",
    category: 'AI',
    description: "L'intégration de l'IA (Copilot, Cursor) transforme le développeur en architecte/reviseur. Le focus se déplace de l'écriture de boilerplate vers la conception système et la résolution de problèmes complexes.",
    icon: Bot
  },
  {
    id: 4,
    title: "La fin du 'Junior' Developer ?",
    date: "2024",
    category: 'Dev',
    description: "Avec des outils capables de générer du code junior instantanément, la valeur ajoutée se déplace vers la compréhension profonde des systèmes, le débogage d'IA et l'architecture logicielle.",
    icon: Code2
  }
];
