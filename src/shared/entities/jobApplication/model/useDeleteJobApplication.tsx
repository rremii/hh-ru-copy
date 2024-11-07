import { useDeleteJobApplicationMutation } from "../api/JobApplicationApi"

export const useDeleteJobApplication = () => {
  const [deleteJobApplication, { isLoading, isError, error, isSuccess }] =
    useDeleteJobApplicationMutation()

  return {
    deleteJobApplication,
    isLoading,
    isError,
    error,
    isSuccess,
  }
}
