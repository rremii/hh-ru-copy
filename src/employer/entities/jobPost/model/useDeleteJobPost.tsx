import { useToast } from "@shared/shared/modules/toast"
import {
  useDeleteJobPostMutation,
  useUpdateJobPostMutation,
} from "../api/JobPostApi"
import { useEffect } from "react"

export const useDeleteJobPost = () => {
  const [
    deleteJobPost,
    { isLoading, isError, error, data: result, isSuccess },
  ] = useDeleteJobPostMutation()

  const { openToast } = useToast()

  useEffect(() => {
    if (isLoading) return

    if (isSuccess) {
      openToast({ content: "Вакансия удалена", type: "info" })
    }
    if (isError) {
      openToast({
        content: error?.message || "Ошибка удаления вакансии",
        type: "error",
      })
    }
  }, [isLoading, isSuccess, isError])

  return {
    deleteJobPost,
    isLoading,
    isError,
    error,
    isSuccess,
  }
}
