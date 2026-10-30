# Design system : portfolio Konan Kouakou

Source de vérité visuelle du site. Une page peut surcharger ces règles dans `pages/<page>.md`.

## Positionnement
Portfolio d'alternant Data / BI / IA, lu par des recruteurs et des chargés RH en quelques secondes :
disponibilité, profil et projets Data visibles dès le premier écran.

## Style
Fond « encre » bleu nuit (`ink-950` #070b1c), palette data à 5 couleurs (cyan, violet, rose, ambre, menthe) : une couleur par famille de compétences et par projet. Aurore animée en fond du hero. Élément signature : l’animation de points du hero (DataField) qui passe des données brutes à un histogramme de risque puis à une tendance.
Pas d'emoji comme icône : uniquement Lucide (trait 2px).

## Couleurs (Tailwind)
| Rôle | Classe |
|---|---|
| Fond page | `bg-slate-950` |
| Surface (sections alternées) | `bg-slate-900` |
| Carte | `bg-slate-800/50` ou `bg-slate-900`, bordure `border-slate-700/60` |
| Texte principal | `text-white` |
| Texte secondaire | `text-slate-300` / `text-slate-400` (jamais plus clair que slate-500 sur fond foncé) |
| Accent / action principale | `cyan-500` (bouton), `cyan-400` (liens, icônes) |
| Statut « disponible » | `emerald-300/400` + pastille, jamais la couleur seule |

## Typographie
Bricolage Grotesque (titres, `font-display`) et Instrument Sans (texte), via Google Fonts avec `display=swap`.
Échelle : 12 / 14 / 16 / 18 / 20 / 24 / 30 / 36 / 48 / 60. Titres 700, labels 600, texte 400, interligne 1.5 à 1.75.

## Espacements et formes
Échelle Tailwind (4px). Sections `py-20 sm:py-24`, conteneur `max-w-6xl px-4 sm:px-6 lg:px-8`.
Rayons : cartes `rounded-2xl`, boutons `rounded-xl`, pastilles `rounded-lg`.

## Composants
- Bouton principal : `bg-cyan-500 text-slate-950 font-bold min-h-[48px]`, un seul par écran.
- Bouton secondaire : `bg-slate-800 border-slate-700`, survol bordure cyan.
- Liens icône seule : `aria-label` obligatoire, zone cliquable >= 44px (`p-2`/`p-3`).

## Mouvement
Framer Motion avec `MotionConfig reducedMotion="user"` ; animations d'entrée 0.3 à 0.5 s, décalage 80 ms.
`prefers-reduced-motion` coupe aussi les animations CSS (index.css).

## Accessibilité (à ne pas casser)
Lien d'évitement « Aller au contenu », focus visible cyan global, `aria-current` sur la nav,
focus déplacé sur `<main>` à chaque changement de page, un seul `h1` par page.

## Contenu de profil
Disponibilité, compétences et liens sont centralisés dans `src/data/profile.ts`.
