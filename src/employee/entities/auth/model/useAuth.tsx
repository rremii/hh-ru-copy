import { useEffect } from "react"
import { useRefreshEmployeeQuery } from "../api/AuthApi"
import { setAuthState } from "./AuthSlice"
import { useNavigate } from "react-router-dom"
import {
  useAppDispatch,
  useTypedSelector,
} from "@shared/shared/hooks/storeHooks"

export const useAuth = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const authState = useTypedSelector((state) => state.EmployeeAuth.authState)

  const { data, isError } = useRefreshEmployeeQuery(undefined, {
    skip: authState === "success",
  })

  useEffect(() => {
    if (authState === "rejected") navigate("/employee/auth/login")
  }, [authState])

  useEffect(() => {
    if (authState === "success") return

    if (!localStorage.getItem("accessToken") || isError)
      dispatch(setAuthState("rejected"))

    if (data) {
      localStorage.setItem("accessToken", data.accessToken)
      dispatch(setAuthState("success"))
    }
  }, [data, isError])
}
