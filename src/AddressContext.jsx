// src/context/AddressContext.jsx
import { createContext, useState, useContext } from "react";

const AddressContext = createContext();

export const AddressProvider = ({ children }) => {
  const [address, setAddress] = useState("");

  return (
    <AddressContext.Provider value={{ address, setAddress }}>
      {children}
    </AddressContext.Provider>
  );
};

export const useAddress = () => useContext(AddressContext);
