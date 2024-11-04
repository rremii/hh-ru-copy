import { useAppDispatch } from "@shared/shared/hooks/storeHooks.ts"
import { useEffect } from "react"
import { useLogoutEmployerMutation } from "../api/AuthApi"
import { setAuthState } from "./AuthSlice"
import { useToast } from "@shared/shared/modules/toast"

export const useLogout = () => {
  const dispatch = useAppDispatch()
  const { openToast } = useToast()

  const [logout, { isLoading, isError, error, isSuccess }] =
    useLogoutEmployerMutation()

  useEffect(() => {
    if (!isSuccess && !isError) return

    openToast({ content: "Вы вышли из системы", type: "info" })

    localStorage.removeItem("accessToken")
    dispatch(setAuthState("rejected"))
  }, [isLoading])

  const handleLogout = async () => {
    await logout()
  }

  return {
    logout: handleLogout,
    isLoading,
    isError,
    error,
    isSuccess,
  }
}
