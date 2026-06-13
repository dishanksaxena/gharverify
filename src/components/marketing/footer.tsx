import Link from "next/link";
import { ShieldCheck, MapPin } from "lucide-react";
import { Logo } from "@/components/logo";
import { site, footerNav } from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative mt-auto border-t border-line bg-surface/40">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-6">
          <div className="col-span-2">
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              Digital trust infrastructure for India&apos;s property verification
              industry. We protect homebuyers from fraud, defective title, and
              hidden risk — from discovery to registration.
            </p>
            <div className="mt-5 flex items-start gap-2 text-sm text-muted">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <span>{site.address}</span>
            </div>
            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.03] px-3 py-1.5 text-xs text-muted">
              <ShieldCheck className="h-3.5 w-3.5 text-accent" />
              RERA & LDA Compatible · Property Intelligence Platform
            </div>
          </div>

          {Object.entries(footerNav).map(([heading, links]) => (
            <div key={heading}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-faint">
                {heading}
              </h3>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted transition-colors hover:text-fg"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-2xl border border-line bg-white/[0.02] p-6">
          <p className="text-sm leading-relaxed text-muted">
            <span className="font-semibold text-fg">Founder Assurance — {site.founder}.</span>{" "}
            &ldquo;We built GharVerify so that no family in India ever loses their
            life savings to a property they were told was safe. Every report
            carries our name and our standard.&rdquo;
          </p>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-line pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-faint">
            © {new Date().getFullYear()} {site.name}. All rights reserved. Verification services do not constitute a guarantee of title; they provide an evidence-based assessment of discoverable risk.
          </p>
          <div className="flex items-center gap-5">
            <Link href="/privacy" className="text-xs text-muted hover:text-fg">
              Privacy
            </Link>
            <Link href="/terms" className="text-xs text-muted hover:text-fg">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
