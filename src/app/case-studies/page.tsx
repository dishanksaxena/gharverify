import type { Metadata } from "next";
import { MapPin, ShieldAlert, Search, AlertTriangle, CheckCircle2 } from "lucide-react";
import { PageHeader } from "@/components/ui/ambient";
import { Section, Container } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { Badge } from "@/components/ui/badge";
import { CtaBand } from "@/components/marketing/cta-band";
import { caseStudies } from "@/content/data";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Real verification outcomes — how GharVerify uncovered hidden risk and protected buyers from catastrophic property losses.",
};

const riskTone = {
  Critical: "danger",
  High: "danger",
  Moderate: "warning",
  Low: "accent",
} as const;

const steps = [
  { key: "problem", label: "The Situation", icon: ShieldAlert, color: "#a1a1aa" },
  { key: "investigation", label: "Investigation", icon: Search, color: "#ffb547" },
  { key: "discovery", label: "Discovery", icon: AlertTriangle, color: "#ff5d5d" },
  { key: "resolution", label: "Resolution", icon: CheckCircle2, color: "#00e676" },
] as const;

export default function CaseStudiesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Case Studies"
        title={<>When verification pays for itself a thousand times over.</>}
        description="Illustrative outcomes drawn from our verification practice. Details are anonymised; the risks they represent are entirely real."
      />

      <Section>
        <Container className="space-y-8">
          {caseStudies.map((cs, i) => (
            <Reveal key={cs.slug} delay={i * 0.05}>
              <article className="overflow-hidden rounded-3xl border border-line bg-surface shadow-card">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-line bg-white/[0.02] px-6 py-5 sm:px-8">
                  <div>
                    <h2 className="text-xl font-bold text-fg sm:text-2xl">{cs.title}</h2>
                    <p className="mt-1 flex items-center gap-1.5 text-sm text-muted">
                      <MapPin className="h-3.5 w-3.5 text-accent" />
                      {cs.location} · Value {cs.value}
                    </p>
                  </div>
                  <Badge tone={riskTone[cs.risk]}>{cs.risk} Risk Detected</Badge>
                </div>

                <div className="grid grid-cols-1 gap-px bg-line md:grid-cols-4">
                  {steps.map((s) => (
                    <div key={s.key} className="bg-surface p-6">
                      <div className="flex items-center gap-2">
                        <s.icon className="h-4.5 w-4.5" style={{ color: s.color }} />
                        <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: s.color }}>
                          {s.label}
                        </span>
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-muted">
                        {cs[s.key]}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between gap-4 border-t border-line bg-accent/[0.04] px-6 py-5 sm:px-8">
                  <span className="text-sm font-medium text-muted">Buyer savings protected</span>
                  <span className="text-2xl font-bold text-accent">{cs.saved}</span>
                </div>
              </article>
            </Reveal>
          ))}
        </Container>
      </Section>

      <CtaBand
        eyebrow="Your property next"
        title="Don't become the case study you read about."
        description="Most catastrophic losses were entirely preventable with verification. Start yours before you commit a single rupee."
      />
    </>
  );
}
