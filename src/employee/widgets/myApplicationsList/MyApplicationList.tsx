import { useGetMyJobApplications } from "@employee/entities/jobApplication/model/useGetMyJobApplications"
import { GoToJobPost } from "@employee/features/goToJobPost/GoToJobPost"
import { DeleteJobApplication } from "@shared/features/deleteJobApplication/DeleteJobApplication"
import { JobApplicationCard } from "@shared/shared/ui/JobApplicationCard"
import styled from "styled-components"

export const MyApplicationList = () => {
  const { jobApplications, isFetching } = useGetMyJobApplications()

  return (
    <ListLayout>
      {isFetching && <div>LOADING</div>}

      {jobApplications?.map((jobApplication, index) => (
        <JobApplicationCard
          key={index}
          {...jobApplication}
          btns={[
            <>
              <GoToJobPost jobPostId={jobApplication.jobPostId} />
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
