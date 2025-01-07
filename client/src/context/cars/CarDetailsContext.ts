import { createContext } from "react";
import { CarDetails } from 'src/types/cars/CarDetails';

type CarDetailsContextType = {
  car: CarDetails | null;
  setCar: React.Dispatch<React.SetStateAction<CarDetails | null>>;
};

export const CarDetailsContext = createContext<CarDetailsContextType | undefined>(undefined);