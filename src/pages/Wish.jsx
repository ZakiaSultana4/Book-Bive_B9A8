import { useEffect, useState } from "react";
import { deleteWish, getWish } from "../utils";
import { MdDeleteForever } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { IoPeopleOutline } from "react-icons/io5";
import { TbPageBreak } from "react-icons/tb";
import { Link } from "react-router-dom";

const Wish = () => {
  const [Wish, setWish] = useState([]);

  useEffect(() => {
    const saveWish = getWish();
    setWish(saveWish);
  }, []);

  const handleDeleteWish = (id) => {
    deleteWish(id);

    const saveWish = getWish();
    setWish(saveWish);
  };
  return (
    <div className=" container mx-auto min-h-[100vh] py-10 space-y-4 px-10">
      {Wish.map((book) => (
        <>
          <div className=" relative flex  flex-col md:flex-row gap-10 space-y-4 rounded-lg  p-6  bg-white border border-gray-200">
            <div className="bg-gray-200 py-8 rounded-lg px-5">
              <img
                alt="card navigate ui"
                className="  rounded-lg  text-center  flex mx-auto h-[100px]"
                src={book.book_image}
              />
            </div>
            <div className="">
              <div className="">
                <h1 className="text-xl font-bold ">{book.book_name}</h1>
                <p className=" text-md font-semibold text-[#424242]">
                  By:{book.author_name}
                </p>
              </div>
              <div className=" flex gap-5 py-1">
                <div className=" text-green-500 font-bold flex gap-2">
                  <p className=" text-black">Tag</p>{" "}
                  {book.tag.map((t) => (
                    <p key={t}>#{t}</p>
                  ))}
                </div>
                <div className="text-md font-semibold text-[#424242]">
                  <p className=" flex items-center gap-2">
                    <IoLocationOutline size={20} /> Year of Publication:
                    {book.publishing_year}
                  </p>
                </div>
              </div>
              <div className="text-md font-semibold text-[#707070] flex gap-10 pb-2">
                <p className=" flex items-center gap-2">
                  <IoPeopleOutline size={20} />
                  Publisher:{book.book_publisher}
                </p>
                <p className=" flex items-center gap-2">
                  <TbPageBreak size={20} />
                  Pages:{book.book_pages}
                </p>
              </div>
              <div className="grid gap-2">
                <hr className=" my-1" />
                <div className=" flex justify-between">
                  <p className=" text-lg font-bold text-[#4096ff] bg-[#e0eeff] px-3 py-1 rounded-2xl">
                    Category:{book.book_category}
                  </p>
                  <p className=" text-lg font-bold text-[#ffac33] bg-[#fff3e1] px-3 py-1 rounded-2xl">
                    Rating:{book.book_rating}
                  </p>
                  <Link to={`/bookdeails/${book.id}`}>
                    <button className="bg-green-600  text-white text-lg px-3 py-1 rounded-2xl">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div
              onClick={() => handleDeleteWish(book.id)}
              className=" absolute  bg-green-600 p-3 ml-5 rounded-full hover:bg-secondary group  cursor-pointer hover:scale-105  -top-5 -right-5"
            >
              <MdDeleteForever
                size={25}
                className="text-red-500 group-hover:text-primary"
              />
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default Wish;
