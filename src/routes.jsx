import Home from "./Pages/Home";
import SignUp from "./Pages/Sign/SignUP";
import SignIn from "./Pages/Sign/SignIn";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/signup", element: <SignUp /> },
  { path: "/signin", element: <SignIn /> },
]);
