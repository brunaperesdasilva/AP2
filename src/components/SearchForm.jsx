import { useState } from "react";

export default function SearchForm({ onSearch }) {
  const [term, setTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (term.trim() !== "") onSearch(term);
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center mb-8 gap-3">
      <input
        type="text"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        placeholder="Buscar por título ou autor..."
        className="w-full max-w-md px-4 py-2 rounded-md border border-gray-400 dark:border-gray-700 
                   bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 
                   focus:ring-blue-500 dark:focus:ring-blue-400 transition"
      />
      <button
        type="submit"
        className="px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
      >
        Buscar
      </button>
    </form>
  );
}
