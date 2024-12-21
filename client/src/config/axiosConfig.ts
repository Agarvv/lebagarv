import axios, { AxiosInstance } from 'axios';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}/api/chatssy`,
  timeout: 10000
});
// .env 
export default axiosInstance;