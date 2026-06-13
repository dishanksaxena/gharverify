"use client";

import { useRef, type ReactNode, type MouseEvent } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

export function SpotlightCard({
  children,
  className,
  glow = "rgba(0,230,118,0.16)",
  tilt = true,
}: {
  children: ReactNode;
  className?: string;
  glow?: string;
  tilt?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const mvX = useMotionValue(0.5);
  const mvY = useMotionValue(0.5);
  const rx = useSpring(useTransform(mvY, [0, 1], [6, -6]), { stiffness: 150, damping: 18 });
  const ry = useSpring(useTransform(mvX, [0, 1], [-6, 6]), { stiffness: 150, damping: 18 });

  function onMove(e: MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    mvX.set(px);
    mvY.set(py);
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  }

  function onLeave() {
    mvX.set(0.5);
    mvY.set(0.5);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={tilt ? { rotateX: rx, rotateY: ry, transformPerspective: 1000 } : undefined}
      className={cn(
        "group conic-border relative h-full overflow-hidden rounded-2xl border border-line bg-surface/80 p-6 shadow-card backdrop-blur-sm transition-[border-color,transform] duration-300 hover:border-line-strong",
        className
      )}
    >
      {/* cursor spotlight */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(460px circle at var(--mx) var(--my), ${glow}, transparent 62%)`,
        }}
      />
      {/* top sheen */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="relative z-10" style={{ transform: "translateZ(40px)" }}>
        {children}
      </div>
    </motion.div>
  );
}
