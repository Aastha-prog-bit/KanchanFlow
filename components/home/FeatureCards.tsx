import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import { features } from "@/lib/data";

export default function FeatureCards() {
  return (
    <Section
      tone="dark"
      eyebrow="Features"
      title="Everything your shop floor needs"
      intro="Six tools that cover the whole journey from first enquiry to dispatched order."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <Card key={feature.title} title={feature.title} icon={feature.icon}>
            {feature.description}
          </Card>
        ))}
      </div>
    </Section>
  );
}