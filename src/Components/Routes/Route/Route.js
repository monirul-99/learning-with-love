import { createBrowserRouter } from "react-router-dom";
import Layout from "../../../Layout/Layout";
import Blog from "../../Pages/Blogs/Blog";
import Contact from "../../Pages/Contact/Contact";
import Course from "../../Pages/Course/Course";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Home from "../../Pages/Home/Home";

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
        path: "/home",
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
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);
