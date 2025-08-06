import PublicGroups from "../Componets/PublicGroups/PublicGroups";
import Discover from "../Componets/Discover/Discover";
import Reviews from "../Componets/Reviews/Reviews";
import Hero from "../Componets/Hero/Hero";
import Nav from "../Componets/Nav/Nav";
import Footer from "../Componets/Footer/Footer";
import History from "../Componets/History/History";
import Navigator from "../Componets/Navigator/Navigator";

export default function Home() {
  return (
    <div>
      <Nav />
      <Hero />
      <PublicGroups />
      <History />
      <Discover />
      <Reviews />
      <PublicGroups />

      <Footer />
    </div>
  );
}
