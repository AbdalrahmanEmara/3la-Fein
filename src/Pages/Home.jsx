import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Welcome to the App</h1>
      <Link to="/signup">Sign Up</Link>
      <br />
      <Link to="/signin">Sign In</Link>
    </div>
  );
}
