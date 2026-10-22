import Section from "@/components/ui/Section";
import { industries } from "@/lib/data";

export default function Industries() {
  return (
    <Section
      id="industries"
      eyebrow="Industries"
      title="Built for the way job shops actually work"
      intro="Custom quotes, changing specs and short production runs are normal here. KanchanFlow is designed around them."
    >
      <ul className="grid grid-cols-2 gap-4 md:grid-cols-5">
        {industries.map(({ name, icon: Icon }) => (
          <li
            key={name}
            className="flex flex-col items-center gap-3 border border-steel-dark bg-white p-6 text-center"
          >
            <Icon size={32} className="text-gold-text" aria-hidden="true" />
            <span className="font-heading text-lg font-semibold">{name}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}