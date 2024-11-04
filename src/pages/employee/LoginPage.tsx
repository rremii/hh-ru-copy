import { SignInForm } from "@entities/auth-employee/ui/SignInForm"
import { SignIn } from "@widgets/employee/auth/SignIn"
import styled from "styled-components"

export const LoginPage = () => {
  return (
    <PageLayout>
      <SignIn />
    </PageLayout>
  )
}
const PageLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 20px 0 100px;
`
