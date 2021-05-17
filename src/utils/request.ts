import axios, { AxiosResponse } from "axios";
const { VITE_APP_BASE_URL } = import.meta.env;

interface IresponseDTO<T = any> {
    data: T;
    code: number;
    message: string;
}

const http = axios.create({
    baseURL: VITE_APP_BASE_URL?.toString(),
    withCredentials: false,
    timeout: 5000,
})

// 请求拦截
http.interceptors.request.use(config => {
    return config
}, error => {
    return Promise.reject(error)
})

http.interceptors.response.use((response: AxiosResponse<IresponseDTO>) => {
    return response
}, error => {
    switch (error.response.data._code) {
        case 401:
            alert(error.response.data._message)
            break
        default:
            alert(error.response.data._message)
            break
    }
    return Promise.reject(error)
})

export {
    http,
    IresponseDTO
}