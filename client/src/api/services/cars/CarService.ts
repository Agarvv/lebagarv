import axiosInstance from "src/config/axiosConfig";
import { CarShowcase } from "src/types/car/CarShowcase";

export const createCar = async <T>(data: T): Promise<void> => {
    await axiosInstance.post('/cars/create', data, {
        withCredentials: true,
    });
};

export const getCars = async (): Promise<CarShowcase[]> => {
    const response = await axiosInstance.get('/cars', {
        withCredentials: true,
    });
    return response.data; 
};