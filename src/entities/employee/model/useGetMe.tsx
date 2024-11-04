import { UserRole } from "@entities/user/types"
import { Employee } from "../types"

const me: Employee = {
  id: 1,
  name: "John Doe",
  email: "john.doe@gmail.com",
  role: UserRole.EMPLOYEE,
}

export const useGetMe = () => {
  return { me }
}
