import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import styles from "./LocationPickerButton.module.css";
import L from "leaflet";
import { useLocation } from "../../Context/UserContext.jsx";

import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// Fix Leaflet icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const GEOAPIFY_KEY = "1aba76b022024730abfcd18e5a1df166";

const popularPlaces = [
  { name: "New York", lat: 40.7128, lon: -74.006 },
  { name: "Cairo", lat: 30.0444, lon: 31.2357 },
  { name: "Paris", lat: 48.8566, lon: 2.3522 },
  { name: "Tokyo", lat: 35.6895, lon: 139.6917 },
  { name: "London", lat: 51.5072, lon: -0.1276 },
];

const LocationPickerButton = ({ onSelect, label = "📍 Location" }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [position, setPosition] = useState(null);
  const mapRef = useRef();

  // Load current location on popup open
  useEffect(() => {
    if (showPopup) {
      navigator.geolocation.getCurrentPosition((pos) => {
        const { latitude, longitude } = pos.coords;
        const loc = { lat: latitude, lon: longitude };
        setPosition(loc);
        if (mapRef.current) {
          mapRef.current.setView([latitude, longitude], 13);
        }
      });
    }
  }, [showPopup]);

  // Fetch Geoapify suggestions
  useEffect(() => {
    if (searchText.length < 3) return;

    const fetchSuggestions = async () => {
      try {
        const res = await axios.get(
          `https://api.geoapify.com/v1/geocode/autocomplete?text=${searchText}&limit=5&apiKey=${GEOAPIFY_KEY}`
        );
        setSuggestions(res.data.features);
      } catch (err) {
        console.error("Geoapify autocomplete error", err);
      }
    };

    fetchSuggestions();
  }, [searchText]);

  // Click event to set marker position
  const MapClick = () => {
    useMapEvents({
      click(e) {
        setPosition({ lat: e.latlng.lat, lon: e.latlng.lng });
      },
    });
    return null;
  };

  const { setLocation } = useLocation(); // context

  // Helper to move map and set position
  const goToLocation = (lat, lon) => {
    mapRef.current?.setView([lat, lon], 13);
    setPosition({ lat, lon });
    setLocation({ lat, lon });
  };

  return (
    <>
      {/* Floating Location Button */}
      <div className={styles.floatingWrapper}>
        <button
          className={styles.locationBtn}
          onClick={() => setShowPopup(true)}
        >
          {label}
        </button>
      </div>

      {/* Location Picker Modal */}
      {showPopup && (
        <div className={styles.popupOverlay}>
          <div className={styles.popup}>
            {/* Header */}
            <div className={styles.header}>
              <h3>📍 Select Location</h3>
              <button
                className={styles.closeButton}
                onClick={() => setShowPopup(false)}
              >
                ❌
              </button>
            </div>

            {/* Search controls */}
            <div className={styles.controls}>
              <input
                type="text"
                placeholder="Search places..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                className={styles.searchBox}
              />
              <button
                className={styles.myLocationBtn}
                onClick={() => {
                  navigator.geolocation.getCurrentPosition((pos) => {
                    const { latitude, longitude } = pos.coords;
                    goToLocation(latitude, longitude);
                    setShowPopup(false);
                  });
                }}
              >
                🎯 Use My Location
              </button>
            </div>

            {/* Autocomplete Suggestions */}
            <ul className={styles.suggestionList}>
              {suggestions.map((s, idx) => {
                const lat = s.properties.lat;
                const lon = s.properties.lon;
                return (
                  <li
                    key={idx}
                    className={styles.suggestionItem}
                    onClick={() => {
                      goToLocation(lat, lon);
                      setShowPopup(false);
                      setSearchText("");
                      setSuggestions([]);
                    }}
                  >
                    {s.properties.formatted}
                  </li>
                );
              })}
            </ul>

            {/* Popular Places */}
            <div className={styles.popularList}>
              {popularPlaces.map((p, idx) => (
                <button
                  key={idx}
                  className={styles.popularBtn}
                  onClick={() => {
                    goToLocation(p.lat, p.lon);
                    setShowPopup(false);
                  }}
                >
                  🌆 {p.name}
                </button>
              ))}
            </div>

            {/* Map */}
            {position && (
              <MapContainer
                center={[position.lat, position.lon]}
                zoom={13}
                whenCreated={(map) => (mapRef.current = map)}
                className={styles.map}
              >
                <TileLayer
                  attribution="&copy; OpenStreetMap contributors"
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <MapClick />
                <Marker position={[position.lat, position.lon]} />
              </MapContainer>
            )}

            {/* Confirm Location Button */}
            <button
              className={styles.confirmBtn}
              onClick={() => {
                setPosition(position);
                setLocation(position);
                setShowPopup(false);
              }}
            >
              ✅ Confirm Location
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default LocationPickerButton;
