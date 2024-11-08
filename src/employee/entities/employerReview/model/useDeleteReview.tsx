import { useToast } from "@shared/shared/modules/toast"
import { useDeleteReviewMutation } from "../api/ReviewApi"
import { useEffect } from "react"

export const useDeleteReview = () => {
  const [deleteReview, { isLoading, isError, error, isSuccess }] =
    useDeleteReviewMutation()

  const { openToast } = useToast()

  useEffect(() => {
    if (isLoading) return

    if (isSuccess) {
      openToast({ content: "Отзыв удален", type: "info" })
    }
    if (isError) {
      openToast({
        content: error?.message || "Ошибка удаления",
        type: "error",
      })
    }
  }, [isLoading, isSuccess])

  return {
    deleteReview,
    isLoading,
    isError,
    error,
    isSuccess,
  }
}
