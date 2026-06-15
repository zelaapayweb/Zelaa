import { Nav } from "@/components/Nav";
import { TrustSection } from "@/components/TrustSection";
import { Audience } from "@/components/Audience";
import { Hero } from "@/components/Hero";
import { WatchGrid } from "@/components/WatchGrid";
import { PreSignCheck } from "@/components/PreSignCheck";
import { FlowIntelligence } from "@/components/FlowIntelligence";
import { Signals } from "@/components/Signals";
import { WhyZelaa } from "@/components/WhyZelaa";
import { HowItWorks } from "@/components/HowItWorks";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <WatchGrid />
        <TrustSection />
        <PreSignCheck />
        <FlowIntelligence />
        <Signals />
        <WhyZelaa />
        <HowItWorks />
        <Audience />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
