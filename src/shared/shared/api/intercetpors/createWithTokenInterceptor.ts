import { AxiosInstance, InternalAxiosRequestConfig } from "axios"

export const createWithTokenInterceptor =
  () => (config: InternalAxiosRequestConfig) => {
    if (config.headers !== null) {
      config.headers.Authorization = `Bearer ${localStorage.getItem(
        "accessToken"
      )}`
    }
    return config
  }
