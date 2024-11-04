import { useEffect, useState } from "react"
import { useRefreshEmployeeQuery, useRefreshQuery } from "../api/AuthApi"
import { setAuthState } from "./AuthSlice"
import { useNavigate } from "react-router-dom"
import {
  useAppDispatch,
  useTypedSelector,
} from "@shared/shared/hooks/storeHooks"

export const useAuth = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const { data, isError } = useRefreshEmployeeQuery()

  const authState = useTypedSelector((state) => state.EmployeeAuth.authState)

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
