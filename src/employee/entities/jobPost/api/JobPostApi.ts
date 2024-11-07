import { ApiEmployee } from "@shared/shared/api/config/Api"
import { JobPost } from "@shared/entities/jobPost/types"

export const JobPostApi = ApiEmployee.injectEndpoints({
  endpoints: (build) => ({
    getJobPost: build.query<JobPost, number>({
      query: (id) => ({
        url: "job-post/" + id,
        method: "GET",
        prefix: "employer/",
      }),
    }),
    getJobsPosts: build.query<JobPost[], void>({
      query: () => ({
        url: "job-post",
        method: "GET",
        prefix: "employer/",
      }),
    }),
  }),
})
export const { useGetJobPostQuery, useGetJobsPostsQuery } = JobPostApi
