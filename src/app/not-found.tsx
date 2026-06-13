import Link from "next/link";
import { ArrowLeft, ShieldQuestion } from "lucide-react";
import { Ambient } from "@/components/ui/ambient";
import { ButtonLink } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden px-5">
      <Ambient />
      <div className="flex flex-col items-center text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-accent/20 bg-accent/10 text-accent">
          <ShieldQuestion className="h-8 w-8" />
        </div>
        <p className="mt-8 font-mono text-sm tracking-widest text-accent">ERROR 404</p>
        <h1 className="mt-3 text-balance text-4xl font-bold text-fg sm:text-5xl">
          This page couldn&apos;t be verified.
        </h1>
        <p className="mt-4 max-w-md text-pretty text-muted">
          The page you&apos;re looking for doesn&apos;t exist or has moved. Let&apos;s
          get you back to safety.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <ButtonLink href="/">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </ButtonLink>
          <ButtonLink href="/risk-scanner" variant="secondary">
            Run a Property Scan
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
