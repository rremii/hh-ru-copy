import { SignInForm } from "@entities/auth-employee/ui/SignInForm"
import { SignIn } from "@widgets/employee/auth/SignIn"
import { SignUpCode } from "@widgets/employee/auth/SignUpCode"
import { SignUpEmail } from "@widgets/employee/auth/SignUpEmail"
import styled from "styled-components"

export const SignUpCodePage = () => {
  return (
    <PageLayout>
      <SignUpCode />
    </PageLayout>
  )
}
const PageLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 20px 0 100px;
`
