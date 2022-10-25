import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Context/UserContext";
import { FaRegUserCircle } from "react-icons/fa";
import logo from "../Images/toppng.com.png";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);
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
        <div className="w-10/12 mx-auto px-5 py-8 sm:px-6 lg:px-8">
          <div className="flex items-center lg:justify-between justify-end gap-4">
            <div className="flex space-x-16">
              <div className="flex items-center">
                <img className="w-16 mx-5" src={logo} alt="" />
                <h1 className="uppercase font-Poppins">Learning With Love</h1>
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
                for="AcceptConditions"
                class="relative h-8 w-14 cursor-pointer"
              >
                <input
                  type="checkbox"
                  id="AcceptConditions"
                  class="peer sr-only"
                />

                <span class="absolute inset-0 rounded-full bg-gray-300 transition peer-checked:bg-slate-900"></span>

                <span class="absolute inset-0 m-1 h-6 w-6 rounded-full bg-white transition peer-checked:translate-x-6"></span>
              </label>
              <Link className="block shrink-0">
                <span className="sr-only">Profile</span>
                <img
                  alt="Man"
                  src=""
                  className="h-10 w-10 rounded-full object-cover"
                />
              </Link>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
