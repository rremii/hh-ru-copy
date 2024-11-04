import { useAppDispatch } from "@shared/hooks/storeHooks"
import { useEffect } from "react"
import { useLoginEmployerMutation, useLoginMutation } from "../api/AuthApi"
import { setAuthState } from "./AuthSlice"
import { LoginDto } from "../types"

export const useLogin = () => {
  const dispatch = useAppDispatch()

  const [login, { isLoading, isError, error, data: result, isSuccess }] =
    useLoginEmployerMutation()

  useEffect(() => {
    if (isSuccess) {
      localStorage.setItem("accessToken", result.accessToken)

      dispatch(setAuthState("success"))
    }
    if (isError) {
      localStorage.removeItem("accessToken")
      dispatch(setAuthState("rejected"))
    }
  }, [isLoading])

  const handleLogin = async (authData: LoginDto) => {
    await login(authData)
  }

  return {
    login: handleLogin,
    isSuccess,
    isLoading,
    isError,
    error,
  }
}
