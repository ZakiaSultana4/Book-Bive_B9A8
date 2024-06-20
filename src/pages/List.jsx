import { useState } from "react";
import { Link, Outlet, useLoaderData } from "react-router-dom";

const List = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const data = useLoaderData();
  const [foods, setFoods] = useState([]);
  console.log(foods);
  /* Sort Handler Start*/
  const handleSortChange = (event) => {
    const selectedValue = event.target.value;

    if (selectedValue === "asc") {
      const sortedByasc = [...foods].sort((a, b) =>
        a.price.localeCompare(b.price)
      );
      setFoods(sortedByasc);
    } else if (selectedValue === "desc") {
      const sortedBydesc = [...foods].sort((a, b) =>
        b.book_rating.localeCompare(a.book_rating)
      );
      setFoods(sortedBydesc);
    }
  };
  return (
    <div className="max-w-6xl px-6 py-16 mx-auto space-y-12 overflow-hidden">
      <div className=" mx-auto flex justify-center items-center mt-10 flex-col ">
        <p className=" mb-2">Sort By Price:</p>
        <select
          onChange={handleSortChange}
          className="select select-bordered lg:w-[700px]"
        >
          <option value={""} selected>
            No Sort
          </option>
          <option value={"asc"}>Low to High</option>
          <option value={"desc"}>High to Low</option>
        </select>
      </div>
      <article className="space-y-8 ">
        <div className="space-y-6">
          <div className="flex items-center overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap ">
            <Link
              to={``}
              onClick={() => setTabIndex(0)}
              className={`flex cursor-pointer items-center flex-shrink-0 px-5 py-3 space-x-2 ${
                tabIndex === 0 ? "border border-b-0" : "border-b"
              }  `}
            >
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4"
              >
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
              </svg>
              <span>Read Book</span>
            </Link>
            <Link
              to={`wish`}
              onClick={() => setTabIndex(1)}
              className={`flex cursor-pointer items-center flex-shrink-0 px-5 py-3 space-x-2 ${
                tabIndex === 1 ? "border border-b-0" : "border-b"
              }  `}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4"
              >
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
              </svg>
              <span>Wish List</span>
            </Link>
          </div>
        </div>
        <Outlet />
      </article>
    </div>
  );
};

export default List;
