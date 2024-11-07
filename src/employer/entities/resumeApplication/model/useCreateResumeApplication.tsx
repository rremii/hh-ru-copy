import { useCreateResumeApplicationMutation } from "../api/resumeApplicationApi"

export const useCreateResumeApplication = () => {
  const [
    createResumeApplication,
    { isLoading, isError, error, data, isSuccess },
  ] = useCreateResumeApplicationMutation()

  return {
    createResumeApplication,
    isLoading,
    isError,
    error,
    isSuccess,
  }
}
