"use client";

import { motion } from "framer-motion";

/**
 * Animated blueprint construction scene.
 * A glowing line-art site that builds itself on loop:
 *  - a tower crane whose trolley travels the jib while the hook lifts a load
 *  - a tower rising floor-by-floor (time-lapse) with windows lighting up
 *  - a brick wall stacking itself
 *  - drifting dust / spark particles
 *
 * Pure SVG + Framer Motion. Sits in the page background. Respects
 * prefers-reduced-motion via the global CSS override.
 */

const ACCENT = "#00e676";
const CYAN = "#22d3ee";

const GROUND = 560;

/* ---- geometry helpers (engineered truss look) -------------------------- */

type Line = { x1: number; y1: number; x2: number; y2: number };

function lattice(
  x1: number,
  x2: number,
  yTop: number,
  yBot: number,
  step: number
): Line[] {
  const lines: Line[] = [
    { x1, y1: yTop, x2, y2: yBot }, // chords
    { x1: x1 + (x2 - x1), y1: yTop, x2: x1 + (x2 - x1), y2: yBot },
  ];
  const vertical = Math.abs(yBot - yTop) > Math.abs(x2 - x1);
  if (vertical) {
    const count = Math.floor((yBot - yTop) / step);
    for (let i = 0; i <= count; i++) {
      const y = yTop + i * step;
      lines.push({ x1, y1: y, x2, y2: y }); // rung
      if (i < count) {
        const yn = yTop + (i + 1) * step;
        // alternating diagonal
        if (i % 2 === 0) lines.push({ x1, y1: y, x2, y2: yn });
        else lines.push({ x1, y1: yn, x2, y2: y });
      }
    }
  }
  return lines;
}

function jibTruss(xStart: number, xEnd: number, yTop: number, yBot: number, step: number): Line[] {
  const lines: Line[] = [
    { x1: xStart, y1: yTop, x2: xEnd, y2: yTop },
    { x1: xStart, y1: yBot, x2: xEnd, y2: yBot },
  ];
  const count = Math.floor((xEnd - xStart) / step);
  for (let i = 0; i <= count; i++) {
    const x = xStart + i * step;
    lines.push({ x1: x, y1: yTop, x2: x, y2: yBot });
    if (i < count) {
      const xn = xStart + (i + 1) * step;
      lines.push({ x1: x, y1: yBot, x2: xn, y2: yTop });
    }
  }
  return lines;
}

const mastLines = lattice(992, 1012, 175, GROUND, 34);
const jibLines = jibTruss(1012, 1344, 158, 182, 38);
const counterJib = jibTruss(900, 988, 162, 182, 38);

/* timing shared by the lift cycle so cable + load stay in sync */
const liftTimes = [0, 0.12, 0.46, 0.8, 1];
const liftDur = 6;

export function ConstructionScene({
  className = "",
  opacity = 0.55,
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
        viewBox="0 0 1440 620"
        preserveAspectRatio="xMidYMax meet"
        className="h-full w-full"
        style={{ opacity }}
      >
        <defs>
          <filter id="cscene-glow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="2.4" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient id="cscene-ground" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={ACCENT} stopOpacity="0.25" />
            <stop offset="100%" stopColor={ACCENT} stopOpacity="0" />
          </linearGradient>
          {/* fade the whole scene toward the top so headlines stay readable */}
          <linearGradient id="cscene-mask" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#000" stopOpacity="0.35" />
            <stop offset="22%" stopColor="#000" stopOpacity="0.8" />
            <stop offset="55%" stopColor="#000" stopOpacity="0.98" />
            <stop offset="100%" stopColor="#000" stopOpacity="1" />
          </linearGradient>
          <mask id="cscene-fade">
            <rect x="0" y="0" width="1440" height="620" fill="url(#cscene-mask)" />
          </mask>
        </defs>

        <g mask="url(#cscene-fade)">
          {/* ground line + measuring ticks */}
          <line x1="0" y1={GROUND} x2="1440" y2={GROUND} stroke={ACCENT} strokeOpacity="0.7" strokeWidth="2" />
          <rect x="0" y={GROUND} width="1440" height="60" fill="url(#cscene-ground)" />
          {Array.from({ length: 48 }).map((_, i) => (
            <line
              key={`tick-${i}`}
              x1={i * 30}
              y1={GROUND}
              x2={i * 30}
              y2={GROUND + (i % 4 === 0 ? 10 : 5)}
              stroke={ACCENT}
              strokeOpacity="0.25"
              strokeWidth="1"
            />
          ))}

          <RisingTower />
          <BrickWall />
          <Crane />
          <Particles />
        </g>
      </svg>
    </div>
  );
}

