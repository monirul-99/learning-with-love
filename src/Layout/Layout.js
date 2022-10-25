import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Pages/Footer/Footer";
import Navbar from "../Components/Pages/Navbar/Navbar";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
