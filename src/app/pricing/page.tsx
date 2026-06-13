import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/ambient";
import { Section, Container } from "@/components/ui/section";
import { PricingCalculator } from "@/components/pricing/pricing-calculator";
import { Accordion } from "@/components/ui/accordion";
import { Reveal } from "@/components/ui/reveal";
import { CtaBand } from "@/components/marketing/cta-band";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent, size-based pricing across Essential, Professional, and Institutional plans. Use the calculator to get an instant estimate.",
};

const pricingFaqs = [
  { q: "Why does pricing depend on plot size?", a: "Larger properties typically involve more complex title chains, more parties, and a higher value at risk — which means deeper verification. Pricing scales to match the actual work involved." },
  { q: "Are there any hidden charges?", a: "No. Your quote covers the verification scope you select. Government fees, stamp duty, and registration charges (where applicable) are statutory and always shown separately." },
  { q: "Can I upgrade my plan mid-verification?", a: "Yes. If a finding warrants deeper investigation, you can upgrade and we'll only charge the difference." },
  { q: "Do you offer volume pricing for builders and investors?", a: "Yes — the Institutional plan is built for portfolios, with multi-property rates and a dedicated verification manager." },
];

export default function PricingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Pricing"
        title={<>Pay for protection that scales with what&apos;s at stake.</>}
        description="Move the slider to size your property and watch pricing and advanced verification modules update in real time."
      />
      <Section>
        <Container className="max-w-6xl">
          <PricingCalculator />
        </Container>
      </Section>

      <Section className="border-t border-line bg-surface/30">
        <Container className="max-w-3xl">
          <Reveal>
            <h2 className="mb-8 text-center text-3xl font-bold text-fg sm:text-4xl">
              Pricing questions
            </h2>
          </Reveal>
          <Accordion items={pricingFaqs} />
        </Container>
      </Section>

      <CtaBand
        eyebrow="Still deciding?"
        title="Get a tailored quote in one call."
        description="Tell us about your property and we'll recommend the right plan and modules — no obligation."
        primary={{ label: "Book a Consultation", href: "/contact" }}
        secondary={{ label: "Run a Free Scan", href: "/risk-scanner" }}
      />
    </>
  );
}
