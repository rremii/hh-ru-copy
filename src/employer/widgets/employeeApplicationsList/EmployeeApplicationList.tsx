import styled from "styled-components"

export const EmployeeApplicationList = () => {
  // const { jobApplications } = useGetJobApplicationsWithResumes()

  return (
    <ListLayout>
      {/* {jobApplications.map((jobApplication, index) => (
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
      ))} */}
    </ListLayout>
  )
}

const ListLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`
