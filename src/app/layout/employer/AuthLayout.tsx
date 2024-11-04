import { useAuth } from "@entities/auth-employer/model/useAuth"
import { PropsWithChildren } from "react"

export const EmployerAuthLayout = ({ children }: PropsWithChildren) => {
  useAuth()

  return <>{children}</>
}
