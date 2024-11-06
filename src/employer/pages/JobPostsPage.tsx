import { JobPostModal } from "@employer/widgets/jobPostModal/ui/JobPostModal"
import { MyJobPosts } from "@employer/widgets/myJobPosts/MyJobPosts"
import styled from "styled-components"

export const JobPostsPage = () => {
  return (
    <PageLayout>
      <MyJobPosts />
      <JobPostModal />
    </PageLayout>
  )
}
const PageLayout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  padding: 20px 0 50px;
`
