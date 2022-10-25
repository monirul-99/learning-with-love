import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../Firebase/Firebase.config";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const AuthContext = createContext();
const auth = getAuth(app);

const UserContext = ({ children }) => {
  const [Course, setCourse] = useState([]);
  const [priceTotal, setPriceTotal] = useState([]);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const totalCost = priceTotal.reduce((previousValue, currentValue) => {
    return previousValue + parseFloat(currentValue);
  }, 0);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const handleGoogleProvider = (provider) => {
    return signInWithPopup(auth, provider);
  };
  const handleFacebookProvider = (provider) => {
    return signInWithPopup(auth, provider);
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    return signOut(auth);
  };

  const handleSelectedCourse = (selectedCourse, price) => {
    const find = Course.find((items) => items.id === selectedCourse.id);
    if (find) {
      toast.error("Already Added Bro!", {
        position: "top-right",
        autoClose: 500,
      });
      return;
    } else {
      setCourse([...Course, selectedCourse]);
      setPriceTotal([...priceTotal, price]);
    }
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unSubscribe();
  }, []);
  const authInfo = {
    handleSelectedCourse,
    Course,
    totalCost,
    signIn,
    createUser,
    user,
    loading,
    handleGoogleProvider,
    handleFacebookProvider,
    logOut,
    setUser,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default UserContext;
