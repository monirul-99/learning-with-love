import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Context/UserContext";

const Register = () => {
  const [error, setError] = useState(null);
  const { createUser, setUser, handleUpdateProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleProfileUpdateInfo = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photoURL,
    };
    handleUpdateProfile(profile)
      .then(() => {})
      .then((error) => console.error("Error", error));
  };

  const handleSubmitBtn = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photoUrl.value;
    const password = form.password.value;
    const confirmPassword = form.confirm_password.value;
    handleProfileUpdateInfo(name, photo);
    console.log(name, email, photo, password, confirmPassword);

    if (password.length < 6) {
      setError("Password Minimum 6 Characters or More!");
      return;
    }
    if (password !== confirmPassword) {
      setError("Password didn't Match!");
      return;
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div>
      <div className="bg-[#F3F7F9]">
        <div className="bg-grey-lighter min-h-screen flex flex-col">
          <form
            onSubmit={handleSubmitBtn}
            className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2"
          >
            <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
              <h1 className="mb-8 text-3xl text-center">Registration Form</h1>
              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="name"
                placeholder="Full Name"
              />

              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="email"
                placeholder="Email"
                required
              />

              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="photoUrl"
                placeholder="Image Link"
              />

              <input
                type="password"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="password"
                placeholder="Password"
              />
              <input
                type="password"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="confirm_password"
                placeholder="Confirm Password"
              />

              <p className="text-center p-2.5 text-[#FF9494]">{error}</p>

              <button
                type="submit"
                className="w-full text-center py-3 rounded bg-green-500 text-white hover:bg-green-dark focus:outline-none my-1"
              >
                Create Account
              </button>

              <div className="text-center text-sm text-grey-dark mt-4">
                By signing up, you agree to the
                <a
                  className="no-underline border-b border-grey-dark text-grey-dark"
                  href="/"
                >
                  Terms of Service {}
                </a>
                and {}
                <a
                  className="no-underline border-b border-grey-dark text-grey-dark"
                  href="/"
                >
                  Privacy Policy
                </a>
              </div>
            </div>

            <div className="text-grey-dark mt-6">
              Already have an account?
              <button
                className="no-underline border-b border-blue text-blue"
                href="/"
              >
                <Link to="/signin">Log in</Link>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
