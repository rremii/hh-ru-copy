import { useGetJobApplications } from "@entities/jobApplication/model/useGetMyJobApplications"
import { useGetResumeApplication } from "@entities/resumeApplication/model/useGetResumeApplication"
import { useGetResumeApplications } from "@entities/resumeApplication/model/useGetResumeApplications"
import { DeleteJobApplication } from "@features/deleteJobApplication/DeleteJobApplication"
import { DeleteResumeApplication } from "@features/deleteResumeApplication/DeleteResumeApplication"
import { GoToJobPost } from "@features/goToJobPost/GoToJobPost"
import { JobApplicationCard } from "@shared/ui/JobApplicationCard"
import { ResumeApplicationCard } from "@shared/ui/ResumeApplicationCard"
import styled from "styled-components"

export const MyApplicationList = () => {
  const { resumeApplications } = useGetResumeApplications()

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
