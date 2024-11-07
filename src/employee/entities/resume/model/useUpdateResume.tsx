import { useUpdateResumeMutation } from "../api/resumeApi"

export const useUpdateResume = () => {
  const [updateResume, { isLoading, isError, error, data, isSuccess }] =
    useUpdateResumeMutation()

  return {
    updateResume,
    isLoading,
    isError,
    error,
    isSuccess,
  }
}
