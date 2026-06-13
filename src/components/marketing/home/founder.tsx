import Image from "next/image";
import { ArrowRight, Quote } from "lucide-react";
import { Section, Container } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { ButtonLink } from "@/components/ui/button";
import { site } from "@/lib/site";

export function FounderSection() {
  return (
    <Section className="border-y border-line bg-surface/30">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal className="relative">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-3xl border border-line shadow-card">
              <Image
                src="/founder.png"
                alt={site.founder}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-base/60" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-center">
                <p className="text-lg font-bold text-fg">{site.founder}</p>
                <p className="mt-0.5 text-xs text-muted">Founder & Chief Verifier</p>
                <p className="mt-2 text-xs text-faint">Lucknow, Uttar Pradesh</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.03] px-3.5 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Founder Story
            </span>
            <Quote className="mt-6 h-8 w-8 text-accent/40" />
            <h2 className="mt-4 text-balance text-3xl font-bold leading-[1.12] text-fg sm:text-4xl">
              Bringing institutional transparency to India&apos;s fragmented
              property ecosystem.
            </h2>
            <p className="mt-6 text-pretty text-base leading-relaxed text-muted">
              GharVerify began with a simple conviction: a family&apos;s largest
              financial decision should not rest on trust alone. Across India,
              property records are scattered, opaque, and easy to manipulate — and
              the people who pay the price are ordinary buyers.
            </p>
            <p className="mt-4 text-pretty text-base leading-relaxed text-muted">
              We built the verification standard we wished existed: rigorous,
              evidence-backed, and accountable. Every report carries our name —
              because protecting your savings is not a service feature, it is the
              entire point.
            </p>
            <div className="mt-8">
              <ButtonLink href="/founder" variant="secondary">
                Read the full story
                <ArrowRight className="h-4 w-4" />
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
