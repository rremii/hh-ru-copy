import { useAuth } from "@employee/entities/auth/model/useAuth"
import { PropsWithChildren } from "react"

export const EmployeeAuthLayout = ({ children }: PropsWithChildren) => {
  useAuth()

  return <>{children}</>
}
