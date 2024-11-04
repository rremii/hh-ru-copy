import { yupResolver } from "@hookform/resolvers/yup"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import styled from "styled-components"
import { setAuthState, toggleAuth } from "../model/AuthSlice"
import { useLogin } from "../model/useLogin"
import { signInSchema } from "../constants/SignInValidateSchemas"
import { AuthForm } from "./AuthForm"
import { useNavigate } from "react-router-dom"
import { useAppDispatch } from "@shared/shared/hooks/storeHooks"
import { useToast } from "@shared/shared/modules/toast"
import { useTimer } from "@shared/shared/hooks/useTimer"
import { UserRole } from "@shared/entities/user/types"
import { FormField } from "@shared/shared/ui/FormField"
import { Button } from "@shared/shared/button"

interface FormFields {
  email: string
  password: string
}

export const SignInForm = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const { login, error, isError, isLoading, isSuccess } = useLogin()

  const {
    clearErrors,
    reset,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormFields>({
    resolver: yupResolver(signInSchema),
  })

  const { openToast } = useToast()
  const { reset: resetTimer } = useTimer({
    timeGap: 1,
    finalTime: 4,
    callback: clearErrors,
  })

  useEffect(() => {
    if (isSuccess) {
      dispatch(setAuthState("success"))
      openToast({
        type: "info",
        content: "you were logged in",
      })
      navigate("/employee")
    }
    if (isError) {
      reset()
      resetTimer()

      openToast({
        type: "error",
        content: error?.message || "couldn't sign in",
      })
    }
  }, [isLoading])

  const onSubmit = async (authData: FormFields) => {
    if (isLoading) return
    await login({ ...authData, role: UserRole.EMPLOYEE })
  }

  return (
    <FormContainer>
      <AuthForm onSubmit={handleSubmit(onSubmit)}>
        <FormField
          isError={Boolean(errors.root) || Boolean(errors.email)}
          input={{
            type: "email",
            placeholder: "Почта",
            register: { ...register("email") },
          }}
        />
        <FormField
          aria-autocomplete="none"
          isError={Boolean(errors.root) || Boolean(errors.password)}
          input={{
            type: "password",
            placeholder: "Пароль",
            register: { ...register("password") },
          }}
        />
        <Button rounded type="filled" pending={isLoading}>
          Войти
        </Button>
      </AuthForm>
    </FormContainer>
  )
}

const FormContainer = styled.div``
