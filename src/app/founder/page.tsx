import type { Metadata } from "next";
import Image from "next/image";
import { Quote, MapPin, Target, Compass, HeartHandshake } from "lucide-react";
import { PageHeader } from "@/components/ui/ambient";
import { Section, Container } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { CtaBand } from "@/components/marketing/cta-band";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Founder Story",
  description: `Why ${site.founder} built GharVerify — bringing institutional transparency to India's fragmented property ecosystem from Lucknow.`,
};

const values = [
  { icon: Target, title: "Buyer-first, always", desc: "We work for the buyer, never the seller or broker. Our only incentive is to protect your money." },
  { icon: Compass, title: "Evidence over assurance", desc: "Every claim in a report is backed by a source. We don't ask you to take our word — we show our work." },
  { icon: HeartHandshake, title: "Accountable by name", desc: "Each verification carries our standard and our reputation. We stake our name on getting it right." },
];

export default function FounderPage() {
  return (
    <>
      <PageHeader
        eyebrow="Founder Story"
        title={<>Bringing institutional transparency to Indian property.</>}
        description={`The story behind GharVerify, and why ${site.founder} is building the trust layer India's homebuyers have always deserved.`}
      />

      <Section>
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.75fr_1.25fr]">
            <Reveal>
              <div className="lg:sticky lg:top-28">
                <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-line shadow-card">
                  <Image
                    src="/founder.png"
                    alt={site.founder}
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-base/60" />
                  <div className="absolute inset-x-0 bottom-0 p-6 text-center">
                    <p className="text-lg font-bold text-fg">{site.founder}</p>
                    <p className="mt-0.5 text-xs text-muted">Founder &amp; Chief Verifier</p>
                    <p className="mt-2 inline-flex items-center gap-1.5 text-xs text-faint">
                      <MapPin className="h-3.5 w-3.5 text-accent" />
                      Lucknow, Uttar Pradesh
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <Quote className="h-10 w-10 text-accent/40" />
              <blockquote className="mt-4 text-balance text-2xl font-semibold leading-snug text-fg sm:text-3xl">
                &ldquo;A family&apos;s largest financial decision should never rest
                on trust alone. We built the verification standard we wished
                existed.&rdquo;
              </blockquote>
              <div className="mt-8 space-y-5 text-pretty text-base leading-relaxed text-muted">
                <p>
                  In Lucknow, like much of India, property is the centrepiece of a
                  family&apos;s wealth — and yet the records behind it are
                  scattered across registries, revenue offices, development
                  authorities, and courts that rarely speak to one another. For an
                  ordinary buyer, confirming that a property is genuinely safe is
                  almost impossible.
                </p>
                <p>
                  I watched too many people — first-time buyers, retirees, NRIs
                  sending money home — discover too late that the property they
                  bought carried a hidden mortgage, a pending court case, or a
                  title that never truly belonged to the seller. These were not
                  reckless decisions. They were informed by everyone except an
                  independent verifier working solely for the buyer.
                </p>
                <p>
                  GharVerify exists to be that independent verifier. We combine
                  document intelligence with disciplined legal review, reconcile
                  every claim against government records, and deliver a single,
                  defensible risk verdict — before a rupee changes hands.
                </p>
                <p>
                  Our ambition is simple and serious: to become the trust
                  infrastructure for Indian property, so that no family ever again
                  loses their life savings to a property they were told was safe.
                </p>
              </div>

              <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
                {values.map((v) => (
                  <div key={v.title} className="rounded-2xl border border-line bg-surface p-5">
                    <v.icon className="h-5.5 w-5.5 text-accent" />
                    <h3 className="mt-3 text-sm font-semibold text-fg">{v.title}</h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-muted">{v.desc}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <CtaBand
        eyebrow="Built in Lucknow, for all of India"
        title="Let us verify your next property."
        description="Work directly with a team whose only job is to protect your purchase."
        primary={{ label: "Start Verification", href: "/risk-scanner" }}
        secondary={{ label: "Contact the Team", href: "/contact" }}
      />
    </>
  );
}
