"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import Button from "@/components/ui/Button";
import { plans } from "@/lib/data";

export default function PricingPlans() {
  const [annual, setAnnual] = useState(false);

  return (
    <div>
      <div className="flex items-center gap-4">
        <span className={annual ? "text-graphite/60" : "font-semibold"}>
          Monthly
        </span>
        <button
          type="button"
          role="switch"
          aria-checked={annual}
          aria-label="Bill annually"
          onClick={() => setAnnual(!annual)}
          className="relative h-8 w-14 bg-graphite transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-dark"
        >
          <span
            className={`absolute top-1 size-6 bg-gold transition-all ${
              annual ? "left-7" : "left-1"
            }`}
          />
        </button>
        <span className={annual ? "font-semibold" : "text-graphite/60"}>
          Annual
        </span>
        <span className="bg-graphite px-2 py-1 text-xs font-semibold uppercase tracking-wider text-gold">
          Save 20%
        </span>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {plans.map((plan) => {
          const price = annual ? plan.annual : plan.monthly;
          return (
            <article
              key={plan.name}
              className={`relative flex flex-col bg-white p-8 ${
                plan.highlighted
                  ? "border-4 border-gold"
                  : "border border-steel-dark"
              }`}
            >
              {plan.highlighted && (
                <p className="absolute -top-4 left-8 bg-graphite px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gold">
                  Most popular
                </p>
              )}
              <h3 className="font-heading text-3xl font-bold">{plan.name}</h3>
              <p className="mt-2 text-graphite/75">{plan.tagline}</p>

              <p className="mt-6 font-heading text-5xl font-bold">
                {price ? `₹${price.toLocaleString("en-IN")}` : "Custom"}
              </p>
              <p className="mt-1 text-sm text-graphite/70">
                {price
                  ? annual
                    ? "per month, billed annually"
                    : "per month, billed monthly"
                  : "tailored to your plants"}
              </p>
              <p className="mt-4 font-semibold">{plan.users}</p>

              <ul className="mt-6 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-3">
                    <Check
                      size={20}
                      className="mt-0.5 shrink-0 text-gold-text"
                      aria-hidden="true"
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <Button
                  href="#"
                  variant={plan.highlighted ? "primary" : "secondary"}
                  className="w-full"
                >
                  {plan.cta}
                </Button>
              </div>
            </article>
          );
        })}
      </div>

      <p className="mt-6 text-sm text-graphite/70">
        Prices are per month and exclude GST.
      </p>
    </div>
  );
}