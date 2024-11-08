import { useToast } from "@shared/shared/modules/toast"
import { useCreateResumeMutation } from "../api/resumeApi"
import { useEffect } from "react"

export const useCreateResume = () => {
  const [createResume, { isLoading, isError, error, data, isSuccess }] =
    useCreateResumeMutation()

  const { openToast } = useToast()

  useEffect(() => {
    if (isLoading) return

    if (isSuccess) {
      openToast({ content: "Резюме добаллено", type: "info" })
    }
    if (isError) {
      openToast({
        content: error?.message || "Ошибка добавления резюме",
        type: "error",
      })
    }
  }, [isLoading, isSuccess])

  return {
    createResume,
    isLoading,
    isError,
    error,
    isSuccess,
  }
}
