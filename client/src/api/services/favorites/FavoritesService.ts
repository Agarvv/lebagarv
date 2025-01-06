import axiosInstance from "src/config/axiosConfig";
import { Favorites } from 'src/types/favorites/Favorites'

export const addOrRemoveFavorite = async (carId: number) => {
    await axiosInstance.post('/favorites', { carId: carId }, {
        withCredentials: true,
    });
};

export const getFavorites = async (): Promise<Favorites> => {
    const response = await axiosInstance.get('/favorites', {
        withCredentials: true,
    });
    return response.data; 
};

