import React, { ReactNode, useState } from "react";
import { CarDetailsContext } from 'src/context/cars/CarDetailsContext';
import { CarDetails } from 'src/types/cars/CarDetails';

interface CarDetailsProviderProps {
  children: ReactNode;
}

export const CarDetailsProvider: React.FC<CarDetailsProviderProps> = ({ children }) => {
  const [car, setCar] = useState<CarDetails | null>(null); 

  return (
    <CarDetailsContext.Provider value={{ car, setCar }}>
      {children}
    </CarDetailsContext.Provider>
  );
};