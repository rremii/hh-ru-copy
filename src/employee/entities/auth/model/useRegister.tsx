import { useEffect } from "react"
import { setAuthState } from "./AuthSlice"
import { RegisterDto } from "../types"
import { useAppDispatch } from "@shared/shared/hooks/storeHooks"
import { useRegisterEmployeeMutation } from "../api/AuthApi"

export const useRegister = () => {
  const dispatch = useAppDispatch()

  const [register, { isLoading, isError, error, data: result, isSuccess }] =
    useRegisterEmployeeMutation()

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
