import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      {/* bg-[url(https://img.freepik.com/free-photo/close-up-image-programer-working-his-desk-office_1098-18707.jpg?w=1380&t=st=1666629397~exp=1666629997~hmac=ea879c2b3ef46773dda6fe487765d9996caf99a41f2d4ce42f2fb4e50c18d9b7)] bg-cover bg-center bg-no-repeat  */}
      {/* inset-0 bg-black/50 */}
      <section className="h-[830px] relative ">
        <div className="absolute  sm:bg-transparent sm:bg-gradient-to-r sm:from-white/95 sm:to-white/25"></div>

        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div className="max-w-xl text-center sm:text-left">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              Take Students Experience
              <strong className="block font-extrabold text-rose-700 mt-3">
                To The Next Level.
              </strong>
            </h1>

            <p className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">
              Learning With Love is doing everything we can to make it easy for
              districts to get up and running with distance learning!
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-center">
              <Link className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto">
                Get Started
              </Link>

              <Link className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
