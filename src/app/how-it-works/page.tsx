import type { Metadata } from "next";
import { CheckCircle2, Clock, FileLock2, ShieldCheck } from "lucide-react";
import { PageHeader } from "@/components/ui/ambient";
import { Section, Container, SectionHeading } from "@/components/ui/section";
import { ProcessTimeline } from "@/components/marketing/process-timeline";
import { Reveal } from "@/components/ui/reveal";
import { CtaBand } from "@/components/marketing/cta-band";
import { processSteps } from "@/content/data";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "A seven-stage verification process — from property submission to registration support — engineered for clarity, rigour, and accountability.",
};

const guarantees = [
  { icon: "Clock", title: "5–9 working days", desc: "Typical turnaround for a standard verification, with live status throughout." },
  { icon: "FileLock2", title: "Private document vault", desc: "Encrypted intake, access-controlled, tamper-evident logging on every file." },
  { icon: "ShieldCheck", title: "Dual-reviewer sign-off", desc: "Every report is independently reviewed before it reaches you." },
];

const iconMap = { Clock, FileLock2, ShieldCheck } as const;

export default function HowItWorksPage() {
  return (
    <>
      <PageHeader
        eyebrow="How It Works"
        title={<>From listing to legal title, in seven verified stages.</>}
        description="We turn an opaque, high-stakes transaction into a transparent, documented process — so you always know exactly where your verification stands."
      />

      <Section>
        <Container>
          <SectionHeading
            align="left"
            eyebrow="The process"
            title="A continuous chain of custody for your purchase."
            description="Each stage produces evidence that feeds the next, culminating in a single defensible risk verdict."
          />
          <ProcessTimeline steps={processSteps} />
        </Container>
      </Section>

      <Section className="border-y border-line bg-surface/30">
        <Container>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {guarantees.map((g, i) => {
              const Ico = iconMap[g.icon as keyof typeof iconMap];
              return (
                <Reveal key={g.title} delay={i * 0.08}>
                  <div className="h-full rounded-2xl border border-line bg-surface p-7">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-accent/20 bg-accent/10 text-accent">
                      <Ico className="h-6 w-6" />
                    </div>
                    <h3 className="mt-5 text-lg font-semibold text-fg">{g.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{g.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeading
            eyebrow="What you receive"
            title="A report you can act on with confidence."
          />
          <Reveal className="mx-auto mt-12 max-w-3xl">
            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {[
                "0–100 Property Risk Score",
                "Title chain reconstruction",
                "Ownership & encumbrance map",
                "Litigation screening summary",
                "RERA & development-authority status",
                "Land-use & zoning assessment",
                "Evidence-linked findings log",
                "Prioritised recommended actions",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-line bg-surface px-4 py-3.5 text-sm text-fg"
                >
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </Section>

      <CtaBand />
    </>
  );
}
