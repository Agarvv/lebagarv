import axiosInstance from 'src/config/axiosConfig';

export const loginUser = <T>(data: T) => {
    return axiosInstance.post('/auth/login', data, {
        withCredentials: true 
    });
}

export const registerUser = <T>(data: T) => {
    return axiosInstance.post('/auth/register', data, {
        withCredentials: true 
    });
}