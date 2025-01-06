import axiosInstance from "src/config/axiosConfig";
import { CarShowcase } from "src/types/cars/CarShowcase";

export const addOrRemoveFavorite = async (carId: number) => {
    await axiosInstance.post('/favorites', { carId: carId }, {
        withCredentials: true,
    });
};

export const getFavorites = async (): Promise<CarShowcase[]> => {
    const response = await axiosInstance.get('/favorites', {
        withCredentials: true,
    });
    return response.data; 
};

