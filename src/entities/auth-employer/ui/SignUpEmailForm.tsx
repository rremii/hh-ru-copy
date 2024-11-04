import { yupResolver } from "@hookform/resolvers/yup"
import { useAppDispatch } from "@shared/hooks/storeHooks.ts"
import { FormField } from "@shared/ui/FormField.tsx"
import { useEffect } from "react"
import { useForm } from "react-hook-form"
import styled from "styled-components"
import { signUpEmailSchema } from "../constants/signUpValidateSchemas"
import { useConfirmEmail } from "../model/useConfirmEmail"
import { useToast } from "@shared/modules/toast"
import { useTimer } from "@shared/hooks/useTimer"
import { AuthForm } from "./AuthForm"
import { Button } from "@shared/button"
import { useNavigate } from "react-router-dom"
import { setAuthState, setEmail } from "../model/AuthSlice"

interface FormFields {
  email: string
}

export const SignUpEmailForm = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const { isError, isLoading, isSuccess, confirmEmail, error } =
    useConfirmEmail()

  const {
    clearErrors,
    reset,
    setError,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormFields>({
    resolver: yupResolver(signUpEmailSchema),
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
      content: error?.message || "couldn't send code",
      type: "error",
    })
  }, [isError])

  useEffect(() => {
    if (!isSuccess) return

    dispatch(setAuthState("success"))
    openToast({
      content: "code was succesfuly sent",
      type: "info",
    })
    navigate("/employer/auth/register/code")
  }, [isLoading])

  const onSubmit = async ({ email }: FormFields) => {
    if (isLoading) return
    await confirmEmail(email)
    dispatch(setEmail(email))
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

        <Button rounded type="filled" pending={isLoading}>
          создать аккаунт
        </Button>
      </AuthForm>
    </FormContainer>
  )
}
const FormContainer = styled.div``
