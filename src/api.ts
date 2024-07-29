

import axios from 'axios';

const baseURL = process.env.REACT_APP_USER_API_URL;


const uploadAPIURL = process.env.REACT_APP_UPLOAD_API_URL;

export const axiosInstance = axios.create({
    baseURL
});

export const axiosArtistApiInstance = axios.create({
  baseURL: uploadAPIURL
});

