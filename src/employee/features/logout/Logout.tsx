import { useLogout } from "@employee/entities/auth/model/useLogout"
import { Button } from "@shared/shared/button"
import { useToast } from "@shared/shared/modules/toast"
import { useEffect } from "react"

export const Logout = () => {
  const { logout, isLoading } = useLogout()

  const handleLogout = () => {
    logout()
  }

  return (
    <Button
      style={{ fontSize: 14 }}
      padding="2px 10px "
      color="rgb(135, 192, 201)"
      type="simple"
      pending={isLoading}
      onClick={handleLogout}
    >
      выйти
    </Button>
  )
}
