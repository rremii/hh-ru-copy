import Cross from "@icons/cross.svg?react"
import { FC } from "react"
import { useAppDispatch } from "@shared/hooks/storeHooks.ts"
import {
  AuthContainer,
  CrossCont,
  FooterCont,
  Header,
  LinkWithText,
  SubHeader,
} from "./ui/ContentLayout"
import { SignUpInfoForm } from "@entities/auth-employee/ui/SignUInfoForm"

export const SignUpInfo: FC = () => {
  return (
    <AuthContainer>
      <Header>Регистрация</Header>
      <SubHeader>Создать аккаунт.</SubHeader>

      <SignUpInfoForm />
    </AuthContainer>
  )
}
