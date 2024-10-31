import { ApplicationsHeader } from "@widgets/employers/applicationsHeader/ApplicationsHeader"
import { EmployeeApplicationList } from "@widgets/employers/employeeApplicationsList/EmployeeApplicationList"
import { MyApplicationList } from "@widgets/employers/myApplicationsList/MyApplicationList"
import { useParams } from "react-router-dom"
import styled from "styled-components"

export const ApplicationsPage = () => {
  const params = useParams()

  return (
    <PageLayout>
      <ApplicationsHeader />
      {params.type === "me" && <MyApplicationList />}
      {params.type === "employees" && <EmployeeApplicationList />}
    </PageLayout>
  )
}
const PageLayout = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0 100px;
  gap: 20px;
`
