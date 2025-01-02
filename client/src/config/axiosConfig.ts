import axios, { AxiosInstance } from 'axios';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}/api/lebagarv`,
  timeout: 10000
});
// .env 
export default axiosInstance;