import Home from "./Pages/Home";
import SignUp from "./Componets/Forms/SignUP";
import SignIn from "./Componets/Forms/SignIn";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/signup", element: <SignUp /> },
  { path: "/signin", element: <SignIn /> },
]);
