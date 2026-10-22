import { Check, Minus, X } from "lucide-react";
import { comparisonRows } from "@/lib/data";

type Support = "yes" | "no" | "partial";

function Cell({ value }: { value: Support }) {
  if (value === "yes") {
    return (
      <>
        <Check size={20} className="mx-auto text-green-700" aria-hidden="true" />
        <span className="sr-only">Yes</span>
      </>
    );
  }
  if (value === "partial") {
    return (
      <>
        <Minus size={20} className="mx-auto text-graphite/70" aria-hidden="true" />
        <span className="sr-only">Partly</span>
      </>
    );
  }
  return (
    <>
      <X size={20} className="mx-auto text-red-700" aria-hidden="true" />
      <span className="sr-only">No</span>
    </>
  );
}

export default function ComparisonTable() {
  return (
    <div
      className="overflow-x-auto bg-white text-graphite"
      role="region"
      aria-label="Feature comparison table"
      tabIndex={0}
    >
      <table className="w-full min-w-[640px] border-collapse text-left">
        <caption className="sr-only">
          Comparison of spreadsheets, a generic CRM and KanchanFlow
        </caption>
        <thead>
          <tr className="border-b-4 border-gold bg-graphite text-white">
            <th scope="col" className="px-5 py-4 font-heading text-lg">Capability</th>
            <th scope="col" className="px-5 py-4 text-center font-heading text-lg">Spreadsheets</th>
            <th scope="col" className="px-5 py-4 text-center font-heading text-lg">Generic CRM</th>
            <th scope="col" className="px-5 py-4 text-center font-heading text-lg text-gold">KanchanFlow</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-steel">
          {comparisonRows.map((row) => (
            <tr key={row.capability}>
              <th scope="row" className="px-5 py-4 font-medium">{row.capability}</th>
              <td className="px-5 py-4"><Cell value={row.spreadsheets} /></td>
              <td className="px-5 py-4"><Cell value={row.genericCrm} /></td>
              <td className="bg-gold/10 px-5 py-4"><Cell value={row.kanchanflow} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}