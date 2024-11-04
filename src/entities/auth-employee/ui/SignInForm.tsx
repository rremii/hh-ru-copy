import { yupResolver } from "@hookform/resolvers/yup"
import { useAppDispatch } from "@shared/hooks/storeHooks"
import { FormField } from "@shared/ui/FormField.tsx"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import styled from "styled-components"
import { setAuthState, toggleAuth } from "../model/AuthSlice"
import { useLogin } from "../model/useLogin"
import { signInSchema } from "../constants/SignInValidateSchemas"
import { useToast } from "@shared/modules/toast"
import { useTimer } from "@shared/hooks/useTimer"
import { AuthForm } from "./AuthForm"
import { Button } from "@shared/button"
import { useNavigate } from "react-router-dom"

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
      openToast({
        type: "info",
        content: "you were logged in",
      })
      dispatch(setAuthState("success"))
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
    await login(authData)
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
