import { FC } from "react"
import {
  AuthContainer,
  FooterCont,
  Header,
  LinkWithText,
  SubHeader,
} from "./ui/ContentLayout"
import { useNavigate } from "react-router-dom"
import { SignInForm } from "@employer/entities/auth/ui/SignInForm"

export const SignIn: FC = () => {
  const navigate = useNavigate()

  const goToSignUp = () => {
    navigate("/employer/auth/register/email")
  }

  return (
    <AuthContainer>
      <Header>Войти как роботодатель</Header>
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
