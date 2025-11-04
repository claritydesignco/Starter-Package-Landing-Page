import Hero from "@/components/Hero";
import PainAmplification from "@/components/PainAmplification";
import ComparisonDestruction from "@/components/ComparisonDestruction";
import CompleteSolution from "@/components/CompleteSolution";
import HowItWorks from "@/components/HowItWorks";
import BonusStack from "@/components/BonusStack";
import TripleGuarantee from "@/components/TripleGuarantee";
import SocialProof from "@/components/SocialProof";
import Investment from "@/components/Investment";
import Urgency from "@/components/Urgency";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <PainAmplification />
      <ComparisonDestruction />
      <CompleteSolution />
      <HowItWorks />
      <BonusStack />
      <TripleGuarantee />
      <SocialProof />
      <Investment />
      <Urgency />
      <FAQ />
      <Footer />
    </main>
  );
}
