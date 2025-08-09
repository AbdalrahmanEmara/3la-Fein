import Nav from "../../Componets/Nav/Nav";
import Footer from "../../Componets/Footer/Footer";
import MainHeroSec from "../../Componets/ProfHeroSec/mainHeroSec";
import History from "../../Componets/History/History";
import LocationPickerButton from "../../Componets/Location/LocationPickerButton";
import { useEffect } from "react";
import FavoriteList from "../../Componets/FavList/favoriteList";

const Profile = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const places = (JSON.parse(localStorage.getItem("currentUser")) || {})
    .favorites;
  return (
    <div>
      <LocationPickerButton />
      <Nav />
      <MainHeroSec />
      <FavoriteList favoriteList={places} />
      <History />
      <Footer />
    </div>
  );
};

export default Profile;
