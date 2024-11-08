import { useDeleteReviewMutation } from "../api/ReviewApi"

export const useDeleteReview = () => {
  const [deleteReview, { isLoading, isError, error, isSuccess }] =
    useDeleteReviewMutation()

  return {
    deleteReview,
    isLoading,
    isError,
    error,
    isSuccess,
  }
}
