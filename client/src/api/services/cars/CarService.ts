import axiosInstance from "src/config/axiosConfig";
import { CarShowcase } from "src/types/cars/CarShowcase";
import { CarDetails } from 'src/types/cars/CarDetails'

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

export const getCarById = async (carId: number): Promise<CarDetails> => {
    const res = await axiosInstance.get(`/cars/car/${carId}`, {
        withCredentials: true,
    });
    return res.data; 
}
