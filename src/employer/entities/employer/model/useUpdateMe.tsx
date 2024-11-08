import { useToast } from "@shared/shared/modules/toast"
import { useUpdateMeMutation } from "../api/EmployerApi"
import { useEffect } from "react"

export const useUpdateMe = () => {
  const [updateMe, { isLoading, isError, error, data: result, isSuccess }] =
    useUpdateMeMutation()

  const { openToast } = useToast()

  useEffect(() => {
    if (isLoading) return

    if (isSuccess) {
      openToast({ content: "Данные о себе обновлены", type: "info" })
    }
    if (isError) {
      openToast({
        content: error?.message || "Ошибка изменения",
        type: "error",
      })
    }
  }, [isLoading, isSuccess, isError])

  return {
    updateMe,
    isLoading,
    isError,
    error,
    isSuccess,
  }
}
