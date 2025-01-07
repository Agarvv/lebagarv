import { CarDetailsContext } from "./CarDetailsContext";
import { useState } from "react";

export const CarDetailsProvider = ({ children }) => {
  const [car, setCar] = useState(null)

  return (
    <CarDetailsContext.Provider value={{ car, setCar }}>
      {children}
    </CarDetailsContext.Provider>
  );
};