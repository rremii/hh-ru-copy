import { ApiEmployee } from "@shared/shared/api/config/Api"
import { JobApplication } from "@shared/entities/jobApplication/types"
import { CreateJobApplicationDto } from "../types"

export const JobApplicationApi = ApiEmployee.injectEndpoints({
  endpoints: (build) => ({
    createJobApplication: build.mutation<
      JobApplication,
      CreateJobApplicationDto
    >({
      query: (dto) => ({
        url: "me/job-application",
        method: "POST",
        data: dto,
      }),
    }),
    deleteJobApplication: build.mutation<JobApplication[], number>({
      query: (applicationId) => ({
        url: `job-application/` + applicationId,
        method: "DELETE",
      }),
      invalidatesTags: ["JobApplication"],
    }),
    getMyJobApplications: build.query<JobApplication[], void>({
      query: () => ({
        url: "me/job-application",
        method: "GET",
      }),
    }),
  }),
})
export const {
  useCreateJobApplicationMutation,
  useGetMyJobApplicationsQuery,
  useDeleteJobApplicationMutation,
} = JobApplicationApi
