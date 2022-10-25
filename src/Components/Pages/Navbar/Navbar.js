import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Context/UserContext";
import { FaRegUserCircle } from "react-icons/fa";

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
        <div className="w-10/12 mx-auto px-5 py-8 sm:px-6 lg:px-8">
          <div className="flex items-center lg:justify-between justify-end gap-4">
            <div className="flex space-x-16">
              <div>
                <h1 className="uppercase font-Poppins">Learning With Love</h1>
              </div>
              <div className="hidden lg:block space-x-10">
                <Link to="/home">Home</Link>
                <Link to="/course">Course</Link>
                <Link to="/blog">Blogs</Link>
                <Link to="/contact">Contact</Link>
                {user?.uid ? (
                  <Link onClick={handleSignOut} to="/logout">
                    Log Out
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
              <Link className="block shrink-0">
                <span className="sr-only">Profile</span>
                <img
                  alt="Man"
                  src={user ? user.photoURL : <FaRegUserCircle />}
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
