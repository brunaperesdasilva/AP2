const BASE_URL = "https://openlibrary.org/search.json";

export const fetchBooks = async (query) => {
  try {
    const response = await fetch(`${BASE_URL}?q=${query}`);
    if (!response.ok) {
      throw new Error("Erro ao buscar livros");
    }
    const data = await response.json();
    return data.docs;
  } catch (error) {
    console.error(error);
    return [];
  }
};
