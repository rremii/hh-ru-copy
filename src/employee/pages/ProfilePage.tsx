import { Profile } from "@employee/widgets/profile/Profile"
import styled from "styled-components"

export const ProfilePage = () => {
  return (
    <PageLayout>
      <Profile />
    </PageLayout>
  )
}

const PageLayout = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10% 0 100px;
`
