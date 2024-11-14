import { Book, Trash2 } from "lucide-react";

const BookCard = () => {
  return (
    <div className="group bg-white rounded-xl shadow-sm hover:shadow-xl p-6 transform hover:-translate-y-1 transition-all duration-200">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors duration-200">
            <Book className="h-6 w-6 text-blue-600" />
          </div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 line-clamp-1">
            {book.title}
          </h3>
        </div>
        <button
          onClick={onDelete}
          className="opacity-0 group-hover:opacity-100 text-gray-400 hover:text-red-500 transition-all duration-200"
          aria-label="Delete book"
        >
          <Trash2 className="h-5 w-5" />
        </button>
      </div>
      <p className="mt-3 text-sm font-medium text-blue-600">By {book.author}</p>
      <p className="mt-2 text-gray-600 text-sm line-clamp-3">
        {book.description}
      </p>
    </div>
  );
};

export default BookCard;
