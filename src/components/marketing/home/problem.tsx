import { Section, Container, SectionHeading } from "@/components/ui/section";
import { Stagger, StaggerItem } from "@/components/ui/reveal";
import { Icon } from "@/components/icon";
import { problems } from "@/content/data";

export function Problem() {
  return (
    <Section className="relative overflow-hidden">
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-danger/40 to-transparent" />
      <Container>
        <SectionHeading
          eyebrow="The risk is real"
          title="Property fraud in India is sophisticated, common, and devastating."
          description="A single overlooked document can wipe out a lifetime of savings. These are the threats we neutralise before you transfer a single rupee."
        />
        <Stagger className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {problems.map((p) => (
            <StaggerItem key={p.title}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-line bg-surface/70 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-danger/40 hover:bg-danger/[0.04] hover:shadow-[0_24px_60px_-30px_rgba(255,93,93,0.5)]">
                <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-danger/10 blur-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative flex h-12 w-12 items-center justify-center rounded-xl border border-danger/20 bg-gradient-to-br from-danger/20 to-danger/5 text-danger transition-transform duration-300 group-hover:scale-110">
                  <Icon name={p.icon} className="h-6 w-6" />
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
