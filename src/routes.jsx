import Home from "./Pages/Home";
import SignUp from "./Pages/Sign/SignUP";
import SignIn from "./Pages/Sign/SignIn";
import { createBrowserRouter } from "react-router-dom";
import Profile from "./Pages/Profile/Profile";
import CategoryRestaurantPage from "./Pages/Places/CategoryRestaurantPage";
import CatPage from "./Pages/Categ/CatPage";

export const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/signup", element: <SignUp /> },
  { path: "/signin", element: <SignIn /> },
  { path: "/profile", element: <Profile /> },
  { path: "/restaurant", element: <CategoryRestaurantPage /> },
  { path: "/categories", element: <CatPage /> },
  { path: "/categories/restaurant", element: <CategoryRestaurantPage /> },
  { path: "/categories/cafe", element: <CategoryRestaurantPage /> },
  { path: "/categories/cinema", element: <CategoryRestaurantPage /> },
  { path: "/categories/shopping", element: <CategoryRestaurantPage /> },
  { path: "/categories/landmark", element: <CategoryRestaurantPage /> },
  { path: "/categories/amusement", element: <CategoryRestaurantPage /> },
  { path: "/categories/beache", element: <CategoryRestaurantPage /> },
  { path: "/categories/park", element: <CategoryRestaurantPage /> },
  { path: "/categories/museum", element: <CategoryRestaurantPage /> },
]);
