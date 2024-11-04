import { User } from "@entities/user/types"

export interface Employer extends User {
  about: string
}
