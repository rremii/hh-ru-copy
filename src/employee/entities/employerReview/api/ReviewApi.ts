import { Api, ApiEmployee, ApiEmployer } from "@shared/shared/api/config/Api"
import { CreateEmployerReviewDto } from "../types"
import { EmployerReview } from "@shared/entities/employerReview/types"

export const ReviewApi = ApiEmployer.injectEndpoints({
  endpoints: (build) => ({
    createReview: build.mutation<EmployerReview, CreateEmployerReviewDto>({
      query: (dto) => ({
        url: dto.employerId.toString() + "/employer-reviews/",
        method: "POST",
        data: dto,
      }),
      invalidatesTags: ["EmployerReview"],
    }),
  }),
  overrideExisting: true,
})
export const { useCreateReviewMutation } = ReviewApi
