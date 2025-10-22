import { useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";
import BookList from "../components/BookList";
import SearchForm from "../components/SearchForm";

export default function Home() {
  const { data, loading, error, fetchData } = useFetch();
  const [query, setQuery] = useState("");

  const defaultQueries = ["fantasy", "romance", "science", "adventure", "history", "magic"];

  useEffect(() => {
    const randomQuery = defaultQueries[Math.floor(Math.random() * defaultQueries.length)];
    fetchData(`https://openlibrary.org/search.json?q=${randomQuery}`);
  }, []);

  const handleSearch = (searchTerm) => {
    setQuery(searchTerm);
    fetchData(`https://openlibrary.org/search.json?q=${searchTerm}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <SearchForm onSearch={handleSearch} />

      {loading && (
        <div className="flex flex-col items-center justify-center mt-10 text-gray-600 dark:text-gray-400">
          <div className="flex items-center space-x-3">
            <div className="w-6 h-6 border-4 border-blue-500 border-t-transparent rounded-full animate-spin dark:border-blue-400"></div>
            <p className="text-lg font-medium">Procurando livros...</p>
          </div>
        </div>
      )}

      {error && (
        <p className="text-center text-red-500 mt-10">
          Erro ao carregar dados: {error}
        </p>
      )}

      {!loading && !error && data && <BookList books={data.docs} />}
    </div>
  );
}
