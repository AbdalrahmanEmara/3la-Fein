import PublicGroups from "../Componets/PublicGroups/PublicGroups";
import Discover from "../Componets/Discover/Discover";
import Reviews from "../Componets/Reviews/Reviews";
import Hero from "../Componets/Hero/Hero";
import Nav from "../Componets/Nav/Nav";
import Footer from "../Componets/Footer/Footer";
import NavigatorEidget from "../Componets/Navigator/NavigatorWidget/NavigatorEidget";
import MainCategories from "../Componets/categoriessec/maincategories";
import LocationPickerButton from "../Componets/Location/LocationPickerButton";
import DiscoverWeekly from "../Componets/discoverWeekly";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Nav />
      <Hero />
      <LocationPickerButton />
      <DiscoverWeekly />
      <MainCategories />
      <PublicGroups />
      <Discover />
      <NavigatorEidget />
      <Reviews />
      <Footer />
    </div>
  );
}
