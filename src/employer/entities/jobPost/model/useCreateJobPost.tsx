import { useCreateJobPostMutation } from "../api/JobPostApi"

export const useCreateJobPost = () => {
  const [
    createJobPost,
    { isLoading, isError, error, data: result, isSuccess },
  ] = useCreateJobPostMutation()

  return {
    createJobPost,
    isLoading,
    isError,
    error,
    isSuccess,
  }
}
