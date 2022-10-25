import React, { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { AuthContext } from "../../../Context/UserContext";
import CourseCard from "../CourseCard/CourseCard";
import SelectedCard from "../SElectedCard/SelectedCard";

const Course = () => {
  const data = useLoaderData();

  const { Course, totalCost } = useContext(AuthContext);
  console.log(Course);
  return (
    <div className="grid lg:grid-cols-9">
      <section className="bg-[#121212] grid lg:col-span-7 ">
        <div className="w-11/12 mx-auto grid md:grid-cols-2 lg:grid-cols-4  gap-12">
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

      <div className="grid lg:col-span-2 bg-slate-700 justify-center rounded-xl mt-5 lg:mt-0">
        <h1 className="text-3xl text-white text-center font-Poppins p-5 mt-14">
          Selected Course
          <div className="grid grid-cols-7 gap-2 justify-between mt-12 p-4 ">
            {Course.map((selectItems, inX) => (
              <SelectedCard key={inX} selectItems={selectItems}></SelectedCard>
            ))}
          </div>
          {Course.length > 0 ? (
            <div className="flex justify-between p-4">
              <aside className="text-xl text-white">Total Cost : </aside>
              <aside className="text-xl text-white">${totalCost}</aside>
            </div>
          ) : undefined}
          {Course.length > 0 ? (
            <Link to="/courseDetails">
              <button className="btn mt-5 btn-outline btn-success">
                Course Details
              </button>
            </Link>
          ) : undefined}
        </h1>
      </div>
    </div>
  );
};

export default Course;
