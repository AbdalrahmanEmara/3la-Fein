import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { useEffect } from "react";
import { useLocation } from "./Context/UserContext.jsx";

// import Testapi from "./Pages/Testapi";
function App() {
  const { location } = useLocation();

  useEffect(() => {
    console.log("location changed:", location);
  }, [location]); // ✅ log every time location changes

  return (
    <>
      <div>
        <Toaster />
        <RouterProvider router={router} />
      </div>
      {/* <Testapi /> */}
    </>
  );
}

export default App;
