import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/ambient";
import { Section, Container } from "@/components/ui/section";
import { Accordion } from "@/components/ui/accordion";
import { CtaBand } from "@/components/marketing/cta-band";
import { faqs } from "@/content/data";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers to common questions about property verification, fraud prevention, pricing, timelines, legal scope, and registration support.",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <PageHeader
        eyebrow="FAQ"
        title={<>Everything you want to know before you trust us.</>}
        description="Clear answers on how verification works, what it protects you from, what it costs, and how long it takes."
      />
      <Section>
        <Container className="max-w-3xl">
          <Accordion items={faqs} />
        </Container>
      </Section>
      <CtaBand
        eyebrow="Still have questions?"
        title="Talk to a verification expert."
        description="We'll walk you through your specific property and exactly how we'd protect it."
        primary={{ label: "Contact Us", href: "/contact" }}
        secondary={{ label: "Run a Free Scan", href: "/risk-scanner" }}
      />
    </>
  );
}
