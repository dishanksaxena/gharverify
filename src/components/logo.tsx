import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn("group inline-flex items-center gap-2.5", className)}
      aria-label="GharVerify home"
    >
      <span className="relative flex h-2.5 w-2.5 items-center justify-center">
        <span className="absolute inline-flex h-full w-full rounded-full bg-accent animate-pulse-dot" />
        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
      </span>
      <span className="text-[17px] font-bold tracking-tight text-fg font-[family-name:var(--font-display)]">
        Ghar<span className="text-accent">Verify</span>
      </span>
    </Link>
  );
}
