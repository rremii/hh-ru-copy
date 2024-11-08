import { useEffect } from "react"
import { useCreateJobApplicationMutation } from "../api/JobApplicationApi"
import { useToast } from "@shared/shared/modules/toast"

export const useCreateJobApplication = () => {
  const [createJobApplication, { isLoading, isError, error, isSuccess }] =
    useCreateJobApplicationMutation()

  const { openToast } = useToast()

  useEffect(() => {
    if (isLoading) return

    if (isSuccess) {
      openToast({ content: "Отклик отправлен", type: "info" })
    }
    if (isError) {
      openToast({
        content: error?.message || "Ошибка отправки отклика",
        type: "error",
      })
    }
  }, [isLoading, isSuccess])

  return {
    createJobApplication,
    isLoading,
    isError,
    error,
    isSuccess,
  }
}
