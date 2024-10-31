import { JobPostList } from "@widgets/jobPostList/JobPostList"
import styled from "styled-components"

export const JobListPage = () => {
  return (
    <PageLayout>
      <JobPostList />
    </PageLayout>
  )
}

const PageLayout = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  padding: 20px 0 100px;
`
