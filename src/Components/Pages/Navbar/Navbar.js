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
      <header aria-label="Page Header" className="bg-gray-50 text-slate-900">
        <div className="px-5 py-8 sm:px-6 lg:px-8">
          <div className="flex items-center lg:justify-between justify-end gap-4">
            <div className="flex space-x-16 items-center">
              <div className="flex items-center">
                <img className="w-16 mx-5" src={logo} alt="" />
                <Link to="/" className="uppercase font-Poppins text-2xl">
                  Learning With Love
                </Link>
              </div>
              <div className="hidden lg:block space-x-10">
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
              </div>
            </div>

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
      </header>
    </div>
  );
};

export default Navbar;
