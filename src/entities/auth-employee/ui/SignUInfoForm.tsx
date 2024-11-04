import { yupResolver } from "@hookform/resolvers/yup"
import { useAppDispatch, useTypedSelector } from "@shared/hooks/storeHooks.ts"
import { FormField } from "@shared/ui/FormField.tsx"
import { useEffect } from "react"
import { useForm } from "react-hook-form"
import styled from "styled-components"
import {
  signUpEmailSchema,
  signUpInfoSchema,
} from "../constants/signUpValidateSchemas"
import { useConfirmEmail } from "../model/useConfirmEmail"
import { useToast } from "@shared/modules/toast"
import { useTimer } from "@shared/hooks/useTimer"
import { AuthForm } from "./AuthForm"
import { Button } from "@shared/button"
import { useRegister } from "../model/useRegister"
import { UserRole } from "@entities/user/types"
import { useNavigate } from "react-router-dom"

interface FormFields {
  name: string
  password: string
}

export const SignUpInfoForm = () => {
  const navigate = useNavigate()
  const email = useTypedSelector((state) => state.Auth.email)

  const {
    isError,
    isLoading,
    isSuccess,
    register: registerEmployee,
    error,
  } = useRegister()

  const {
    clearErrors,
    reset,
    setError,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormFields>({
    resolver: yupResolver(signUpInfoSchema),
  })

  const { openToast } = useToast()
  const { reset: resetTimer, time } = useTimer({
    timeGap: 1,
    finalTime: 4,
    callback: clearErrors,
  })

  useEffect(() => {
    if (!isError) return

    reset()
    setError("root", { message: error?.message })
    resetTimer()
    openToast({
      content: error?.message || "Не получилось создать аккаунт",
      type: "error",
    })
  }, [isError])

  useEffect(() => {
    if (!isSuccess) return
    navigate("/employee")
    openToast({
      content: "Аккаунт был создан",
      type: "info",
    })
  }, [isLoading])

  const onSubmit = async ({ name, password }: FormFields) => {
    if (isLoading) return
    await registerEmployee({ name, password, role: UserRole.EMPLOYEE, email })
  }

  return (
    <FormContainer>
      <AuthForm onSubmit={handleSubmit(onSubmit)}>
        <FormField
          isError={Boolean(errors.root) || Boolean(errors.name)}
          input={{
            type: "text",
            placeholder: "Имя",
            register: { ...register("name") },
          }}
        />
        <FormField
          isError={Boolean(errors.root) || Boolean(errors.password)}
          input={{
            type: "password",
            placeholder: "123",
            register: { ...register("password") },
          }}
        />

        <Button rounded type="filled" pending={isLoading}>
          Создать аккаунт
        </Button>
      </AuthForm>
    </FormContainer>
  )
}
const FormContainer = styled.div``
