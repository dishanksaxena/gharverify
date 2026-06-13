import { Section, Container, SectionHeading } from "@/components/ui/section";
import { Stagger, StaggerItem } from "@/components/ui/reveal";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { Icon } from "@/components/icon";
import { aiFeatures } from "@/content/data";

export function AiEngine() {
  return (
    <Section>
      <Container>
        <SectionHeading
          eyebrow="Property Intelligence Engine"
          title="Document intelligence that reads what humans miss."
          description="Our verification engine combines machine reading with expert legal review — extracting, mapping, and scoring every signal in a property's history."
        />
        <Stagger className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {aiFeatures.map((f) => (
            <StaggerItem
              key={f.title}
              className={"span" in f && f.span === "lg" ? "sm:col-span-2 lg:col-span-2" : ""}
            >
              <SpotlightCard className="h-full">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-accent/20 bg-accent/10 text-accent">
                  <Icon name={f.icon} className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-fg">{f.title}</h3>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-muted">
                  {f.desc}
                </p>
              </SpotlightCard>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </Section>
  );
}
