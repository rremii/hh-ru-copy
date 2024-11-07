import { useUpdateMeMutation } from "../api/EmployerApi"

export const useUpdateMe = () => {
  const [updateMe, { isLoading, isError, error, data: result, isSuccess }] =
    useUpdateMeMutation()

  return {
    updateMe,
    isLoading,
    isError,
    error,
    isSuccess,
  }
}
