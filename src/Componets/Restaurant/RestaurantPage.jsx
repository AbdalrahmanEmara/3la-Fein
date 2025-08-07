import { useEffect, useState } from "react";
import { useLocation } from "../../Context/UserContext.jsx";
import Restaurant from "./Restaurant";
import axios from "axios";
import toast from "react-hot-toast";
import Style from "./Restaurant.module.css";

const GEOAPIFY_KEY = "1aba76b022024730abfcd18e5a1df166";
const UNSPLASH_ACCESS_KEY = "AhDouzsd99fNq4NsePSTLN_Gq5RqXE6uyv5K4T6hpiU";

const fallbackData = {
  name: "Fallback Restaurant",
  location: "Unknown Location",
  rating: 4.5,
  visitors: "200+",
  image: "/background.png",
};

// Haversine formula to calculate distance in km
function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
  const R = 6371;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

export default function RestaurantPage() {
  const [restaurants, setRestaurants] = useState([]);
  const [originalRestaurants, setOriginalRestaurants] = useState([]);
  const [visibleCards, setVisibleCards] = useState(12);
  const [filter, setFilter] = useState("Default");

  const { location } = useLocation();

  useEffect(() => {
    setRestaurants([]);
    setOriginalRestaurants([]);

    const fetchRestaurants = async () => {
      if (!location) {
        toast.error("Please select a location first.");
        return;
      }

      try {
        const geoRes = await axios.get(
          `https://api.geoapify.com/v2/places?categories=catering.restaurant&filter=circle:${location.lon},${location.lat},5000&limit=24&apiKey=${GEOAPIFY_KEY}`
        );

        const results = geoRes.data.features;

        const mappedData = await Promise.all(
          results.map(async (place) => {
            const name = place.properties.name || "Unnamed Restaurant";
            const address = place.properties.address_line1 || "No address";
            const city = place.properties.city || "";

            const restLat = place.geometry.coordinates[1];
            const restLon = place.geometry.coordinates[0];

            const distance = getDistanceFromLatLonInKm(
              location.lat,
              location.lon,
              restLat,
              restLon
            ).toFixed(2);

            const query = `${name} ${city} restaurant`;
            let image = "/background.png";

            try {
              const imgRes = await axios.get(
                `https://api.unsplash.com/search/photos?query=${encodeURIComponent(
                  query
                )}&per_page=5&client_id=${UNSPLASH_ACCESS_KEY}`
              );

              const results = imgRes.data.results;
              if (results.length > 0) {
                const randomIndex = Math.floor(Math.random() * results.length);
                image = results[randomIndex]?.urls?.small || "/background.png";
              }
            } catch (err) {
              console.warn("Unsplash fetch failed, using fallback.");
            }

            return {
              name,
              location: `${distance} km away`,
              distance: parseFloat(distance),
              rating: parseFloat((Math.random() * 2 + 3).toFixed(1)),
              visitors: Math.floor(Math.random() * 1000) + 100,
              image,
            };
          })
        );

        const finalData =
          mappedData.length === 0
            ? new Array(24).fill(null).map(() => fallbackData)
            : mappedData;

        setRestaurants(finalData);
        setOriginalRestaurants(finalData);
        setFilter("Default");
      } catch (error) {
        console.error("Error fetching data from Geoapify:", error);
        const fallback = new Array(24).fill(null).map(() => fallbackData);
        setRestaurants(fallback);
        setOriginalRestaurants(fallback);
      }
    };

    fetchRestaurants();
  }, [location]);

  const sortRestaurants = (type) => {
    setFilter(type);

    switch (type) {
      case "Popular":
        setRestaurants(
          [...restaurants].sort((a, b) => b.visitors - a.visitors)
        );
        break;
      case "Nearest":
        setRestaurants(
          [...restaurants].sort((a, b) => a.distance - b.distance)
        );
        break;
      case "Best":
        setRestaurants([...restaurants].sort((a, b) => b.rating - a.rating));
        break;
      default:
        setRestaurants([...originalRestaurants]);
        break;
    }
  };

  const showAll = () => setVisibleCards(restaurants.length);
  const showLess = () => setVisibleCards(12);

  return (
    <div className={`${Style.RestPage} d-flex flex-column`}>
      <div className="d-flex align-items-center flex-column text-center px-2">
        <h1 className={`${Style.title} mb-3`}>Restaurants</h1>
        <p className={`${Style.description}`}>
          Explore the best dining spots near you — handpicked by location and
          style.
        </p>
      </div>

      <div className="container py-4">
        <div className={`${Style.filterBtnContainer} justify-content-center`}>
          {["Default", "Popular", "Nearest", "Best"].map((type) => (
            <button
              key={type}
              className={`${Style.filterBtn} ${
                filter === type ? Style.active : ""
              }`}
              onClick={() => sortRestaurants(type)}
            >
              {type}
            </button>
          ))}
        </div>

        <div className="d-flex flex-wrap justify-content-center gap-4">
          {restaurants.slice(0, visibleCards).map((rest, index) => (
            <Restaurant key={index} {...rest} />
          ))}
        </div>
      </div>

      <div className="d-flex justify-content-center align-items-center mt-4">
        {visibleCards < restaurants.length ? (
          <button className={Style.ShowMoreButton} onClick={showAll}>
            Show All Restaurant
          </button>
        ) : (
          <button className={Style.ShowMoreButton} onClick={showLess}>
            Show Less Restaurant
          </button>
        )}
      </div>
    </div>
  );
}
