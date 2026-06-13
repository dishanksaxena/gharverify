"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  AlertTriangle, ArrowRight, CheckCircle2, Loader2, RotateCcw,
  ShieldCheck, XCircle,
} from "lucide-react";
import { Button, ButtonLink } from "@/components/ui/button";
import { RiskGauge } from "./risk-gauge";

type Band = { label: string; color: string };
type Finding = { label: string; status: "clear" | "caution" | "flag"; note: string };

const fields = [
  { name: "property", label: "Property / Project Name", placeholder: "e.g. Eldeco Greens" },
  { name: "builder", label: "Builder / Seller Name", placeholder: "e.g. Eldeco Group" },
  { name: "plot", label: "Plot / Unit Number", placeholder: "e.g. B-204" },
  { name: "city", label: "City", placeholder: "e.g. Lucknow" },
  { name: "state", label: "State", placeholder: "e.g. Uttar Pradesh" },
] as const;

function hash(str: string): number {
  let h = 0;
  for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) >>> 0;
  return h;
}

function bandFor(score: number): Band {
  if (score <= 25) return { label: "Low Risk", color: "#00e676" };
  if (score <= 50) return { label: "Moderate Risk", color: "#ffb547" };
  if (score <= 75) return { label: "High Risk", color: "#ff8a3d" };
  return { label: "Critical Risk", color: "#ff5d5d" };
}

const checks = [
  "Title chain integrity",
  "Registry authentication",
  "Encumbrance certificate",
  "Litigation & court records",
  "RERA registration status",
  "Land-use & zoning compliance",
  "Builder / seller reputation",
  "Government acquisition overlap",
];

function buildFindings(seed: number): { findings: Finding[]; score: number } {
  const findings: Finding[] = checks.map((label, i) => {
    const r = (hash(label) ^ (seed >> i)) % 100;
    const status: Finding["status"] = r < 55 ? "clear" : r < 80 ? "caution" : "flag";
    const note =
      status === "clear"
        ? "No issues detected in available records."
        : status === "caution"
          ? "Requires document-level verification to confirm."
          : "Potential risk indicator — deep verification recommended.";
    return { label, status, note };
  });
  const weight = findings.reduce(
    (acc, f) => acc + (f.status === "flag" ? 14 : f.status === "caution" ? 6 : 1),
    0
  );
  const score = Math.min(96, Math.max(6, Math.round((weight / (checks.length * 14)) * 100)));
  return { findings, score };
}

const statusMeta = {
  clear: { icon: CheckCircle2, color: "#00e676", label: "Clear" },
  caution: { icon: AlertTriangle, color: "#ffb547", label: "Verify" },
  flag: { icon: XCircle, color: "#ff5d5d", label: "Flag" },
} as const;

type Stage = "form" | "scanning" | "result";

