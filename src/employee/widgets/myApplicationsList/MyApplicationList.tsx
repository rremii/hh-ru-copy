import { useGetJobApplications } from "@employee/entities/jobApplication/model/useGetMyJobApplications"
import { GoToJobPost } from "@employee/features/goToJobPost/GoToJobPost"
import { DeleteJobApplication } from "@employer/features/deleteJobApplication/DeleteJobApplication"
import { JobApplicationCard } from "@employee/shared/ui/JobApplicationCard"
import styled from "styled-components"

export const MyApplicationList = () => {
  const { jobApplications } = useGetJobApplications()

  return (
    <ListLayout>
      {jobApplications.map((jobApplication, index) => (
        <JobApplicationCard
          key={index}
          {...jobApplication}
          btns={[
            <>
              <DeleteJobApplication />
              <GoToJobPost jobPostId={jobApplication.jobPostId} />
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
