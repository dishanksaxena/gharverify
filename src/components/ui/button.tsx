import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "outline";
type Size = "sm" | "md" | "lg";

const base =
  "group/btn relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full font-medium whitespace-nowrap transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-gradient-to-b from-[#1cf08a] to-accent text-[#04210f] font-semibold shadow-[0_8px_30px_-8px_rgba(0,230,118,0.6)] hover:shadow-[0_14px_50px_-10px_rgba(0,230,118,0.8)] hover:-translate-y-0.5 active:translate-y-0",
  secondary:
    "glass text-fg hover:bg-white/[0.08] hover:border-line-strong hover:-translate-y-0.5",
  outline:
    "border border-line-strong text-fg hover:bg-white/[0.05] hover:-translate-y-0.5",
  ghost: "text-muted hover:text-fg hover:bg-white/[0.05]",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-[15px]",
  lg: "h-13 px-7 text-base py-3.5",
};

function Shine() {
  return (
    <span className="pointer-events-none absolute inset-0 -z-0 overflow-hidden rounded-full">
      <span className="absolute left-0 top-0 h-full w-1/3 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 [transform:translateX(-130%)_skewX(-18deg)] transition-opacity duration-300 group-hover/btn:opacity-100 group-hover/btn:animate-shine" />
    </span>
  );
}

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: CommonProps & ComponentProps<"button">) {
  return (
    <button className={cn(base, variants[variant], sizes[size], className)} {...props}>
      {variant === "primary" && <Shine />}
      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
    </button>
  );
}

export function ButtonLink({
  variant = "primary",
  size = "md",
  className,
  children,
  href,
  ...props
}: CommonProps & ComponentProps<typeof Link>) {
  return (
    <Link href={href} className={cn(base, variants[variant], sizes[size], className)} {...props}>
      {variant === "primary" && <Shine />}
      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
    </Link>
  );
}
