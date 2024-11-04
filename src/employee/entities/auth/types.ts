import { UserRole } from "@shared/entities/user/types"

export type RegisterDto = {
  name: string
  email: string
  password: string
  role: UserRole
}

export type LoginDto = {
  email: string
  password: string
  role: UserRole
}
