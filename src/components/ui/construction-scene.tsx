"use client";

import { motion } from "framer-motion";

const ACCENT = "#00e676";
const CYAN = "#22d3ee";
const GROUND = 520;

export function ConstructionScene({
  className = "",
  opacity = 1,
}: {
  className?: string;
  opacity?: number;
}) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 -z-10 overflow-hidden ${className}`}
      aria-hidden
    >
      <svg
        viewBox="0 0 1440 560"
        preserveAspectRatio="xMidYMax meet"
        className="h-full w-full"
        style={{ opacity }}
      >
        <defs>
          <filter id="glow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="glow-strong" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          {/* vertical fade — top is hidden, bottom is visible */}
          <linearGradient id="scene-fade-y" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#fff" stopOpacity="0" />
            <stop offset="35%" stopColor="#fff" stopOpacity="0.5" />
            <stop offset="65%" stopColor="#fff" stopOpacity="1" />
            <stop offset="100%" stopColor="#fff" stopOpacity="1" />
          </linearGradient>
          {/* horizontal fade — left third hidden so text stays clean */}
          <linearGradient id="scene-fade-x" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#fff" stopOpacity="0" />
            <stop offset="22%" stopColor="#fff" stopOpacity="0.4" />
            <stop offset="42%" stopColor="#fff" stopOpacity="1" />
            <stop offset="100%" stopColor="#fff" stopOpacity="1" />
          </linearGradient>
          <mask id="fade-mask">
            <rect x="0" y="0" width="1440" height="560" fill="url(#scene-fade-y)" />
            <rect x="0" y="0" width="1440" height="560" fill="url(#scene-fade-x)" style={{ mixBlendMode: "multiply" }} />
          </mask>
        </defs>

        <g mask="url(#fade-mask)">
          {/* ── ground line ── */}
          <line x1="0" y1={GROUND} x2="1440" y2={GROUND}
            stroke={ACCENT} strokeWidth="2.5" strokeOpacity="0.9" filter="url(#glow)" />
          <rect x="0" y={GROUND} width="1440" height="40"
            fill={ACCENT} fillOpacity="0.06" />

          {/* measurement ticks */}
          {Array.from({ length: 60 }).map((_, i) => (
            <line key={i}
              x1={i * 24} y1={GROUND}
              x2={i * 24} y2={GROUND + (i % 5 === 0 ? 12 : 6)}
              stroke={ACCENT} strokeOpacity="0.35" strokeWidth="1" />
          ))}

          <TowerBuilding />
          <BrickWall />
          <TowerCrane />
          <Scaffolding />
          <Particles />
        </g>
      </svg>
    </div>
  );
}

/* ── Tower building that rises floor by floor ── */
function TowerBuilding() {
  const FLOORS = 10;
  const x = 120;
  const w = 160;
  const fh = 38;
  const winW = 22;
  const winH = 20;
  const winsPerFloor = 4;
  const totalH = FLOORS * fh;

  return (
    <g filter="url(#glow)">
      {/* permanent outline / scaffolding before building */}
      <rect x={x - 12} y={GROUND - totalH - 20} width={w + 24} height={totalH + 20}
        fill="none" stroke={ACCENT} strokeWidth="1.5" strokeOpacity="0.25" strokeDasharray="6 8" />
      {/* vertical scaffold poles */}
      <line x1={x - 12} y1={GROUND} x2={x - 12} y2={GROUND - totalH - 20}
        stroke={ACCENT} strokeWidth="2" strokeOpacity="0.35" />
      <line x1={x + w + 12} y1={GROUND} x2={x + w + 12} y2={GROUND - totalH - 20}
        stroke={ACCENT} strokeWidth="2" strokeOpacity="0.35" />

      {Array.from({ length: FLOORS }).map((_, i) => {
        const floorY = GROUND - (i + 1) * fh;
        const delay = i * 0.9;
        return (
          <motion.g key={i}
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: [0, 0, 1, 1, 1, 0], scaleY: [0, 0, 1, 1, 1, 0] }}
            style={{ transformBox: "fill-box", transformOrigin: `${x + w / 2}px ${floorY + fh}px` }}
            transition={{ duration: 12, delay: 0, times: [0, delay / 12, (delay + 0.4) / 12, 0.82, 0.95, 1], repeat: Infinity, ease: "easeOut" }}
          >
            {/* slab */}
            <rect x={x} y={floorY} width={w} height={fh - 2}
              fill={ACCENT} fillOpacity="0.04"
              stroke={ACCENT} strokeWidth="1.6" strokeOpacity="0.65" />
            {/* windows */}
            {Array.from({ length: winsPerFloor }).map((_, w2) => (
              <motion.rect key={w2}
                x={x + 12 + w2 * 38} y={floorY + 9}
                width={winW} height={winH}
                fill={CYAN}
                animate={{ fillOpacity: [0, 0.25, 0.08, 0.25, 0.08, 0] }}
                transition={{ duration: 12, delay: w2 * 0.15, repeat: Infinity, ease: "easeInOut" }}
              />
            ))}
          </motion.g>
        );
      })}

      {/* rooftop mast */}
      <line x1={x + w / 2} y1={GROUND - totalH} x2={x + w / 2} y2={GROUND - totalH - 36}
        stroke={ACCENT} strokeWidth="3" strokeOpacity="0.7" filter="url(#glow-strong)" />
      <circle cx={x + w / 2} cy={GROUND - totalH - 38} r="5"
        fill={ACCENT} fillOpacity="0.9" filter="url(#glow-strong)" />
    </g>
  );
}

/* ── Brick wall stacking itself ── */
function BrickWall() {
  const ROWS = 6;
  const COLS = 6;
  const bw = 42;
  const bh = 18;
  const gap = 4;
  const ox = 370;
  const cycle = 10;

  const bricks = Array.from({ length: ROWS }).flatMap((_, r) =>
    Array.from({ length: COLS }).map((_, c) => {
      const offset = r % 2 === 0 ? 0 : bw / 2;
      return {
        x: ox + offset + c * (bw + gap),
        y: GROUND - (r + 1) * (bh + gap),
        idx: r * COLS + c,
        total: ROWS * COLS,
      };
    })
  );

  return (
    <g filter="url(#glow)">
      {/* outline frame */}
      <rect x={ox - 4} y={GROUND - ROWS * (bh + gap) - 4}
        width={COLS * (bw + gap) + bw / 2 + 8} height={ROWS * (bh + gap) + 8}
        fill="none" stroke={ACCENT} strokeWidth="1.2" strokeOpacity="0.22" strokeDasharray="5 7" />

      {bricks.map((b) => {
        const t = (b.idx / b.total) * 0.65;
        return (
          <motion.rect key={b.idx}
            x={b.x} y={b.y}
            width={bw} height={bh}
            rx="2"
            fill={ACCENT} fillOpacity="0.06"
            stroke={ACCENT} strokeWidth="1.6" strokeOpacity="0.7"
            initial={{ opacity: 0, x: b.x + 30 }}
            animate={{ opacity: [0, 0, 1, 1, 1, 0], x: [b.x + 30, b.x + 30, b.x, b.x, b.x, b.x] }}
            transition={{ duration: cycle, times: [0, t, Math.min(t + 0.06, 0.93), 0.88, 0.95, 1], repeat: Infinity, ease: "easeOut" }}
          />
        );
      })}
    </g>
  );
}

/* ── Tower crane: mast + jib + trolley + hook ── */
function TowerCrane() {
  const MX = 650;   // mast centre X (open space to the left of the ticker panel)
  const MT = 110;   // mast top Y
  const JIB_END = 950;
  const CJ_END = 540;
  const liftDur = 7;
  const liftTimes = [0, 0.1, 0.45, 0.75, 1];

  const s = { stroke: ACCENT, strokeWidth: 2.4, strokeLinecap: "round" as const, fill: "none" };

  return (
    <motion.g
      filter="url(#glow-strong)"
      style={{ transformBox: "fill-box", transformOrigin: `${MX}px ${MT}px` }}
      animate={{ rotate: [0, 0.6, 0, -0.6, 0] }}
      transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
    >
      {/* foundation */}
      <rect x={MX - 36} y={GROUND - 6} width={72} height={14}
        stroke={ACCENT} strokeWidth="2.5" fill={ACCENT} fillOpacity="0.1" />

      {/* mast — solid double-chord truss */}
      {[MX - 9, MX + 9].map((cx, i) => (
        <line key={i} x1={cx} y1={GROUND - 6} x2={cx} y2={MT} {...s} />
      ))}
      {/* mast rungs */}
      {Array.from({ length: 14 }).map((_, i) => {
        const y = GROUND - 30 - i * 32;
        return (
          <g key={i}>
            <line x1={MX - 9} y1={y} x2={MX + 9} y2={y} {...s} strokeWidth={1.5} strokeOpacity={0.6} />
            <line x1={i % 2 === 0 ? MX - 9 : MX + 9} y1={y}
              x2={i % 2 === 0 ? MX + 9 : MX - 9} y2={y - 32} {...s} strokeWidth={1.2} strokeOpacity={0.5} />
          </g>
        );
      })}

      {/* A-frame apex */}
      <line x1={MX} y1={MT - 32} x2={MX - 9} y2={MT} {...s} />
      <line x1={MX} y1={MT - 32} x2={MX + 9} y2={MT} {...s} />

      {/* jib top chord */}
      <line x1={MX} y1={MT - 4} x2={JIB_END} y2={MT + 22} {...s} strokeWidth={2.5} />
      {/* jib bottom chord */}
      <line x1={MX} y1={MT + 22} x2={JIB_END} y2={MT + 42} {...s} strokeWidth={2} />
      {/* jib verticals */}
      {Array.from({ length: 8 }).map((_, i) => {
        const t = i / 7;
        const x = MX + t * (JIB_END - MX);
        return <line key={i} x1={x} y1={MT - 4 + t * 26} x2={x} y2={MT + 22 + t * 20} {...s} strokeWidth={1.4} strokeOpacity={0.65} />;
      })}
      {/* apex → jib cables */}
      <line x1={MX} y1={MT - 32} x2={JIB_END} y2={MT + 22} {...s} strokeOpacity={0.45} strokeWidth={1.5} />

      {/* counter-jib */}
      <line x1={MX} y1={MT + 14} x2={CJ_END} y2={MT + 34} {...s} strokeWidth={2} />
      <line x1={MX} y1={MT + 32} x2={CJ_END} y2={MT + 52} {...s} strokeWidth={1.6} />
      <line x1={MX} y1={MT - 32} x2={CJ_END} y2={MT + 34} {...s} strokeOpacity={0.4} strokeWidth={1.4} />

      {/* counterweight */}
      <rect x={CJ_END - 4} y={MT + 34} width={30} height={28}
        fill={ACCENT} fillOpacity="0.18" stroke={ACCENT} strokeWidth="2" />

      {/* travelling trolley + cable + load */}
      <motion.g
        animate={{ x: [0, 200, 200, 50, 0] }}
        transition={{ duration: liftDur, times: liftTimes, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* trolley box */}
        <rect x={MX + 60} y={MT + 24} width={22} height={12}
          fill={CYAN} fillOpacity="0.3" stroke={CYAN} strokeWidth="2" />

        {/* cable — length animates */}
        <motion.line
          x1={MX + 71} x2={MX + 71} y1={MT + 36}
          stroke={CYAN} strokeWidth="1.8" strokeOpacity="0.95"
          animate={{ y2: [GROUND - 18, GROUND - 18, MT + 120, MT + 120, GROUND - 18] }}
          transition={{ duration: liftDur, times: liftTimes, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* load block */}
        <motion.g
          animate={{ y: [0, 0, -(GROUND - 18 - (MT + 120)), -(GROUND - 18 - (MT + 120)), 0] }}
          transition={{ duration: liftDur, times: liftTimes, repeat: Infinity, ease: "easeInOut" }}
        >
          <rect x={MX + 47} y={GROUND - 30} width={48} height={28}
            fill={ACCENT} fillOpacity="0.2" stroke={ACCENT} strokeWidth="2.2" />
          {/* load detail lines */}
          <line x1={MX + 47} y1={GROUND - 16} x2={MX + 95} y2={GROUND - 16}
            stroke={ACCENT} strokeWidth="1" strokeOpacity="0.5" />
          <line x1={MX + 71} y1={GROUND - 30} x2={MX + 71} y2={GROUND - 2}
            stroke={ACCENT} strokeWidth="1" strokeOpacity="0.5" />
        </motion.g>
      </motion.g>
    </motion.g>
  );
}

/* ── Scaffolding frame beside tower ── */
function Scaffolding() {
  const sx = 310;
  const levels = 7;
  const lh = 48;
  const sw = 60;

  return (
    <g filter="url(#glow)" strokeOpacity="0.55" stroke={ACCENT} strokeWidth="1.8" fill="none">
      <line x1={sx} y1={GROUND} x2={sx} y2={GROUND - levels * lh} />
      <line x1={sx + sw} y1={GROUND} x2={sx + sw} y2={GROUND - levels * lh} />
      {Array.from({ length: levels + 1 }).map((_, i) => (
        <g key={i}>
          <line x1={sx} y1={GROUND - i * lh} x2={sx + sw} y2={GROUND - i * lh} />
          {i < levels && (
            <line x1={i % 2 === 0 ? sx : sx + sw} y1={GROUND - i * lh}
              x2={i % 2 === 0 ? sx + sw : sx} y2={GROUND - (i + 1) * lh} />
          )}
        </g>
      ))}
    </g>
  );
}

/* ── Rising dust / spark particles ── */
function Particles() {
  const dots = Array.from({ length: 10 }).map((_, i) => ({
    x: 80 + ((i * 137) % 1280),
    delay: (i * 0.9) % 5,
    dur: 4.5 + (i % 3) * 0.8,
    r: i % 3 === 0 ? 2.2 : 1.3,
    color: i % 2 === 0 ? CYAN : ACCENT,
  }));

  return (
    <g>
      {dots.map((d, i) => (
        <motion.circle key={i}
          cx={d.x} r={d.r}
          fill={d.color} filter="url(#glow)"
          initial={{ cy: GROUND, opacity: 0 }}
          animate={{ cy: [GROUND, GROUND - 220], opacity: [0, 0.9, 0] }}
          transition={{ duration: d.dur, delay: d.delay, repeat: Infinity, ease: "easeOut" }}
        />
      ))}
    </g>
  );
}
