import { ShieldCheck, Landmark, Scale, FileCheck2, Building2, Gavel, Lock, BadgeCheck } from "lucide-react";
import { Marquee } from "@/components/ui/marquee";
import { Container } from "@/components/ui/section";

const items = [
  { icon: ShieldCheck, label: "RERA Compatible" },
  { icon: Landmark, label: "LDA Validated" },
  { icon: Scale, label: "Registration Act, 1908" },
  { icon: FileCheck2, label: "Encumbrance Audited" },
  { icon: Gavel, label: "Litigation Screened" },
  { icon: Building2, label: "Builder Verified" },
  { icon: Lock, label: "AES-256 Encrypted" },
  { icon: BadgeCheck, label: "Dual-Reviewer Sign-off" },
];

export function TrustStrip() {
  return (
    <section className="relative border-y border-line bg-surface/30 py-7">
      <Container>
        <p className="mb-5 text-center text-xs font-medium uppercase tracking-[0.22em] text-faint">
          Verified against India&apos;s property compliance framework
        </p>
        <Marquee duration={32}>
          {items.map((it) => (
            <div
              key={it.label}
              className="flex items-center gap-2.5 whitespace-nowrap text-sm font-medium text-muted"
            >
              <it.icon className="h-4.5 w-4.5 text-accent" />
              {it.label}
              <span className="ml-7 h-1 w-1 rounded-full bg-line-strong" />
            </div>
          ))}
        </Marquee>
      </Container>
    </section>
  );
}
