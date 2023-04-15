import axios from "axios";

const $api = axios.create({
    baseURL: process.env.VUE_APP_API_URL
})

$api.interceptors.request.use(config => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config
})

export default $api