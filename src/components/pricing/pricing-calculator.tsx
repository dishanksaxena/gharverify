"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Check, Lock, Sparkles, ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const MIN = 500;
const MAX = 10000;

const plans = [
  {
    id: "essential",
    name: "Essential",
    base: 12999,
    rate: 1.4,
    tagline: "Core legal safety net for a single property.",
    features: [
      "Title chain validation",
      "Registry verification",
      "Encumbrance certificate review",
      "Ownership verification",
      "0–100 Risk Report",
    ],
  },
  {
    id: "professional",
    name: "Professional",
    base: 26999,
    rate: 2.6,
    popular: true,
    tagline: "Full due diligence for high-value purchases.",
    features: [
      "Everything in Essential",
      "RERA & LDA approval validation",
      "Litigation & court record screening",
      "Builder background verification",
      "Land-use & zoning compliance",
      "Priority turnaround + live dashboard",
    ],
  },
  {
    id: "institutional",
    name: "Institutional",
    base: 54999,
    rate: 4.2,
    tagline: "Bank-grade verification for portfolios & developers.",
    features: [
      "Everything in Professional",
      "Dedicated verification manager",
      "Multi-property & portfolio reviews",
      "Registration assistance included",
      "Lender-ready evidentiary reporting",
      "SLA-backed delivery",
    ],
  },
] as const;

const modules = [
  { name: "Court Litigation Deep Dive", threshold: 2000 },
  { name: "Ownership Network Analysis", threshold: 4000 },
  { name: "Government Ledger Reconciliation", threshold: 6000 },
  { name: "Historical Possession Mapping", threshold: 8000 },
] as const;

function priceFor(plan: (typeof plans)[number], size: number) {
  const extra = Math.max(0, size - MIN) * plan.rate;
  return Math.round((plan.base + extra) / 100) * 100;
}

export function PricingCalculator() {
  const [size, setSize] = useState(1500);

  const unlocked = useMemo(
    () => modules.filter((m) => size >= m.threshold).length,
    [size]
  );

  const pct = ((size - MIN) / (MAX - MIN)) * 100;

  return (
    <div>
      {/* Slider panel */}
      <div className="rounded-3xl border border-line bg-surface p-6 shadow-card sm:p-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-medium text-muted">Plot / built-up area</p>
            <p className="mt-1 text-4xl font-bold text-fg">
              {size.toLocaleString("en-IN")}
              <span className="ml-1.5 text-lg font-medium text-muted">
                {size >= MAX ? "+ " : ""}sq ft
              </span>
            </p>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-3.5 py-1.5 text-sm text-accent">
            <Sparkles className="h-4 w-4" />
            {unlocked} advanced module{unlocked === 1 ? "" : "s"} unlocked
          </div>
        </div>

        <div className="relative mt-6">
          <input
            type="range"
            min={MIN}
            max={MAX}
            step={100}
            value={size}
            onChange={(e) => setSize(Number(e.target.value))}
            className="w-full cursor-pointer appearance-none bg-transparent
              [&::-webkit-slider-runnable-track]:h-2 [&::-webkit-slider-runnable-track]:rounded-full
              [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:-mt-2
              [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:rounded-full
              [&::-webkit-slider-thumb]:border-4 [&::-webkit-slider-thumb]:border-base
              [&::-webkit-slider-thumb]:bg-accent [&::-webkit-slider-thumb]:shadow-[0_0_20px_rgba(0,230,118,0.6)]
              [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:rounded-full
              [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:bg-accent"
            style={{
              background: `linear-gradient(to right, #00e676 ${pct}%, rgba(255,255,255,0.08) ${pct}%)`,
              borderRadius: "999px",
              height: "8px",
            }}
          />
          <div className="mt-2 flex justify-between text-xs text-faint">
            <span>500 sq ft</span>
            <span>10,000+ sq ft</span>
          </div>
        </div>

        {/* unlockable modules */}
        <div className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
          {modules.map((m) => {
            const isUnlocked = size >= m.threshold;
            return (
              <div
                key={m.name}
                className={cn(
                  "flex items-center justify-between rounded-xl border px-4 py-3 text-sm transition-colors",
                  isUnlocked
                    ? "border-accent/30 bg-accent/[0.06] text-fg"
                    : "border-line bg-base text-faint"
                )}
              >
                <span className="flex items-center gap-2">
                  {isUnlocked ? (
                    <Check className="h-4 w-4 text-accent" />
                  ) : (
                    <Lock className="h-3.5 w-3.5" />
                  )}
                  {m.name}
                </span>
                {!isUnlocked && (
                  <span className="text-[10px] uppercase tracking-wider">
                    {m.threshold.toLocaleString("en-IN")} sq ft
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Plans */}
      <div className="mt-6 grid grid-cols-1 gap-5 lg:grid-cols-3">
        {plans.map((plan) => {
          const price = priceFor(plan, size);
          const popular = "popular" in plan && plan.popular;
          return (
            <div
              key={plan.id}
              className={cn(
                "relative flex flex-col rounded-3xl border p-7 transition-all",
                popular
                  ? "border-accent/40 bg-gradient-to-b from-accent/[0.08] to-surface shadow-[0_0_60px_-20px_rgba(0,230,118,0.5)]"
                  : "border-line bg-surface"
              )}
            >
              {popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-[#04210f]">
                  Most chosen
                </span>
              )}
              <h3 className="text-lg font-bold text-fg">{plan.name}</h3>
              <p className="mt-1 text-sm text-muted">{plan.tagline}</p>
              <div className="mt-5 flex items-end gap-1">
                <motion.span
                  key={price}
                  initial={{ opacity: 0.4, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-4xl font-bold tracking-tight text-fg"
                >
                  ₹{price.toLocaleString("en-IN")}
                </motion.span>
                <span className="mb-1 text-sm text-muted">/ property</span>
              </div>
              <ul className="mt-6 flex-1 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-muted">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <ButtonLink
                href="/contact"
                variant={popular ? "primary" : "secondary"}
                className="mt-7 w-full"
              >
                Choose {plan.name}
                <ArrowRight className="h-4 w-4" />
              </ButtonLink>
            </div>
          );
        })}
      </div>
      <p className="mt-6 text-center text-xs text-faint">
        Estimates are indicative and scale with property size and complexity. Final quotes are confirmed after a brief intake call. GST applicable as per Indian law.
      </p>
    </div>
  );
}
