import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { PageHeader } from "@/components/ui/ambient";
import { Section, Container } from "@/components/ui/section";
import { Stagger, StaggerItem } from "@/components/ui/reveal";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { Icon } from "@/components/icon";
import { CtaBand } from "@/components/marketing/cta-band";
import { services } from "@/content/data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Twelve verification services covering title, registry, RERA, litigation, land-use, builder background, and registration — the complete protection stack.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title={<>The complete property protection stack.</>}
        description="Twelve specialised verification services, designed to be combined into a single, defensible assessment of any property in India."
      />

      <Section>
        <Container>
          <Stagger className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <StaggerItem key={s.title}>
                <SpotlightCard className="h-full">
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-accent/20 bg-accent/10 text-accent">
                      <Icon name={s.icon} className="h-6 w-6" />
                    </div>
                    <span className="font-mono text-xs text-faint">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-fg">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{s.desc}</p>
                  <Link
                    href="/risk-scanner"
                    className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-accent opacity-0 transition-opacity group-hover:opacity-100"
                  >
                    Include in scan
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </SpotlightCard>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      <CtaBand
        eyebrow="Not sure what you need?"
        title="Run a free risk scan to see your gaps."
        description="Tell us about the property and we'll recommend exactly which verification modules protect you best."
        primary={{ label: "Initiate Property Scan", href: "/risk-scanner" }}
        secondary={{ label: "View Pricing", href: "/pricing" }}
      />
    </>
  );
}
