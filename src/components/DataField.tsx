import { useEffect, useRef, useState } from 'react';
import { RotateCcw } from 'lucide-react';

// Animation du hero : un nuage de points en désordre (données brutes)
// qui se range en graphiques lisibles (informations exploitables).
// Les points s'écartent du curseur. Respecte prefers-reduced-motion.

type Pt = { x: number; y: number; vx: number; vy: number; tx: number; ty: number; c: string; r: number };

const PALETTE = {
  mint: '#34d399',
  amber: '#fbbf24',
  rose: '#f472b6',
  cyan: '#22d3ee',
  violet: '#a78bfa',
};

type Scene = { label: string; caption: string; layout: (i: number, n: number, w: number, h: number) => { x: number; y: number; c: string } };

const scenes: Scene[] = [
  {
    label: 'Données brutes',
    caption: 'Points non structurés',
    layout: () => ({ x: NaN, y: NaN, c: '' }),
  },
  {
    label: 'Scoring de risque',
    caption: 'Emprunteurs classés en 3 niveaux de risque',
    layout: (i, n, w, h) => {
      // Histogramme en points : 3 colonnes (faible / modéré / élevé)
      const shares = [0.58, 0.29, 0.13];
      const colors = [PALETTE.mint, PALETTE.amber, PALETTE.rose];
      let k = 0;
      let start = 0;
      for (; k < 2; k++) {
        if (i < start + Math.round(shares[k] * n)) break;
        start += Math.round(shares[k] * n);
      }
      const j = i - start;
      const perRow = 9;
      const step = Math.min(w / 34, 13);
      const colW = perRow * step;
      const gap = (w - colW * 3) / 4;
      const x0 = gap + k * (colW + gap);
      return {
        x: x0 + (j % perRow) * step + step / 2,
        y: h * 0.86 - Math.floor(j / perRow) * step,
        c: colors[k],
      };
    },
  },
  {
    label: 'Tendance',
    caption: 'Une courbe qui se dégage du bruit',
    layout: (i, n, w, h) => {
      const t = i / n;
      const x = w * 0.08 + t * w * 0.84;
      const base = h * 0.82 - Math.pow(t, 1.6) * h * 0.62;
      const spread = (Math.sin(i * 12.9898) * 43758.5453) % 1;
      return {
        x,
        y: base + spread * h * 0.06,
        c: t < 0.5 ? PALETTE.cyan : PALETTE.violet,
      };
    },
  },
];

const SCENE_MS = 4200;

