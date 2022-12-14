import React, { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/UserContext";
import DetailsCard from "../DetailsCard/DetailsCard";
import { FaDownload } from "react-icons/fa";
import { useReactToPrint } from "react-to-print";

const CourseDetails = () => {
  const { Course, totalCost } = useContext(AuthContext);

  const componentRef = useRef();
  const reactPdfPrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "CourseDetails",
    onafterprint: () => alert("Print Success"),
  });

  return (
    <div className="mx-auto bg-gray-900 text-white p-5">
      <div className="flex justify-center  p-10">
        <button
          onClick={reactPdfPrint}
          className="flex items-center px-8 py-3 font-semibold bg-orange-400 rounded-full"
        >
          <span className="mx-3">PDF</span>
          <FaDownload />
        </button>
      </div>
      <div
        ref={componentRef}
        style={{ width: "100%", height: window.innerHeight }}
        className="flex flex-col p-5 space-y-4 sm:p-10 lg:w-6/12 mx-auto  rounded-2xl"
      >
        <ul className="flex flex-col divide-y divide-gray-700">
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
              className="px-6 py-2 border rounded-md border-violet-400"
            >
              Back
              <span className="sr-only sm:not-sr-only"> to Course</span>
            </button>
          </Link>
          <Link to="/checkOut">
            <button
              type="button"
              className="px-6 py-2 border rounded-md bg-violet-400 text-gray-900 border-violet-400"
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
