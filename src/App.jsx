import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { useEffect } from "react";
import { useLocation } from "./Context/UserContext.jsx";

function App() {
  const { location, setLocation } = useLocation();

  useEffect(() => {
    const savedLocation = localStorage.getItem("lastLocation");
    if (savedLocation) {
      const parsed = JSON.parse(savedLocation);
      setLocation(parsed);
    }
  }, [setLocation]);

  useEffect(() => {
    if (location) {
      localStorage.setItem("lastLocation", JSON.stringify(location));
    }
  }, [location]);

  //
  return (
    <>
      <div>
        <Toaster />
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
