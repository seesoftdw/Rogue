

import axios from 'axios';

const development = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';

const baseURL =
    "https://xzqr97bby6.execute-api.us-west-2.amazonaws.com/Stage/";


const axiosInstance = axios.create({
    baseURL
});

export default axiosInstance;
