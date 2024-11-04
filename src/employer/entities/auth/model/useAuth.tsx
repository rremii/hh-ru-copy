import {
  useAppDispatch,
  useTypedSelector,
} from "@shared/shared/hooks/storeHooks.ts"
import { useEffect, useState } from "react"
import { setAuthState } from "./AuthSlice"
import { useNavigate } from "react-router-dom"
import { useRefreshEmployerQuery } from "../api/AuthApi"

export const useAuth = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const authState = useTypedSelector((state) => state.EmployerAuth.authState)

  const { data, isError } = useRefreshEmployerQuery()

  useEffect(() => {
    if (authState === "rejected") navigate("/employer/auth/login")
  }, [authState])

  useEffect(() => {
    if (!localStorage.getItem("accessToken") || isError)
      dispatch(setAuthState("rejected"))

    if (data) {
      localStorage.setItem("accessToken", data.accessToken)
      dispatch(setAuthState("success"))
    }
  }, [data, isError])
}
