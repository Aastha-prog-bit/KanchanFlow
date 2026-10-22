import Hero from "@/components/home/Hero";
import ProblemSolution from "@/components/home/ProblemSolution";
import FeatureCards from "@/components/home/FeatureCards";
import Section from "@/components/ui/Section";
import FAQ from "@/components/ui/FAQ";
import { homeFaqs } from "@/lib/data";

export default function Home() {
  return (
    <main>
      <Hero />
      <ProblemSolution />
      <FeatureCards />
      <Section id="faq" title="Common questions">
        <FAQ items={homeFaqs} />
      </Section>
    </main>
  );
}