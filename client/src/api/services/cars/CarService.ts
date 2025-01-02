import axiosInstance from "src/config/axiosConfig";

export const createCar = <T>(data: T) => {
    return axiosInstance.post('/cars/create', data, {
        withCredentials: true 
    });
}

export const getCars = () => {
    return axiosInstance.get('/cars', {
        withCredentials: true 
    });
}