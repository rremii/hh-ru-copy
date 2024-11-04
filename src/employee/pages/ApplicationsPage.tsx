import { ApplicationsHeader } from "@employee/widgets/applicationsHeader/ApplicationsHeader"
import { EmployerApplicationList } from "@employee/widgets/employerApplicationsList/EmployerApplicationList"
import { MyApplicationList } from "@employee/widgets/myApplicationsList/MyApplicationList"
import { useParams } from "react-router-dom"
import styled from "styled-components"

export const ApplicationsPage = () => {
  const params = useParams()

  return (
    <PageLayout>
      <ApplicationsHeader />
      {params.type === "me" && <MyApplicationList />}
      {params.type === "employers" && <EmployerApplicationList />}
    </PageLayout>
  )
}
const PageLayout = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0 100px;
  gap: 20px;
`
