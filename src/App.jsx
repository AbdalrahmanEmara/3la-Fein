import "./App.css";
import AnimationTest from "./AnimationTest/AnimationTest";
import "bootstrap/dist/css/bootstrap.min.css";
import { UserProvider } from "./Context/UserContext";
import SignIn from "./Componets/Forms/SignIn";

function App() {
  return (
    <UserProvider>
      <SignIn />
    </UserProvider>
  );
}

export default App;
