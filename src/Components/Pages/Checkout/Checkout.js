import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/UserContext";

const Checkout = () => {
  const { user } = useContext(AuthContext);
  const { displayName } = user;
  return (
    <div className="lg:p-48 pt-12">
      <section class="lg:w-[400px] mx-auto rounded-3xl shadow-2xl p-16 ">
        <div class=" text-center">
          <p class="text-sm font-semibold tracking-widest text-pink-500">
            Your order is on the way
          </p>

          <h2 class="mt-6 text-2xl font-bold">
            <span className="text-black font-Kalam">{displayName} </span>
            Thanks for your Enrolling, we're getting it ready!
          </h2>

          <Link
            to="/"
            class="mt-8 inline-block lg:w-full w-2/3 rounded-full bg-pink-600 lg:py-4 py-3 text-sm font-bold text-white shadow-xl"
          >
            Back To Home
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Checkout;
