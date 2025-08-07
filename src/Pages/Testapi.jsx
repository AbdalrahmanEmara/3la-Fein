import { useState } from "react";
import LocationPickerButton from "../Componets/Location/LocationPickerButton";

const Testapi = () => {
  const [location, setLocation] = useState(null);

  return (
    <div style={{ padding: "40px" }}>
      <h2>🌍 Pick a Location</h2>

      <LocationPickerButton onSelect={(loc) => setLocation(loc)} />

      {location && (
        <p style={{ marginTop: "20px", fontSize: "18px" }}>
          Location Selected: {location.lat.toFixed(4)},{" "}
          {location.lon.toFixed(4)}
        </p>
      )}
    </div>
  );
};

export default Testapi;
