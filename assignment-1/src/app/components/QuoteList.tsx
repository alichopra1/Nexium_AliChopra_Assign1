import React from "react";
import { Quote } from "../../../data/quotes";

interface QuoteListProps {
  quotes: Quote[];
}

export default function QuoteList({ quotes }: QuoteListProps) {
  if (quotes.length === 0) {
    return <p className="text-gray-600">No quotes found for this topic.</p>;
  }
  return (
    <div className="space-y-4">
      {quotes.map((q) => (
        <div
          key={q.id}
          className="p-4 md:p-5 border-l-4 border-blue-500 bg-white rounded-xl shadow hover:shadow-md transition"
        >
          <p className="italic text-gray-800 leading-relaxed">
            &ldquo;{q.text}&rdquo;
          </p>
        </div>
      ))}
    </div>
  );
}
