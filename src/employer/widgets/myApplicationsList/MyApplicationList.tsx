import { useGetMyResumeApplications } from "@employer/entities/resumeApplication/model/useGetMyResumeApplications"
import { ResumeApplicationCard } from "@employer/shared/ui/ResumeApplicationCard"
import { DeleteResumeApplication } from "@shared/features/deleteResumeApplication/DeleteResumeApplication"
import styled from "styled-components"

export const MyApplicationList = () => {
  const { resumeApplications } = useGetMyResumeApplications()

  return (
    <ListLayout>
      {resumeApplications.map((resumeApplication, index) => (
        <ResumeApplicationCard
          key={index}
          {...resumeApplication}
          btns={[
            <>
              <DeleteResumeApplication />
            </>,
          ]}
        />
      ))}
    </ListLayout>
  )
}

const ListLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`
