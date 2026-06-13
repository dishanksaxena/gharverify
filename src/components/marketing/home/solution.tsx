import { Section, Container, SectionHeading } from "@/components/ui/section";
import { ProcessRail } from "@/components/marketing/process-timeline";

const railSteps = [
  { label: "Discovery", icon: "FileSearch" },
  { label: "Document Collection", icon: "ScrollText" },
  { label: "Verification", icon: "ShieldCheck" },
  { label: "Govt. Validation", icon: "Landmark" },
  { label: "Risk Assessment", icon: "Fingerprint" },
  { label: "Registration", icon: "FileSignature" },
] as const;

export function Solution() {
  return (
    <Section className="border-y border-line bg-surface/30">
      <Container>
        <SectionHeading
          eyebrow="The GharVerify process"
          title="One continuous chain of custody — from listing to title."
          description="We sit beside you through every stage of the transaction, converting uncertainty into a documented, defensible verdict."
        />
        <ProcessRail steps={railSteps} />
      </Container>
    </Section>
  );
}