const DataField = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [scene, setScene] = useState(0);
  const [replay, setReplay] = useState(0);
  const sceneRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const colors = Object.values(PALETTE);
    let w = 0;
    let h = 0;
    let pts: Pt[] = [];
    let raf = 0;
    let visible = true;
    const mouse = { x: -9999, y: -9999 };

    const applyScene = (s: number) => {
      sceneRef.current = s;
      setScene(s);
      pts.forEach((p, i) => {
        if (s === 0) {
          p.tx = NaN;
          p.c = colors[i % colors.length];
          p.vx = (Math.random() - 0.5) * 1.6;
          p.vy = (Math.random() - 0.5) * 1.6;
        } else {
          const t = scenes[s].layout(i, pts.length, w, h);
          p.tx = t.x;
          p.ty = t.y;
          p.c = t.c;
        }
      });
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = rect.width;
      h = rect.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const n = w < 480 ? 150 : 230;
      if (pts.length !== n) {
        pts = Array.from({ length: n }, (_, i) => ({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 1.6,
          vy: (Math.random() - 0.5) * 1.6,
          tx: NaN,
          ty: NaN,
          c: colors[i % colors.length],
          r: 2 + Math.random() * 1.6,
        }));
      }
      applyScene(sceneRef.current);
      if (reduced) {
        pts.forEach((p) => {
          if (!Number.isNaN(p.tx)) {
            p.x = p.tx;
            p.y = p.ty;
          }
        });
        draw();
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      // fines lignes de grille
      ctx.strokeStyle = 'rgba(148,163,184,0.07)';
      ctx.lineWidth = 1;
      for (let y = h * 0.86; y > 0; y -= 40) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }
      for (const p of pts) {
        ctx.beginPath();
        ctx.fillStyle = p.c;
        ctx.globalAlpha = 0.9;
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
    };

    const tick = () => {
      for (const p of pts) {
        // répulsion du curseur
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const d2 = dx * dx + dy * dy;
        if (d2 < 6400) {
          const f = (6400 - d2) / 6400;
          p.vx += (dx / Math.sqrt(d2 + 0.01)) * f * 1.4;
          p.vy += (dy / Math.sqrt(d2 + 0.01)) * f * 1.4;
        }
        if (Number.isNaN(p.tx)) {
          // dérive libre
          p.vx += (Math.random() - 0.5) * 0.12;
          p.vy += (Math.random() - 0.5) * 0.12;
          p.vx *= 0.98;
          p.vy *= 0.98;
          if (p.x < 0 || p.x > w) p.vx *= -1;
          if (p.y < 0 || p.y > h) p.vy *= -1;
        } else {
          // ressort vers la cible
          p.vx += (p.tx - p.x) * 0.045;
          p.vy += (p.ty - p.y) * 0.045;
          p.vx *= 0.8;
          p.vy *= 0.8;
        }
        p.x += p.vx;
        p.y += p.vy;
      }
      draw();
      raf = visible ? requestAnimationFrame(tick) : 0;
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    let timer: number | undefined;
    if (!reduced) {
      applyScene(0);
      raf = requestAnimationFrame(tick);
      let s = 0;
      timer = window.setInterval(() => {
        s = (s + 1) % scenes.length;
        applyScene(s);
      }, SCENE_MS);
    } else {
      applyScene(1);
      resize();
    }

    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
      if (visible && !reduced && !raf) raf = requestAnimationFrame(tick);
    });
    io.observe(canvas);

    const onMove = (e: PointerEvent) => {
      const r = canvas.getBoundingClientRect();
      mouse.x = e.clientX - r.left;
      mouse.y = e.clientY - r.top;
    };
    const onLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };
    canvas.addEventListener('pointermove', onMove);
    canvas.addEventListener('pointerleave', onLeave);

    return () => {
      cancelAnimationFrame(raf);
      window.clearInterval(timer);
      ro.disconnect();
      io.disconnect();
      canvas.removeEventListener('pointermove', onMove);
      canvas.removeEventListener('pointerleave', onLeave);
    };
  }, [replay]);

  const current = scenes[scene];

  return (
    <figure className="relative rounded-[28px] p-[1.5px] bg-gradient-to-br from-cyan-400/60 via-violet-500/40 to-rose-400/60 shadow-2xl shadow-violet-900/30">
      <div className="relative rounded-[27px] bg-ink-900/95 overflow-hidden">
        <div className="flex items-center justify-between px-5 pt-4">
          <div className="flex gap-1.5" aria-hidden="true">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-400/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-300/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
          </div>
          <p className="text-sm font-semibold text-slate-200" aria-live="polite">
            {current.label}
          </p>
          <button
            type="button"
            onClick={() => setReplay((r) => r + 1)}
            className="p-2 -m-2 rounded-lg text-slate-400 hover:text-white transition-colors"
            aria-label="Rejouer l'animation"
          >
            <RotateCcw className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>
        <canvas
          ref={canvasRef}
          className="block w-full h-[260px] sm:h-[340px] lg:h-[380px] touch-pan-y"
          role="img"
          aria-label="Animation : des points de données en désordre se rangent en histogramme de risque puis en courbe de tendance."
        />
        <figcaption className="flex flex-wrap items-center gap-x-4 gap-y-1 px-5 pb-4 text-xs text-slate-400">
          {scene === 1 ? (
            <>
              <span className="inline-flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-emerald-400" />Risque faible</span>
              <span className="inline-flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-amber-300" />Modéré</span>
              <span className="inline-flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-rose-400" />Élevé</span>
            </>
          ) : (
            <span>{current.caption}</span>
          )}
        </figcaption>
      </div>
    </figure>
  );
};

export default DataField;
