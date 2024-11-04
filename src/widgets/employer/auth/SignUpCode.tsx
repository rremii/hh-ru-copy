import { FC, useEffect } from "react"
import { useAppDispatch, useTypedSelector } from "@shared/hooks/storeHooks.ts"
import Cross from "@icons/cross.svg?react"
import styled from "styled-components"
import { useTimer } from "@shared/hooks/useTimer.tsx"
import { useConfirmEmail } from "@entities/auth-employee/model/useConfirmEmail"
import {
  AuthContainer,
  FooterCont,
  Header,
  LinkWithText,
  SubHeader,
} from "./ui/ContentLayout"
import { useToast } from "@shared/modules/toast"
import { error } from "console"
import { SignUpCodeForm } from "@entities/auth-employer/ui/SignUpCodeForm"

export const SignUpCode: FC = () => {
  const email = useTypedSelector((state) => state.EmployerAuth.email)

  const { confirmEmail, isSuccess, isError } = useConfirmEmail()
  const { openToast } = useToast()

  const {
    reset: resetTimer,
    time,
    timerState,
  } = useTimer({
    finalTime: 60,
    timeGap: 1,
    isUnversed: true,
  })

  useEffect(() => {
    if (isSuccess)
      openToast({
        content: "Код был отправлен",
        type: "info",
      })
  }, [isSuccess])

  const sendTheCodeAgain = async () => {
    if (timerState === "running") return
    resetTimer()

    await confirmEmail(email)
  }

  return (
    <AuthContainer>
      <Header>Подтверждение почты</Header>
      <SubHeader style={{ textAlign: "justify" }}>
        введите код для <strong>подтверждения </strong>
      </SubHeader>

      <SignUpCodeForm />

      <FooterCont>
        <LinkWithText>
          код не пришел?
          <h4 onClick={sendTheCodeAgain} className="high-lighted">
            {timerState === "running"
              ? "Отправить повторно через " + time
              : "Отправить повторно"}
          </h4>
        </LinkWithText>
      </FooterCont>
    </AuthContainer>
  )
}
