"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Loader2, ShieldCheck } from "lucide-react";

const steps = [
  "DEED AUTHENTICATED",
  "TITLE CHAIN VERIFIED",
  "OWNERSHIP MAPPED",
  "ENCUMBRANCE CLEAR",
  "LITIGATION CLEAR",
  "RERA VALIDATED",
  "LDA APPROVAL CONFIRMED",
  "REGISTRY VERIFIED",
];

export function VerificationTicker() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setActive((a) => (a + 1) % (steps.length + 1));
    }, 1100);
    return () => clearInterval(t);
  }, []);

  const complete = active >= steps.length;

  return (
    <div className="relative w-full overflow-hidden rounded-3xl border border-line bg-surface/85 p-5 shadow-float backdrop-blur-xl sm:p-6">
      {/* sweeping scanline */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-20 h-24 bg-gradient-to-b from-accent/15 to-transparent"
        style={{ animation: "scanline 4.5s ease-in-out infinite" }}
      />
      {/* header */}
      <div className="flex items-center justify-between border-b border-line pb-4">
        <div className="flex items-center gap-2.5">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-danger/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-warning/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-accent/70" />
          </div>
          <span className="ml-1 text-xs font-medium text-faint">
            verification.engine — live scan
          </span>
        </div>
        <span className="flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-accent">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
          Scanning
        </span>
      </div>

      {/* steps */}
      <div className="mt-4 space-y-1.5">
        {steps.map((step, i) => {
          const done = i < active;
          const running = i === active && !complete;
          return (
            <div
              key={step}
              className="flex items-center justify-between rounded-xl px-3 py-2.5 transition-colors"
              style={{
                background: running
                  ? "rgba(0,230,118,0.06)"
                  : done
                    ? "rgba(255,255,255,0.02)"
                    : "transparent",
              }}
            >
              <div className="flex items-center gap-3">
                <span
                  className="flex h-5 w-5 items-center justify-center rounded-full border transition-colors"
                  style={{
                    borderColor: done
                      ? "rgba(0,230,118,0.5)"
                      : running
                        ? "rgba(0,230,118,0.4)"
                        : "rgba(255,255,255,0.12)",
                    background: done ? "rgba(0,230,118,0.15)" : "transparent",
                  }}
                >
                  {done ? (
                    <Check className="h-3 w-3 text-accent" />
                  ) : running ? (
                    <Loader2 className="h-3 w-3 animate-spin text-accent" />
                  ) : (
                    <span className="h-1.5 w-1.5 rounded-full bg-faint/50" />
                  )}
                </span>
                <span
                  className="font-mono text-[11px] tracking-wider transition-colors sm:text-xs"
                  style={{
                    color: done
                      ? "#f8fafc"
                      : running
                        ? "#00e676"
                        : "#6b7280",
                  }}
                >
                  {step}
                </span>
              </div>
              {done && (
                <span className="text-[10px] font-medium uppercase tracking-wider text-accent">
                  cleared
                </span>
              )}
            </div>
          );
        })}
      </div>

      {/* footer verdict */}
      <div className="mt-4 border-t border-line pt-4">
        <AnimatePresence mode="wait">
          {complete ? (
            <motion.div
              key="safe"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              className="flex items-center justify-between rounded-xl border border-accent/30 bg-accent/10 px-4 py-3"
            >
              <span className="flex items-center gap-2 text-sm font-semibold text-accent">
                <ShieldCheck className="h-4.5 w-4.5" />
                SAFE FOR PURCHASE
              </span>
              <span className="font-mono text-xs text-accent/80">RISK 06 / 100</span>
            </motion.div>
          ) : (
            <motion.div
              key="progress"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center justify-between"
            >
              <span className="text-xs text-faint">Running 18-point verification…</span>
              <span className="font-mono text-xs text-muted">
                {String(active).padStart(2, "0")} / {steps.length}
              </span>
            </motion.div>
          )}
        </AnimatePresence>
        <div className="mt-3 h-1 overflow-hidden rounded-full bg-white/[0.06]">
          <motion.div
            className="h-full rounded-full bg-accent"
            animate={{ width: `${(active / steps.length) * 100}%` }}
            transition={{ ease: "easeOut", duration: 0.5 }}
          />
        </div>
      </div>
    </div>
  );
}
