import { useGetJobApplicationsWithResumes } from "@entities/jobApplication/model/useGetJobApplicationsWithResumes"
import { DeleteJobApplication } from "@features/deleteJobApplication/DeleteJobApplication"
import { GoToResume } from "@features/goToResumePost/GoToResume"
import { JobApplicationCard } from "@shared/ui/JobApplicationCard"
import styled from "styled-components"

export const EmployeeApplicationList = () => {
  const { jobApplications } = useGetJobApplicationsWithResumes()

  return (
    <ListLayout>
      {jobApplications.map((jobApplication, index) => (
        <JobApplicationCard
          key={index}
          {...jobApplication}
          btns={[
            <>
              <DeleteJobApplication />
              <GoToResume resumeId={jobApplication.resumeId} />
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
