import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/ambient";
import { Section, Container } from "@/components/ui/section";
import { DashboardDemo } from "@/components/dashboard/dashboard-demo";
import { CtaBand } from "@/components/marketing/cta-band";

export const metadata: Metadata = {
  title: "Dashboard Demo",
  description:
    "A live preview of the GharVerify client portal — track every verification phase, your document vault, risk score, and activity in real time.",
};

export default function DashboardPage() {
  return (
    <>
      <PageHeader
        eyebrow="Client Portal"
        title={<>Watch your verification happen in real time.</>}
        description="Every GharVerify client gets a live command center: phase-by-phase status, a secure document vault, a continuously updated risk score, and a full activity feed."
      />
      <Section>
        <Container className="max-w-6xl">
          <DashboardDemo />
        </Container>
      </Section>
      <CtaBand
        eyebrow="This could be your property"
        title="Open your verification dashboard today."
        description="Start a verification and get instant access to your own secure portal."
      />
    </>
  );
}
