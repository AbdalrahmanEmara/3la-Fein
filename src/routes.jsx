import Home from "./Pages/Home";
import SignUp from "./Pages/Sign/SignUP";
import SignIn from "./Pages/Sign/SignIn";
import { createBrowserRouter } from "react-router-dom";
import Profile from "./Pages/Profile/Profile";
import CategoryRestaurantPage from "./Pages/Places/CategoryRestaurantPage";

export const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/signup", element: <SignUp /> },
  { path: "/signin", element: <SignIn /> },
  { path: "/profile", element: <Profile /> },
  { path: "/restaurant", element: <CategoryRestaurantPage /> },
]);
