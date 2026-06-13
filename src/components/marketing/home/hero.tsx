"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, PlayCircle, ShieldCheck, Star, Sparkles } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { Magnetic } from "@/components/ui/magnetic";
import { Ambient } from "@/components/ui/ambient";
import { ConstructionScene } from "@/components/ui/construction-scene";
import { VerificationTicker } from "./verification-ticker";

const ease = [0.22, 1, 0.36, 1] as const;

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 26, filter: "blur(6px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  transition: { duration: 0.85, ease, delay },
});

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const panelY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const panelRotate = useTransform(scrollYProgress, [0, 1], [0, -4]);
  const skylineY = useTransform(scrollYProgress, [0, 1], [0, 40]);

  return (
    <section ref={ref} className="relative overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32">
      <Ambient />

      {/* animated blueprint construction scene */}
      <motion.div
        style={{ y: skylineY }}
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <ConstructionScene opacity={0.95} />
      </motion.div>

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        {/* Left */}
        <div className="relative flex flex-col items-start">
          <motion.div {...fade(0)}>
            <span className="group inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/[0.07] px-3.5 py-1.5 text-xs font-medium text-accent backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5" />
              Institutional-grade property verification · India
            </span>
          </motion.div>

          <motion.h1
            {...fade(0.08)}
            className="mt-6 text-balance text-[2.6rem] font-bold leading-[1.02] tracking-tight text-fg sm:text-6xl lg:text-[4rem]"
          >
            Eradicate property fraud{" "}
            <span className="relative inline-block text-gradient-accent">
              before your life savings
            </span>{" "}
            are at risk.
          </motion.h1>

          <motion.p
            {...fade(0.16)}
            className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted"
          >
            Institutional-grade legal verification, title intelligence, registry
            audits, litigation screening, and allotment protection for Indian
            property buyers — from discovery to registration.
          </motion.p>

          <motion.div {...fade(0.24)} className="mt-9 flex flex-wrap items-center gap-3">
            <Magnetic>
              <ButtonLink href="/risk-scanner" size="lg">
                Initiate Property Scan
                <ArrowRight className="h-4.5 w-4.5" />
              </ButtonLink>
            </Magnetic>
            <ButtonLink href="/how-it-works" variant="secondary" size="lg">
              <PlayCircle className="h-4.5 w-4.5" />
              View Verification Process
            </ButtonLink>
          </motion.div>

          <motion.div
            {...fade(0.32)}
            className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4"
          >
            <div className="flex items-center gap-2.5">
              <div className="flex -space-x-2">
                {["#16341f", "#1c2430", "#283242", "#16341f"].map((c, i) => (
                  <span
                    key={i}
                    className="h-7 w-7 rounded-full border-2 border-base"
                    style={{ background: c }}
                  />
                ))}
              </div>
              <div className="flex flex-col">
                <span className="flex items-center gap-1 text-xs text-fg">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3 w-3 fill-warning text-warning" />
                  ))}
                </span>
                <span className="text-xs text-muted">4,500+ properties audited</span>
              </div>
            </div>
            <div className="h-8 w-px bg-line" />
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-fg">₹850 Cr+</span>
              <span className="text-xs text-muted">property value protected</span>
            </div>
          </motion.div>
        </div>

        {/* Right — command center [TEMPORARILY HIDDEN] */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 36 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.1, ease, delay: 0.2 }}
          style={{ y: panelY, rotate: panelRotate }}
          className="relative hidden"
        >
          {/* orbiting glow rings */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2">
            <div className="absolute inset-0 rounded-full border border-accent/10 animate-spin-slow" />
            <div className="absolute inset-8 rounded-full border border-cyan/10" />
          </div>
          <div className="absolute -inset-8 -z-10 rounded-[2.5rem] bg-accent/15 blur-[90px] animate-glow" />

          <div className="conic-border group rounded-3xl">
            <VerificationTicker />
          </div>

          {/* floating stat cards */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="absolute -bottom-6 -left-6 hidden animate-float rounded-2xl border border-line bg-surface/90 px-4 py-3 shadow-float backdrop-blur-xl sm:block"
          >
            <p className="text-[10px] uppercase tracking-wider text-faint">Issue detection</p>
            <p className="text-lg font-bold text-gradient-accent">98.7% accuracy</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.25, duration: 0.6 }}
            className="absolute -right-5 -top-5 hidden items-center gap-2 rounded-2xl border border-accent/25 bg-surface/90 px-4 py-3 shadow-float backdrop-blur-xl md:flex"
          >
            <ShieldCheck className="h-5 w-5 text-accent" />
            <div>
              <p className="text-[10px] uppercase tracking-wider text-faint">Verdict</p>
              <p className="text-sm font-bold text-accent">Safe to purchase</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

