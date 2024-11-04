import { useAppDispatch, useTypedSelector } from "@shared/hooks/storeHooks.ts"
import { useEffect, useState } from "react"
import { useRefreshQuery } from "../api/AuthApi"
import { setAuthState } from "./AuthSlice"
import { useNavigate } from "react-router-dom"

export const useAuth = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const { data, isError } = useRefreshQuery()

  const authState = useTypedSelector((state) => state.Auth.authState)

  useEffect(() => {
    if (authState === "rejected") navigate("/employee/auth/login")
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
