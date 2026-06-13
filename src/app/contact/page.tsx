import type { Metadata } from "next";
import { Mail, Phone, MapPin, Clock, CalendarCheck } from "lucide-react";
import { PageHeader } from "@/components/ui/ambient";
import { Section, Container } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { ContactForm } from "@/components/contact/contact-form";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Talk to a GharVerify verification specialist. Book a consultation, reach our Lucknow head office, or start a property verification today.",
};

const channels = [
  { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
  { icon: Phone, label: "Phone", value: site.phone, href: `tel:${site.phone.replace(/\s/g, "")}` },
  { icon: MapPin, label: "Head Office", value: site.address },
  { icon: Clock, label: "Hours", value: "Mon–Sat · 9:30 AM – 7:00 PM IST" },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title={<>Speak to a verification specialist.</>}
        description="Whether you're booking a property or already mid-transaction, we'll help you protect it. Reach out and we'll open a secure file within one business day."
      />
      <Section>
        <Container>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1.4fr]">
            <Reveal>
              <div className="space-y-4">
                {channels.map((c) => {
                  const content = (
                    <div className="flex items-start gap-4 rounded-2xl border border-line bg-surface p-5 transition-colors hover:border-line-strong">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-accent/20 bg-accent/10 text-accent">
                        <c.icon className="h-5.5 w-5.5" />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-wider text-faint">{c.label}</p>
                        <p className="mt-1 text-sm font-medium text-fg">{c.value}</p>
                      </div>
                    </div>
                  );
                  return c.href ? (
                    <a key={c.label} href={c.href} className="block">
                      {content}
                    </a>
                  ) : (
                    <div key={c.label}>{content}</div>
                  );
                })}

                <div className="rounded-2xl border border-accent/20 bg-gradient-to-b from-accent/[0.07] to-surface p-6">
                  <CalendarCheck className="h-6 w-6 text-accent" />
                  <h3 className="mt-3 text-lg font-bold text-fg">Free 20-minute consultation</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    Not sure where to begin? Book a no-obligation call and we&apos;ll
                    assess your property&apos;s risk profile and recommend exactly
                    what to verify.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <ContactForm />
            </Reveal>
          </div>
        </Container>
      </Section>
    </>
  );
}
