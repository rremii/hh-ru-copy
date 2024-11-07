import { useUpdateJobPostMutation } from "../api/JobPostApi"

export const useUpdateJobPost = () => {
  const [
    updateJobPost,
    { isLoading, isError, error, data: result, isSuccess },
  ] = useUpdateJobPostMutation()

  return {
    updateJobPost,
    isLoading,
    isError,
    error,
    isSuccess,
  }
}
