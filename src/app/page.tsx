import { Nav } from "@/components/Nav";
import { Hero, HERO_GLOW } from "@/components/Hero";
import { PainSection } from "@/components/PainSection";
import { BentoSection } from "@/components/BentoSection";
import { DarkSection } from "@/components/DarkSection";
import { HowItWorks } from "@/components/HowItWorks";
import { WatchGrid } from "@/components/WatchGrid";
import { DemoWarnings } from "@/components/DemoWarnings";
import { FAQ } from "@/components/FAQ";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <div className="relative">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0"
          style={{ height: 728, background: HERO_GLOW }}
        />
        <Nav />
        <main className="w-full overflow-x-hidden">
          <Hero />
          <PainSection />
          <BentoSection />
          <DarkSection />
          <HowItWorks />
          <WatchGrid />
          <DemoWarnings />
          <FAQ />
          <FinalCta />
        </main>
        <Footer />
      </div>
    </>
  );
}
