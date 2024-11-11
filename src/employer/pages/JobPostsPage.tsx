import { OpenJobPostModal } from "@employer/features/openJobPostModal/OpenJobPostModal"
import { JobPostModal } from "@employer/widgets/jobPostModal/ui/JobPostModal"
import { MyJobPosts } from "@employer/widgets/myJobPosts/MyJobPosts"
import styled from "styled-components"

export const JobPostsPage = () => {
  return (
    <PageLayout>
      <CreateJobPostContainer>
        <OpenJobPostModal>Довать вакансию</OpenJobPostModal>
      </CreateJobPostContainer>
      <MyJobPosts />
      <JobPostModal />
    </PageLayout>
  )
}
const PageLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 100%;
  padding: 20px 0 50px;
`

const CreateJobPostContainer = styled.div`
  margin-bottom: 20px;
`
