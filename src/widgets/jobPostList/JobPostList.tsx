import { useGetJobPosts } from "@entities/jobPost/model/useGetJobPosts"
import { JobPostCard } from "@shared/ui/JobPostCard"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"

export const JobPostList = () => {
  const navigate = useNavigate()
  const { jobPosts } = useGetJobPosts()

  const goToJobPost = (id: number) => {
    navigate(`/job-list/${id}`)
  }
  return (
    <ListLayout>
      {jobPosts.map((jobPost, index) => (
        <JobPostCard
          key={index}
          description={jobPost.description}
          title={jobPost.title}
          onClick={() => goToJobPost(jobPost.id)}
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
