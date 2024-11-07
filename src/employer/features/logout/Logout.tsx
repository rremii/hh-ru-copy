import { useLogout } from "@employer/entities/auth/model/useLogout"
import { Button } from "@shared/shared/button"
import { PropsWithChildren } from "react"

export const Logout = ({ children }: PropsWithChildren) => {
  const { logout, isLoading, isSuccess } = useLogout()

  const handleLogout = () => {
    logout()
  }

  return (
    <Button
      style={{ fontSize: 14 }}
      padding="2px 10px "
      color="#000"
      type="danger"
      pending={isLoading}
      onClick={handleLogout}
    >
      {children}
    </Button>
  )
}
