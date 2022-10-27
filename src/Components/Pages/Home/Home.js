import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <section className="bg-gray-800">
        <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
          <h1 className="text-4xl font-bold leading-none sm:text-5xl">
            Take Students Experience
            <span className="text-violet-400">To The Next Level. </span>
          </h1>
          <p className="px-8 mt-8 mb-12 text-lg">
            Learning With Love is doing everything we can to make it easy for
            districts to get up and running with distance learning!
          </p>
          <div className="flex flex-wrap justify-center">
            <Link to="/course">
              <button className="px-8 py-3 m-2 text-lg font-semibold rounded bg-violet-400 text-gray-900">
                Course Explore
              </button>
            </Link>
            <Link to="/blog">
              <button className="px-8 py-3 m-2 text-lg border rounded text-gray-50 border-gray-700">
                Learn more
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
