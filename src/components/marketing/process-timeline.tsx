import { Icon, type IconName } from "@/components/icon";
import { Stagger, StaggerItem } from "@/components/ui/reveal";

type Step = {
  n: string;
  icon: string;
  title: string;
  desc: string;
};

export function ProcessTimeline({ steps }: { steps: readonly Step[] }) {
  return (
    <Stagger className="relative mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
      {steps.map((s, i) => (
        <StaggerItem key={s.n} className={i === steps.length - 1 ? "lg:col-span-1" : ""}>
          <div className="group relative h-full overflow-hidden rounded-2xl border border-line bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30">
            <span className="pointer-events-none absolute right-4 top-3 text-5xl font-bold text-white/[0.04] transition-colors group-hover:text-accent/10">
              {s.n}
            </span>
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-accent/20 bg-accent/10 text-accent">
              <Icon name={s.icon as IconName} className="h-6 w-6" />
            </div>
            <h3 className="mt-5 text-lg font-semibold text-fg">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{s.desc}</p>
          </div>
        </StaggerItem>
      ))}
    </Stagger>
  );
}

/** Horizontal connected rail used on the home Solution section. */
export function ProcessRail({ steps }: { steps: readonly { label: string; icon: string }[] }) {
  return (
    <div className="no-scrollbar mt-14 flex gap-4 overflow-x-auto pb-2 lg:grid lg:grid-cols-6 lg:gap-3 lg:overflow-visible">
      {steps.map((s, i) => (
        <div key={s.label} className="relative flex min-w-[150px] flex-col items-center text-center lg:min-w-0">
          {i < steps.length - 1 && (
            <span className="absolute left-[calc(50%+28px)] top-7 hidden h-px w-[calc(100%-56px)] bg-gradient-to-r from-accent/40 to-line lg:block" />
          )}
          <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-accent/25 bg-accent/10 text-accent">
            <Icon name={s.icon as IconName} className="h-6 w-6" />
          </div>
          <span className="mt-3 text-xs font-medium uppercase tracking-wider text-faint">
            Step {i + 1}
          </span>
          <span className="mt-1 text-sm font-semibold text-fg">{s.label}</span>
        </div>
      ))}
    </div>
  );
}
