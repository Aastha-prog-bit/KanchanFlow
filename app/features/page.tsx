import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import CtaBanner from "@/components/ui/CtaBanner";
import FeatureRow from "@/components/features/FeatureRow";
import ComparisonTable from "@/components/features/ComparisonTable";
import { featureRows } from "@/lib/data";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Explore KanchanFlow features: quote-to-order, BOM management, sales pipeline, WhatsApp updates, reports and a mobile app for manufacturers.",
  openGraph: {
    title: "KanchanFlow Features",
    description:
      "Quotes, BOMs, pipeline and WhatsApp updates in one CRM built for manufacturers.",
  },
};

export default function FeaturesPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Features"
        title="One system from first enquiry to dispatch"
        intro="KanchanFlow replaces scattered spreadsheets, notebooks and chat threads with a single place for quotes, work orders and customer updates."
      />

      <Section
        title="Tools that follow your job through the factory"
        intro="Each feature connects to the next, so nothing has to be typed twice."
      >
        <div className="space-y-20">
          {featureRows.map((row, index) => (
            <FeatureRow key={row.title} {...row} reverse={index % 2 === 1} />
          ))}
        </div>
      </Section>

      <Section
        tone="dark"
        eyebrow="Comparison"
        title="How KanchanFlow compares"
        intro="Spreadsheets and generic CRMs can each do part of the job. Here is where they stop."
      >
        <ComparisonTable />
      </Section>

      <CtaBanner
        title="See it with your own jobs"
        text="Start a 14-day free trial and import your open quotes in minutes."
        buttonLabel="Start free trial"
        href="/pricing"
      />
    </main>
  );
}