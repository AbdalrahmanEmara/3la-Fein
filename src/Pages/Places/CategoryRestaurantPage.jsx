import RestaurantPage from "../../Componets/Restaurant/RestaurantPage";
import Nav from "../../Componets/Nav/Nav";
import Footer from "../../Componets/Footer/Footer";
import LocationPickerButton from "../../Componets/Location/LocationPickerButton";
import { useEffect } from "react";

const CategoryRestaurantPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