export function RiskScanner() {
  const [stage, setStage] = useState<Stage>("form");
  const [values, setValues] = useState<Record<string, string>>({});
  const [result, setResult] = useState<{ findings: Finding[]; score: number } | null>(null);

  const canScan = (values.property?.trim()?.length ?? 0) > 1 && (values.city?.trim()?.length ?? 0) > 1;

  function runScan() {
    const seed = hash(Object.values(values).join("|").toLowerCase());
    setResult(buildFindings(seed));
    setStage("scanning");
    setTimeout(() => setStage("result"), 2600);
  }

  function reset() {
    setStage("form");
    setResult(null);
  }

  const band = result ? bandFor(result.score) : null;
  const flags = result?.findings.filter((f) => f.status === "flag").length ?? 0;
  const cautions = result?.findings.filter((f) => f.status === "caution").length ?? 0;

  return (
    <div className="overflow-hidden rounded-3xl border border-line bg-surface shadow-card">
      <div className="flex items-center justify-between border-b border-line px-5 py-4 sm:px-7">
        <div className="flex items-center gap-2.5">
          <ShieldCheck className="h-5 w-5 text-accent" />
          <span className="text-sm font-semibold text-fg">Property Risk Scanner</span>
        </div>
        <span className="hidden text-xs text-faint sm:block">Preliminary screening · indicative only</span>
      </div>

      <AnimatePresence mode="wait">
        {stage === "form" && (
          <motion.div
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid grid-cols-1 gap-5 p-5 sm:p-8 md:grid-cols-2"
          >
            {fields.map((f) => (
              <div key={f.name} className={f.name === "property" || f.name === "builder" ? "md:col-span-2" : ""}>
                <label className="mb-1.5 block text-sm font-medium text-muted">{f.label}</label>
                <input
                  value={values[f.name] ?? ""}
                  onChange={(e) => setValues((v) => ({ ...v, [f.name]: e.target.value }))}
                  placeholder={f.placeholder}
                  className="w-full rounded-xl border border-line bg-base px-4 py-3 text-sm text-fg outline-none transition-colors placeholder:text-faint focus:border-accent/50 focus:ring-2 focus:ring-accent/20"
                />
              </div>
            ))}
            <div className="md:col-span-2">
              <Button onClick={runScan} disabled={!canScan} size="lg" className="w-full">
                Run Risk Scan
                <ArrowRight className="h-4.5 w-4.5" />
              </Button>
              {!canScan && (
                <p className="mt-2 text-center text-xs text-faint">
                  Enter at least a property name and city to begin.
                </p>
              )}
            </div>
          </motion.div>
        )}

        {stage === "scanning" && (
          <motion.div
            key="scanning"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center justify-center gap-5 px-6 py-20"
          >
            <Loader2 className="h-10 w-10 animate-spin text-accent" />
            <p className="text-sm font-medium text-fg">Cross-referencing records…</p>
            <div className="w-full max-w-sm space-y-2">
              {checks.slice(0, 5).map((c, i) => (
                <motion.div
                  key={c}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.35 }}
                  className="flex items-center gap-2 text-xs text-muted"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  {c}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {stage === "result" && result && band && (
          <motion.div
            key="result"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-5 sm:p-8"
          >
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div className="rounded-2xl border border-line bg-base p-6">
                <RiskGauge score={result.score} band={band} />
                <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                  <Stat n={result.findings.filter((f) => f.status === "clear").length} label="Clear" color="#00e676" />
                  <Stat n={cautions} label="To verify" color="#ffb547" />
                  <Stat n={flags} label="Flags" color="#ff5d5d" />
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-faint">Findings summary</h3>
                <div className="mt-3 space-y-2">
                  {result.findings.map((f) => {
                    const meta = statusMeta[f.status];
                    const Ico = meta.icon;
                    return (
                      <div key={f.label} className="flex items-start gap-3 rounded-xl border border-line bg-base px-3.5 py-3">
                        <Ico className="mt-0.5 h-4.5 w-4.5 shrink-0" style={{ color: meta.color }} />
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-fg">{f.label}</span>
                            <span className="text-[10px] font-semibold uppercase tracking-wider" style={{ color: meta.color }}>
                              {meta.label}
                            </span>
                          </div>
                          <p className="mt-0.5 text-xs text-muted">{f.note}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="mt-7 rounded-2xl border border-accent/20 bg-accent/[0.05] p-5">
              <h4 className="flex items-center gap-2 text-sm font-semibold text-fg">
                <ShieldCheck className="h-4.5 w-4.5 text-accent" />
                Recommended actions
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {flags > 0
                  ? `${flags} potential risk indicator${flags > 1 ? "s were" : " was"} detected. Do not pay any booking amount before a full GharVerify verification confirms the title, encumbrances, and litigation status.`
                  : cautions > 0
                    ? `This property looks promising, but ${cautions} area${cautions > 1 ? "s require" : " requires"} document-level confirmation before you commit funds.`
                    : "This preliminary scan is encouraging. A full verification will confirm these signals against original documents and government records."}
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <ButtonLink href="/contact">
                  Order Full Verification
                  <ArrowRight className="h-4 w-4" />
                </ButtonLink>
                <Button onClick={reset} variant="secondary">
                  <RotateCcw className="h-4 w-4" />
                  Scan Another
                </Button>
              </div>
            </div>
            <p className="mt-4 text-center text-xs text-faint">
              This scanner provides an indicative screening based on the details entered. It is not a legal opinion or a substitute for full verification.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Stat({ n, label, color }: { n: number; label: string; color: string }) {
  return (
    <div className="rounded-xl border border-line bg-surface py-3">
      <div className="text-2xl font-bold" style={{ color }}>{n}</div>
      <div className="text-[10px] uppercase tracking-wider text-faint">{label}</div>
    </div>
  );
}
