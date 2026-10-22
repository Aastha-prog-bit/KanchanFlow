import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import FAQ from "@/components/ui/FAQ";
import CtaBanner from "@/components/ui/CtaBanner";
import PricingPlans from "@/components/pricing/PricingPlans";
import { pricingFaqs } from "@/lib/data";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple KanchanFlow pricing for manufacturers. Compare plans, switch between monthly and annual billing, and start a 14-day free trial.",
  openGraph: {
    title: "KanchanFlow Pricing",
    description:
      "Three plans for manufacturers, from small workshops to multi-plant factories.",
  },
};

export default function PricingPage() {
  return (
    <main>
      <PageHero
        eyebrow="Pricing"
        title="Plans that fit a workshop or a whole factory"
        intro="Start with a 14-day free trial on any plan. Switch to annual billing and save 20%."
      />

      <Section title="Choose your plan">
        <PricingPlans />
      </Section>

      <Section id="faq" tone="dark" title="Pricing questions">
        <div className="bg-white p-6 text-graphite md:p-10">
          <FAQ items={pricingFaqs} />
        </div>
      </Section>

      <CtaBanner
        title="Not sure which plan fits?"
        text="Tell us about your shop floor and we will point you to the right one."
        buttonLabel="Talk to sales"
        href="#"
      />
    </main>
  );
}