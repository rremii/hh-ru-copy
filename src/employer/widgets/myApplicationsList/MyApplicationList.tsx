import { useGetMyResumeApplications } from "@employer/entities/resumeApplication/model/useGetMyResumeApplications"
import { ResumeApplicationCard } from "@shared/shared/ui/ResumeApplicationCard"
import { DeleteResumeApplication } from "@shared/features/deleteResumeApplication/DeleteResumeApplication"
import styled from "styled-components"
import { GoToResume } from "@employer/features/goToResumePost/GoToResume"

export const MyApplicationList = () => {
  const { resumeApplications, isFetching } = useGetMyResumeApplications()

  return (
    <ListLayout>
      {isFetching && <div>LOADING</div>}
      {resumeApplications?.map((resumeApplication, index) => (
        <ResumeApplicationCard
          key={index}
          {...resumeApplication}
          btns={[
            <>
              <DeleteResumeApplication resumeId={resumeApplication.id} />
              <GoToResume resumeId={resumeApplication.resumeId} />
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
