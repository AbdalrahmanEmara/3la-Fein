import { useState, useEffect } from "react";
import { useLocation as useUserLocation } from "../../Context/UserContext";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import Restaurant from "../../Componets/Restaurant/Restaurant";
import CardDDetailes from "../../Componets/CardDetails/CardDDetailes";

const GEOAPIFY_KEY = "xxxx";
const UNSPLASH_KEY = "xxxx";

export default function SearchPage() {
  const { location } = useUserLocation();
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query") || "";

  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showCard, setShowCard] = useState(false);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    if (!query.trim()) return;
    if (!location) return;

    const fetchData = async () => {
      setLoading(true);
      try {
        const geoRes = await axios.get(
          `https://api.geoapify.com/v2/places?text=${encodeURIComponent(
            query
          )}&filter=circle:${location.lon},${
            location.lat
          },500000&limit=24&apiKey=${GEOAPIFY_KEY}`
        );

        const mapped = await Promise.all(
          geoRes.data.features.map(async (place) => {
            const name = place.properties.name || "Unnamed Place";
            const city = place.properties.city || "";
            const restLat = place.geometry.coordinates[1];
            const restLon = place.geometry.coordinates[0];

            let image = "/background.png";
            try {
              const imgRes = await axios.get(
                `https://api.unsplash.com/search/photos?query=${encodeURIComponent(
                  name
                )}&per_page=1&client_id=${UNSPLASH_KEY}`
              );
              if (imgRes.data.results.length > 0) {
                image = imgRes.data.results[0].urls.small;
              }
            } catch {}

            return {
              name,
              location: city,
              image,
              rating: parseFloat((Math.random() * 2 + 3).toFixed(1)),
              visitors: Math.floor(Math.random() * 1000) + 100,
              coordinates: { lat: restLat, lon: restLon },
            };
          })
        );

        setResults(mapped);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [query, location]);

  return (
    <div className="container py-4">
      <h2>Search results for: {query}</h2>
      {loading && <p>Loading...</p>}
      <div className="d-flex flex-wrap gap-3">
        {results.map((item, idx) => (
          <div
            key={idx}
            onClick={() => {
              setSelected(item);
              setShowCard(true);
            }}
          >
            <Restaurant {...item} />
          </div>
        ))}
      </div>
      {showCard && (
        <CardDDetailes data={selected} onClose={() => setShowCard(false)} />
      )}
    </div>
  );
}
