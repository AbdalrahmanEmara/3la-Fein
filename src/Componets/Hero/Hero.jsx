import styles from "./Hero.module.css";
import CardDDetailes from "../CardDetails/CardDDetailes";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import categoriesData from "../categoriessec/categorisedata.jsx";
import { useLocation } from "../../Context/UserContext.jsx"; // assuming you have this context

const GEOAPIFY_KEY = "1aba76b022024730abfcd18e5a1df166";
const UNSPLASH_ACCESS_KEY = "AhDouzsd99fNq4NsePSTLN_Gq5RqXE6uyv5K4T6hpiU";

// Helper: random integer from 0 to max-1
const getRandomInt = (max) => Math.floor(Math.random() * max);

// Distance formula (reuse if needed)
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

const fallbackData = {
  name: "Fallback Place",
  location: "Unknown Location",
  rating: 4.5,
  visitors: "200+",
  image: "/background.png",
};

export default function Hero() {
  const { location } = useLocation(); // get user location from context
  const [animating, setAnimating] = useState(false);
  const [showCard, setShowCard] = useState(false);
  const [selectedPlace, setSelectedPlace] = useState(null);

  // This function fetches a random place in a random category near user location
  const fetchRandomPlace = async () => {
    if (!location) {
      alert("Please select your location first!");
      return null;
    }

    try {
      // Pick a random category
      const randomCatIndex = getRandomInt(categoriesData.length);
      const category = categoriesData[randomCatIndex];
      const geoCategory = category.geoCategory;

      // Fetch places near location in this category (500km radius)
      const geoRes = await axios.get(
        `https://api.geoapify.com/v2/places?categories=${geoCategory}&filter=circle:${location.lon},${location.lat},500000&limit=10&apiKey=${GEOAPIFY_KEY}`
      );

      const places = geoRes.data.features;
      if (places.length === 0) return null;

      // Pick a random place from results
      const randomPlaceIndex = getRandomInt(places.length);
      const place = places[randomPlaceIndex];

      // Extract info
      const name = place.properties.name || "Unnamed Place";
      const city = place.properties.city || "";
      const restLat = place.geometry.coordinates[1];
      const restLon = place.geometry.coordinates[0];
      const distance = getDistanceFromLatLonInKm(
        location.lat,
        location.lon,
        restLat,
        restLon
      ).toFixed(2);

      // Fetch image from Unsplash
      let image = "/background.png";
      try {
        const query = `${city} ${category.title}`;
        const imgRes = await axios.get(
          `https://api.unsplash.com/search/photos?query=${encodeURIComponent(
            query
          )}&per_page=5&client_id=${UNSPLASH_ACCESS_KEY}`
        );
        const results = imgRes.data.results;
        if (results.length > 0) {
          const randomImgIndex = getRandomInt(results.length);
          image = results[randomImgIndex]?.urls?.small || image;
        }
      } catch {
        // fallback image if Unsplash fails
      }

      // Compose final place data object
      const finalPlace = {
        name,
        location: `${distance} km away`,
        distance: parseFloat(distance),
        rating: parseFloat((Math.random() * 2 + 3).toFixed(1)), // random 3.0-5.0 rating
        visitors: Math.floor(Math.random() * 1000) + 100,
        image,
        category,
        coordinates: { lat: restLat, lon: restLon },
      };

      return finalPlace;
    } catch (err) {
      console.error("Failed to fetch random place:", err);
      return null;
    }
  };

  const handleClick = async () => {
    setAnimating(true);
    const place = await fetchRandomPlace();

    setTimeout(() => {
      setAnimating(false);
      if (place) {
        console.log("Random place selected:", place);
        setSelectedPlace(place);
        setShowCard(true);
      } else {
        alert("Could not find a random place at this time.");
      }
    }, 2000);
  };

  const buttonVariants = {
    initial: { scale: 1, boxShadow: "0 0 0px rgba(0,255,255,0)" },
    animate: {
      scale: [1, 0.95, 1.05, 1],
      boxShadow: [
        "0 0 0px rgba(0,255,255,0)",
        "0 0 20px rgba(0,255,255,0.8)",
        "0 0 40px rgba(0,255,255,1)",
        "0 0 0px rgba(0,255,255,0)",
      ],
      transition: {
        duration: 2,
        times: [0, 0.2, 0.6, 1],
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className={styles.landing}>
      <div className="hero d-flex align-items-center justify-content-center h-100">
        <div className="content text-center w-50 h-50 position-relative">
          <motion.div
            className={styles.textBlock}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1>Discover the most engaging places</h1>
            <p>Over 45,000 Activities Are Ready to Explore!</p>
          </motion.div>

          <motion.div
            className="button mt-5 d-flex align-items-center justify-content-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <motion.button
              className={`${styles.mainBtn} ${styles.start}`}
              variants={buttonVariants}
              initial="initial"
              animate={animating ? "animate" : "initial"}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 12px 3px rgba(0, 255, 255, 0.8)",
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              style={{ position: "relative", overflow: "hidden", opacity: 1 }}
              onClick={handleClick}
              disabled={animating}
            >
              {animating ? "Activating..." : "3la-fe!n"}

              {/* Neon scan line */}
              {animating && (
                <motion.div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: "-100%",
                    width: "100%",
                    height: "100%",
                    background:
                      "linear-gradient(90deg, transparent, rgba(0,255,255,0.4), transparent)",
                  }}
                  animate={{ left: "100%" }}
                  transition={{
                    duration: 1,
                    ease: "linear",
                    repeat: Infinity,
                  }}
                />
              )}
            </motion.button>

            <AnimatePresence>
              {showCard && selectedPlace && (
                <CardDDetailes
                  data={selectedPlace}
                  onClose={() => setShowCard(false)}
                />
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
