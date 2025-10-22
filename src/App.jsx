import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import Home from "./pages/Home";

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition">
      <header className="flex justify-between items-center px-6 py-4 border-b border-gray-300 dark:border-gray-700">
        <h1
          onClick={() => window.location.reload()}
          className="text-2xl font-bold cursor-pointer hover:text-blue-500 dark:hover:text-blue-400 transition"
        >
          Catálogo Interativo de Livros
        </h1>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="flex items-center gap-2 px-3 py-1 rounded-md border border-gray-400 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-800 transition"
        >
          {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          <span className="text-sm">{darkMode ? "Modo Claro" : "Modo Escuro"}</span>
        </button>
      </header>

      <Home />
    </div>
  );
}
