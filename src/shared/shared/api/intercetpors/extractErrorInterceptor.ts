import { AxiosError } from "axios"
import { ApiError } from "../config/types"

export const extractErrorInterceptor = (
  error: AxiosError<ApiError>
): Promise<ApiError> => {
  const errorData = error.response?.data.response

  if (errorData) {
    const message = errorData
      ? errorData?.message[0] || errorData?.message
      : null
    const apiError: ApiError = {
      response: error.response,
      message: message || "Something went wrong",
      name: error.response?.data.name,
      status: error.response?.status || 500,
    }

    throw apiError
  } else {
    const apiError: ApiError = {
      message: "Something went wrong",
      name: error.name,
      status: error.status || 500,
    }
    throw apiError
  }
}