/* ---- Tower crane: rotating sway, trolley travel, hook lift -------------- */

function Crane() {
  const stroke = { stroke: ACCENT, strokeWidth: 2.1, strokeOpacity: 1, strokeLinecap: "round" as const };

  return (
    <g transform="translate(-250, 0)">
    <motion.g
      filter="url(#cscene-glow)"
      style={{ transformBox: "fill-box", transformOrigin: "1002px 175px" }}
      animate={{ rotate: [0, 0.7, 0, -0.7, 0] }}
      transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
    >
      {/* foundation */}
      <rect x="958" y={GROUND - 4} width="92" height="12" fill="none" {...stroke} />

      {/* mast */}
      {mastLines.map((l, i) => (
        <line key={`m-${i}`} {...l} {...stroke} />
      ))}

      {/* apex A-frame */}
      <line x1="1002" y1="118" x2="992" y2="175" {...stroke} />
      <line x1="1002" y1="118" x2="1012" y2="175" {...stroke} />
      <line x1="1002" y1="118" x2="1180" y2="160" {...stroke} strokeOpacity="0.55" />
      <line x1="1002" y1="118" x2="930" y2="164" {...stroke} strokeOpacity="0.55" />

      {/* jib + counter-jib */}
      {jibLines.map((l, i) => (
        <line key={`j-${i}`} {...l} {...stroke} />
      ))}
      {counterJib.map((l, i) => (
        <line key={`cj-${i}`} {...l} {...stroke} />
      ))}

      {/* counterweight */}
      <rect x="896" y="168" width="22" height="26" fill={ACCENT} fillOpacity="0.12" {...stroke} />

      {/* travelling trolley + cable + load (synced lift) */}
      <motion.g
        animate={{ x: [0, 150, 150, 30, 0] }}
        transition={{ duration: liftDur, times: liftTimes, repeat: Infinity, ease: "easeInOut" }}
      >
        <rect x="1112" y="178" width="20" height="9" fill={CYAN} fillOpacity="0.18" stroke={CYAN} strokeWidth="1.4" />
        {/* cable */}
        <motion.line
          x1="1122"
          x2="1122"
          y1="187"
          stroke={CYAN}
          strokeWidth="1.3"
          strokeOpacity="0.85"
          animate={{ y2: [GROUND - 14, GROUND - 14, 220, 220, GROUND - 14] }}
          transition={{ duration: liftDur, times: liftTimes, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* hook + suspended load */}
        <motion.g
          animate={{ y: [0, 0, -(GROUND - 14 - 220), -(GROUND - 14 - 220), 0] }}
          transition={{ duration: liftDur, times: liftTimes, repeat: Infinity, ease: "easeInOut" }}
        >
          <rect x="1100" y={GROUND - 14} width="44" height="22" fill={ACCENT} fillOpacity="0.16" stroke={ACCENT} strokeWidth="1.5" />
          <line x1="1108" y1={GROUND - 14} x2="1108" y2={GROUND + 8} stroke={ACCENT} strokeWidth="1" strokeOpacity="0.5" />
          <line x1="1136" y1={GROUND - 14} x2="1136" y2={GROUND + 8} stroke={ACCENT} strokeWidth="1" strokeOpacity="0.5" />
        </motion.g>
      </motion.g>
    </motion.g>
    </g>
  );
}

/* ---- Rising tower: floors stack bottom-up, windows light up ------------- */

function RisingTower() {
  const FLOORS = 9;
  const fx = 250;
  const fw = 190;
  const fh = 34;
  const cycle = 9;
  const buildSpan = 0.62; // fraction of cycle spent building

  return (
    <g filter="url(#cscene-glow)">
      {/* always-visible structural outline + scaffolding */}
      <rect x={fx} y={GROUND - FLOORS * fh} width={fw} height={FLOORS * fh} fill="none" stroke={ACCENT} strokeWidth="1.2" strokeOpacity="0.3" strokeDasharray="4 5" />
      <line x1={fx - 10} y1={GROUND} x2={fx - 10} y2={GROUND - FLOORS * fh - 18} stroke={ACCENT} strokeWidth="1.4" strokeOpacity="0.4" />
      <line x1={fx + fw + 10} y1={GROUND} x2={fx + fw + 10} y2={GROUND - FLOORS * fh - 18} stroke={ACCENT} strokeWidth="1.4" strokeOpacity="0.4" />
      {Array.from({ length: FLOORS }).map((_, i) => {
        const y = GROUND - (i + 1) * fh;
        const t = (i / FLOORS) * buildSpan;
        return (
          <motion.g
            key={`floor-${i}`}
            style={{ transformBox: "fill-box", transformOrigin: "bottom" }}
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: [0, 0, 1, 1, 0], scaleY: [0, 0, 1, 1, 1] }}
            transition={{
              duration: cycle,
              times: [0, t, Math.min(t + 0.05, 0.95), 0.9, 1],
              repeat: Infinity,
              ease: "easeOut",
            }}
          >
            <rect
              x={fx}
              y={y}
              width={fw}
              height={fh - 3}
              fill={ACCENT}
              fillOpacity="0.09"
              stroke={ACCENT}
              strokeWidth="2"
              strokeOpacity="1"
            />
            {/* windows */}
            {Array.from({ length: 5 }).map((_, w) => (
              <motion.rect
                key={`win-${i}-${w}`}
                x={fx + 14 + w * 35}
                y={y + 9}
                width="20"
                height={fh - 18}
                fill={CYAN}
                stroke="none"
                animate={{ fillOpacity: [0.05, 0.05, 0.4, 0.12, 0.4, 0.05] }}
                transition={{
                  duration: cycle,
                  times: [0, t + 0.04, t + 0.08, 0.5, 0.75, 1],
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: w * 0.12,
                }}
              />
            ))}
          </motion.g>
        );
      })}
      {/* rooftop crane mast hint */}
      <line x1={fx + fw / 2} y1={GROUND - FLOORS * fh} x2={fx + fw / 2} y2={GROUND - FLOORS * fh - 26} stroke={ACCENT} strokeWidth="1.4" strokeOpacity="0.5" />
    </g>
  );
}

