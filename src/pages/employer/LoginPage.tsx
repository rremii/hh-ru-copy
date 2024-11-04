import { SignIn } from "@widgets/employer/auth/SignIn"
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
