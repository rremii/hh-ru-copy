import { Api, ApiEmployee, ApiEmployer } from "@shared/shared/api/config/Api"
import { EmployerReview } from "@shared/entities/employerReview/types"

export const ReviewApi = ApiEmployer.injectEndpoints({
  endpoints: (build) => ({
    getEmployerReviews: build.query<EmployerReview[], number>({
      query: (employerId) => ({
        url: employerId + "/employer-reviews",
        method: "GET",
      }),
      providesTags: ["EmployerReview"],
    }),
  }),
  overrideExisting: true,
})
export const { useGetEmployerReviewsQuery } = ReviewApi
