import { Container } from "@/components/ui/section";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { Stagger, StaggerItem } from "@/components/ui/reveal";
import { metrics } from "@/content/data";

export function Metrics() {
  return (
    <section className="relative py-16">
      <Container>
        <Stagger className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {metrics.map((m) => (
            <StaggerItem key={m.label}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-line bg-surface/50 p-6 text-center backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 lg:text-left">
                <div className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.7rem]">
                  <AnimatedCounter
                    value={m.value}
                    prefix={m.prefix}
                    suffix={m.suffix}
                    decimals={m.decimals ?? 0}
                    className="text-gradient-accent"
                  />
                </div>
                <p className="mt-2 text-sm text-muted">{m.label}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
