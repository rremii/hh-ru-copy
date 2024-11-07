import { useDeleteJobApplicationMutation } from "@employee/entities/jobApplication/api/JobApplicationApi"

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
