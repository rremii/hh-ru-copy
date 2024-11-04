export enum UserRole {
  EMPLOYEE = "employee",
  EMPLOYER = "employer",
}

export interface IUser {
  id: number
  name: string
  email: string
  password: string
  role: UserRole
  refreshToken?: string
}
