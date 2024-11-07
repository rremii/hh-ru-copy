import { useCreateJobApplicationMutation } from "../api/JobApplicationApi"

export const useCreateJobApplication = () => {
  const [createJobApplication, { isLoading, isError, error, isSuccess }] =
    useCreateJobApplicationMutation()

  return {
    createJobApplication,
    isLoading,
    isError,
    error,
    isSuccess,
  }
}
