import { useToast } from "@shared/shared/modules/toast"
import { useCreateResumeApplicationMutation } from "../api/resumeApplicationApi"
import { useEffect } from "react"

export const useCreateResumeApplication = () => {
  const [
    createResumeApplication,
    { isLoading, isError, error, data, isSuccess },
  ] = useCreateResumeApplicationMutation()

  const { openToast } = useToast()

  useEffect(() => {
    if (isLoading) return

    if (isSuccess) {
      openToast({ content: "Отклик добавлен", type: "info" })
    }
    if (isError) {
      openToast({
        content: error?.message || "Ошибка добавления",
        type: "error",
      })
    }
  }, [isLoading, isSuccess, isError])

  return {
    createResumeApplication,
    isLoading,
    isError,
    error,
    isSuccess,
  }
}
