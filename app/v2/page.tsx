import HeroV1 from "@/components/HeroV1";
import CompleteSolution from "@/components/CompleteSolution";
import TripleGuarantee from "@/components/TripleGuarantee";
import ComparisonV1 from "@/components/ComparisonV1";
import Investment from "@/components/Investment";
import FAQV1 from "@/components/FAQV1";
import Footer from "@/components/Footer";

export default function V2Page() {
  return (
    <main className="min-h-screen">
      <HeroV1 />
      <CompleteSolution />
      <TripleGuarantee />
      <ComparisonV1 />
      <Investment />
      <FAQV1 />
      <Footer />
    </main>
  );
}
