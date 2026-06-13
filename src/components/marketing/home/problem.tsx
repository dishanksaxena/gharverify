import { Section, Container, SectionHeading } from "@/components/ui/section";
import { Stagger, StaggerItem } from "@/components/ui/reveal";
import { Icon } from "@/components/icon";
import { problems } from "@/content/data";

export function Problem() {
  return (
    <Section>
      <Container>
        <SectionHeading
          eyebrow="The risk is real"
          title="Property fraud in India is sophisticated, common, and devastating."
          description="A single overlooked document can wipe out a lifetime of savings. These are the threats we neutralise before you transfer a single rupee."
        />
        <Stagger className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {problems.map((p) => (
            <StaggerItem key={p.title}>
              <div className="group h-full rounded-2xl border border-line bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-danger/30 hover:bg-danger/[0.03]">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-danger/20 bg-danger/10 text-danger">
                  <Icon name={p.icon} className="h-5.5 w-5.5" />
                </div>
                <h3 className="mt-5 text-base font-semibold text-fg">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{p.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </Section>
  );
}
