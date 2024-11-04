import { Welcome } from "@widgets/welcome/Welcome"
import styled from "styled-components"

export const WelcomePage = () => {
  return (
    <PageLayout>
      <Welcome />
    </PageLayout>
  )
}

const PageLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 20px 0 100px;
`
