import { useToast } from "@shared/shared/modules/toast"
import { useCreateJobPostMutation } from "../api/JobPostApi"
import { useEffect } from "react"

export const useCreateJobPost = () => {
  const [
    createJobPost,
    { isLoading, isError, error, data: result, isSuccess },
  ] = useCreateJobPostMutation()

  const { openToast } = useToast()

  useEffect(() => {
    if (isLoading) return

    if (isSuccess) {
      openToast({ content: "Вакансия добалена", type: "info" })
    }
    if (isError) {
      openToast({
        content: error?.message || "Ошибка добавления",
        type: "error",
      })
    }
  }, [isLoading, isSuccess, isError])

  return {
    createJobPost,
    isLoading,
    isError,
    error,
    isSuccess,
  }
}
