import React from "react";
import { useGetBooksQuery } from "../../features/api/apiSlice.js";
import Error from "../../ui/Error";
import BooksLoader from "../../ui/loaders/BooksLoader";
import Book from "./Book";
import FilterBar from "./FilterBar";

const BooksContainer = () => {
    const { data: books, isLoading, isError } = useGetBooksQuery();

    // decide what to render
    let content = null;

    if (isLoading) {
        content = (
            <>
                <BooksLoader />
            </>
        );
    }
    if (!isLoading && isError) {
        content = <Error message="There was an error" />;
    }

    if (!isLoading && !isError && books?.length === 0) {
        content = <Error message="No books found!" />;
    }

    if (!isLoading && !isError && books?.length > 0) {
        content = books.map((book) => <Book key={book.id} book={book} />);
    }

   
  return (
    <main className="py-12 px-6 2xl:px-6 container">
      <div className="order-2 xl:-order-1">
        <FilterBar></FilterBar>
        <div className="space-y-6 md:space-y-0 md:grid grid-cols-1 lg:grid-cols-3 gap-6">
         {content}
        </div>
      </div>
    </main>
  );
};

export default BooksContainer;
