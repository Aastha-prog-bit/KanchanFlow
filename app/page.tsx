import Hero from "@/components/home/Hero";
import ProblemSolution from "@/components/home/ProblemSolution";
import FeatureCards from "@/components/home/FeatureCards";
import Industries from "@/components/home/Industries";
import PricingTeaser from "@/components/home/PricingTeaser";
import Section from "@/components/ui/Section";
import FAQ from "@/components/ui/FAQ";
import CtaBanner from "@/components/ui/CtaBanner";
import { homeFaqs } from "@/lib/data";

export default function Home() {
  return (
    <main>
      <Hero />
      <ProblemSolution />
      <FeatureCards />
      <Industries />
      <PricingTeaser />
      <Section id="faq" title="Common questions">
        <FAQ items={homeFaqs} />
      </Section>
      <CtaBanner
        title="Ready to see every job in one place?"
        text="Start your 14-day free trial today. No credit card, no setup fee."
        buttonLabel="Start free trial"
        href="/pricing"
      />
    </main>
  );
}