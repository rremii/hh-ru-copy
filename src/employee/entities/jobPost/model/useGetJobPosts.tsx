import { useGetJobsPostsQuery } from "../api/JobPostApi"

export const useGetJobPosts = () => {
  const {
    data: jobPosts,
    isFetching,
    isSuccess,
    error,
  } = useGetJobsPostsQuery()

  return { jobPosts, isFetching, isSuccess, error }
}
