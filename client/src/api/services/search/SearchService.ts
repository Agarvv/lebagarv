import axiosInstance from "src/config/axiosConfig";
import { CarShowcase } from "src/types/cars/CarShowcase";

export const search = async (query: string): Promise<CarShowcase[]> => {
    const response = await axiosInstance.get(`/cars/search/${query}`, {
        withCredentials: true,
    });
    return response.data; 
};
