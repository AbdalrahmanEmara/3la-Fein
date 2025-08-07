import Nav from "../../Componets/Nav/Nav";
import Footer from "../../Componets/Footer/Footer";
import { useNavigate } from "react-router-dom";
import {
  getCurrentUser,
  clearCurrentUser,
} from "../../Componets/Forms/Storage";
import MainHeroSec from "../../Componets/ProfHeroSec/mainHeroSec";
import History from "../../Componets/History/History";

const Profile = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    clearCurrentUser();
    navigate("/"); // or "/" if you prefer
  };

  return (
    <div>
      <Nav />
      <MainHeroSec />
      <History />
      <Footer />
    </div>
  );
};

export default Profile;
