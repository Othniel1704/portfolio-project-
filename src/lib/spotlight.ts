import type { MouseEvent } from 'react';

// Halo lumineux qui suit le curseur : met à jour --mx / --my sur l'élément survolé.
export const trackSpotlight = (e: MouseEvent<HTMLElement>) => {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`);
  e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`);
};

// Couleur (canaux RGB) associée à chaque catégorie de projet.
export const categoryAccent: Record<string, { rgb: string; text: string; label: string }> = {
  'Projet Personnel': { rgb: '167 139 250', text: 'text-violet-300', label: 'Projets personnels (Data, IA, Web)' },
  Stage: { rgb: '251 191 36', text: 'text-amber-300', label: 'Stages en entreprise' },
  'Projet Académique (PPE)': { rgb: '34 211 238', text: 'text-cyan-300', label: 'Projets du BTS SIO' },
  Autre: { rgb: '244 114 182', text: 'text-rose-300', label: 'Autres projets' },
};
