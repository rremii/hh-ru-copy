import { FC, useEffect } from "react"
import {
  AuthContainer,
  FooterCont,
  Header,
  LinkWithText,
  SubHeader,
} from "./ui/ContentLayout"
import { useTypedSelector } from "@shared/shared/hooks/storeHooks"
import { useConfirmEmail } from "@shared/entities/code/model/useConfirmEmail"
import { useToast } from "@shared/shared/modules/toast"
import { useTimer } from "@shared/shared/hooks/useTimer"
import { SignUpCodeForm } from "@employee/entities/auth/ui/SignUpCodeForm"

export const SignUpCode: FC = () => {
  const email = useTypedSelector((state) => state.EmployeeAuth.email)

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
