import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

function App() {
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
