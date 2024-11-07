import { Api, ApiEmployee } from "@shared/shared/api/config/Api"
import { CreateEmployerReviewDto } from "../types"
import { EmployerReview } from "@shared/entities/employerReview/types"

export const ReviewApi = ApiEmployee.injectEndpoints({
  endpoints: (build) => ({
    createReview: build.mutation<EmployerReview, CreateEmployerReviewDto>({
      query: (dto) => ({
        url: "me/employer-reviews/",
        method: "POST",
        data: dto,
      }),
    }),
  }),
  overrideExisting: true,
})
export const { useCreateReviewMutation } = ReviewApi
