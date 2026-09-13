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
