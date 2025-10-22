export default function BookCard({ title, author, year, coverId, bookKey }) {
  const coverUrl = coverId
    ? `https://covers.openlibrary.org/b/id/${coverId}-L.jpg`
    : "https://via.placeholder.com/150x220?text=Sem+Capa";

  const detailsUrl = `https://openlibrary.org${bookKey}`;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition flex flex-col justify-between">
      <div>
        <img
          src={coverUrl}
          alt={title}
          className="w-full h-64 object-cover"
        />
        <div className="p-4">
          <h2 className="text-lg font-semibold mb-1 line-clamp-2">{title}</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">{author}</p>
          {year && (
            <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
              Publicado em: {year}
            </p>
          )}
        </div>
      </div>

      <div className="p-4 pt-0">
        <a
          href={detailsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition text-sm font-medium"
        >
          Ver detalhes
        </a>
      </div>
    </div>
  );
}
