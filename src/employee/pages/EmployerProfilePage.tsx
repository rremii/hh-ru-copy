import { EmployerProfile } from "@employee/widgets/employerProfile/EmployerProfile"
import { EmployerReviews } from "@employee/widgets/employerReviews/EmployerReviews"
import styled from "styled-components"

export const EmployerProfilePage = () => {
  return (
    <PageLayout>
      <EmployerProfile />
      <EmployerReviews />
    </PageLayout>
  )
}
const PageLayout = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0 100px;
`
