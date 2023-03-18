import { useParams } from "react-router-dom";
import { useGetBookQuery } from "../../features/api/apiSlice";
import Error from "../../ui/Error";
import Form from "./Form";

const EditBook = () => {
  const { bookId } = useParams();
  console.log(bookId);
  const { data: book, isLoading, isError } = useGetBookQuery(bookId);
  console.log(book)

  let content = null;

  if (isLoading) {
      content = <div>Loading...</div>;
  }
  if (!isLoading && isError) {
      content = <Error message="There was an error!" />;
  }
  if (!isLoading && !isError && book?.id) {
      content = <Form book={book} />;
  }
 
  return (
    <main className="py-6 2xl:px-6">
      <div className="container">
        <div className="p-8 overflow-hidden bg-white shadow-cardShadow rounded-md max-w-xl mx-auto">
          <h4 className="mb-8 text-xl font-bold text-center">Edit Book</h4>
          {content}
        </div>
      </div>
    </main>
  );
};

export default EditBook;
