import { useCreateReviewMutation } from "../api/ReviewApi"

export const useCreateReview = () => {
  const [createReview, { isLoading, isError, error, data: result, isSuccess }] =
    useCreateReviewMutation()

  return {
    createReview,
    isLoading,
    isError,
    error,
    isSuccess,
  }
}
