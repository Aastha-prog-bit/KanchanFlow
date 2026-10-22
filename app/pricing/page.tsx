import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple KanchanFlow pricing for manufacturers. Compare plans, switch between monthly and annual billing, and start a 14-day free trial.",
};

export default function PricingPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <h1 className="font-heading text-5xl font-bold">Pricing</h1>
    </main>
  );
}