import { yupResolver } from "@hookform/resolvers/yup"
import { FormField } from "@shared/shared/ui/FormField.tsx"
import { useEffect } from "react"
import { useForm } from "react-hook-form"
import styled from "styled-components"
import { AuthForm } from "./AuthForm"
import { Button } from "@shared/shared/button"
import { useVerifyCode } from "../../../../shared/entities/code/model/useVerifyEmail"
import { useToast } from "@shared/shared/modules/toast"
import { useTimer } from "@shared/shared/hooks/useTimer"
import { useNavigate } from "react-router-dom"
import { signUpCodeSchema } from "../constants/signUpValidateSchemas"

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
    navigate("/employee/auth/register/info")
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
