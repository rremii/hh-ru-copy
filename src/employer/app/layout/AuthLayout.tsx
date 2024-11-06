import { useAuth } from "@employer/entities/auth/model/useAuth"
import { PropsWithChildren } from "react"

export const EmployerAuthLayout = ({ children }: PropsWithChildren) => {
  useAuth()

  return <>{children}</>
}
