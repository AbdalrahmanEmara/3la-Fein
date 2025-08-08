import Nav from "../../Componets/Nav/Nav";
import Footer from "../../Componets/Footer/Footer";
import LocationPickerButton from "../../Componets/Location/LocationPickerButton";
import CategoriesPPage from "../../Componets/CategoriesCard/CategoriesPPage";

const CatPage = () => {
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
