import axios from "axios"
import { createWithTokenInterceptor } from "../intercetpors/createWithTokenInterceptor"
import { createRefreshInterceptor } from "../intercetpors/createRefreshInterceptor"
import { UserRole } from "@shared/entities/user/types"

export const API_URL = (import.meta.env.VITE_API_URL ||
  "http://localhost:5000/") as string

export const api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
})
export const apiEmployee = axios.create({
  withCredentials: true,
  baseURL: API_URL,
})
export const apiEmployer = axios.create({
  withCredentials: true,
  baseURL: API_URL,
})

apiEmployee.interceptors.request.use(createWithTokenInterceptor())
apiEmployee.interceptors.response.use((config) => {
  return config
}, createRefreshInterceptor(apiEmployee, UserRole.EMPLOYEE))

apiEmployer.interceptors.request.use(createWithTokenInterceptor())
apiEmployer.interceptors.response.use((config) => {
  return config
}, createRefreshInterceptor(apiEmployer, UserRole.EMPLOYER))
