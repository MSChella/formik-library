
// import { getToken } from '../utils/authUtils';
import axios from 'axios';

const BASE_URL = 'https://formik-library-backend.onrender.com';

const axiosInstance = axios.create({
    baseURL: `${BASE_URL}`,
});



// axiosInstance.interceptors.request.use((config) => {
//     const token = getToken();


//     if (token) {
//         console.log(token);
//         config.headers.Authorization = `Bearer ${token}`;
//         console.log(token);
//     }
//     return config;
// });

export default axiosInstance;
