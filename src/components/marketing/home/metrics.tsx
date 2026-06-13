import { Container } from "@/components/ui/section";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { Reveal } from "@/components/ui/reveal";
import { metrics } from "@/content/data";

export function Metrics() {
  return (
    <section className="relative border-y border-line bg-surface/30 py-16">
      <Container>
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
          {metrics.map((m, i) => (
            <Reveal key={m.label} delay={i * 0.08} className="text-center lg:text-left">
              <div className="text-4xl font-bold tracking-tight text-fg sm:text-5xl">
                <AnimatedCounter
                  value={m.value}
                  prefix={m.prefix}
                  suffix={m.suffix}
                  decimals={m.decimals ?? 0}
                  className="text-gradient-accent"
                />
              </div>
              <p className="mt-2 text-sm text-muted">{m.label}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
