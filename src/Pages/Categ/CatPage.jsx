import Nav from "../../Componets/Nav/Nav";
import Footer from "../../Componets/Footer/Footer";
import LocationPickerButton from "../../Componets/Location/LocationPickerButton";
import CategoriesPPage from "../../Componets/CategoriesCard/CategoriesPPage";
import { useEffect } from "react";

const CatPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <LocationPickerButton />
      <Nav />
      <CategoriesPPage />
      <Footer />
    </div>
  );
};

export default CatPage;
