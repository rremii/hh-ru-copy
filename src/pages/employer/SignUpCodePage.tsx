import { SignUpCode } from "@widgets/employer/auth/SignUpCode"
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
