import { useDeleteResumeApplicationMutation } from "../api/resumeApplicationApi"

export const useDeleteResumeApplication = () => {
  const [deleteResumeApplication, { isLoading, isError, error, isSuccess }] =
    useDeleteResumeApplicationMutation()

  return {
    deleteResumeApplication,
    isLoading,
    isError,
    error,
    isSuccess,
  }
}
