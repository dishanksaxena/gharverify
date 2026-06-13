import {
  ShieldCheck, ScrollText, GitBranch, UserCheck, BadgeCheck, Landmark, Map,
  Gavel, FileSearch, Building2, KeyRound, FileSignature, ScanLine, Network,
  Fingerprint, Scale, AlertTriangle, Layers, Banknote, History, Eye, Lock,
  Database, ClipboardCheck, FileWarning, Workflow, type LucideProps,
} from "lucide-react";
import type { ComponentType } from "react";

const map = {
  ShieldCheck, ScrollText, GitBranch, UserCheck, BadgeCheck, Landmark, Map,
  Gavel, FileSearch, Building2, KeyRound, FileSignature, ScanLine, Network,
  Fingerprint, Scale, AlertTriangle, Layers, Banknote, History, Eye, Lock,
  Database, ClipboardCheck, FileWarning, Workflow,
} as const;

export type IconName = keyof typeof map;

export function Icon({ name, ...props }: { name: IconName } & LucideProps) {
  const Cmp = map[name] as ComponentType<LucideProps>;
  return <Cmp {...props} />;
}
