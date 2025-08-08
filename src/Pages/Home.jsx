import PublicGroups from "../Componets/PublicGroups/PublicGroups";
import Discover from "../Componets/Discover/Discover";
import Reviews from "../Componets/Reviews/Reviews";
import Hero from "../Componets/Hero/Hero";
import Nav from "../Componets/Nav/Nav";
import Footer from "../Componets/Footer/Footer";
import NavigatorEidget from "../Componets/Navigator/NavigatorWidget/NavigatorEidget";
import MainCategories from "../Componets/categoriessec/maincategories";
import LocationPickerButton from "../Componets/Location/LocationPickerButton";
import DiscoverWeekly from "../Componets/discoverWeekly/discoverWeekly";
import { useEffect } from "react";
import CreditPage from "../Componets/Credits/CreditPage";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Nav />
      <section id="Hero">
        <Hero />
      </section>
      <LocationPickerButton />
      <DiscoverWeekly />
      <section id="Categories">
        <MainCategories />
      </section>
      <section id="Groups">
        <PublicGroups />
      </section>
      <section id="Discover">
        <Discover />
      </section>
      <section id="Navigator">
        <NavigatorEidget />
      </section>
      <section id="Reviews">
        <Reviews />
      </section>
      <section id="Footer">
        <Footer />
        <CreditPage />
      </section>
    </div>
  );
}
