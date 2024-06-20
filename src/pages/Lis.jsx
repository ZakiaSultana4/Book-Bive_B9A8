import { Link } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { useEffect, useState } from "react";
import { deleteBook, deleteWish, getBooks, getWish } from "../utils";
import { IoLocationOutline } from "react-icons/io5";
import { IoPeopleOutline } from "react-icons/io5";
import { TbPageBreak } from "react-icons/tb";
import { MdDeleteForever } from "react-icons/md";
const Lis = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [booksListed, setBooksListed] = useState([]);
  const [wishBooksListed, setWishBooksListed] = useState([]);

  useEffect(() => {
    const savedBooks = getBooks();
    setBooksListed(savedBooks);
  }, []);

  useEffect(() => {
    const saveWish = getWish();
    setWishBooksListed(saveWish);
  }, []);

  const handleFilter = (filter) => {
    if (filter === "rating") {
      const shortByRating = booksListed.sort(
        (a, b) => b.book_rating - a.book_rating
      );
      setBooksListed([...shortByRating]);
    }
    if (filter === "totalPages") {
      const shortByPageNumber = booksListed.sort(
        (a, b) => b.book_pages - a.book_pages
      );
      setBooksListed([...shortByPageNumber]);
    }
    if (filter === "publisher") {
      const shortByPublisher = booksListed.sort(
        (a, b) => b.publishing_year - a.publishing_year
      );
      console.log(shortByPublisher);
      setBooksListed([...shortByPublisher]);
    }
  };
  const handleDelete = (id) => {
    deleteBook(id);
    const savedBooks = getBooks();
    setBooksListed(savedBooks);
  };
  const handleDeleteWish = (id) => {
    deleteWish(id);

    const saveWish = getWish();
    setWishBooksListed(saveWish);
  };
  return (
    <div>
      <div className="text-center font-work font-bold text-28 rounded-lg bg-opacity-5 bg-black p-4 mb-4 mt-10">
        <h1 className="text-center  text-4xl font-bold leading-normal">
          Books
        </h1>
      </div>

      {/* dropdown list */}
      <div className="text-center ">
        <div className="dropdown dropdown-hover">
          <div
            tabIndex={0}
            role="button"
            className=" m-1 inline-flex  px-12 py-3 justify-center items-center space-x-16 rounded-8 bg-green-500 text-center font-work font-semibold text-white "
          >
            Sort By <MdOutlineArrowDropDown />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow  rounded-box w-52  
                    text-center font-work font-normal text-opacity-80 text-sm leading-28 rounded-8 bg-opacity-5 bg-black"
          >
            <li onClick={() => handleFilter("rating")}>
              <Link>Rating</Link>
            </li>
            <li onClick={() => handleFilter("totalPages")}>
              <Link>Number of pages</Link>
            </li>
            <li onClick={() => handleFilter("publisher")}>
              <Link>Publisher year</Link>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <div className="container mx-auto px-6 ">
          <Tabs>
            <TabList
              className={
                "flex gap-5 font-semibold cursor-pointer mx-auto px-4 py-2 "
              }
            >
              <Tab
                onClick={() => setTabIndex(0)}
                className={`flex cursor-pointer items-center flex-shrink-0 px-5 py-3 space-x-2 ${
                  tabIndex === 0
                    ? "border border-b-0  border-gray-500"
                    : "border-b"
                }  `}
              >
                Read Books
              </Tab>
              <Tab
                onClick={() => setTabIndex(1)}
                className={`flex cursor-pointer items-center flex-shrink-0 px-5 py-3 space-x-2 ${
                  tabIndex === 1
                    ? "border border-b-0  border-gray-500"
                    : "border-b"
                }  `}
              >
                WishList
              </Tab>
            </TabList>

            <TabPanel classID="readBooks">
              {booksListed.map((book) => (
                <div key={book.bookId} className="my-8">
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
                      <div className=" flex gap-2 flex-col md:flex-row">
                        <div className=" text-green-500 font-bold flex  gap-1 items-center">
                          <p className=" text-black">Tag</p>{" "}
                          {book.tag.map((t) => (
                            <p key={t} className=" text-sm">#{t}</p>
                          ))}
                        </div>
                        <div className="text-md font-semibold text-[#424242]">
                          <p className=" flex items-center gap-2">
                            <IoLocationOutline size={20} /> Year of Publication:
                            {book.publishing_year}
                          </p>
                        </div>
                      </div>
                      <div className="text-md font-semibold text-[#707070] flex md:gap-10 flex-col md:flex-row">
                        <p className=" flex items-center gap-2">
                          <IoPeopleOutline size={20} />
                          Publisher:
                          {book.book_publisher}
                        </p>
                        <p className=" flex items-center gap-2">
                          <TbPageBreak size={20} />
                          Pages:{book.book_pages}
                        </p>
                      </div>
                      <div className="grid gap-2">
                        <hr className=" my-1" />
                        <div className=" flex justify-between flex-col gap-3 md:flex-row">
                          <p className=" text-lg font-bold text-[#4096ff] bg-[#e0eeff] px-3 py-1 rounded-2xl">
                            Category:{book.book_category}
                          </p>
                          <p className=" text-lg font-bold text-[#ffac33] bg-[#fff3e1] px-3 py-1 rounded-2xl">
                            Rating:{book.book_rating}
                          </p>
                          <Link to={`/bookdeails/${book.id}`}>
                            <button className="bg-green-600 w-full text-white text-lg px-3 py-1 rounded-2xl">
                              View Details
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div
                      onClick={() => handleDelete(book.id)}
                      className=" absolute  bg-green-600 p-3 ml-5 rounded-full hover:bg-secondary group  cursor-pointer hover:scale-105  -top-10 -right-5"
                    >
                      <MdDeleteForever
                        size={25}
                        className="text-red-500 group-hover:text-primary"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </TabPanel>
            <TabPanel className="wishlist">
              {wishBooksListed.map((book) => (
                <div key={book.bookId} className="my-8">
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
                      <div className=" flex gap-2 flex-col md:flex-row">
                        <div className=" text-green-500 font-bold flex  gap-1 items-center">
                          <p className=" text-black">Tag</p>{" "}
                          {book.tag.map((t) => (
                            <p key={t} className=" text-sm">#{t}</p>
                          ))}
                        </div>
                        <div className="text-md font-semibold text-[#424242]">
                          <p className=" flex items-center gap-2">
                            <IoLocationOutline size={20} /> Year of Publication:
                            {book.publishing_year}
                          </p>
                        </div>
                      </div>
                      <div className="text-md font-semibold text-[#707070] flex md:gap-10 flex-col md:flex-row">
                        <p className=" flex items-center gap-2">
                          <IoPeopleOutline size={20} />
                          Publisher:
                          {book.book_publisher}
                        </p>
                        <p className=" flex items-center gap-2">
                          <TbPageBreak size={20} />
                          Pages:{book.book_pages}
                        </p>
                      </div>
                      <div className="grid gap-2">
                        <hr className=" my-1" />
                        <div className=" flex justify-between flex-col gap-3 md:flex-row">
                          <p className=" text-lg font-bold text-[#4096ff] bg-[#e0eeff] px-3 py-1 rounded-2xl">
                            Category:{book.book_category}
                          </p>
                          <p className=" text-lg font-bold text-[#ffac33] bg-[#fff3e1] px-3 py-1 rounded-2xl">
                            Rating:{book.book_rating}
                          </p>
                          <Link to={`/bookdeails/${book.id}`}>
                            <button className="bg-green-600 w-full text-white text-lg px-3 py-1 rounded-2xl">
                              View Details
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div
                      onClick={() => handleDeleteWish(book.id)}
                      className=" absolute  bg-green-600 p-3 ml-5 rounded-full hover:bg-secondary group  cursor-pointer hover:scale-105  -top-10 -right-5"
                    >
                      <MdDeleteForever
                        size={25}
                        className="text-red-500 group-hover:text-primary"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Lis;
