import { UserRole } from "../user/entities/user.entity"

export type TokenPayload = {
  id: number
  email: string
  role: UserRole
}
