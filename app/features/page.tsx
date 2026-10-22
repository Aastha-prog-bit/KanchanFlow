import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Explore KanchanFlow features: quote-to-order, BOM management, sales pipeline, WhatsApp updates, reports and a mobile app for manufacturers.",
};

export default function FeaturesPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <h1 className="font-heading text-5xl font-bold">Features</h1>
    </main>
  );
}