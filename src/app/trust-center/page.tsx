import type { Metadata } from "next";
import { Lock, ShieldCheck, FileCheck2, Server, Eye, KeyRound } from "lucide-react";
import { PageHeader } from "@/components/ui/ambient";
import { Section, Container, SectionHeading } from "@/components/ui/section";
import { Stagger, StaggerItem } from "@/components/ui/reveal";
import { Reveal } from "@/components/ui/reveal";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { Icon } from "@/components/icon";
import { CtaBand } from "@/components/marketing/cta-band";
import { trustSections } from "@/content/data";

export const metadata: Metadata = {
  title: "Trust Center",
  description:
    "How GharVerify safeguards your documents and ensures every verification is rigorous, auditable, and accountable. Security, compliance, and methodology in one place.",
};

const pillars = [
  { icon: Lock, title: "Encrypted end to end", desc: "TLS in transit, AES-256 at rest." },
  { icon: Server, title: "Isolated vaults", desc: "Your documents never co-mingle." },
  { icon: Eye, title: "Tamper-evident logs", desc: "Every access is recorded." },
  { icon: KeyRound, title: "Access controlled", desc: "Least-privilege, role-based." },
];

const compliance = [
  "RERA (Real Estate Regulation Act, 2016)",
  "Registration Act, 1908",
  "Transfer of Property Act, 1882",
  "Indian Stamp Act, 1899",
  "State land-revenue & development-authority norms",
  "Information Technology Act data-handling standards",
];

export default function TrustCenterPage() {
  return (
    <>
      <PageHeader
        eyebrow="Trust Center"
        title={<>Security and rigour, made transparent.</>}
        description="You are trusting us with the documents behind your largest financial decision. Here is exactly how we protect them — and how we ensure every verdict is defensible."
      />

      {/* security pillars */}
      <Section>
        <Container>
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.06}>
                <div className="h-full rounded-2xl border border-line bg-surface p-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-accent/20 bg-accent/10 text-accent">
                    <p.icon className="h-5.5 w-5.5" />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-fg">{p.title}</h3>
                  <p className="mt-1.5 text-sm text-muted">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* framework grid */}
      <Section className="border-y border-line bg-surface/30">
        <Container>
          <SectionHeading
            eyebrow="Our framework"
            title="Eight standards behind every report."
            description="A single methodology applied identically to every file — no shortcuts, no exceptions."
          />
          <Stagger className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {trustSections.map((t) => (
              <StaggerItem key={t.title}>
                <SpotlightCard className="h-full">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-accent/20 bg-accent/10 text-accent">
                    <Icon name={t.icon} className="h-5.5 w-5.5" />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-fg">{t.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{t.desc}</p>
                </SpotlightCard>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      {/* compliance + assurance */}
      <Section>
        <Container>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-3xl border border-line bg-surface p-8">
                <div className="flex items-center gap-2.5">
                  <FileCheck2 className="h-5.5 w-5.5 text-accent" />
                  <h3 className="text-xl font-bold text-fg">Compliance framework</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  Our verification workflows are aligned to the statutes and
                  regulations that govern property in India:
                </p>
                <ul className="mt-5 space-y-3">
                  {compliance.map((c) => (
                    <li key={c} className="flex items-start gap-2.5 text-sm text-fg">
                      <ShieldCheck className="mt-0.5 h-4.5 w-4.5 shrink-0 text-accent" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="flex h-full flex-col justify-between rounded-3xl border border-accent/20 bg-gradient-to-b from-accent/[0.07] to-surface p-8">
                <div>
                  <h3 className="text-xl font-bold text-fg">The GharVerify assurance</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    Every report is dual-reviewed, evidence-linked, and carries a
                    full audit trail. We tell you what we checked, what we found,
                    and what we could not confirm — in plain language, with no
                    incentive to understate risk.
                  </p>
                </div>
                <div className="mt-8 grid grid-cols-3 gap-3 text-center">
                  {[
                    { n: "2×", l: "Reviewer sign-off" },
                    { n: "18", l: "Verification points" },
                    { n: "100%", l: "Evidence-linked" },
                  ].map((s) => (
                    <div key={s.l} className="rounded-xl border border-line bg-base/60 py-4">
                      <div className="text-2xl font-bold text-accent">{s.n}</div>
                      <div className="mt-1 text-[11px] uppercase tracking-wider text-faint">{s.l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <CtaBand
        eyebrow="Verification you can audit"
        title="Trust, but verify — that's our entire model."
        description="Start a verification and see the rigour for yourself, from secure intake to a defensible final report."
      />
    </>
  );
}
