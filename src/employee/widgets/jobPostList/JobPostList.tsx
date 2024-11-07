import { useGetJobPosts } from "@employee/entities/jobPost/model/useGetJobPosts"
import { JobPostCard } from "@employee/shared/ui/JobPostCard"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"

export const JobPostList = () => {
  const navigate = useNavigate()
  const { jobPosts, isFetching } = useGetJobPosts()

  const goToJobPost = (id: number) => {
    navigate(`/employee/job-list/${id}`)
  }
  return (
    <ListLayout>
      {isFetching && <div>LOADING</div>}

      {jobPosts?.map((jobPost, index) => (
        <JobPostCard
          key={index}
          description={jobPost.description}
          title={jobPost.title}
          onClick={() => goToJobPost(jobPost?.id)}
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
