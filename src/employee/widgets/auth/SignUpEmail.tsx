import { FC } from "react"
import {
  AuthContainer,
  FooterCont,
  Header,
  LinkWithText,
  SubHeader,
} from "./ui/ContentLayout"
import { useNavigate } from "react-router-dom"
import { SignUpEmailForm } from "@employee/entities/auth/ui/SignUpEmailForm"

export const SignUpEmail: FC = () => {
  const navigate = useNavigate()

  const goToSignIn = () => {
    navigate("/employee/auth/login")
  }

  return (
    <AuthContainer>
      <Header>Регистрация сотрудника</Header>
      <SubHeader>Создай свой первый аккаунт.</SubHeader>

      <SignUpEmailForm />

      <FooterCont>
        <LinkWithText>
          Уже есть аккаунт?
          <h4 onClick={goToSignIn} className="high-lighted">
            Войти
          </h4>
        </LinkWithText>
      </FooterCont>
    </AuthContainer>
  )
}
