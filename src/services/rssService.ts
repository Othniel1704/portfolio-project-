
/**
 * Service pour récupérer et parser des flux RSS
 * Utilise l'API rss2json pour contourner les problèmes de CORS
 */

export interface RSSArticle {
  title: string;
  pubDate: string;
  link: string;
  description: string;
  content: string;
  author: string;
  thumbnail: string;
}

export const fetchRSS = async (rssUrl: string): Promise<RSSArticle[]> => {
  try {
    const response = await fetch(
      `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`
    );
    
    if (!response.ok) {
      throw new Error('Erreur lors de la récupération du flux RSS');
    }
    
    const data = await response.json();
    
    if (data.status !== 'ok') {
      throw new Error(data.message || 'Le flux RSS est invalide');
    }
    
    return data.items;
  } catch (error) {
    console.error('RSS Fetch Error:', error);
    return [];
  }
};
