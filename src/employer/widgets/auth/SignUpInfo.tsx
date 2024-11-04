import { FC } from "react"
import { AuthContainer, Header, SubHeader } from "./ui/ContentLayout"
import { SignUpInfoForm } from "@employer/entities/auth/ui/SignUInfoForm"

export const SignUpInfo: FC = () => {
  return (
    <AuthContainer>
      <Header>Регистрация</Header>
      <SubHeader>Создать аккаунт.</SubHeader>

      <SignUpInfoForm />
    </AuthContainer>
  )
}
