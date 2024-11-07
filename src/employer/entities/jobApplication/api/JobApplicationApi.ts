import { Api, ApiEmployee, ApiEmployer } from "@shared/shared/api/config/Api"
import { Employer } from "@shared/entities/employer/types"
import { JobApplication } from "@shared/entities/jobApplication/types"

export const JobApplicationApi = ApiEmployer.injectEndpoints({
  endpoints: (build) => ({
    getJobApplications: build.query<JobApplication[], number>({
      query: (jobPostId) => ({
        url: `me/job-post/${jobPostId}/job-application`,
        method: "GET",
      }),
      providesTags: ["JobApplication"],
    }),
    deleteJobApplication: build.mutation<JobApplication[], number>({
      query: (applicationId) => ({
        url: `job-application/` + applicationId,
        method: "DELETE",
      }),
      invalidatesTags: ["JobApplication"],
    }),
  }),
  overrideExisting: true,
})
export const { useGetJobApplicationsQuery } = JobApplicationApi
