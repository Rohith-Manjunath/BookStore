import { Book } from "lucide-react";

const NoBooks = () => {
  return (
    <div className="text-center py-12">
      <Book className="mx-auto h-12 w-12 text-gray-400" />
      <h3 className="mt-2 text-sm font-medium text-gray-900">No books</h3>
      <p className="mt-1 text-sm text-gray-500">
        Get started by adding a new book.
      </p>
    </div>
  );
};

export default NoBooks;
