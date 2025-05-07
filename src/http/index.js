import axios from "axios";

export const $axios = axios.create({
    baseURL: 'https://dummyjson.com'
})

$axios.interceptors.request.use((config) => {
    const token = localStorage.getItem('authToken');

    if(token) {
        config.headers['Authorization'] = `Bearer ${token}`
    }

    return config;
}, (error) => {
    return Promise.reject(error);
})