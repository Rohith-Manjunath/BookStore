import { Book, Trash2 } from "lucide-react";
import React from "react";

const BooksGrid = ({ books, deleteBook }) => {
  return (
    // {/* Books Grid */}
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {books.map((book) => (
        <div
          key={book._id}
          className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow duration-200"
        >
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-2">
              <Book className="h-5 w-5 text-blue-500" />
              <h3 className="text-lg font-semibold text-gray-900">
                {book.title}
              </h3>
            </div>
            <button
              onClick={() => deleteBook(book._id)}
              className="text-gray-400 hover:text-red-500 transition-colors duration-200"
            >
              <Trash2 className="h-5 w-5" />
            </button>
          </div>
          <p className="mt-2 text-sm text-gray-500">By {book.author}</p>
          <p className="mt-2 text-sm text-gray-600">{book.description}</p>
        </div>
      ))}
    </div>
  );
};

export default BooksGrid;
