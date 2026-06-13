import { cn } from "@/lib/utils";

/** Ambient page background: subtle grid + accent glows. Pure CSS, no JS. */
export function Ambient({ className }: { className?: string }) {
  return (
    <div className={cn("pointer-events-none absolute inset-0 -z-10 overflow-hidden", className)}>
      <div className="absolute inset-0 grid-bg radial-fade opacity-70" />
      <div className="absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-accent/10 blur-[140px]" />
      <div className="absolute right-[-10%] top-[20%] h-[380px] w-[380px] rounded-full bg-[#0ea5e9]/10 blur-[130px]" />
    </div>
  );
}

export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description: string;
}) {
  return (
    <header className="relative overflow-hidden border-b border-line pt-36 pb-16 sm:pt-44 sm:pb-20">
      <Ambient />
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="flex max-w-3xl flex-col gap-5">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-line bg-white/[0.03] px-3.5 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            {eyebrow}
          </span>
          <h1 className="text-balance text-4xl font-bold leading-[1.05] text-fg sm:text-5xl md:text-6xl">
            {title}
          </h1>
          <p className="text-pretty text-lg leading-relaxed text-muted">
            {description}
          </p>
        </div>
      </div>
    </header>
  );
}
