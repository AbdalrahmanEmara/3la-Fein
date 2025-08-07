import Home from "./Pages/Home";
import SignUp from "./Pages/Sign/SignUP";
import SignIn from "./Pages/Sign/SignIn";
import { createBrowserRouter } from "react-router-dom";
import Profile from "./Pages/Profile/Profile";
import CategoryRestaurantPage from "./Pages/Places/CategoryRestaurantPage";
import CatPage from "./Pages/Categ/CatPage";
import NotFound from "./Pages/NotFound";
import PublicGroupFullPage from "./Pages/PublicGroups/PublicGroupFullPage";

export const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/signup", element: <SignUp /> },
  { path: "/signin", element: <SignIn /> },
  { path: "/profile", element: <Profile /> },
  { path: "/categories", element: <CatPage /> },
  { path: "/categories/:id", element: <CategoryRestaurantPage /> },
  {
    path: "/publicGroups",
    element: <PublicGroupFullPage />,
  },
  { path: "*", element: <NotFound /> },
]);
