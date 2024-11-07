import { useGetJobApplications } from "@employer/entities/jobApplication/model/useGetJobApplications"
import { DeleteJobApplication } from "@shared/features/deleteJobApplication/DeleteJobApplication"
import { GoToResume } from "@employer/features/goToResumePost/GoToResume"
import { JobApplicationCard } from "@shared/shared/ui/JobApplicationCard"
import styled from "styled-components"

export const EmployeeApplicationList = () => {
  const { jobApplications, isFetching } = useGetJobApplications()

  return (
    <ListLayout>
      {isFetching && <div>LOADING</div>}
      {jobApplications?.map((jobApplication, index) => (
        <JobApplicationCard
          key={index}
          {...jobApplication}
          btns={[
            <>
              <DeleteJobApplication jobApplicationId={jobApplication.id} />
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
