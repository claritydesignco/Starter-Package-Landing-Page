import Hero from "@/components/Hero";
import CompleteSolution from "@/components/CompleteSolution";
import TripleGuarantee from "@/components/TripleGuarantee";
import Comparison from "@/components/Comparison";
import Investment from "@/components/Investment";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <CompleteSolution />
      <TripleGuarantee />
      <Comparison />
      <Investment />
      <FAQ />
      <Footer />
    </main>
  );
}
