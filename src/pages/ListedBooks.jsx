 import { useEffect, useState } from "react";
import { deleteBook, getBooks } from "../utils";
import BookCard from "../components/BookCard";

const ListedBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const savedBooks = getBooks();
    setBooks(savedBooks);
  }, []);

  const handleDelete = (id) => {
    deleteBook(id);

    const savedBooks = getBooks();
    setBooks(savedBooks);
  };
  
  return (
    <div className=" container mx-auto min-h-[100vh] py-10 space-y-4 px-10">
      {books.map((book) => (
        <BookCard key={book.id} book={book} handleDelete={handleDelete} />
      ))}
    </div>
  );
};

export default ListedBooks;
