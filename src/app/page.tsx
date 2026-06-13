import { Hero } from "@/components/marketing/home/hero";
import { Metrics } from "@/components/marketing/home/metrics";
import { Problem } from "@/components/marketing/home/problem";
import { Solution } from "@/components/marketing/home/solution";
import { AiEngine } from "@/components/marketing/home/ai-engine";
import { FounderSection } from "@/components/marketing/home/founder";
import { CtaBand } from "@/components/marketing/cta-band";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Metrics />
      <Problem />
      <Solution />
      <AiEngine />
      <FounderSection />
      <CtaBand />
    </>
  );
}
