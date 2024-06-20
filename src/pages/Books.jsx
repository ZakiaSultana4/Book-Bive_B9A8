import { Link } from "react-router-dom";
import { FaRegStar } from "react-icons/fa6";
import PropTypes from "prop-types";
const Books = ({ book }) => {
  return (
    <Link to={`/bookdeails/${book.id}`}>
      <div className="h-[600px] space-y-4 rounded-lg  p-6 shadow-lg  bg-white border border-gray-200">
        <div className="bg-gray-200 py-8 rounded-lg">
          <img
            alt="card navigate ui"
            className="  rounded-lg  text-center  flex mx-auto "
            src={book.book_image}
          />
        </div>
        <div className=" text-green-500 font-bold flex gap-5">
          {book.tag.map((t) => (
            <p key={t}>#{t}</p>
          ))}
        </div>
        <div className="grid gap-2">
          <h1 className="text-2xl font-bold ">{book.book_name}</h1>
          <p className=" text-lg font-semibold text-[#424242]">
            By:{book.author_name}
          </p>
          <hr className=" my-3" />
          <div className=" flex justify-between">
            <p className=" text-lg font-bold text-[#424242]">
              Category:{book.book_category}
            </p>

            <div className="text-lg font-semibold  flex items-center gap-2 ">
              Rating:{book.book_rating}<FaRegStar />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Books;

Books.propTypes = {
  book: PropTypes.object.isRequired,
};
