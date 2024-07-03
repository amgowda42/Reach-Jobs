import logo from "../utils/images/jobs_logo.svg";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const linkClass = ({ isActive }) =>
    isActive
      ? "text-white bg-black hover:bg-amber-500 hover:text-white rounded-md px-3 py-2"
      : "text-white hover:bg-amber-500 hover:text-white rounded-md px-3 py-2 bg-slate-400";

  return (
    <nav className="bg-white border-b-4 border-indigo-500">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-28 items-center justify-between">
          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            <Link className="flex flex-shrink-0 items-center mr-4" to="/">
              <img className="h-24 w-auto" src={logo} alt="Reach Jobs" />
              <span className="hidden md:block text-red-600 text-2xl font-bold ml-5">
                Reach Jobs
              </span>
            </Link>
            <div className="md:ml-auto flex ">
              <div className="flex space-x-2 justify-center items-center">
                <NavLink to="/" className={linkClass}>
                  Home
                </NavLink>
                <NavLink to="/jobs" className={linkClass}>
                  Jobs
                </NavLink>
                <NavLink to="/add-job" className={linkClass}>
                  Add Jobs
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
