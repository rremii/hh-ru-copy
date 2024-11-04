import { User } from "@shared/entities/user/types"

export interface Employer extends User {
  about: string
}
