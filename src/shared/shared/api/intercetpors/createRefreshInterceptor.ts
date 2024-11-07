import axios, { AxiosError, AxiosInstance } from "axios"
import { API_URL } from "../config"
import { UserRole } from "@shared/entities/user/types"
import { ApiError } from "../config/types"

export const createRefreshInterceptor =
  (api: AxiosInstance, role: UserRole) =>
  async (error: AxiosError<ApiError>) => {
    const originalRequest = error.config
    if (
      error.response?.status === 401 &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true
      try {
        let refreshUrl = ""
        if (role === UserRole.EMPLOYEE) {
          refreshUrl = API_URL + "auth/refresh/employee"
        }
        if (role === UserRole.EMPLOYER) {
          refreshUrl = API_URL + "auth/refresh/employer"
        }

        const response = await axios.get<{ accessToken: string }>(refreshUrl, {
          withCredentials: true,
        })

        localStorage.setItem("accessToken", response.data.accessToken)
        return await api.request(originalRequest || {})
      } catch (e) {
        localStorage.removeItem("accessToken")
      }
    }
    throw error
  }
