import { cn } from "@/lib/utils";
import { ConstructionScene } from "./construction-scene";

/** Cinematic layered background: animated aurora blobs + grid + vignette. Pure CSS. */
export function Ambient({
  className,
  variant = "default",
}: {
  className?: string;
  variant?: "default" | "subtle";
}) {
  return (
    <div className={cn("pointer-events-none absolute inset-0 -z-10 overflow-hidden", className)}>
      {/* grid */}
      <div className="absolute inset-0 grid-bg radial-fade opacity-[0.55]" />

      {/* aurora blobs */}
      <div className="absolute -top-48 left-1/2 h-[560px] w-[900px] -translate-x-1/2 rounded-full bg-accent/20 blur-[150px] animate-aurora" />
      <div className="absolute right-[-12%] top-[8%] h-[440px] w-[440px] rounded-full bg-cyan/15 blur-[140px] animate-aurora2" />
      <div className="absolute left-[-12%] top-[35%] h-[420px] w-[420px] rounded-full bg-violet/15 blur-[150px] animate-float-slow" />

      {variant === "default" && (
        <>
          {/* horizon glow line */}
          <div className="absolute left-1/2 top-[58%] h-px w-[70%] -translate-x-1/2 bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
          <div className="absolute left-1/2 top-[58%] h-40 w-[55%] -translate-x-1/2 rounded-[100%] bg-accent/10 blur-[90px]" />
        </>
      )}

      {/* top + bottom vignette */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-base to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-base to-transparent" />
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
    <header className="relative overflow-hidden border-b border-line pt-36 pb-20 sm:pt-44 sm:pb-24">
      <Ambient />
      <div className="pointer-events-none absolute inset-0 -z-10">
        <ConstructionScene opacity={0.4} />
      </div>
      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="flex max-w-3xl flex-col gap-5">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-line bg-white/[0.04] px-3.5 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-muted backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_10px_2px_rgba(0,230,118,0.7)]" />
            {eyebrow}
          </span>
          <h1 className="text-balance text-4xl font-bold leading-[1.04] tracking-tight text-fg sm:text-5xl md:text-[3.75rem]">
            {title}
          </h1>
          <p className="max-w-2xl text-pretty text-lg leading-relaxed text-muted">
            {description}
          </p>
        </div>
      </div>
    </header>
  );
}
