import axiosInstance from 'src/config/axiosConfig';

export const loginUser<T,>(data: t) => {
    return axiosInstance.post('/auth/login', data, {
        withCredentials: true 
    })
}