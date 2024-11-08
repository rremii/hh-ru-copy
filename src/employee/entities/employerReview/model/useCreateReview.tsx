import { useToast } from "@shared/shared/modules/toast"
import { useCreateReviewMutation } from "../api/ReviewApi"
import { useEffect } from "react"

export const useCreateReview = () => {
  const [createReview, { isLoading, isError, error, data: result, isSuccess }] =
    useCreateReviewMutation()

  const { openToast } = useToast()

  useEffect(() => {
    if (isLoading) return

    if (isSuccess) {
      openToast({ content: "Отзыв добален", type: "info" })
    }
    if (isError) {
      openToast({
        content: error?.message || "Ошибка добавления отзыва",
        type: "error",
      })
    }
  }, [isLoading, isSuccess])

  return {
    createReview,
    isLoading,
    isError,
    error,
    isSuccess,
  }
}
