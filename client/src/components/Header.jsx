import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

export const Header = () => {
  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex items-center justify-between max-w-6xl mx-auto p-3 ">
        <h1 className="font-bold text-sm sm:text-xl flex flex-wrap 	">
          <span className="text-slate-600  ">Sahand</span>
          <span className="text-slate-900">Estate</span>
        </h1>
        <form className="bg-slate-100 p-3 rounded-lg flex items-center ">
          <input
            className="bg-transparent  focus:outline-none w-24 sm:w-64 "
            type="text"
            placeholder="Search..."
          />
          <button>
            <FaSearch className="text-slate-600" />
          </button>
        </form>

        <ul className="flex gap-4">
          <Link to={"/"}>
            <li className=" hidden sm:inline text-slate-700 hover:underline">
              Home
            </li>
          </Link>
          <Link to={"/about"}>
            <li className=" hidden sm:inline text-slate-700 hover:underline">
              About
            </li>
          </Link>
          <Link to={"/sign-in"}>
            <li className="  sm:inline text-slate-700 hover:underline">
              Signin
            </li>
          </Link>
        </ul>
      </div>
    </header>
  );
};
