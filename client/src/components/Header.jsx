import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <header className=" bg-slate-200 shadow-md">
        <div className=" flex justify-between items-center max-w-6xl mx-auto p-3">
          <Link to="/">
            <h1 className=" font-bold text-sm sm:text-xl flex flex-wrap">
              <span className=" text-slate-500">MERN</span>{" "}
              <span className=" text-slate-700">Estate</span>
            </h1>
          </Link>
          <form className=" bg-slate-100 p-3 rounded-lg flex items-center">
            <input
              type="text"
              placeholder="Search..."
              className=" bg-transparent focus:outline-none w-24 sm:w-64"
            />
            <button>
              <FaSearch className=" text-slate-600" />
            </button>
          </form>
          <ul className=" flex gap-4">
            <Link to="/">
              <li className=" hidden sm:inline text-slate-700 hover:underline">
                Home
              </li>
            </Link>
            <Link to="/about">
              <li className=" hidden sm:inline text-slate-700 hover:underline">
                About
              </li>
            </Link>
            <Link to="/profile">
              {currentUser ? (
                <img
                  src={currentUser.avatar}
                  alt="avatar"
                  className=" rounded-full h-7 object-cover"
                />
              ) : (
                <li className=" text-slate-700 hover:underline ">Sign in</li>
              )}
            </Link>
            {/* <Link to="/sign-in">
              <li className=" hidden sm:inline text-slate-700 hover:underline">
                Sign In
              </li>
            </Link> */}
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
