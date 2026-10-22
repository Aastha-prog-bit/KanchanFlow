import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import FAQ from "@/components/ui/FAQ";
import { features, homeFaqs } from "@/lib/data";

export default function Home() {
  return (
    <main>
      <h1 className="sr-only">KanchanFlow</h1>
      <Section eyebrow="Features" title="Everything your shop floor needs">
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((f) => (
            <Card key={f.title} title={f.title} icon={f.icon}>
              {f.description}
            </Card>
          ))}
        </div>
      </Section>
      <Section id="faq" title="Common questions">
        <FAQ items={homeFaqs} />
      </Section>
    </main>
  );
}