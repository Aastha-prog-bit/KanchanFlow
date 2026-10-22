import { Check, X } from "lucide-react";
import Section from "@/components/ui/Section";

const problems = [
  "Quotes live in Excel files and email threads",
  "The shop floor never knows which quote became an order",
  "Customers keep calling to ask for order status",
  "Nobody can say which enquiries are stuck",
];

const solutions = [
  "One quote template with BOM and live costing",
  "Approved quotes become work orders automatically",
  "Customers get status updates on WhatsApp",
  "A pipeline board shows every job and its stage",
];

export default function ProblemSolution() {
  return (
    <Section
      eyebrow="Why KanchanFlow"
      title="Stop running your factory from spreadsheets"
      intro="Most manufacturers lose orders in the gap between sales and production. KanchanFlow closes that gap."
    >
      <div className="grid gap-6 md:grid-cols-2">
        <div className="border border-steel-dark bg-white p-8">
          <h3 className="font-heading text-2xl font-semibold">Without KanchanFlow</h3>
          <ul className="mt-6 space-y-4">
            {problems.map((item) => (
              <li key={item} className="flex gap-3">
                <X size={20} className="mt-0.5 shrink-0 text-red-700" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-graphite p-8 text-white">
          <h3 className="font-heading text-2xl font-semibold text-gold">With KanchanFlow</h3>
          <ul className="mt-6 space-y-4">
            {solutions.map((item) => (
              <li key={item} className="flex gap-3">
                <Check size={20} className="mt-0.5 shrink-0 text-gold" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}