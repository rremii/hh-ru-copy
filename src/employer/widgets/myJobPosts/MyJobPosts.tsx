import { useGetMyJobPosts } from "@employer/entities/jobPost/model/useGetMyJobPosts"
import styled from "styled-components"
import { MyJobPost } from "./ui/MyJobPost"
import React from "react"

export const MyJobPosts = () => {
  const { jobPosts } = useGetMyJobPosts()

  return (
    <PostsLayout>
      {jobPosts.map((jobPost, index) => (
        <React.Fragment key={jobPost.id}>
          <MyJobPost {...jobPost} />
          {index !== jobPosts.length - 1 && <Separator />}
        </React.Fragment>
      ))}
    </PostsLayout>
  )
}
const PostsLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 600px;
  width: 100%;
  height: 100%;
`
const Separator = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  width: 100%;
  height: 2px;
  background-color: rgb(220, 227, 230);
`
