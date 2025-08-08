import Nav from "../../Componets/Nav/Nav";
import Footer from "../../Componets/Footer/Footer";
import MainHeroSec from "../../Componets/ProfHeroSec/mainHeroSec";
import History from "../../Componets/History/History";
import LocationPickerButton from "../../Componets/Location/LocationPickerButton";
import { useEffect } from "react";

const Profile = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <LocationPickerButton />
      <Nav />
      <MainHeroSec />
      <History />
      <Footer />
    </div>
  );
};

export default Profile;
