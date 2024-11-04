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
import { SignUpEmailForm } from "@entities/auth-employer/ui/SignUpEmailForm"
import { useNavigate } from "react-router-dom"

export const SignUpEmail: FC = () => {
  const navigate = useNavigate()

  const goToSignIn = () => {
    navigate("/employer/auth/login")
  }

  return (
    <AuthContainer>
      <Header>Регистрация работодателя</Header>
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
