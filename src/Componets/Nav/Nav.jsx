import { useEffect, useState } from "react";
import styles from "./Nav.module.css";
import { getCurrentUser } from "../../Componets/Forms/Storage";
import navImage from "/logo.png";
import shape from "/Shape.svg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { AnimatePresence } from "framer-motion";
import CardDDetailes from "../CardDetails/CardDDetailes";

const GEOAPIFY_KEY = "1aba76b022024730abfcd18e5a1df166";
const UNSPLASH_ACCESS_KEY = "AhDouzsd99fNq4NsePSTLN_Gq5RqXE6uyv5K4T6hpiU";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const [showCard, setShowCard] = useState(false);
  const [selectedPlace, setSelectedPlace] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const user = getCurrentUser();
    setCurrentUser(user);
  }, []);

  const navigateToSection = (sectionId) => {
    if (window.location.pathname !== "/") {
      navigate("/", { replace: false });
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleSearch = async (query) => {
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }
    setLoading(true);
    try {
      const geoRes = await axios.get(
        `https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(
          query
        )}&limit=1&apiKey=${GEOAPIFY_KEY}`
      );

      if (!geoRes.data.features.length) {
        setSearchResults([]);
        setLoading(false);
        return;
      }

      const { lat, lon } = geoRes.data.features[0].properties;

      const placesRes = await axios.get(
        `https://api.geoapify.com/v2/places?categories=catering.restaurant&filter=circle:${lon},${lat},5000&limit=5&apiKey=${GEOAPIFY_KEY}`
      );

      const places = placesRes.data.features || [];

      const resultsWithImages = await Promise.all(
        places.map(async (place) => {
          const name = place.properties.name || query;
          let imageUrl = null;
          try {
            const imgRes = await axios.get(
              `https://api.unsplash.com/search/photos?query=${encodeURIComponent(
                name
              )}&client_id=${UNSPLASH_ACCESS_KEY}`
            );
            imageUrl = imgRes.data.results[0]?.urls?.small || null;
          } catch {
            imageUrl = null;
          }
          return { ...place, imageUrl };
        })
      );

      setSearchResults(resultsWithImages);
    } catch (err) {
      console.error("Search error:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleResultClick = (place) => {
    const selectedData = {
      name: place.properties.name || "Unnamed Place",
      location: place.properties.city || "Unknown",
      rating: parseFloat((Math.random() * 2 + 3).toFixed(1)),
      visitors: Math.floor(Math.random() * 1000) + 100,
      image: place.imageUrl || "/background.png",
      category: { title: "Restaurant" },
      coordinates: {
        lat: place.geometry.coordinates[1],
        lon: place.geometry.coordinates[0],
      },
    };
    setSelectedPlace(selectedData);
    setShowCard(true);
    setSearchOpen(false);
    setSearchQuery("");
    setSearchResults([]);
  };

  const isMobile = window.innerWidth <= 768;

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-light ${styles.navbarCustom}`}
        style={{
          top: "16px",
          position: "fixed",
          zIndex: "1000",
          width: "70%",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <div className="container">
          {/* Logo */}
          <Link className={`nav-link ${styles.navLink}`} to="/">
            <div className={`${styles.logo} pe-1`}>
              <img
                src={navImage}
                alt="logo"
                className="rounded-circle me-3"
                style={{ width: "50px", height: "50px" }}
              />
              <span className={styles["navbar-title"]}>3lafe!n</span>
            </div>
          </Link>

          {/* Burger Menu */}
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Nav Links */}
          <div
            className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
            id="navbarNav"
          >
            <ul
              className={`navbar-nav m-md-0 m-sm-0 mx-lg-auto d-flex justify-content-between w-50 ${styles.navbarFont}`}
            >
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/categories">
                  Categories
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/publicGroups">
                  Public Groups
                </Link>
              </li>
              <li className="nav-item">
                <div
                  className="nav-link"
                  style={{ cursor: "pointer" }}
                  onClick={() => navigateToSection("Discover")}
                >
                  About
                </div>
              </li>
              <li className="nav-item">
                <div
                  className="nav-link"
                  style={{ cursor: "pointer" }}
                  onClick={() => navigateToSection("Footer")}
                >
                  Contact
                </div>
              </li>
            </ul>
          </div>

          {/* Search Button */}
          <div style={{ position: "relative" }}>
            <button
              className={styles.mainBtn}
              onClick={() => setSearchOpen(!searchOpen)}
            >
              <img src={shape} alt="search" />
              <span className={styles.searchText}>Search</span>
            </button>
          </div>

          {/* Profile / Sign Up */}
          <Link className="nav-link" to={currentUser ? "/profile" : "/signup"}>
            {currentUser ? (
              <img
                src={currentUser.src}
                alt="avatar"
                className={styles.avatar}
              />
            ) : (
              <button className={styles.mainBtn}>Sign Up</button>
            )}
          </Link>
        </div>
      </nav>

      {/* Search Dropdown */}
      {searchOpen && (
        <div
          className={`${styles.searchDropdown} ${
            isMobile ? styles.mobile : styles.desktop
          }`}
        >
          <input
            type="text"
            className={styles.searchInput}
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              handleSearch(e.target.value);
            }}
            placeholder="Search places..."
          />
          {loading ? (
            <div style={{ color: "#fff" }}>Loading...</div>
          ) : (
            searchResults.map((place) => (
              <div
                key={place.properties.place_id}
                className={styles.searchItem}
                onClick={() => handleResultClick(place)}
              >
                {place.imageUrl && (
                  <img src={place.imageUrl} alt={place.properties.name} />
                )}
                <span style={{ color: "#fff" }}>{place.properties.name}</span>
              </div>
            ))
          )}
        </div>
      )}

      {/* Card Popup */}
      <AnimatePresence>
        {showCard && selectedPlace && (
          <CardDDetailes
            data={selectedPlace}
            onClose={() => setShowCard(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Nav;