/* ---- Brick wall: bricks slide + fade in, row by row -------------------- */

function BrickWall() {
  const ROWS = 5;
  const COLS = 5;
  const bw = 36;
  const bh = 15;
  const ox = 620;
  const cycle = 8;

  const bricks: { x: number; y: number; idx: number }[] = [];
  for (let r = 0; r < ROWS; r++) {
    const offset = r % 2 === 0 ? 0 : bw / 2;
    for (let c = 0; c < COLS; c++) {
      bricks.push({
        x: ox + offset + c * (bw + 4),
        y: GROUND - (r + 1) * (bh + 4),
        idx: r * COLS + c,
      });
    }
  }
  const total = bricks.length;

  return (
    <g filter="url(#cscene-glow)">
      {/* always-visible wall footprint */}
      <rect x={ox - 4} y={GROUND - ROWS * (bh + 4)} width={COLS * (bw + 4) + bw / 2} height={ROWS * (bh + 4)} fill="none" stroke={ACCENT} strokeWidth="1.1" strokeOpacity="0.25" strokeDasharray="3 5" />
      {bricks.map((b) => {
        const t = (b.idx / total) * 0.6;
        return (
          <motion.rect
            key={`brick-${b.idx}`}
            x={b.x}
            y={b.y}
            width={bw}
            height={bh}
            rx="1.5"
            fill={ACCENT}
            fillOpacity="0.12"
            stroke={ACCENT}
            strokeWidth="1.8"
            strokeOpacity="1"
            initial={{ opacity: 0, x: b.x + 24 }}
            animate={{ opacity: [0, 0, 1, 1, 0], x: [b.x + 24, b.x + 24, b.x, b.x, b.x] }}
            transition={{
              duration: cycle,
              times: [0, t, Math.min(t + 0.05, 0.95), 0.9, 1],
              repeat: Infinity,
              ease: "easeOut",
            }}
          />
        );
      })}
    </g>
  );
}

/* ---- Dust / spark particles drifting up -------------------------------- */

function Particles() {
  const dots = Array.from({ length: 16 }).map((_, i) => ({
    x: 120 + ((i * 83) % 1240),
    delay: (i % 8) * 0.7,
    dur: 5 + (i % 5),
    r: i % 3 === 0 ? 1.8 : 1.1,
  }));

  return (
    <g>
      {dots.map((d, i) => (
        <motion.circle
          key={`p-${i}`}
          cx={d.x}
          r={d.r}
          fill={i % 2 === 0 ? ACCENT : CYAN}
          initial={{ cy: GROUND, opacity: 0 }}
          animate={{ cy: [GROUND, GROUND - 180], opacity: [0, 0.7, 0] }}
          transition={{ duration: d.dur, delay: d.delay, repeat: Infinity, ease: "easeOut" }}
        />
      ))}
    </g>
  );
}
