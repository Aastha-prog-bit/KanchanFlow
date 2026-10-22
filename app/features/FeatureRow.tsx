import { Check } from "lucide-react";

type FeatureRowProps = {
  title: string;
  description: string;
  points: string[];
  mockupTitle: string;
  mockupLines: { label: string; value: string }[];
  reverse?: boolean;
};

export default function FeatureRow({
  title,
  description,
  points,
  mockupTitle,
  mockupLines,
  reverse = false,
}: FeatureRowProps) {
  return (
    <div
      className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
        reverse ? "lg:[&>div:first-child]:order-2" : ""
      }`}
    >
      <div>
        <h3 className="font-heading text-3xl font-bold md:text-4xl">{title}</h3>
        <p className="mt-4 text-lg text-graphite/75">{description}</p>
        <ul className="mt-6 space-y-3">
          {points.map((point) => (
            <li key={point} className="flex gap-3">
              <Check
                size={20}
                className="mt-0.5 shrink-0 text-gold-text"
                aria-hidden="true"
              />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>

      <div
        role="img"
        aria-label={`${mockupTitle} screen from KanchanFlow`}
        className="border border-steel-dark bg-white shadow-xl"
      >
        <div
          aria-hidden="true"
          className="border-b-4 border-gold bg-graphite px-5 py-3 text-sm font-semibold text-white"
        >
          {mockupTitle}
        </div>
        <ul aria-hidden="true" className="divide-y divide-steel p-5">
          {mockupLines.map((line) => (
            <li key={line.label} className="flex justify-between gap-4 py-3 text-sm">
              <span className="text-graphite/70">{line.label}</span>
              <span className="font-semibold">{line.value}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}