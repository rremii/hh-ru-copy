import { useCreateResumeMutation } from "../api/resumeApi"

export const useCreateResume = () => {
  const [createResume, { isLoading, isError, error, data, isSuccess }] =
    useCreateResumeMutation()

  return {
    createResume,
    isLoading,
    isError,
    error,
    isSuccess,
  }
}
