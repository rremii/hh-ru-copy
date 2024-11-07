import { useGetEmployerReviewsQuery } from "../api/ReviewApi"
import { EmployerReview } from "../types"

export const useGetEmployerReviews = (employerId?: number) => {
  const {
    data: reviews,
    isFetching,
    isSuccess,
    error,
  } = useGetEmployerReviewsQuery(employerId as number, { skip: !employerId })

  return {
    reviews,
    isFetching,
    isSuccess,
    error,
  }
}
