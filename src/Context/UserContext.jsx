import { createContext, useContext, useState, useEffect } from "react";
import {
  getCurrentUser,
  setCurrentUser,
  clearCurrentUser,
} from "../Componets/Forms/Storage";

// 1. Create the context
export const UserContext = createContext();

// 2. Create the provider component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Load user on app startup
  useEffect(() => {
    const storedUser = getCurrentUser();
    if (storedUser) setUser(storedUser);
  }, []);

  const login = (userData) => {
    setCurrentUser(userData);
    setUser(userData);
  };

  const logout = () => {
    clearCurrentUser();
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

// Export hook
export const useUser = () => useContext(UserContext);
