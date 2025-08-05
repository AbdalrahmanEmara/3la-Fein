import { Toaster } from "react-hot-toast";
import SignIn from "./Componets/Forms/SignIn";
import SignUP from "./Componets/Forms/SignUP";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";

let routes = createBrowserRouter([
  {
    index: true,
    element: <Home />,
  },
  { path: "/signin", element: <SignIn /> },
  { path: "/signup", element: <SignUP /> },
]);
function App() {
  return (
    <>
      <RouterProvider router={routes} />
      <Toaster />
    </>
  );
}

export default App;
