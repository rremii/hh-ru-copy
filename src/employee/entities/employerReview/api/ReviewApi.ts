import { Api, ApiEmployee, ApiEmployer } from "@shared/shared/api/config/Api"
import { CreateEmployerReviewDto } from "../types"
import { EmployerReview } from "@shared/entities/employerReview/types"

export const ReviewApi = ApiEmployee.injectEndpoints({
  endpoints: (build) => ({
    getEmployerReviews: build.query<EmployerReview[], number>({
      query: (employerId) => ({
        url: employerId + "/employer-reviews",
        method: "GET",
        prefix: "employer/",
      }),
      providesTags: ["EmployerReview"],
    }),

    createReview: build.mutation<EmployerReview, CreateEmployerReviewDto>({
      query: (dto) => ({
        url: "me/employer-reviews",
        method: "POST",
        data: dto,
      }),
      invalidatesTags: ["EmployerReview"],
    }),
    deleteReview: build.mutation<EmployerReview, number>({
      query: (reviewId) => ({
        url: "me/employer-reviews/" + reviewId,
        method: "DELETE",
      }),
      invalidatesTags: ["EmployerReview"],
    }),
  }),
  overrideExisting: true,
})
export const {
  useCreateReviewMutation,
  useDeleteReviewMutation,
  useGetEmployerReviewsQuery,
} = ReviewApi
