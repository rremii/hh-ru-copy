import { JobPost } from "@shared/entities/jobPost/types"
import { useGetMyJobPostsQuery } from "../api/JobPostApi"

export const useGetMyJobPosts = () => {
  const {
    data: jobPosts,
    isFetching,
    isSuccess,
    error,
  } = useGetMyJobPostsQuery()

  return { jobPosts, isFetching, isSuccess, error }
}
