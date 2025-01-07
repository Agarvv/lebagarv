import React, { useState } from "react";
import { CarDetailsContext } from 'src/context/cars/CarDetailsContext';

interface CarDetailsProviderProps {
  children: React.ReactNode;  
}

export const CarDetailsProvider: React.FC<CarDetailsProviderProps> = ({ children }) => {
  const [car, setCar] = useState(null);

  return (
    <CarDetailsContext.Provider value={{ car, setCar }}>
      {children}
    </CarDetailsContext.Provider>
  );
};