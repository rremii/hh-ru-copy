export enum UserRole {
  EMPLOYEE = "employee",
  EMPLOYER = "employer",
}

export interface User {
  id: number
  name: string
  email: string
  role: UserRole
}
