import { useToast } from "@shared/shared/modules/toast"
import { useUpdateJobPostMutation } from "../api/JobPostApi"
import { useEffect } from "react"

export const useUpdateJobPost = () => {
  const [
    updateJobPost,
    { isLoading, isError, error, data: result, isSuccess },
  ] = useUpdateJobPostMutation()

  const { openToast } = useToast()

  useEffect(() => {
    if (isLoading) return

    if (isSuccess) {
      openToast({ content: "Вакансия изменена", type: "info" })
    }
    if (isError) {
      openToast({
        content: error?.message || "Ошибка изменения вакансии",
        type: "error",
      })
    }
  }, [isLoading, isSuccess, isError])

  return {
    updateJobPost,
    isLoading,
    isError,
    error,
    isSuccess,
  }
}
