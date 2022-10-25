import { createBrowserRouter } from "react-router-dom";
import Layout from "../../../Layout/Layout";
import Blog from "../../Pages/Blogs/Blog";

import Course from "../../Pages/Course/Course";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import FAQ from "../../Pages/FAQ/Faq";
import Home from "../../Pages/Home/Home";
import Register from "../../Pages/Register/Register";
import SignIn from "../../Pages/SignIn/SignIn";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/course",
        loader: () => fetch("https://laerning-with-love.vercel.app"),
        element: <Course />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/faq",
        element: <FAQ />,
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);
