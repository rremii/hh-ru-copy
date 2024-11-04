import { JobPostList } from "@employee/widgets/jobPostList/JobPostList"
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
  padding: 20px 0 100px;
`
