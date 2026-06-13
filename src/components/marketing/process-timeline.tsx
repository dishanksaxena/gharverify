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
      {steps.map((s) => (
        <StaggerItem key={s.n}>
          <div className="group conic-border relative h-full overflow-hidden rounded-2xl border border-line bg-surface/70 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/30 hover:shadow-[0_24px_60px_-30px_rgba(0,230,118,0.45)]">
            <span className="pointer-events-none absolute right-4 top-2 text-6xl font-bold text-white/[0.04] transition-colors group-hover:text-accent/15">
              {s.n}
            </span>
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-accent/20 bg-gradient-to-br from-accent/20 to-accent/5 text-accent transition-transform duration-300 group-hover:scale-110">
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
    <div className="relative mt-16">
      {/* glowing connector line (desktop) */}
      <div className="pointer-events-none absolute left-[8%] right-[8%] top-7 hidden lg:block">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
        <div
          className="absolute top-0 h-px w-24 bg-gradient-to-r from-transparent via-accent to-transparent"
          style={{ animation: "beam 4s ease-in-out infinite" }}
        />
      </div>

      <div className="no-scrollbar flex gap-4 overflow-x-auto pb-2 lg:grid lg:grid-cols-6 lg:gap-3 lg:overflow-visible">
        {steps.map((s, i) => (
          <div key={s.label} className="relative flex min-w-[150px] flex-col items-center text-center lg:min-w-0">
            <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-accent/25 bg-gradient-to-br from-elevated to-surface text-accent shadow-[0_8px_30px_-12px_rgba(0,230,118,0.6)]">
              <span className="absolute inset-0 rounded-2xl bg-accent/10 blur-md" />
              <Icon name={s.icon as IconName} className="relative h-6 w-6" />
            </div>
            <span className="mt-3 text-xs font-medium uppercase tracking-wider text-faint">
              Step {i + 1}
            </span>
            <span className="mt-1 text-sm font-semibold text-fg">{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
