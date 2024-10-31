import { useGetJobApplications } from "@entities/jobApplication/model/useGetMyJobApplications"
import { DeleteJobApplication } from "@features/deleteJobApplication/DeleteJobApplication"
import { GoToJobPost } from "@features/goToJobPost/GoToJobPost"
import { JobApplicationCard } from "@shared/ui/JobApplicationCard"
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
