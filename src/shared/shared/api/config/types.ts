import { AxiosResponse, InternalAxiosRequestConfig } from "axios"
import { publicDecrypt } from "crypto"

export class ApiError extends Error {
  constructor(
    public readonly message: string,
    public readonly name: string,
    public readonly status: number,
    public readonly response?: AxiosResponse
  ) {
    super(message)
  }
}

export interface DefaultResponse {
  message: string
}
