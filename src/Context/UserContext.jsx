import { createContext, useState, useContext } from "react";

// Create the context
const LocationContext = createContext();

// Provider component
export const LocationProvider = ({ children }) => {
  const [location, setLocation] = useState(null);

  return (
    <LocationContext.Provider value={{ location, setLocation }}>
      {children}
    </LocationContext.Provider>
  );
};

// Hook for easy access
export const useLocation = () => useContext(LocationContext);
