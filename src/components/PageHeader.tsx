import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

// En-tête commun à toutes les pages intérieures : même aurore que l'accueil,
// titre en dégradé et une petite frise de points qui rappelle l'animation du hero.

type Tone = 'cyan' | 'violet' | 'rose' | 'amber' | 'mint';

const tones: Record<Tone, { a: string; b: string; c: string; title: string }> = {
  cyan: { a: 'bg-cyan-500/25', b: 'bg-violet-600/20', c: 'bg-sky-500/15', title: 'from-white via-cyan-200 to-violet-300' },
  violet: { a: 'bg-violet-600/25', b: 'bg-rose-500/15', c: 'bg-cyan-500/15', title: 'from-white via-violet-200 to-rose-300' },
  rose: { a: 'bg-rose-500/20', b: 'bg-violet-600/20', c: 'bg-amber-400/10', title: 'from-white via-rose-200 to-violet-300' },
  amber: { a: 'bg-amber-400/15', b: 'bg-rose-500/15', c: 'bg-violet-600/20', title: 'from-white via-amber-200 to-rose-300' },
  mint: { a: 'bg-emerald-400/15', b: 'bg-cyan-500/20', c: 'bg-violet-600/15', title: 'from-white via-emerald-200 to-cyan-300' },
};

const DOT_COLORS = ['bg-cyan-300', 'bg-violet-300', 'bg-rose-300', 'bg-amber-300', 'bg-emerald-300'];
// Hauteurs fixes : une petite série de données stylisée.
const DOTS = [3, 5, 4, 7, 6, 9, 8, 11, 10, 13];

type Props = {
  title: string;
  subtitle?: ReactNode;
  tone?: Tone;
  align?: 'left' | 'center';
  children?: ReactNode;
};

const PageHeader = ({ title, subtitle, tone = 'cyan', align = 'left', children }: Props) => {
  const t = tones[tone];
  const center = align === 'center';
  return (
    <header className="relative pt-14 pb-12 sm:pt-20 sm:pb-16">
      {/* Halos en fondu vers le bas, pour éviter une coupure nette avec le contenu */}
      <div
        className="absolute inset-x-0 top-0 h-[150%] overflow-hidden pointer-events-none"
        style={{ maskImage: 'linear-gradient(to bottom, black 45%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, black 45%, transparent)' }}
        aria-hidden="true"
      >
        <div className={`absolute -top-32 -left-24 w-[30rem] h-[30rem] rounded-full blur-[110px] motion-safe:animate-aurora ${t.a}`} />
        <div className={`absolute -top-20 right-[-8rem] w-[28rem] h-[28rem] rounded-full blur-[110px] motion-safe:animate-aurora-slow ${t.b}`} />
        <div className={`absolute top-40 left-1/3 w-[22rem] h-[22rem] rounded-full blur-[110px] motion-safe:animate-aurora ${t.c}`} />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'radial-gradient(rgba(148,163,184,0.18) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
            maskImage: 'radial-gradient(ellipse at 50% 0%, black 20%, transparent 70%)',
            WebkitMaskImage: 'radial-gradient(ellipse at 50% 0%, black 20%, transparent 70%)',
          }}
        />
      </div>

      <div className={`relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ${center ? 'text-center' : ''}`}>
        <div className={`flex items-end gap-1.5 h-6 mb-6 ${center ? 'justify-center' : ''}`} aria-hidden="true">
          {DOTS.map((h, i) => (
            <motion.span
              key={i}
              className={`w-1.5 rounded-full ${DOT_COLORS[i % DOT_COLORS.length]}`}
              initial={{ height: 4, opacity: 0 }}
              animate={{ height: h * 1.8, opacity: 1 }}
              transition={{ delay: 0.05 * i, type: 'spring', stiffness: 160, damping: 14 }}
            />
          ))}
        </div>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 110, damping: 18 }}
          className={`font-display text-4xl sm:text-6xl font-extrabold tracking-[-0.03em] leading-[1.05] text-transparent bg-clip-text bg-gradient-to-r ${t.title} text-balance`}
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, type: 'spring', stiffness: 110, damping: 18 }}
            className={`mt-5 text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl ${center ? 'mx-auto' : ''}`}
          >
            {subtitle}
          </motion.p>
        )}
        {children}
      </div>
    </header>
  );
};

export default PageHeader;
