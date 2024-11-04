import { useEffect } from "react"
import { useLogoutEmployeeMutation, useLogoutMutation } from "../api/AuthApi"
import { setAuthState } from "./AuthSlice"
import { useAppDispatch } from "@shared/shared/hooks/storeHooks"

export const useLogout = () => {
  const dispatch = useAppDispatch()

  const [logout, { isLoading, isError, error, isSuccess }] =
    useLogoutEmployeeMutation()

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
