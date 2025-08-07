import RestaurantPage from "../../Componets/Restaurant/RestaurantPage";
import Nav from "../../Componets/Nav/Nav";
import Footer from "../../Componets/Footer/Footer";
import LocationPickerButton from "../../Componets/Location/LocationPickerButton";

const CategoryRestaurantPage = () => {
  return (
    <div className="mt-5">
      <Nav />
      <RestaurantPage />
      <LocationPickerButton />
      <Footer />
    </div>
  );
};

export default CategoryRestaurantPage;
