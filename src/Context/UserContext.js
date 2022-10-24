import React, { createContext, useState } from "react";
import { getAuth } from "firebase/auth";
import app from "../Firebase/Firebase.config";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const AuthContext = createContext();
const auth = getAuth(app);
const UserContext = ({ children }) => {
  const [Course, setCourse] = useState([]);
  console.log(Course);

  const handleSelectedCourse = (selectedCourse) => {
    const find = Course.find((items) => items.id === selectedCourse.id);
    if (find) {
      toast.error("Already Added Bro!", {
        position: "top-right",
        autoClose: 500,
      });
      return;
    } else {
      setCourse([...Course, selectedCourse]);
    }
  };
  const authInfo = { handleSelectedCourse, Course };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default UserContext;
