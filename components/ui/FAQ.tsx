"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

type FAQItem = { question: string; answer: string };

export default function FAQ({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-steel-dark border-y border-steel-dark">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={item.question}>
            <h3>
              <button
                type="button"
                id={`faq-button-${index}`}
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${index}`}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full items-center justify-between gap-4 py-5 text-left font-heading text-xl font-semibold transition-colors hover:text-gold-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-dark"
              >
                {item.question}
                {isOpen ? (
                  <Minus size={20} aria-hidden="true" />
                ) : (
                  <Plus size={20} aria-hidden="true" />
                )}
              </button>
            </h3>
            <div
              id={`faq-panel-${index}`}
              role="region"
              aria-labelledby={`faq-button-${index}`}
              hidden={!isOpen}
              className="pb-5 pr-8 text-graphite/75"
            >
              {item.answer}
            </div>
          </div>
        );
      })}
    </div>
  );
}