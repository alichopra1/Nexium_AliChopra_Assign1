import React from "react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";

interface SearchFormProps {
  topic: string;
}

export default function SearchForm({ topic }: SearchFormProps) {
  return (
    <form method="GET" className="flex items-center gap-0 mb-6">
      <Input
        type="text"
        name="topic"
        defaultValue={topic}
        placeholder="Enter a topic"
        className="px-4 py-2 md:px-5 md:py-3 w-full max-w-xs border border-gray-300 rounded-l-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
      />
      <Button
        type="submit"
        className="px-4 py-2 md:px-5 md:py-3 bg-blue-500 text-white rounded-r-2xl hover:bg-blue-600 transition shadow-sm"
      >
        Search
      </Button>
    </form>
  );
}