"use client";

import { motion } from "framer-motion";
import { ArrowRight, PlayCircle, ShieldCheck, Star } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { Magnetic } from "@/components/ui/magnetic";
import { Ambient } from "@/components/ui/ambient";
import { VerificationTicker } from "./verification-ticker";

const ease = [0.22, 1, 0.36, 1] as const;

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease, delay },
});

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <Ambient />
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        {/* Left */}
        <div className="flex flex-col items-start">
          <motion.div {...fade(0)}>
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.03] px-3.5 py-1.5 text-xs font-medium text-muted">
              <ShieldCheck className="h-3.5 w-3.5 text-accent" />
              Institutional-grade property verification · India
            </span>
          </motion.div>

          <motion.h1
            {...fade(0.08)}
            className="mt-6 text-balance text-4xl font-bold leading-[1.04] text-fg sm:text-5xl md:text-6xl lg:text-[3.7rem]"
          >
            Eradicate property fraud{" "}
            <span className="text-gradient-accent">before your life savings</span>{" "}
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
            <div className="flex items-center gap-2">
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

        {/* Right — command center */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-accent/10 blur-[80px]" />
          <VerificationTicker />
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-line bg-surface/90 px-4 py-3 shadow-card backdrop-blur-xl sm:block"
          >
            <p className="text-[10px] uppercase tracking-wider text-faint">Issue detection</p>
            <p className="text-lg font-bold text-accent">98.7% accuracy</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
