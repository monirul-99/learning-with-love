import React from "react";
import { useLoaderData } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import CourseCard from "../CourseCard/CourseCard";

const Course = () => {
  const data = useLoaderData();
  return (
    <div>
      <section className="bg-[#121212]">
        <div className="w-11/12 mx-auto grid  md:grid-cols-2 lg:grid-cols-4 gap-12">
          <h1 className="grid md:col-span-2 lg:col-span-4 text-5xl text-white text-center font-Dancing tracking-widest font-bold p-14 -mb-12">
            Top Seller Course
          </h1>
          {data.map((item, inx) => (
            <CourseCard key={inx} item={item}></CourseCard>
          ))}
          <ToastContainer />
          <ToastContainer />
        </div>
      </section>
    </div>
  );
};

export default Course;
