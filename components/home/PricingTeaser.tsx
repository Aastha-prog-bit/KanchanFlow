import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { plans } from "@/lib/data";

export default function PricingTeaser() {
  return (
    <Section
      tone="dark"
      eyebrow="Pricing"
      title="Simple plans that grow with your factory"
      intro="Every plan starts with a 14-day free trial."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {plans.map((plan) => (
          <article
            key={plan.name}
            className={`border-t-4 bg-graphite-soft p-8 ${
              plan.highlighted ? "border-gold" : "border-white/20"
            }`}
          >
            <h3 className="font-heading text-2xl font-semibold">{plan.name}</h3>
            <p className="mt-2 text-white/70">{plan.tagline}</p>
            <p className="mt-6 font-heading text-4xl font-bold text-gold">
              {plan.monthly
                ? `₹${plan.monthly.toLocaleString("en-IN")}`
                : "Custom"}
              {plan.monthly && (
                <span className="text-base font-normal text-white/60">
                  {" "}
                  / month
                </span>
              )}
            </p>
            <p className="mt-1 text-sm text-white/60">{plan.users}</p>
          </article>
        ))}
      </div>
      <div className="mt-10">
        <Button href="/pricing">Compare all plans</Button>
      </div>
    </Section>
  );
}