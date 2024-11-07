import { Api, ApiEmployee, ApiEmployer } from "@shared/shared/api/config/Api"
import { Employer } from "@shared/entities/employer/types"
import { JobApplication } from "@shared/entities/jobApplication/types"

export const JobApplicationApi = ApiEmployee.injectEndpoints({
  endpoints: (build) => ({
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
export const { useDeleteJobApplicationMutation } = JobApplicationApi
