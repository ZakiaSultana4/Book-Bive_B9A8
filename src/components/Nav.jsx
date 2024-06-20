import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  const [theme, setTheme] = useState("light");

  // update state on toggle
  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("synthwave");
    } else {
      setTheme("light");
    }
  };

  // set theme state in localStorage on mount & also update localStorage on state change
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");

    // add custom data-theme attribute
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);
  const navBars = (
    <div className=" flex  gap-2 flex-col md:flex-row py-12 md:py-0 items-center">
      <li className=" list-none">
        <li className="rounded-none">
          <NavLink
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "border-2 rounded-none border-green-500 text-green-500 font-semibold text-lg"
                : " font-semibold text-lg"
            }
            to="/"
          >
            <span> Home</span>
          </NavLink>
        </li>
      </li>
      <li className=" list-none rounded-none">
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "border-2 rounded-none border-green-500 text-green-500 font-semibold text-lg"
              : "  font-semibold text-lg"
          }
          to="/List"
        >
          <span>Listed Books</span>
        </NavLink>
      </li>
      <li className=" list-none rounded-none">
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "border-2 rounded-none border-green-500 text-green-500 font-semibold text-lg"
              : " font-semibold text-lg"
          }
          to="/Pages"
        >
          <span>Pages to Read</span>
        </NavLink>
      </li>
      <li className=" list-none rounded-none">
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "border-2 rounded-none border-green-500 text-green-500 font-semibold text-lg"
              : " font-semibold text-lg"
          }
          to="/About"
        >
          <span>Audio Book</span>
        </NavLink>
      </li>
      <li className=" list-none rounded-none">
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "border-2 rounded-none border-green-500 text-green-500 font-semibold text-lg"
              : " font-semibold text-lg"
          }
          to="/Blogs"
        >
          <span>Blogs</span>
        </NavLink>
      </li>
    </div>
  );
  return (
    <div className="navbar bg-base-100 container mx-auto px-10 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navBars}
          </ul>
        </div>
        <Link
          to="/"
          className="btn btn-ghost gap-0 text-secondary normal-case text-4xl font-bold"
        >
          <p className="text-green-500">Book</p><span className="text-[#59b6c2]">Bive</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navBars}</ul>
      </div>
      <div className="navbar-end flex gap-1 items-center ml-10">
        {/* <a className="btn bg-green-500 text-white md:text-lg text-xs">Sign In</a> */}
        <a className="btn bg-[#59b6c2] text-white md:text-lg  ">Sign Up</a>
      </div>
    </div>
  );
};

export default Nav;
