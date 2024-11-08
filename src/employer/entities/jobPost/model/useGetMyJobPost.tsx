import { JobPost } from "@shared/entities/jobPost/types"
import { useGetMyJobPostQuery, useGetMyJobPostsQuery } from "../api/JobPostApi"

export const useGetMyJobPost = (id?: number) => {
  const {
    data: jobPost,
    isFetching,
    isSuccess,
    error,
  } = useGetMyJobPostQuery(id as number, { skip: !id })

  return { jobPost, isFetching, isSuccess, error }
}
