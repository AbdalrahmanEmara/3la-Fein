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
import { useLocation } from "react-router-dom";

export default function Home() {
  const location = useLocation();

useEffect(() => {
  if (location.state?.scrollTo) {
    const sectionId = location.state.scrollTo;
    const element = document.getElementById(sectionId);
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: "smooth" });
      }, 100); // أو 200 لو محتاج وقت أطول للـ DOM
    }
  }
}, [location]);

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
      <Footer id="Footer" />
    </div>
  );
}
