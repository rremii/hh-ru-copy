import { Employee } from "@shared/entities/employee/types"
import { UserRole } from "@shared/entities/user/types"

const me: Employee = {
  id: 1,
  name: "John Doe",
  email: "john.doe@gmail.com",
  role: UserRole.EMPLOYEE,
}

export const useGetMe = () => {
  return { me }
}
