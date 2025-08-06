import PublicGroups from "../Componets/PublicGroups/PublicGroups";
import Discover from "../Componets/Discover/Discover";
import Reviews from "../Componets/Reviews/Reviews";
import Hero from "../Componets/Hero/Hero";
import Nav from "../Componets/Nav/Nav";
import Footer from "../Componets/Footer/Footer";
import History from "../Componets/History/History";
import NavigatorEidget from "../Componets/Navigator/NavigatorWidget/NavigatorEidget";

export default function Home() {
  return (
    <div>
      <Nav />
      <Hero />
      <History />
      <PublicGroups />
      <Discover />
      <NavigatorEidget />
      <Reviews />
      <Footer />
    </div>
  );
}
