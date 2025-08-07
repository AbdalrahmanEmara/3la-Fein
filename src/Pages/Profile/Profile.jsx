import Nav from "../../Componets/Nav/Nav";
import Footer from "../../Componets/Footer/Footer";
import { useNavigate } from "react-router-dom";
import {
  getCurrentUser,
  clearCurrentUser,
} from "../../Componets/Forms/Storage";
import MainHeroSec from "../../Componets/ProfHeroSec/mainHeroSec";
import History from "../../Componets/History/History";
import LocationPickerButton from "../../Componets/Location/LocationPickerButton";

const Profile = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    clearCurrentUser();
    navigate("/");
  };

  return (
    <div>
      <LocationPickerButton />
      <Nav />
      <MainHeroSec />
      <button className="btn btn-danger m-3" onClick={handleLogout}>
        Logout
      </button>
      <History />
      <Footer />
    </div>
  );
};

export default Profile;
