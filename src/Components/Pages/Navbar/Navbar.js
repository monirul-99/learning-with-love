import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Context/UserContext";
import { FaRegUserCircle } from "react-icons/fa";
import logo from "../Images/toppng.com.png";
import { IconContext } from "react-icons";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignOut = () => {
    logOut()
      .then(() => {
        navigate("/");
      })
      .then((error) => console.error(error));
  };
  return (
    <div>
      <div className="navbar bg-base-100 h-24 lg:p-10 p-3">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-9 w-9"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-8 p-6 shadow bg-base-100 rounded-box w-52 space-y-5"
            >
              <Link to="/course">Course</Link>
              <Link to="/faq">FAQ</Link>
              <Link to="/blog">Blogs</Link>

              {user?.uid ? (
                <Link onClick={handleSignOut} to="/logout">
                  Log out
                </Link>
              ) : (
                <>
                  <Link to="/signin">Sign In</Link>
                  <Link to="/register">Register</Link>
                </>
              )}
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <div className="flex items-center">
            <Link to="/">
              <img className="w-14 mx-5" src={logo} alt="" />
            </Link>
            <Link
              to="/"
              className="uppercase font-Poppins text-2xl lg:block hidden"
            >
              Progress Zone
            </Link>
          </div>
        </div>
        <div className="navbar-end">
          <div className="flex items-center gap-4">
            <label
              htmlFor="AcceptConditions"
              className="relative h-8 w-14 cursor-pointer"
            >
              <input
                type="checkbox"
                id="AcceptConditions"
                className="peer sr-only"
              />

              <span className="absolute inset-0 rounded-full bg-gray-300 transition peer-checked:bg-slate-900"></span>

              <span className="absolute inset-0 m-1 h-6 w-6 rounded-full bg-white transition peer-checked:translate-x-6"></span>
            </label>
            <Link className="block shrink-0">
              <span className="sr-only">Profile</span>
              {user?.photoURL ? (
                <img
                  title={user?.displayName}
                  alt="Man"
                  src={user?.photoURL}
                  className="h-10 w-10 rounded-full object-cover"
                />
              ) : (
                <IconContext.Provider value={{ size: 30 }}>
                  <FaRegUserCircle />
                </IconContext.Provider>
              )}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
