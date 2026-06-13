import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/ambient";
import { Section, Container } from "@/components/ui/section";
import { RiskScanner } from "@/components/risk/risk-scanner";
import { CtaBand } from "@/components/marketing/cta-band";

export const metadata: Metadata = {
  title: "Property Risk Scanner",
  description:
    "Get an instant, indicative property risk score across title, registry, litigation, RERA, land-use, and builder reputation — before you commit funds.",
};

export default function RiskScannerPage() {
  return (
    <>
      <PageHeader
        eyebrow="Property Risk Scanner"
        title={<>Screen any property in 60 seconds.</>}
        description="Enter the property details for an instant, indicative risk score across eight verification dimensions. It's the first step before a full verification."
      />
      <Section>
        <Container className="max-w-5xl">
          <RiskScanner />
        </Container>
      </Section>
      <CtaBand
        eyebrow="Indicative isn't enough"
        title="Turn a scan into certainty."
        description="A full GharVerify verification confirms every signal against original documents and government records, with dual-reviewer sign-off."
      />
    </>
  );
}
