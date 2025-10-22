import BookCard from "./BookCard";

export default function BookList({ books }) {
  if (!books || books.length === 0) {
    return (
      <p className="text-center text-gray-500 dark:text-gray-400 mt-10">
        Nenhum livro encontrado.
      </p>
    );
  }

  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8 md:gap-10 max-w-screen-xl px-4 sm:px-6 md:px-10 py-6">
        {books.map((book) => (
          <BookCard
            key={book.key}
            bookKey={book.key}
            title={book.title}
            author={book.author_name ? book.author_name[0] : "Autor desconhecido"}
            year={book.first_publish_year}
            coverId={book.cover_i}
          />
        ))}
      </div>
    </div>
  );
}
