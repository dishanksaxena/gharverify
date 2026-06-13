"use client";

import { useEffect, useState } from "react";
import { animate } from "framer-motion";

export function RiskGauge({ score, band }: { score: number; band: { label: string; color: string } }) {
  const [display, setDisplay] = useState(0);
  const radius = 120;
  const circumference = Math.PI * radius; // semicircle

  useEffect(() => {
    const controls = animate(0, score, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(v),
    });
    return () => controls.stop();
  }, [score]);

  const progress = (display / 100) * circumference;

  return (
    <div className="relative mx-auto w-full max-w-[340px]">
      <svg viewBox="0 0 280 160" className="w-full">
        <defs>
          <linearGradient id="gaugeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00e676" />
            <stop offset="50%" stopColor="#ffb547" />
            <stop offset="100%" stopColor="#ff5d5d" />
          </linearGradient>
        </defs>
        {/* track */}
        <path
          d="M 20 150 A 120 120 0 0 1 260 150"
          fill="none"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="16"
          strokeLinecap="round"
        />
        {/* progress */}
        <path
          d="M 20 150 A 120 120 0 0 1 260 150"
          fill="none"
          stroke="url(#gaugeGrad)"
          strokeWidth="16"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={circumference - progress}
        />
      </svg>
      <div className="absolute inset-x-0 bottom-1 flex flex-col items-center">
        <span
          className="text-6xl font-bold tracking-tight"
          style={{ color: band.color }}
        >
          {Math.round(display)}
        </span>
        <span className="text-xs uppercase tracking-[0.2em] text-faint">/ 100 risk</span>
        <span
          className="mt-2 rounded-full border px-3 py-1 text-sm font-semibold"
          style={{
            color: band.color,
            borderColor: `${band.color}55`,
            background: `${band.color}1a`,
          }}
        >
          {band.label}
        </span>
      </div>
    </div>
  );
}
