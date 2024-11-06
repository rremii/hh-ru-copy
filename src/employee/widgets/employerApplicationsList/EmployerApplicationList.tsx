import { useGetResumeApplications } from "@employee/entities/resumeApplication/model/useGetResumeApplications"
import { ResumeApplicationCard } from "@employee/shared/ui/ResumeApplicationCard"
import styled from "styled-components"

export const EmployerApplicationList = () => {
  const { resumeApplications } = useGetResumeApplications()

  return (
    <ListLayout>
      {resumeApplications.map((resumeApplication, index) => (
        <ResumeApplicationCard key={index} {...resumeApplication} />
      ))}
    </ListLayout>
  )
}

const ListLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`
