import { useEffect } from "react"
import { setAuthState, setPending } from "./AuthSlice"
import { LoginDto } from "../types"
import { useAppDispatch } from "@shared/shared/hooks/storeHooks"
import { useLoginEmployeeMutation } from "../api/AuthApi"

export const useLogin = () => {
  const dispatch = useAppDispatch()

  const [login, { isLoading, isError, error, data: result, isSuccess }] =
    useLoginEmployeeMutation()

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
