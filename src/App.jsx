import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { UserProvider } from "./Context/UserContext";
import "./index.css";
import SignUP from "./Componets/Forms/SignUP";
import SignIn from "./Componets/Forms/SignIn";

function App() {
  return (
    <>
      <UserProvider>
        <SignIn />
        <SignUP />
      </UserProvider>
    </>
  );
}

export default App;
