import { useAppDispatch } from "@shared/hooks/storeHooks.ts"
import { useEffect } from "react"
import { useLogoutMutation } from "../api/AuthApi"
import { setAuthState } from "./AuthSlice"

export const useLogout = () => {
  const dispatch = useAppDispatch()

  const [logout, { isLoading, isError, error, isSuccess }] = useLogoutMutation()

  useEffect(() => {
    if (!isSuccess && !isError) return

    localStorage.removeItem("accessToken")
    dispatch(setAuthState(null))
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
