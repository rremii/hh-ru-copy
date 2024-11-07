import { BaseQueryFn, createApi } from "@reduxjs/toolkit/query/react"
import { AxiosError, AxiosInstance, AxiosRequestConfig } from "axios"
import { api, API_URL, apiEmployee, apiEmployer } from "./index"
import { ApiError } from "./types"

const createAxiosBaseQuery =
  (
    api: AxiosInstance,
    urlPrefix?: string
  ): BaseQueryFn<
    {
      url: string
      method: AxiosRequestConfig["method"]
      data?: unknown
      params?: unknown
      baseUrl?: string
      withCredentials?: boolean
      prefix?: string
    },
    unknown,
    ApiError
  > =>
  async ({
    url,
    method,
    data,
    params,
    withCredentials,
    baseUrl = API_URL,
    prefix = urlPrefix,
  }) => {
    try {
      const requestConfig: AxiosRequestConfig = {
        url: baseUrl + prefix + url,
        method,
        data,
        params,
        withCredentials,
      }

      const result = await api.request(requestConfig)

      return { data: result.data }
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        if (error.response && +error.response.status >= 500)
          throw new ApiError(
            "Server error try again later",
            "InternalError",
            {},
            {
              error: "InternalError",
              message: "Server error try again later",
              statusCode: 500,
            },
            500
          )

        throw error.response?.data
      }

      throw error
    }
  }

export const Api = createApi({
  reducerPath: "Api",
  baseQuery: createAxiosBaseQuery(api),
  endpoints: () => ({}),
  tagTypes: [],
})
export const ApiEmployee = createApi({
  reducerPath: "ApiEmployee",
  baseQuery: createAxiosBaseQuery(apiEmployee, "employee/"),
  endpoints: () => ({}),
  tagTypes: ["User", "Resume", "JobApplication", "ResumeApplication"],
})

export const ApiEmployer = createApi({
  reducerPath: "ApiEmployer",
  baseQuery: createAxiosBaseQuery(apiEmployer, "employer/"),
  endpoints: () => ({}),
  tagTypes: ["User", "JobApplication", "JobPost", "ResumeApplication"],
})
