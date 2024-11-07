import { useGetMyResumeApplications } from "@employee/entities/resumeApplication/model/useGetResumeApplications"
import { DeleteResumeApplication } from "@shared/features/deleteResumeApplication/DeleteResumeApplication"
import { ResumeApplicationCard } from "@shared/shared/ui/ResumeApplicationCard"
import styled from "styled-components"

export const EmployerApplicationList = () => {
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
