import { Link } from "react-router-dom";
import PublicGroups from "../Componets/PublicGroups/PublicGroups";
import Discover from "../Componets/Discover/Discover";
import Footer from "../Componets/Footer/Footer";

export default function Home() {
  return (
    <div>
      <h1>Welcome to the App</h1>
      <Link to="/signup">Sign Up</Link>
      <br />
      <Link to="/signin">Sign In</Link>
      <PublicGroups />
      <Discover />
      <Footer />
    </div>
  );
}
