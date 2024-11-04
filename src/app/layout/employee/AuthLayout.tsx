import { useAuth } from "@entities/auth-employee/model/useAuth"
import { PropsWithChildren } from "react"

export const EmployeeAuthLayout = ({ children }: PropsWithChildren) => {
  useAuth()

  return <>{children}</>
}
