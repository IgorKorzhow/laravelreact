import axios from "axios";

const axiosClient = axios.create({
    baseURL: import.meta.env.VITE_API_URL + '/api'
});

axiosClient.interceptors.request.use((config) => {
    const token = localStorage.getItem("Access_token");
    config.headers.Authorization = `Bearer ${token}`;

    return config;
})

axiosClient.interceptors.response.use((response) => {
    return response;
}, (error) => {
    const {response} = error;
    if (response.status === 401) {
        localStorage.removeItem("Access_token");
    } else {
        console.log(error);
    }
})

export default axiosClient;

