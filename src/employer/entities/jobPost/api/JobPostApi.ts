import { Api, ApiEmployee, ApiEmployer } from "@shared/shared/api/config/Api"
import { JobPost } from "@shared/entities/jobPost/types"
import { CreateJobPostDto, UpdateJobPostDto } from "../types"

export const JobPostApi = ApiEmployer.injectEndpoints({
  endpoints: (build) => ({
    getMyJobPosts: build.query<JobPost[], void>({
      query: () => ({
        url: `me/job-post`,
        method: "GET",
      }),
      providesTags: ["JobPost"],
    }),
    createJobPost: build.mutation<JobPost, CreateJobPostDto>({
      query: (dto) => ({
        url: "me/job-post",
        method: "POST",
        data: dto,
      }),
      invalidatesTags: ["JobPost"],
    }),
    updateJobPost: build.mutation<JobPost, UpdateJobPostDto>({
      query: (dto) => ({
        url: "me/job-post",
        method: "PUT",
        data: dto,
      }),
      invalidatesTags: ["JobPost"],
    }),
  }),
  overrideExisting: true,
})
export const {
  useGetMyJobPostsQuery,
  useCreateJobPostMutation,
  useUpdateJobPostMutation,
} = JobPostApi
