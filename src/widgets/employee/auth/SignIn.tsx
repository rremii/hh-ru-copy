import { FC } from "react"
import { useAppDispatch } from "@shared/hooks/storeHooks.ts"
import Cross from "@icons/cross.svg?react"
import {
  AuthContainer,
  FooterCont,
  Header,
  LinkWithText,
  SubHeader,
} from "./ui/ContentLayout"
import { SignInForm } from "@entities/auth-employee/ui/SignInForm"
import { useNavigate } from "react-router-dom"

export const SignIn: FC = () => {
  const navigate = useNavigate()

  const goToSignUp = () => {
    navigate("/employee/auth/register/email")
  }

  return (
    <AuthContainer>
      <Header>Войти</Header>
      <SubHeader>Войти с помощью почты.</SubHeader>

      <SignInForm />

      <FooterCont>
        <LinkWithText>
          Нет аккаунта?
          <h4 onClick={goToSignUp} className="high-lighted">
            Создать
          </h4>
        </LinkWithText>
      </FooterCont>
    </AuthContainer>
  )
}
