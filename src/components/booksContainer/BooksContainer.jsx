import React from "react";
import { useSelector } from "react-redux";
import { useGetBooksQuery, useSearchByNameQuery } from "../../features/api/apiSlice.js";
import Error from "../../ui/Error";
import BooksLoader from "../../ui/loaders/BooksLoader";
import Book from "./Book";
import FilterBar from "./FilterBar";

const BooksContainer = () => {
    const { data: books, isLoading, isError } = useGetBooksQuery();
    const {status, searchedText}= useSelector((state)=>state.filters)
    console.log(searchedText);

    const filterByStatus = (book) => {
      switch (status) {
          case "Featured":
              return book.featured;

          default:
              return true;
      }
  };
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
        content = books
        .filter((book)=>book.name.toLowerCase().includes(searchedText.toLowerCase()))
        .filter(filterByStatus)
        .map((book) => <Book key={book.id} book={book} />);
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
