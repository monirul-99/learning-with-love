import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/UserContext";
import DetailsCard from "../DetailsCard/DetailsCard";
import jsPDF from "jspdf";
import { FaDownload } from "react-icons/fa";

const CourseDetails = () => {
  const { Course, totalCost } = useContext(AuthContext);

  const pageDownload = () => {
    const doc = new jsPDF("p", "pt");
    doc.html(document.querySelector("#pageDownload"), {
      callback: function (pdf) {
        pdf.save("CourseDEtails.pdf");
      },
    });
  };

  return (
    <div className="mx-auto  dark:bg-gray-900 dark:text-gray-100 p-5">
      <div className="flex justify-center p-10">
        <button
          onClick={pageDownload}
          className="flex items-center px-8 py-3 font-semibold rounded-full dark:bg-gray-100 dark:text-gray-800"
        >
          <span className="mx-3">PDF</span>
          <FaDownload />
        </button>
      </div>
      <div className="flex flex-col p-5 space-y-4 sm:p-10 lg:w-6/12 mx-auto  rounded-2xl">
        <ul
          id="pageDownload"
          className="flex flex-col divide-y divide-gray-700"
        >
          {Course.map((card, inX) => (
            <DetailsCard key={inX} card={card}></DetailsCard>
          ))}
        </ul>

        <div className="space-y-1 text-right">
          <p className="text-xl mb-8">
            Total Amount:
            <span className="font-semibold">
              <span className="mx-2">${totalCost}</span>
            </span>
          </p>
        </div>

        <div className="flex justify-end space-x-4">
          <Link to="/course">
            <button
              type="button"
              className="px-6 py-2 border rounded-md dark:border-violet-400"
            >
              Back
              <span className="sr-only sm:not-sr-only"> to Course</span>
            </button>
          </Link>
          <Link to="/checkOut">
            <button
              type="button"
              className="px-6 py-2 border rounded-md dark:bg-violet-400 dark:text-gray-900 dark:border-violet-400"
            >
              <span className="sr-only sm:not-sr-only">Continue to </span>
              Checkout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
