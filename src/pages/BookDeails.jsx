import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { saveBook, saveWish } from "../utils";

const BookDeails = () => {
  const { id } = useParams();
  const data = useLoaderData();

  const [books, setBooks] = useState([]);

  useEffect(() => {
    setBooks(data.find((d) => d.id === Number(id)));
  }, [data, id]);
  const t=books.tag

  const handleRead = (book) => {
    saveBook(book);
  };
  const handleWish = (Wish) => {
    saveWish(Wish);
  };
  return (
    <div className=" container px-5  mx-auto my-10 flex flex-col gap-10 justify-center items-center md:flex-row">
      <div className="bg-gray-200 py-8 rounded-lg px-4 flex-1">
        <img
          className="  rounded-lg  text-center  flex mx-auto "
          src={books.book_image}
          width={300}
          height={500}
        />
      </div>
      <div className=" flex-1">
        <div className=" my-3">
          <h1 className="text-2xl font-bold ">{books.book_name}</h1>
          <p className=" text-lg font-semibold text-[#424242]">
            By:{books.author_name}
          </p>
        </div>
        <hr />

        <p className=" text-lg font-bold text-[#424242] my-2">
          Category:{books.book_category}
        </p>
        <hr />
        <p className=" my-4">
          <span className=" font-bold">Review:</span>
          {books.review}
        </p>
        <div className=" text-green-500 font-bold flex gap-5">
          {
            t?.map(ta=><p key={ta} className=" flex gap-3"># {ta}</p>)
          }
        </div>
        <hr />
        <div className="overflow-x-auto">
          <table className="table">

            <tbody>
              {/* row 1 */}
              <tr className="">
                <td className=" font-semibold">Number of Pages:</td>
                <td className=" font-bold">{books.book_pages}</td>
              </tr>
              {/* row 2 */}
              <tr>
                <td className=" font-semibold">Publisher:</td>
                <td className=" font-bold">{books.book_publisher}</td>
              </tr>
              {/* row 3 */}
              <tr>
                <td className=" font-semibold">Year of Publishing:</td>
                <td className=" font-bold">{books.publishing_year}</td>
              </tr>
              {/* row 3 */}
              <tr>
                <td className=" font-semibold">Rating:</td>
                <td className=" font-bold">{books.book_rating}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex gap-4 mt-5">
          <button
            onClick={() => handleRead(books)}
            className="px-6 py-2 bg-green-500 text-white rounded-lg font-semibold md:text-base sm:text-sm text-[12px]"
          >
            Read
          </button>
          <button
            onClick={() => handleWish(books)}
            className="px-4 py-2   bg-[#59b6c2] text-white  rounded-md"
          >
            Wish List
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDeails;
