import { ApplyToJobPostModal } from "@employee/widgets/applyToJobPostModal/ApplyToJobPostModal"
import { JobPost } from "@employee/widgets/jobPost/JobPost"
import styled from "styled-components"

export const JobPostPage = () => {
  return (
    <PageLayout>
      <JobPost />
      <ApplyToJobPostModal />
    </PageLayout>
  )
}
const PageLayout = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: flex-start;

  padding: 50px 0 100px;
`
