import styled from "styled-components"

export const MyApplicationList = () => {
  // const { resumeApplications } = useGetResumeApplications()

  return (
    <ListLayout>
      {/* {resumeApplications.map((resumeApplication, index) => (
        <ResumeApplicationCard
          key={index}
          {...resumeApplication}
          btns={[
            <>
              <DeleteResumeApplication />
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
