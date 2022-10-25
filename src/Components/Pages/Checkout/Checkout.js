import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/UserContext";

const Checkout = () => {
  const { user } = useContext(AuthContext);
  const { displayName } = user;
  return (
    <div className="p-48">
      <section class="w-[400px] mx-auto rounded-3xl shadow-2xl ">
        <div class="p-8 text-center sm:p-12">
          <p class="text-sm font-semibold tracking-widest text-pink-500">
            Your order is on the way
          </p>

          <h2 class="mt-6 text-2xl font-bold">
            <span className="text-white">{displayName} </span>
            Thanks for your purchase, we're getting it ready!
          </h2>

          <Link
            to="/"
            class="mt-8 inline-block w-full rounded-full bg-pink-600 py-4 text-sm font-bold text-white shadow-xl"
          >
            Back To Home
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Checkout;
