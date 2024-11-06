import { useGetJobApplications } from "@employer/entities/jobApplication/model/useGetJobApplications"
import { DeleteJobApplication } from "@employer/features/deleteJobApplication/DeleteJobApplication"
import { GoToResume } from "@employer/features/goToResumePost/GoToResume"
import { JobApplicationCard } from "@employer/shared/ui/JobApplicationCard"
import styled from "styled-components"

export const EmployeeApplicationList = () => {
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
              <GoToResume resumeId={jobApplication.resume.id} />
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
