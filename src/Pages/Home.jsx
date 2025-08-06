import PublicGroups from "../Componets/PublicGroups/PublicGroups";
import Discover from "../Componets/Discover/Discover";
import Reviews from "../Componets/Reviews/Reviews";
import Hero from "../Componets/Hero/Hero";
import Nav from "../Componets/Nav/Nav";
import Footer from "../Componets/Footer/Footer";
import NavigatorEidget from "../Componets/Navigator/NavigatorWidget/NavigatorEidget";
import MainCategories from "../Componets/categoriessec/maincategories";
import LocationPickerButton from "../Componets/Location/LocationPickerButton";

export default function Home() {
  return (
    <div>
      <Nav />
      <Hero />
      <LocationPickerButton />
      <MainCategories />
      <PublicGroups />
      <Discover />
      <NavigatorEidget />
      <Reviews />
      <Footer />
    </div>
  );
}
