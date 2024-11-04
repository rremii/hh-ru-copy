import { useAppDispatch } from "@shared/hooks/storeHooks"
import { useEffect } from "react"
import { useRegisterMutation } from "../api/AuthApi"
import {
  setAuthRejected,
  setAuthState,
  setAuthSuccess,
  toggleAuth,
} from "./AuthSlice"
import { RegisterDto } from "../types"

export const useRegister = () => {
  const dispatch = useAppDispatch()

  const [register, { isLoading, isError, error, data: result, isSuccess }] =
    useRegisterMutation()

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

  const handleRegister = async (authData: RegisterDto) => {
    await register(authData)
  }

  return {
    register: handleRegister,
    isLoading,
    isError,
    error,
    isSuccess,
  }
}
