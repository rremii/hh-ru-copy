import { UserRole } from "../user.interface"

export class UserInfoDto {
  id: number
  email: string
  name: string
  role: UserRole
}
