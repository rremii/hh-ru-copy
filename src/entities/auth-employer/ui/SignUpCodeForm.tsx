import { yupResolver } from "@hookform/resolvers/yup"
import { useAppDispatch, useTypedSelector } from "@shared/hooks/storeHooks.ts"
import { FormField } from "@shared/ui/FormField.tsx"
import { useEffect } from "react"
import { useForm } from "react-hook-form"
import styled from "styled-components"
import { AuthForm } from "./AuthForm"
import { Button } from "@shared/button"
import { useVerifyCode } from "../model/useVerifyEmail"
import { signUpCodeSchema } from "./../constants/signUpValidateSchemas"
import { useToast } from "@shared/modules/toast"
import { useTimer } from "@shared/hooks/useTimer"
import { useNavigate } from "react-router-dom"

interface FormFields {
  code: string
}

export const SignUpCodeForm = () => {
  const navigate = useNavigate()

  const { isError, verifyCode, error, isLoading, isSuccess } = useVerifyCode()
  const {
    clearErrors,
    reset,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormFields>({
    resolver: yupResolver(signUpCodeSchema),
  })

  const { openToast } = useToast()
  const { reset: resetTimer } = useTimer({
    timeGap: 1,
    finalTime: 4,
    callback: clearErrors,
  })

  useEffect(() => {
    if (!isError) return

    reset()

    resetTimer()
    openToast({
      content: error?.message || "Wrong code!",
      type: "error",
    })
  }, [isError])

  useEffect(() => {
    if (!isSuccess) return
    navigate("/employer/auth/register/info")
  }, [isLoading])

  const onSubmit = ({ code }: FormFields) => {
    if (isLoading) return

    verifyCode(code)
  }

  return (
    <FormContainer>
      <AuthForm onSubmit={handleSubmit(onSubmit)}>
        <FormField
          label="Color code"
          isError={Boolean(errors.root) || Boolean(errors.code)}
          input={{
            type: "text",
            placeholder: "Enter the code",
            register: { ...register("code") },
          }}
        />
        <Button rounded type="filled" pending={isLoading}>
          OK
        </Button>
      </AuthForm>
    </FormContainer>
  )
}

const FormContainer = styled.div``
