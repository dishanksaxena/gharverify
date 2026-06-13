import { ArrowRight, ShieldCheck } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";

export function CtaBand({
  eyebrow = "Before you buy property",
  title = "Verify everything. Then sign.",
  description = "Open a secure verification file in minutes. Our team begins document intake and risk analysis immediately — so you never commit your savings on faith alone.",
  primary = { label: "Start Verification", href: "/risk-scanner" },
  secondary = { label: "Talk to an Expert", href: "/contact" },
}: {
  eyebrow?: string;
  title?: string;
  description?: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
}) {
  return (
    <section className="relative py-20 sm:py-28">
      <Container>
        <Reveal>
          <div className="group conic-border relative overflow-hidden rounded-3xl border border-line bg-gradient-to-b from-surface to-base p-8 text-center shadow-float sm:p-16">
            <div className="pointer-events-none absolute inset-0 dot-bg opacity-50 radial-fade" />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />
            <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[600px] -translate-x-1/2 rounded-full bg-accent/20 blur-[110px] animate-glow" />
            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3.5 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-accent">
                <ShieldCheck className="h-3.5 w-3.5" />
                {eyebrow}
              </span>
              <h2 className="mx-auto mt-6 max-w-2xl text-balance text-3xl font-bold leading-[1.08] text-fg sm:text-5xl">
                {title}
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted sm:text-lg">
                {description}
              </p>
              <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
                <ButtonLink href={primary.href} size="lg">
                  {primary.label}
                  <ArrowRight className="h-4.5 w-4.5" />
                </ButtonLink>
                <ButtonLink href={secondary.href} variant="secondary" size="lg">
                  {secondary.label}
                </ButtonLink>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
