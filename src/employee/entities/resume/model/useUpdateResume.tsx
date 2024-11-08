import { useToast } from "@shared/shared/modules/toast"
import { useUpdateResumeMutation } from "../api/resumeApi"
import { useEffect } from "react"

export const useUpdateResume = () => {
  const [updateResume, { isLoading, isError, error, data, isSuccess }] =
    useUpdateResumeMutation()

  const { openToast } = useToast()

  useEffect(() => {
    if (isLoading) return

    if (isSuccess) {
      openToast({ content: "Резюме изменено", type: "info" })
    }
    if (isError) {
      openToast({
        content: error?.message || "Ошибка изменения резюме",
        type: "error",
      })
    }
  }, [isLoading, isSuccess])

  return {
    updateResume,
    isLoading,
    isError,
    error,
    isSuccess,
  }
}
