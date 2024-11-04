import { UserRole } from "@entities/user/types"

export type AuthResponse = {
  accessToken: string
}

export interface DefaultResponse {
  message: string
}

export interface ErrorResponse extends DefaultResponse {
  name: string
  response: {
    message: string
    error: string
    statusCode: number
  }
}

export type RegisterDto = {
  name: string
  email: string
  password: string
  role: UserRole
}

export type LoginDto = {
  email: string
  password: string
}
