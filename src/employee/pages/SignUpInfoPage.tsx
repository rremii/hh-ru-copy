import { SignUpInfo } from "@employee/widgets/auth/SignUpInfo"
import styled from "styled-components"

export const SignUpInfoPage = () => {
  return (
    <PageLayout>
      <SignUpInfo />
    </PageLayout>
  )
}
const PageLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 20px 0 100px;
`
