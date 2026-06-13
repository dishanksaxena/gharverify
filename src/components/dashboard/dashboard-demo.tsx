"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2, Clock, Lock, Loader2, FileText, Download, Bell,
  ShieldCheck, TrendingUp, Activity,
} from "lucide-react";
import { cn } from "@/lib/utils";

const phases = [
  { n: 1, title: "Registry Intake", status: "Completed", state: "done" },
  { n: 2, title: "LDA & RERA Validation", status: "In Progress", state: "active" },
  { n: 3, title: "Background Investigation", status: "Queued", state: "queued" },
  { n: 4, title: "Registration Support", status: "Locked", state: "locked" },
] as const;

const statusCards = [
  { label: "Title Chain", value: "Verified", state: "done" },
  { label: "Encumbrance", value: "Clear", state: "done" },
  { label: "Litigation Scan", value: "Running", state: "active" },
  { label: "RERA Status", value: "Validating", state: "active" },
] as const;

const documents = [
  { name: "Sale Deed (2019).pdf", size: "2.4 MB", verified: true },
  { name: "Encumbrance Certificate.pdf", size: "880 KB", verified: true },
  { name: "RERA Registration.pdf", size: "1.1 MB", verified: false },
  { name: "Mutation Record.pdf", size: "640 KB", verified: true },
];

const activity = [
  { text: "Title chain reconstructed across 4 transfers", time: "12m ago", color: "#00e676" },
  { text: "Encumbrance certificate cleared", time: "1h ago", color: "#00e676" },
  { text: "RERA validation initiated", time: "2h ago", color: "#ffb547" },
  { text: "Document vault opened · 4 files received", time: "5h ago", color: "#a1a1aa" },
];

const stateStyle = {
  done: { dot: "#00e676", icon: CheckCircle2 },
  active: { dot: "#ffb547", icon: Loader2 },
  queued: { dot: "#6b7280", icon: Clock },
  locked: { dot: "#6b7280", icon: Lock },
} as const;

export function DashboardDemo() {
  return (
    <div className="overflow-hidden rounded-3xl border border-line bg-surface shadow-card">
      {/* top bar */}
      <div className="flex items-center justify-between border-b border-line bg-base/60 px-5 py-4 sm:px-7">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/15 text-accent">
            <ShieldCheck className="h-5 w-5" />
          </div>
          <div>
            <p className="text-sm font-semibold text-fg">Gomti Nagar Villa · File #GV-4821</p>
            <p className="text-xs text-faint">Professional verification · Lucknow</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="hidden items-center gap-1.5 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium text-accent sm:flex">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
            Active
          </span>
          <Bell className="h-5 w-5 text-muted" />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-px bg-line lg:grid-cols-3">
        {/* main column */}
        <div className="space-y-6 bg-surface p-5 sm:p-7 lg:col-span-2">
          {/* phases */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-faint">
              Verification Timeline
            </h3>
            <div className="mt-4 space-y-3">
              {phases.map((p) => {
                const meta = stateStyle[p.state];
                const Ico = meta.icon;
                return (
                  <div
                    key={p.n}
                    className={cn(
                      "flex items-center gap-4 rounded-xl border px-4 py-3.5",
                      p.state === "active"
                        ? "border-warning/30 bg-warning/[0.05]"
                        : p.state === "done"
                          ? "border-accent/20 bg-accent/[0.04]"
                          : "border-line bg-base"
                    )}
                  >
                    <div
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
                      style={{ background: `${meta.dot}22`, color: meta.dot }}
                    >
                      <Ico className={cn("h-4.5 w-4.5", p.state === "active" && "animate-spin")} />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-fg">
                        Phase {p.n} · {p.title}
                      </p>
                      <p className="text-xs" style={{ color: meta.dot }}>{p.status}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* status cards */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-faint">
              Verification Status
            </h3>
            <div className="mt-4 grid grid-cols-2 gap-3">
              {statusCards.map((c) => (
                <div key={c.label} className="rounded-xl border border-line bg-base p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted">{c.label}</span>
                    {c.state === "done" ? (
                      <CheckCircle2 className="h-4 w-4 text-accent" />
                    ) : (
                      <Loader2 className="h-4 w-4 animate-spin text-warning" />
                    )}
                  </div>
                  <p
                    className="mt-2 text-base font-semibold"
                    style={{ color: c.state === "done" ? "#00e676" : "#ffb547" }}
                  >
                    {c.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* document vault */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-faint">
              Document Vault
            </h3>
            <div className="mt-4 divide-y divide-line overflow-hidden rounded-xl border border-line bg-base">
              {documents.map((d) => (
                <div key={d.name} className="flex items-center justify-between px-4 py-3">
                  <div className="flex items-center gap-3">
                    <FileText className="h-4.5 w-4.5 text-muted" />
                    <div>
                      <p className="text-sm text-fg">{d.name}</p>
                      <p className="text-xs text-faint">{d.size}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    {d.verified ? (
                      <span className="rounded-full bg-accent/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-accent">
                        Verified
                      </span>
                    ) : (
                      <span className="rounded-full bg-warning/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-warning">
                        Processing
                      </span>
                    )}
                    <Download className="h-4 w-4 text-faint" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* sidebar */}
        <div className="space-y-6 bg-surface p-5 sm:p-7">
          {/* risk score */}
          <div className="rounded-2xl border border-line bg-base p-5">
            <div className="flex items-center gap-2">
              <TrendingUp className="h-4.5 w-4.5 text-accent" />
              <h3 className="text-xs font-semibold uppercase tracking-wider text-faint">
                Live Risk Score
              </h3>
            </div>
            <div className="mt-4 flex items-end gap-2">
              <span className="text-5xl font-bold text-accent">14</span>
              <span className="mb-1.5 text-sm text-muted">/ 100</span>
            </div>
            <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/[0.06]">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "14%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
                className="h-full rounded-full bg-accent"
              />
            </div>
            <p className="mt-3 text-xs text-muted">
              Trending low. 2 checks pending confirmation.
            </p>
          </div>

          {/* activity feed */}
          <div className="rounded-2xl border border-line bg-base p-5">
            <div className="flex items-center gap-2">
              <Activity className="h-4.5 w-4.5 text-accent" />
              <h3 className="text-xs font-semibold uppercase tracking-wider text-faint">
                Activity Feed
              </h3>
            </div>
            <div className="mt-4 space-y-4">
              {activity.map((a, i) => (
                <div key={i} className="flex gap-3">
                  <div className="flex flex-col items-center">
                    <span className="mt-1 h-2 w-2 rounded-full" style={{ background: a.color }} />
                    {i < activity.length - 1 && <span className="mt-1 h-full w-px bg-line" />}
                  </div>
                  <div className="pb-1">
                    <p className="text-sm text-fg">{a.text}</p>
                    <p className="text-xs text-faint">{a.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
