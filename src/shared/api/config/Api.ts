import { BaseQueryFn, createApi } from "@reduxjs/toolkit/query/react"
import { ApiError } from "@shared/api/config/types"
import { AxiosError, AxiosRequestConfig } from "axios"
import { $api, API_URL } from "./index"
import { error } from "console"

const axiosBaseQuery =
  (): BaseQueryFn<
    {
      url: string
      method: AxiosRequestConfig["method"]
      data?: unknown
      params?: unknown
      baseUrl?: string
      withCredentials?: boolean
    },
    unknown,
    ApiError
  > =>
  async ({ url, method, data, params, withCredentials, baseUrl = API_URL }) => {
    try {
      const requestConfig: AxiosRequestConfig = {
        url: baseUrl + url,
        method,
        data,
        params,
        withCredentials,
      }

      const result = await $api.request(requestConfig)

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
  reducerPath: "ApiRtk",
  baseQuery: axiosBaseQuery(),
  endpoints: () => ({}),
  tagTypes: ["User"],
})
