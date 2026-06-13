import { PageHeader } from "@/components/ui/ambient";
import { Section, Container } from "@/components/ui/section";

export type LegalSection = { heading: string; body: string[] };

export function LegalShell({
  eyebrow,
  title,
  updated,
  intro,
  sections,
}: {
  eyebrow: string;
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <PageHeader eyebrow={eyebrow} title={title} description={intro} />
      <Section>
        <Container className="max-w-3xl">
          <p className="mb-10 text-sm text-faint">Last updated: {updated}</p>
          <div className="space-y-10">
            {sections.map((s, i) => (
              <div key={s.heading} id={`section-${i + 1}`}>
                <h2 className="text-xl font-bold text-fg">
                  {i + 1}. {s.heading}
                </h2>
                <div className="mt-3 space-y-3">
                  {s.body.map((p, j) => (
                    <p key={j} className="text-[15px] leading-relaxed text-muted">
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 rounded-2xl border border-line bg-surface p-6 text-sm leading-relaxed text-muted">
            Questions about this document? Contact us at{" "}
            <span className="font-medium text-accent">secure@gharverify.com</span>.
          </div>
        </Container>
      </Section>
    </>
  );
}
