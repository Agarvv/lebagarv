import axiosInstance from "src/config/axiosConfig";

export const createCar = <T>(data: T) => {
    return axiosInstance.post('/cars', data, {
        withCredentials: true 
    });
}