import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Components/Routes/Route/Route";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });
  return (
    <div className="">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
