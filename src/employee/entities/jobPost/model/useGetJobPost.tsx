import { useGetJobPostQuery } from "../api/JobPostApi"

export const useGetJobPost = (id?: number) => {
  const {
    data: jobPost,
    isFetching,
    isSuccess,
    error,
  } = useGetJobPostQuery(id as number, { skip: !id })

  return { jobPost, isFetching, isSuccess, error }
}
