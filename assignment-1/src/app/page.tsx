import { quotes as allQuotes } from "../../data/quotes";
import SearchForm from "./components/SearchForm";
import QuoteList from "./components/QuoteList";

export default async function Home({ searchParams }: { searchParams: Promise<{ topic?: string }> }) {
  const resolvedSearchParams = await searchParams;
  const topic = resolvedSearchParams.topic?.trim() || "";
  const filtered = topic
    ? allQuotes.filter((q) =>
        q.text.toLowerCase().includes(topic.toLowerCase())
      )
    : allQuotes.slice(0, 3);

  return (
    <main className="min-h-screen flex flex-col items-center justify-start p-6 text-gray-700 bg-gray-50">
      <div className="w-full max-w-lg mt-16">
        <h1 className="text-4xl font-extrabold text-center text-blue-600 mb-6">
          Quote Generator
        </h1>
        <SearchForm topic={topic} />
        <QuoteList quotes={filtered.slice(0, 3)} />
      </div>
    </main>
  );
}
