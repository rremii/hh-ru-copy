import { SignUpEmail } from "@widgets/employer/auth/SignUpEmail"
import styled from "styled-components"

export const SignUpEmailPage = () => {
  return (
    <PageLayout>
      <SignUpEmail />
    </PageLayout>
  )
}
const PageLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 20px 0 100px;
`
